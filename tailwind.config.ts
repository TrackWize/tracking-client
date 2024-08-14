import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx,scss,css}",
    "./components/**/*.{js,ts,jsx,tsx,mdx,scss,css}",
    "./app/**/*.{js,ts,jsx,tsx,mdx,scss,css}",
    "./styles/**/*.{js,ts,jsx,tsx,mdx,scss,css}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        transparent: "transparent",
      },
    },
  },
  important: true,
  plugins: [],
};
export default config;
