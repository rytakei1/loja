import type { CallbackTypes } from "vue3-google-login";
export const useAuth = () => {
  const googleLoginCallback: CallbackTypes.CredentialCallback = async (
    response
  ) => {
    try {
      const res = await $fetch("/api/auth/googleLogin", {
        body: { credential: response.credential },
        method: "POST",
      });
      console.log(res);
    } catch (err) {
      console.error(err);
    }
  };
  return { googleLoginCallback };
};
