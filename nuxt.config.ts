// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxt/ui",
    "@nuxtjs/color-mode",
    "@nuxtjs/cloudinary",
    "nuxt-icon",
    "@pinia/nuxt",
    "@pinia-plugin-persistedstate/nuxt",
    "unplugin-icons/nuxt",
  ],
  runtimeConfig: {
    tokenSecret: process.env.JWT_SECRET,
  },
  colorMode: {
    preference: "light",
  },
  cloudinary: {
    apiKey: "843451242252636",
    cloudName: "dw7dtx2vi",
    cloud: {
      apiKey: "843451242252636",
      apiSecret: "ZPRn2lPrTrl5jfS0-CpEhk4o83M",
      cloudName: "dw7dtx2vi",
    },
  },
});
