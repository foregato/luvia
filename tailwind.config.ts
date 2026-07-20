import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0D0817",
        midnight: "#1B1140",
        azure: "#2A2570",
        violet: {
          DEFAULT: "#7C4DFF",
          soft: "#9A72FF",
        },
        lilac: {
          DEFAULT: "#C9A9F7",
          soft: "#E4D6FB",
        },
        paper: "#F6F3FC",
        ash: "#443868",
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      backgroundImage: {
        "luvia-aurora":
          "radial-gradient(60% 60% at 20% 20%, rgba(124,77,255,0.35) 0%, rgba(124,77,255,0) 60%), radial-gradient(50% 50% at 80% 30%, rgba(201,169,247,0.28) 0%, rgba(201,169,247,0) 60%), radial-gradient(70% 70% at 50% 90%, rgba(42,37,112,0.55) 0%, rgba(42,37,112,0) 60%)",
        "luvia-grain":
          "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.035'/%3E%3C/svg%3E\")",
      },
      boxShadow: {
        glow: "0 0 80px rgba(124,77,255,0.25)",
        card: "0 20px 60px -20px rgba(13,8,23,0.5)",
      },
      borderRadius: {
        xl2: "1.75rem",
      },
      transitionTimingFunction: {
        silk: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
