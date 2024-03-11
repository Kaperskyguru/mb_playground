/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#3E48AD",
        },
        tertiary: {
          100: "#EFF2F7",
          900: "#383B40",
        },
      },
    },
  },

  plugins: [],
};
