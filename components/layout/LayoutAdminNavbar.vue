<template>
  <div
    class="flex flex-col min-h-full min-w-40 relative max-h-full overflow-hidden bg-white"
  >
    <div
      ref="topBox"
      class="border-r-2 border-b-2 rounded-br border-main absolute top-0 left-0 w-full transition-all duration-300 pointer-events-none bg-gray-100"
      :style="{ height: `${selectedEntryRef?.offsetTop}px` }"
    ></div>
    <div
      ref="bottomBox"
      class="border-r-2 border-t-2 rounded-tr border-main absolute left-0 w-full h-full transition-all duration-300 pointer-events-none bg-gray-100"
      :style="{
        top: `${
          selectedEntryRef
            ? selectedEntryRef.offsetTop + selectedEntryRef.clientHeight
            : 0
        }px`,
      }"
    ></div>
    <div class="flex px-2 justify-center z-10 my-6">
      <CldImage
        src="takei_maquinas/logo_ickgr7"
        width="100"
        height="60"
        alt="logo"
      />
    </div>
    <div id="entries" class="flex flex-col z-10">
      <div
        v-for="entry in menuEntries"
        :class="{
          selected: route.path.includes(entry.path),
          'bg-transparent': route.path.includes(entry.path),
        }"
        ref="entriesRef"
      >
        <router-link
          :to="entry.path"
          class="flex flex-col justify-center items-center w-full h-full py-6 text-main transition-all duration-300"
          :class="{
            'text-secondary': route.path.includes(entry.path),
            'font-semibold': route.path.includes(entry.path),
          }"
        >
          <component :is="entry.icon" />
          {{ entry.label }}
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import IconAccountBoxOutline from "~icons/mdi/account";
import IconBag from "~icons/ph/bag";
export interface IMenuEntry {
  label: string;
  icon: any;
  path: string;
}
const menuEntries: IMenuEntry[] = [
  {
    label: "Usuários",
    icon: IconAccountBoxOutline,
    path: "/admin/usuarios",
  },
  {
    label: "Produtos",
    icon: IconBag,
    path: "/admin/produtos",
  },
];

const bottomBox = ref<HTMLDivElement>();
const route = useRoute();
const entriesRef = ref<HTMLDivElement[]>();
const selectedEntryRef = ref<HTMLDivElement>();
watch(
  [() => route.path, entriesRef],
  async () => {
    await nextTick();
    selectedEntryRef.value = entriesRef.value?.find((entry) =>
      entry.classList.contains("selected")
    );
  },
  { immediate: true }
);
</script>

<style scoped></style>
