import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#2176FF",
          foreground: "#F8FAFC"
        },
        accent: "#F97316",
        surface: "#0F172A"
      },
      fontFamily: {
        sans: ["'Inter Variable'", "Inter", "system-ui", "sans-serif"]
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(33, 118, 255, 0.35), 0 20px 45px -25px rgba(33, 118, 255, 0.45)"
      }
    }
  },
  plugins: []
};

export default config;
