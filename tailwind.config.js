import colors from "./src/global/presets/colors.preset";
import { fontFamily } from "./src/global/presets/typography.preset";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors,
    fontFamily,
    extend: {},
  },
  plugins: [],
};
