<template>
  <h1 class="text-4xl font-bold text-main">Usuários</h1>
  <BaseTable :data="usersStore.users" :columns="columns" :tools="[]" />
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
const usersStore = useUsersStore();
await useAsyncData("getUsers", () => usersStore.fetchUsers());
</script>

<style scoped></style>
