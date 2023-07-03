/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      lightGrey: "#D5E1EF",
      white: "#FFFFFF",
      darkNavy: "#1F314F",
      grey: "#7D889E",
    },
    extend: {
      fontFamily: {
        outfit: ["Outfit", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
