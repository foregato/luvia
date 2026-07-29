import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        // Base
        background: "#000000",
        surface: "#0f0f11",
        card: "#18181b",

        // Borders
        border: "#27272a",
        borderStrong: "#3f3f46",

        // Typography
        text: "#ffffff",
        textMuted: "#a1a1aa",
        textSoft: "#71717a",

        // Primary Brand
        primary: {
          DEFAULT: "#8b5cf6",
          hover: "#7c3aed",
        },

        // Accent Colors
        secondary: "#ec4899",
        cyan: "#06b6d4",
        blue: "#3b82f6",

        // Social
        instagram: {
          100: "#f09433",
          200: "#e6683c",
          300: "#dc2743",
          400: "#cc2366",
          500: "#bc1888",
        },
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
        soft: "0 20px 45px -25px rgba(0, 0, 0, 0.55)",

        card:
          "0 10px 35px -12px rgba(139, 92, 246, 0.25)",

        glow:
          "0 0 40px rgba(139, 92, 246, 0.35)",

        glowPink:
          "0 0 40px rgba(236, 72, 153, 0.30)",

        glowBlue:
          "0 0 40px rgba(59, 130, 246, 0.30)",
      },

      backgroundImage: {
        primary:
          "linear-gradient(90deg, #8b5cf6 0%, #ec4899 50%, #06b6d4 100%)",

        hero:
          "linear-gradient(135deg, #8b5cf6 0%, #3b82f6 100%)",

        instagram:
          "linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)",
      },

      keyframes: {
        fadeUp: {
          "0%": {
            opacity: "0",
            transform: "translateY(18px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },

        fadeIn: {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          },
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