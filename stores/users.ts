import type { User } from "@prisma/client";
import { defineStore, acceptHMRUpdate } from "pinia";

type UserWithoutPassword = Omit<User, "password">;

export const useUsersStore = defineStore("users", {
  state: () => {
    return {
      users: [] as UserWithoutPassword[],
    };
  },
  actions: {
    async fetchUsers() {
      try {
        const res = await $fetch("/api/users", { method: "GET" });
        this.users = res;
      } catch (err) {
        console.error(err);
      }
    },
  },
});

// @ts-ignore
if (import.meta.hot) {
  // @ts-ignore
  import.meta.hot.accept(acceptHMRUpdate(useUsersStore, import.meta.hot));
}
