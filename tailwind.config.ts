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
        blush:  { 50: "#fff5f7", 100: "#ffe0e6", 200: "#ffb3c1", 300: "#ff8099", 400: "#ff4d73", DEFAULT: "#ff1a4d" },
        petal:  { 50: "#fff9fb", 100: "#ffeef4", 200: "#ffd6e7", 300: "#ffadd0", DEFAULT: "#ff85bb" },
        butter: { 50: "#fffdf0", 100: "#fff9d6", 200: "#fff3ad", 300: "#ffe566", 400: "#ffd700", DEFAULT: "#f5c400" },
        rose:   { 50: "#fff0f3", 100: "#ffdde3", 200: "#ffb3bf", DEFAULT: "#e8637a" },
        cream:  { DEFAULT: "#fffaf5", 100: "#fff5eb", 200: "#ffecd6" },
      },
      fontFamily: {
        display: ["var(--font-display)"],
        body:    ["var(--font-body)"],
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
      boxShadow: {
        soft:  "0 4px 24px 0 rgba(255, 100, 130, 0.10)",
        card:  "0 8px 40px 0 rgba(255, 100, 130, 0.13)",
        float: "0 16px 64px 0 rgba(255, 100, 130, 0.18)",
      },
      animation: {
        "fade-up":    "fadeUp 0.6s ease both",
        "fade-in":    "fadeIn 0.4s ease both",
        "float":      "float 3s ease-in-out infinite",
        "shimmer":    "shimmer 2s linear infinite",
      },
      keyframes: {
        fadeUp:  { "0%": { opacity: "0", transform: "translateY(16px)" }, "100%": { opacity: "1", transform: "translateY(0)" } },
        fadeIn:  { "0%": { opacity: "0" }, "100%": { opacity: "1" } },
        float:   { "0%,100%": { transform: "translateY(0px)" }, "50%": { transform: "translateY(-8px)" } },
        shimmer: { "0%": { backgroundPosition: "-200% 0" }, "100%": { backgroundPosition: "200% 0" } },
      },
    },
  },
  plugins: [],
};

export default config;