module.exports = {
  mode: "jit",
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  purge: [
    "./node_modules/@vechaiui/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "media",
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@vechaiui/core"),
  ],
};
