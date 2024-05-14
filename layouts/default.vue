<template>
  <div class="flex min-h-[100vh] w-full flex-col">
    <LayoutNavbar />
    <div class="flex flex-col grow overflow-y-auto">
      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style></style>
