import containerQueries from "@tailwindcss/container-queries";
import typography from "@tailwindcss/typography";
import animate from "tailwindcss-animate";
/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["index.html", "src/**/*.{js,ts,jsx,tsx,html,css}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },

    extend: {
      fontFamily: {
        display: ["Bricolage Grotesque", "system-ui", "sans-serif"],
        body: ["Nunito", "system-ui", "sans-serif"],
        sans: ["Nunito", "system-ui", "sans-serif"],
        mono: ["Geist Mono", "ui-monospace", "monospace"],
      },
      colors: {
        background: "oklch(0.16 0.02 25)",
        foreground: "oklch(0.97 0.005 90)",
        card: "oklch(0.21 0.02 25)",
        "card-foreground": "oklch(0.97 0.005 90)",
        popover: "oklch(0.21 0.02 25)",
        "popover-foreground": "oklch(0.97 0.005 90)",
        primary: "oklch(0.58 0.24 27)",
        "primary-foreground": "oklch(0.99 0.005 90)",
        secondary: "oklch(0.30 0.10 27)",
        "secondary-foreground": "oklch(0.95 0.01 90)",
        accent: "oklch(0.85 0.17 90)",
        "accent-foreground": "oklch(0.18 0.03 25)",
        muted: "oklch(0.24 0.015 25)",
        "muted-foreground": "oklch(0.72 0.015 85)",
        destructive: "oklch(0.55 0.24 27)",
        "destructive-foreground": "oklch(0.97 0.005 90)",
        success: "oklch(0.62 0.16 145)",
        "success-foreground": "oklch(0.97 0.005 145)",
        warning: "oklch(0.82 0.16 80)",
        "warning-foreground": "oklch(0.18 0.03 80)",
        border: "oklch(0.85 0.17 90)",
        input: "oklch(0.30 0.10 27)",
        ring: "oklch(0.85 0.17 90)",
        "chart-1": "oklch(0.58 0.24 27)",
        "chart-2": "oklch(0.85 0.17 90)",
        "chart-3": "oklch(0.62 0.16 145)",
        "chart-4": "oklch(0.72 0.15 190)",
        "chart-5": "oklch(0.55 0.2 320)",
        sidebar: "oklch(0.14 0.02 25)",
        "sidebar-foreground": "oklch(0.97 0.005 90)",
        "sidebar-primary": "oklch(0.85 0.17 90)",
        "sidebar-primary-foreground": "oklch(0.18 0.03 25)",
        "sidebar-accent": "oklch(0.58 0.24 27)",
        "sidebar-accent-foreground": "oklch(0.99 0.005 90)",
        "sidebar-border": "oklch(0.30 0.10 27)",
        "sidebar-ring": "oklch(0.85 0.17 90)",
      },
      boxShadow: {
        pop: "4px 4px 0 0 oklch(0.85 0.17 90)",
        "pop-red": "4px 4px 0 0 oklch(0.58 0.24 27)",
        "pop-lg": "6px 6px 0 0 oklch(0.85 0.17 90)",
        "pop-red-lg": "6px 6px 0 0 oklch(0.58 0.24 27)",
        "pop-xl": "8px 8px 0 0 oklch(0.85 0.17 90)",
        "pop-red-xl": "8px 8px 0 0 oklch(0.58 0.24 27)",
      },
      keyframes: {
        "pop-in": {
          "0%": { transform: "scale(0.9) translateY(8px)", opacity: "0" },
          "60%": { transform: "scale(1.04) translateY(0)", opacity: "1" },
          "100%": { transform: "scale(1) translateY(0)", opacity: "1" },
        },
        "wiggle": {
          "0%, 100%": { transform: "rotate(-2deg)" },
          "50%": { transform: "rotate(2deg)" },
        },
        "float-soft": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        "marquee": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "pop-in": "pop-in 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) both",
        "wiggle": "wiggle 0.6s ease-in-out",
        "float-soft": "float-soft 4s ease-in-out infinite",
        "marquee": "marquee 24s linear infinite",
      },
    },
  },
  plugins: [typography, containerQueries, animate],
};
