import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        // Design tokens — Luvia brand (nova paleta roxo claro)
        ink: "#2D1B3D",         // texto principal – roxo escuro suave
        paper: "#F9F6FC",       // fundo da página – branco com leve toque roxo
        blush: "#EDE6F6",       // fundo de seções – roxo bem claro
        rose: {
          DEFAULT: "#8B5CF6",   // roxo médio vibrante (primário)
          light: "#C4B5FD",     // roxo claro para destaques/badges
          dark: "#6D28D9",      // roxo escuro para hover / profundidade
        },
        mist: "#7A6B8A",        // texto secundário – roxo acinzentado
        line: "#E5D9ED",        // bordas e divisores – roxo bem suave
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
        soft: "0 20px 45px -25px rgba(45, 27, 61, 0.25)",   // sombra com tinta roxa
        card: "0 10px 30px -15px rgba(139, 92, 246, 0.25)", // sombra com a cor primária
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