/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        // Section 3.1 of the OSS design documentation.
        porcelain: "#F6F7FB",
        ink: "#12142B",
        grid: "#2C3E9E",
        amber: "#F0A020",
        ledger: "#1B8F7A",
        slate: {
          DEFAULT: "#4A4F68",
        },
      },
      fontFamily: {
        display: ["General Sans", "system-ui", "sans-serif"],
        body: ["Public Sans", "system-ui", "sans-serif"],
        mono: ["IBM Plex Mono", "ui-monospace", "monospace"],
      },
      fontSize: {
        sm: ["0.875rem", "1.55rem"],
        base: ["1rem", "1.7rem"],
        lg: ["1.125rem", "1.8rem"],
      },
      maxWidth: {
        content: "1280px",
      },
      borderRadius: {
        card: "12px",
      },
      keyframes: {
        "grid-pulse": {
          "0%, 100%": { opacity: "0.15" },
          "50%": { opacity: "0.9" },
        },
        "reveal-up": {
          from: { opacity: "0", transform: "translateY(12px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "grid-pulse": "grid-pulse 2.4s ease-in-out infinite",
        "reveal-up": "reveal-up 0.2s ease-out both",
      },
    },
  },
  plugins: [],
};
