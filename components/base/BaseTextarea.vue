<template>
  <UFormGroup :label="label" :name="id" :ui="{ container: 'h-15' }">
    <UTextarea
      :id="id"
      :placeholder="placeholder"
      @input="handleInput"
      :rows="rows"
    />
  </UFormGroup>
</template>

<script setup lang="ts">
interface Props {
  id?: string;
  label?: string;
  placeholder?: string;
  modelValue: string | number;
  rows?: number;
}
const model = defineModel();
withDefaults(defineProps<Props>(), {
  id: "input",
  label: "",
  placeholder: "",
  modelValue: "",
  rows: 3,
});

const handleInput = (e: InputEvent) => {
  const target = e.target as HTMLInputElement;
  model.value = target.value;
};
</script>

<style scoped></style>
