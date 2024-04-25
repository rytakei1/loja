<template>
  <div>
    <label :for="id" class="text-main-500 text-xs">{{ label }}</label>
    <UInput
      :id="id"
      :placeholder="placeholder"
      :type="type"
      :modelValue="modelValue"
      @input="handleInput"
      color="main"
    />
  </div>
</template>

<script setup lang="ts">
import type { InputColor } from "#ui/types";

interface Props {
  id?: string;
  label?: string;
  placeholder?: string;
  type?: string;
  modelValue: string;
}
const handleInput = (e: InputEvent) => {
  const input = e.target as HTMLInputElement;
  emits("update:modelValue", input.value);
};
defineProps<Props>();
const emits = defineEmits(["update:modelValue"]);
</script>

<style scoped></style>
