<template>
  <UFormGroup :label="label" :name="id">
    <UInput
      :id="id"
      :placeholder="placeholder"
      :type="type"
      :modelValue="modelValue"
      @input="handleInput"
    />
  </UFormGroup>
</template>

<script setup lang="ts">
interface Props {
  id?: string;
  label?: string;
  placeholder?: string;
  type?: string;
  modelValue: string;
}
withDefaults(defineProps<Props>(), {
  id: "input",
  label: "",
  placeholder: "",
  type: "input",
});

const handleInput = (e: InputEvent) => {
  const input = e.target as HTMLInputElement;
  emits("update:modelValue", input.value);
};

const emits = defineEmits(["update:modelValue"]);
</script>

<style scoped></style>
