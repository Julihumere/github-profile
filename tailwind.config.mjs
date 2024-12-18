/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        beVietnamPro: ["Be Vietnam Pro", "sans-serif"],
      },
      colors: {
        background: "#20293a",
        backgroundItems: "#111729",
        placeholder: "#4a5567",
        textWhite: "#CDD5E0",
      },
    },
  },
  plugins: [],
};
