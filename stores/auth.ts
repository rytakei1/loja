import { defineStore, acceptHMRUpdate } from "pinia";
import type { CallbackTypes } from "vue3-google-login";

export const useAuthStore = defineStore("auth", {
  state: () => {
    return {
      user: {
        firstName: "",
        lastName: "",
        email: "",
        role: "user",
      },
      token: "",
    };
  },
  getters: {
    isUserLoggedIn(state) {
      return !!state.token;
    },
    isUserAdmin(state) {
      return state?.user?.role === "admin";
    },
  },
  actions: {
    async googleLogin(response: CallbackTypes.CredentialPopupResponse) {
      const toast = useToast();
      const router = useRouter();
      try {
        const res = await $fetch("/api/auth/googleLogin", {
          body: { credential: response.credential },
          method: "POST",
        });
        this.token = res.token;
        this.user = res.user;

        toast.add({
          title: "Login realizado com sucesso",
          color: "main",
          timeout: 1500,
        });

        if (res.user.role === "admin") {
          router.push("/admin/usuarios");
        }
      } catch (err) {
        toast.add({
          title: "Erro ao fazer login utilizando Google",
          color: "red",
          timeout: 1500,
        });
        console.error(err);
        return false;
      }
    },
    async passwordLogin({
      email,
      password,
    }: {
      email: string;
      password: string;
    }) {
      const toast = useToast();
      const router = useRouter();
      try {
        const res = await $fetch("/api/auth/login", {
          body: { email, password },
          method: "POST",
        });
        this.token = res.token;
        this.user = res.user;
        toast.add({
          title: "Login realizado com sucesso",
          color: "main",
          timeout: 1500,
        });
        if (res.user.role === "admin") {
          router.push("/admin/usuarios");
        }
      } catch (err) {
        console.error(err);
        toast.add({
          title: "Email ou Senha inválidos",
          color: "red",
          timeout: 1500,
        });
      }
    },
    logout() {
      this.$reset();
    },
  },
  persist: true,
});

// @ts-ignore
if (import.meta.hot) {
  // @ts-ignore
  import.meta.hot.accept(acceptHMRUpdate(useAuthStore, import.meta.hot));
}
