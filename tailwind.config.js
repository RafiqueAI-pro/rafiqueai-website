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
      // Sampled from orkesta/sitenovo.png
      ink: "#0C1019",
      cream: "#F3EEDC",
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
        400: "#3EB8C4",
        500: "#2E9FB0",
        600: "#258A99",
      },
      crm: {
        400: "#6C79E0",
        500: "#3E56C6",
        600: "#3246AE",
      },
      contentos: {
        400: "#BE68A6",
        500: "#984383",
        600: "#7A3569",
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
