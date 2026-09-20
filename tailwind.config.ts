import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: {
          DEFAULT: "var(--color-canvas)",
          warm: "#FAF8F5",
        },
        surface: {
          DEFAULT: "var(--color-surface)",
          ivory: "#F4EFEB",
          sandstone: "#EADCC9",
        },
        peach: {
          DEFAULT: "var(--color-accent-peach)",
          soft: "#F7E7DC",
          hover: "#F2D5C4",
          border: "#E8C8B6",
        },
        champagne: {
          DEFAULT: "var(--color-accent-champagne)",
          light: "#EFE8DC",
          border: "#DFD3C3",
        },
        gold: {
          DEFAULT: "var(--color-accent-gold)",
          subtle: "#B89762",
          dim: "rgba(184, 151, 98, 0.4)",
        },
        espresso: {
          DEFAULT: "var(--color-text-espresso)",
          primary: "#2C2523",
          muted: "#6B5E5B",
          subtle: "#9C8E8B",
        },
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Georgia", "serif"],
        sans: ["var(--font-jakarta)", "sans-serif"],
      },
      boxShadow: {
        editorial: "0 20px 40px -15px rgba(44, 37, 35, 0.07)",
        hover: "0 30px 60px -20px rgba(44, 37, 35, 0.12)",
        subtle: "0 4px 20px -2px rgba(44, 37, 35, 0.04)",
      },
      transitionTimingFunction: {
        luxury: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      keyframes: {
        "ken-burns": {
          "0%": { transform: "scale(1.0)" },
          "100%": { transform: "scale(1.05)" },
        },
      },
      animation: {
        "ken-burns": "ken-burns 12s cubic-bezier(0.16, 1, 0.3, 1) infinite alternate",
      },
    },
  },
  plugins: [],
};

export default config;
