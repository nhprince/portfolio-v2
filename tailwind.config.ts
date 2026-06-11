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
        bg: {
          DEFAULT: "#0A0A0A",
          deep: "#000000",
        },
        surface: {
          DEFAULT: "#111111",
          elevated: "#1A1A1A",
        },
        border: {
          DEFAULT: "#222222",
          subtle: "#1A1A1A",
        },
        text: {
          primary: "#FFFFFF",
          secondary: "#A0A0A0",
          muted: "#666666",
        },
        accent: {
          DEFAULT: "#E50914",
          glow: "rgba(229, 9, 20, 0.2)",
          hover: "#FF1A25",
        },
      },
      fontFamily: {
        display: ["var(--font-syne)", "sans-serif"],
        body: ["var(--font-space-grotesk)", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "monospace"],
      },
      fontSize: {
        hero: ["clamp(4rem, 10vw, 12rem)", { lineHeight: "0.9", fontWeight: "800" }],
        h1: ["clamp(3rem, 6vw, 7rem)", { lineHeight: "1", fontWeight: "800" }],
        h2: ["clamp(2rem, 4vw, 4.5rem)", { lineHeight: "1.1", fontWeight: "700" }],
        h3: ["clamp(1.5rem, 2.5vw, 2.5rem)", { lineHeight: "1.2", fontWeight: "600" }],
        body: ["clamp(1rem, 1.2vw, 1.125rem)", { lineHeight: "1.6" }],
        meta: ["0.625rem", { lineHeight: "1.4", letterSpacing: "0.25em", textTransform: "uppercase" }],
      },
      spacing: {
        "section": "clamp(4rem, 8vw, 10rem)",
      },
      maxWidth: {
        container: "1600px",
      },
      screens: {
        "3xl": "1920px",
        "4xl": "2560px",
        "5xl": "3840px",
      },
      animation: {
        "fade-in": "fadeIn 0.8s ease-out forwards",
        "slide-up": "slideUp 0.8s ease-out forwards",
        "glow-pulse": "glowPulse 3s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(40px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        glowPulse: {
          "0%, 100%": { opacity: "0.3" },
          "50%": { opacity: "0.6" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
