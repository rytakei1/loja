import type { Product } from "@prisma/client";
import { defineStore, acceptHMRUpdate } from "pinia";

export const useProductsStore = defineStore("products", {
  state: () => {
    return {
      products: [] as Product[],
    };
  },
  actions: {
    async fetchProducts() {
      const products = await $fetch("/api/products", {
        method: "GET",
      });
      this.products = products;
    },
  },
});

//@ts-ignore
if (import.meta.hot) {
  //@ts-ignore
  import.meta.hot.accept(acceptHMRUpdate(useProductsStore, import.meta.hot));
}
