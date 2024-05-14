export default defineNuxtRouteMiddleware((to, from) => {
  const authStore = useAuthStore();
  console.log(authStore.isUserAdmin);
});
