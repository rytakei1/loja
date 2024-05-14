<template>
  <div class="flex items-center">
    <h1 class="text-4xl font-bold text-main">Produtos</h1>
    <UButton class="ml-8" @click="router.push('/admin/produtos/novo')"
      >Novo Produto</UButton
    >
  </div>
  <BaseTable :data="productsStore.products" :columns="columns" :tools="[]" />
</template>

<script setup lang="ts">
definePageMeta({
  middleware: ["admin-auth"],
  layout: "admin",
});
const columns = [
  {
    name: "firstName",
    label: "Nome",
    type: "string",
  },
  {
    name: "lastName",
    label: "Sobrenome",
    type: "string",
  },
  {
    name: "email",
    label: "Email",
    type: "string",
  },
];
const router = useRouter();
const productsStore = useProductsStore();
await useAsyncData("getProducts", () => productsStore.fetchProducts());
</script>

<style scoped></style>
