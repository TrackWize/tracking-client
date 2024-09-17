import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx,scss,css}",
    "./components/**/*.{js,ts,jsx,tsx,mdx,scss,css}",
    "./app/**/*.{js,ts,jsx,tsx,mdx,scss,css}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
      },
    },
  },
  important: true,
  plugins: [],
};
export default config;
