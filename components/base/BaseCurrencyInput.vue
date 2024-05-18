<template>
  <UFormGroup :label="label" :name="id" :ui="{ container: 'h-15' }">
    <UInput :id="id" :placeholder="placeholder" ref="inputRef" />
  </UFormGroup>
</template>

<script setup lang="ts">
import { useCurrencyInput } from "vue-currency-input";
import { watchDebounced } from "@vueuse/core";
interface Props {
  id?: string;
  label?: string;
  placeholder?: string;
  modelValue: number;
}

withDefaults(defineProps<Props>(), {
  id: "input",
  label: "",
  placeholder: "",
  modelValue: 0,
});

const emits = defineEmits(["update:modelValue"]);
const { inputRef, numberValue } = useCurrencyInput(
  {
    currency: "BRL",
    locale: "pt-BR",
    hideCurrencySymbolOnFocus: false,
    hideGroupingSeparatorOnFocus: false,
  },
  false
);

watchDebounced(numberValue, (val) => {
  emits("update:modelValue", val);
});
</script>

<style scoped></style>
