import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        "foreground-rgb":"rgba(var(--foreground-rgb) / <alpha-value>)",
        "background-start-rgb":"rgba(var(--background-start-rgb) / <alpha-value>)",
        "background-end-rgb":"rgba(var( --background-end-rgb) / <alpha-value>)",
        "bg-color":"rgba(var(--bg-color) / <alpha-value>)",
        "text-color":"rgba(var(--text-color) / <alpha-value>)",
        "main-color":"rgba(var(--main-color) / <alpha-value>)",
        "white-color":"rgba(var(--white-color) / <alpha-value>)"
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [
    require('tailwindcss-animated')
  ],
};
export default config;
