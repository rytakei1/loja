<template>
  <UFormGroup :label="label" :name="id" :ui="{ container: 'h-15' }">
    <UInput
      :id="id"
      :placeholder="placeholder"
      :type="type"
      @input="handleInput"
    />
  </UFormGroup>
</template>

<script setup lang="ts">
interface Props {
  id?: string;
  label?: string;
  placeholder?: string;
  type?: "input" | "number";
  modelValue: string | number;
}
const model = defineModel();
const props = withDefaults(defineProps<Props>(), {
  id: "input",
  label: "",
  placeholder: "",
  type: "input",
  modelValue: "",
});

const handleInput = (e: InputEvent) => {
  const target = e.target as HTMLInputElement;
  if (props.type === "number") {
    model.value = parseInt(target.value);
  } else {
    model.value = target.value;
  }
};
</script>

<style scoped></style>
