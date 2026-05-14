import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "bg-primary": "#05010f",
        "bg-secondary": "#0d0820",
        "bg-tertiary": "#1a0f3d",
        "accent-purple": "#8B5CF6",
        "accent-blue": "#3B82F6",
        "accent-cyan": "#06B6D4",
        "text-primary": "#f8f6ff",
        "text-secondary": "#a09abf",
        "text-muted": "#5c5580",
        "border-subtle": "#1e1640",
        "border-accent": "#2d1f6e",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        "glow-purple": "0 0 24px 4px rgba(139, 92, 246, 0.25)",
        "glow-blue": "0 0 24px 4px rgba(59, 130, 246, 0.25)",
        card: "0 4px 32px -4px rgba(5, 1, 15, 0.8)",
        "card-hover": "0 8px 48px -4px rgba(139, 92, 246, 0.15)",
      },
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.5rem",
      },
      keyframes: {
        "spotlight-pulse": {
          "0%, 100%": { opacity: "0.55" },
          "50%": { opacity: "0.85" },
        },
        "rotate-border": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "200% 0" },
          "100%": { backgroundPosition: "-200% 0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        "text-generate": {
          "0%": { opacity: "0", filter: "blur(10px)" },
          "100%": { opacity: "1", filter: "blur(0)" },
        },
      },
      animation: {
        "spotlight-pulse": "spotlight-pulse 4s ease-in-out infinite",
        "rotate-border": "rotate-border 4s linear infinite",
        "fade-in-up": "fade-in-up 0.6s ease-out both",
        shimmer: "shimmer 3s linear infinite",
        float: "float 6s ease-in-out infinite",
        "text-generate": "text-generate 0.5s ease-out forwards",
      },
      screens: {
        xs: "480px",
      },
    },
  },
  plugins: [],
};

export default config;
