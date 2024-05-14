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
});
type Schema = z.output<typeof createProductSchema>;
const handleSubmit = async (event: FormSubmitEvent<Schema>) => {
  console.log(event.data);
};
const handleError = async (event: FormErrorEvent) => {
  console.log(event);
};
</script>

<style scoped></style>
