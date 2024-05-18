<template>
  <UFormGroup :label="label" :name="id" :ui="{ container: 'h-15' }">
    <button
      class="border-2 border-dashed border-gray-300 p-4 flex justify-center w-80 h-80 cursor-pointer items-center focus:outline-main-500 active:outline-main-500 active:outline-2"
      @click="inputRef?.click()"
    >
      <p v-if="!uploadedFile" class="text-sm">{{ placeholderText }}</p>
      <div v-else class="flex flex-col h-full justify-between">
        <img :src="uploadedFile" class="object-contain h-[90%]" />
        <p class="text-xs">Clique na imagem para alterar</p>
      </div>
      <input
        type="file"
        accept="image/*"
        class="hidden"
        ref="inputRef"
        @change="handleChange"
      />
    </button>
  </UFormGroup>
</template>

<script setup lang="ts">
interface Props {
  placeholderText?: string;
  label?: string;
  id?: string;
  modelValue?: Blob | undefined;
}
withDefaults(defineProps<Props>(), {
  placeholderText: "Clique para selecionar uma imagem",
  label: "Imagem",
  id: "imagem",
});
const emits = defineEmits(["update:modelValue"]);
const inputRef = ref<HTMLInputElement>();
const uploadedFile = ref();

const handleChange = (e: Event) => {
  const target = e.target as HTMLInputElement;
  if (!target.files) return;
  uploadedFile.value = URL.createObjectURL(target.files[0]);
  emits("update:modelValue", uploadedFile.value);
};
</script>

<style scoped></style>
