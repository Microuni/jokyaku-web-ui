const colors = require("tailwindcss/colors")

module.exports = {
  content: [
    "./src/js/**/*.{js,jsx,ts,tsx}",
    "./node_modules/@vechaiui/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: colors.rose,
        positive: colors.emerald,
        warning: colors.orange,
        danger: colors.red,
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@vechaiui/core")({
      colors: ["positive", "warning", "danger"],
    }),
  ],
}
