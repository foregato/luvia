import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        // Design tokens — Luvia brand
        ink: "#211B1E",       // near-black warm text
        paper: "#FFFCFD",     // page background, soft warm white
        blush: "#FDF1F4",     // soft section background
        rose: {
          DEFAULT: "#D6416A", // primary brand pink
          light: "#F4B8C8",   // secondary pink for accents/badges
          dark: "#A82C4E",    // hover / deep accent
        },
        mist: "#8A7E82",      // muted secondary text
        line: "#F1E3E7",      // hairline borders
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
        soft: "0 20px 45px -25px rgba(33, 27, 30, 0.25)",
        card: "0 10px 30px -15px rgba(214, 65, 106, 0.25)",
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
