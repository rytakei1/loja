<template>
  <UFormGroup :label="label" :name="id" :ui="{ container: 'h-15' }">
    <USelectMenu>
      <template #option-create="{ option }">
        <span class="flex-shrink-0">New label:</span>
        <span class="flex-shrink-0 w-2 h-2 mt-px rounded-full -mx-1" />
        <span class="block truncate">{{ option.label }}</span>
      </template>
    </USelectMenu>
  </UFormGroup>
</template>

<script setup lang="ts">
interface Props {
  id?: string;
  label?: string;
  options: any[];
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
