import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        // Design tokens — Luvia brand (Dark Theme)

        ink: "#FFFFFF",       // texto principal
        paper: "#000000",     // fundo principal
        blush: "#0f0f11",     // fundo de seções

        rose: {
          DEFAULT: "#8b5cf6", // roxo principal
          light: "#ec4899",   // rosa para destaques
          dark: "#3b82f6",    // azul para hover/gradientes
        },

        mist: "#a1a1aa",      // texto secundário
        line: "#27272a",      // bordas
      },

      fontFamily: {
        display: ["var(--font-fraunces)", "Georgia", "serif"],
        body: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-space-mono)", "monospace"],
      },

      borderRadius: {
        xl2: "1.75rem",
      },

      boxShadow: {
        soft: "0 20px 45px -25px rgba(0, 0, 0, 0.45)",
        card: "0 10px 30px -15px rgba(139, 92, 246, 0.30)",
      },

      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(18px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },

      animation: {
        fadeUp: "fadeUp 0.7s cubic-bezier(0.16,1,0.3,1) both",
        fadeIn: "fadeIn 0.6s ease-out both",
      },
    },
  },
  plugins: [],
};

export default config;