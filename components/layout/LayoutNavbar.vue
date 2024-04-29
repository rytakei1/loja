<template>
  <div
    class="flex py-4 px-4 border-b-2 border-gray-400 justify-between items-end"
  >
    <CldImage
      src="takei_maquinas/logo_ickgr7"
      width="160"
      height="80"
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
            <UButton class="w-full flex justify-center mb-2">Login</UButton>
            <UButton variant="ghost" class="w-full flex justify-center mb-2"
              >Não tem conta? Cadastre-se</UButton
            >
            <UDivider
              label="OU"
              :ui="{ label: 'text-primary-500 dark:text-primary-400' }"
              class="mb-4"
            />
            <UButton
              variant="outline"
              icon="i-ion-logo-google"
              class="w-full flex justify-center"
              >Faça login com Google</UButton
            >
            <GoogleLogin
              :callback="googleLoginCallback"
              client-id="813220772469-k98ipq0u9te1uq05m2v5po7pcr4noff8.apps.googleusercontent.com"
            />
          </div>
        </template>
      </UPopover>
    </div>
  </div>
</template>

<script setup lang="ts">
import { GoogleLogin, decodeCredential } from "vue3-google-login";
import type { CallbackTypes } from "vue3-google-login";
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
const handleLogin = () => {};
const { googleLoginCallback } = useAuth();
</script>

<style scoped></style>
