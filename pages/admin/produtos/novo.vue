<template>
  <div class="flex items-center mb-4">
    <h1 class="text-4xl font-bold text-main">Adicionar Produto</h1>
  </div>
  <UForm
    :state="formState"
    :schema="createProductSchema"
    @submit="handleSubmit"
    @error="handleError"
    class="space-y-4"
  >
    <BaseInput v-model="formState.name" id="name" label="Nome" />
    <FormImageSelector v-model="formState.image" />
    <BaseCurrencyInput v-model="formState.price" id="preco" label="Preço" />
    <BaseInput
      v-model="formState.stock"
      id="stock"
      label="Estoque"
      type="number"
    />
    <BaseInput v-model="formState.brand" id="brand" label="Marca" />
    <BaseInput v-model="formState.model" id="model" label="Modelo" />
    <BaseTextarea
      v-model="formState.description"
      id="description"
      label="Descrição"
    />
    <UButton type="submit">Salvar</UButton>
  </UForm>
</template>

<script setup lang="ts">
import { z } from "zod";
import { createProductSchema } from "~/schemas/product";
import type { FormErrorEvent, FormSubmitEvent } from "#ui/types";
definePageMeta({
  middleware: ["admin-auth"],
  layout: "admin",
});
const formState = reactive({
  name: "",
  image: undefined,
  price: 0,
  stock: 0,
  brand: "",
  model: "",
  category: "",
  description: "",
});
watch(formState, (val) => console.log(val));
type Schema = z.output<typeof createProductSchema>;
const handleSubmit = async (event: FormSubmitEvent<Schema>) => {
  console.log(event.data);
};
const handleError = async (event: FormErrorEvent) => {
  console.log(event);
};
</script>

<style scoped></style>
