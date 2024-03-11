// https://nuxt.com/docs/api/configuration/nuxt-config
import svgLoader from "vite-svg-loader";

export default defineNuxtConfig({
  devtools: { enabled: true },

  css: ["~/assets/css/main.css"],

  // ssr: false,
  app: {
    head: {
      title: "Online Code Playground",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          hid: "description",
          name: "description",
          content:
            "The user friendly code playground and online compiler for server-side programming langauges and backend engineers that allows you to Write code in any backend programming languages and run it online. The code playground and text editor also supports taking input from the user and standard libraries. It uses any of bcakend programming language's compiler to compile code.",
        },
      ],
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    },
  },

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
