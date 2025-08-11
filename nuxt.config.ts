// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  extends: ["shadcn-docs-nuxt"],
  app: {
    head: {
      htmlAttrs: {
        lang: "fa",
      },
    },
  },
  site: {
    url: "https://typescript-fa.ir",
  },
  i18n: {
    defaultLocale: "fa",
    locales: [{ code: "fa", name: "فارسی", language: "fa-IR" }],
  },
  compatibilityDate: "2024-07-06",
});
