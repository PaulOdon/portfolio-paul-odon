import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "15rem",
        "2xl": "22rem",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      colors: {
        primary: "#F37A1C",
        "primary-light": "#FF8C3A",
        "primary-dark": "#E66A0A",
        "light-gray": "#999999",
        "dark-gray": "#1F2937",
        "darker-gray": "#111827",
        "accent": "#3B82F6",
        "accent-light": "#60A5FA",
        "glow-green": "#10B981",
        "glow-blue": "#3B82F6",
        "glow-orange": "#F59E0B",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
