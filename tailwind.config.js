/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#0f172a",
        "accent-cyan": "#06b6d4",
        "accent-blue": "#3b82f6",
        "surface": "#f8fafc",
        "surface-glass": "rgba(255, 255, 255, 0.7)",
        "on-surface": "#0f172a",
        "on-surface-variant": "#475569",
        "outline-variant": "#e2e8f0",
        "secondary": "#334155",
        "tertiary": "#0E7490",
        "on-primary": "#ffffff",
        "surface-container": "#F1F5F9",
        "outline": "#E2E8F0"
      },
      borderRadius: {
        "DEFAULT": "0.5rem",
        "lg": "0.75rem",
        "xl": "1rem",
        "2xl": "1.5rem",
        "full": "9999px"
      },
      fontFamily: {
        "headline": ["Newsreader", "serif"],
        "serif": ["Newsreader", "serif"],
        "body": ["Inter", "sans-serif"],
        "sans": ["Inter", "sans-serif"],
        "label": ["Inter", "sans-serif"]
      }
    },
  },
  plugins: [],
}
