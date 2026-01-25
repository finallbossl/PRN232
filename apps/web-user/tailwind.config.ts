import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0F172A",
          muted: "#334155",
        },
        cta: {
          DEFAULT: "#0369A1",
          hover: "#0F172A",
        },
        accent: {
          DEFAULT: "#0369A1",
        },
        surface: "#F8FAFC",
        border: "#E2E8F0",
        'rich-text': "#020617",
      },
      borderRadius: {
        'luxury': '12px',
        'luxury-lg': '16px',
        lg: "0.75rem",
        md: "0.5rem",
        sm: "0.375rem",
      },
      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
        heading: ["Cormorant", "serif"],
      },
      boxShadow: {
        'soft-md': '0 4px 6px rgba(0, 0, 0, 0.1)',
        'soft-lg': '0 10px 15px rgba(0, 0, 0, 0.1)',
        'luxury-xl': '0 20px 25px rgba(0, 0, 0, 0.15)',
      },
      backdropBlur: {
        'xs': '2px',
      }
    },
  },
  plugins: [],
};
export default config;
