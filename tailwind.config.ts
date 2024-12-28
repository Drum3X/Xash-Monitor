import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#3db4f2",
        secondary: "#673ab7",
        background: "#0a1625",
        box: "#151f2e",
        header: "#748899",
        text: "#f0f3f6",
      }
    },   
  },
  plugins: [],
};
export default config;
