import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: "#101828",
        brand: "#2563EB",
        "brand-dark": "#1D4ED8",
        purple: "#8B5CF6",
        emerald: "#22C55E",
        soft: "#0B0D12",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
        heading: ["var(--font-space-grotesk)", "Space Grotesk", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 12px 36px -24px rgb(16 24 40 / 22%)",
        "card-hover": "0 24px 48px -28px rgb(16 24 40 / 28%)",
      },
    },
  },
  plugins: [],
};
export default config;
