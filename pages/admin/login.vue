<template>
  <div class="flex flex-col h-full justify-center items-center w-full grow">
    <BaseInput placeholder="Email" v-model="email" class="mb-4" />
    <BaseInput
      placeholder="Password"
      v-model="password"
      type="password"
      class="mb-4"
      label="Senha"
    />
    <UButton @click="handleLogin" color="main">Login</UButton>
  </div>
</template>

<script lang="ts" setup>
const email = ref("");
const password = ref("");
const handleLogin = async () => {
  const { token } = await $fetch("/api/auth/login", {
    method: "POST",
    body: { email: email.value, password: password.value },
  });
  console.log(token);
};
</script>

<style></style>
