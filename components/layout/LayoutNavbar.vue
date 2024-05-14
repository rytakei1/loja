<template>
  <div
    class="fixed top-0 flex py-4 px-4 border-b-2 border-gray-400 justify-between items-end bg-white w-full"
  >
    <CldImage
      src="takei_maquinas/logo_ickgr7"
      width="140"
      height="70"
      alt="logo"
    />
    <UHorizontalNavigation
      :links="links"
      class="mx-auto w-fit text-lg"
      :ui="{ label: 'text-lg', base: 'px-3' }"
    />
    <div class="w-[160px] flex justify-end items-center my-auto">
      <UPopover :popper="{ placement: 'top-end' }">
        <UButton color="primary" variant="ghost" icon="i-mdi-account" leading
          >Login / Cadastro</UButton
        >
        <template #panel>
          <div class="p-4 min-w-64">
            <BaseInput
              id="username"
              v-model="username"
              label="Email"
              class="mb-2"
            />
            <BaseInput
              id="password"
              v-model="password"
              type="password"
              label="Senha"
              class="mb-4"
            />
            <UButton
              class="w-full flex justify-center mb-2"
              @click="handleLogin"
              >Login</UButton
            >
            <UButton variant="ghost" class="w-full flex justify-center mb-2"
              >Não tem conta? Cadastre-se</UButton
            >
            <UDivider
              label="OU"
              :ui="{ label: 'text-primary-500 dark:text-primary-400' }"
              class="mb-4"
            />
            <GoogleLogin
              :callback="authStore.googleLogin"
              client-id="813220772469-k98ipq0u9te1uq05m2v5po7pcr4noff8.apps.googleusercontent.com"
            />
          </div>
        </template>
      </UPopover>
    </div>
  </div>
</template>

<script setup lang="ts">
import { GoogleLogin } from "vue3-google-login";
const links = [
  {
    label: "Home",
    to: "/",
  },
  {
    label: "Produtos",
    to: "/produtos",
  },
  {
    label: "Contato",
    to: "/contato",
  },
];
const username = ref("");
const password = ref("");
const handleLogin = async () => {
  await authStore.passwordLogin({
    email: username.value,
    password: password.value,
  });
};
const authStore = useAuthStore();
</script>

<style scoped></style>
