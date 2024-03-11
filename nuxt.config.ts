// https://nuxt.com/docs/api/configuration/nuxt-config
import svgLoader from "vite-svg-loader";

export default defineNuxtConfig({
  devtools: { enabled: true },

  css: ["~/assets/css/main.css"],

  // ssr: false,

  components: {
    dirs: [
      {
        path: "~/components",
        pathPrefix: false,
      },
    ],
  },

  modules: ["nuxt-monaco-editor", "@nuxtjs/color-mode"],

  runtimeConfig: {
    public: {
      RAPID_API_HOST: process.env.RAPID_API_HOST,
      RAPID_API_KEY: process.env.RAPID_API_KEY,
      RAPID_API_URL: process.env.RAPID_API_URL,
    },
  },

  colorMode: {
    classSuffix: "",
  },

  monacoEditor: {
    // These are default values:
    locale: "en",
    componentName: {
      codeEditor: "MonacoEditor",
      diffEditor: "MonacoDiffEditor",
    },
  },

  vite: {
    plugins: [
      svgLoader({
        defaultImport: "component", // or 'raw'
      }),
    ],
  },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
