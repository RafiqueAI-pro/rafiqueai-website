/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#FFFFFF",
      // novo.md §4 — Ink + slate + brand accents
      ink: "#0B121A",
      cream: "#F4F1EA",
      slate: {
        100: "#E8EBEF",
        200: "#D6DBE2",
        300: "#B9C1CC",
        400: "#8C97A6",
        500: "#667181",
        600: "#4B5562",
        700: "#353D48",
        800: "#232A33",
        900: "#161C24",
        950: "#0D1116",
      },
      pulse: {
        400: "#2FBAC4",
        500: "#0E9DA8",
        600: "#0B7F89",
      },
      crm: {
        400: "#6C79E0",
        500: "#4B5BD4",
        600: "#3B49AE",
      },
      contentos: {
        400: "#BE68A6",
        500: "#A94A93",
        600: "#8B3A79",
      },
    },
    fontFamily: {
      sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      mono: ["var(--font-mono)", "ui-monospace", "monospace"],
    },
    borderRadius: {
      none: "0px",
      xs: "2px",
      sm: "4px",
      md: "6px",
      lg: "10px",
      xl: "16px",
      full: "9999px",
    },
    extend: {
      maxWidth: {
        site: "1280px",
      },
      transitionTimingFunction: {
        standard: "cubic-bezier(0.2, 0, 0, 1)",
      },
    },
  },
  plugins: [],
};
