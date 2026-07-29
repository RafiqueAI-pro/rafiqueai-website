/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // === Rafique AI Color Palette ===
        // Main Palette
        'rafique-dark': '#080A13',      // [COR-FUNDO-QUASE-PRETO] Main background
        'rafique-light': '#E1E1E6',     // [COR-PRINCIPAL-SUTIL] Main text
        'rafique-subtle': '#8D91A0',    // Secondary text and borders
        'rafique-highlight': '#00A9FF', // [COR-DESTAQUE-VIBRANTE] CTAs and main highlights

        // Product Palette
        'product-ascenda': '#33FFBB',   // [COR-PRODUTO-ASCENDA]
        'product-orkesta': '#8844FF',   // [COR-PRODUTO-ORKESTA]
        'product-cadia': '#FFD700',     // [COR-PRODUTO-CADIA]
        // ================================
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'aurora-1': 'aurora-1 20s linear infinite',
        'aurora-2': 'aurora-2 25s linear infinite',
        'aurora-3': 'aurora-3 30s linear infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'aurora-1': {
          '0%, 100%': { transform: 'translateX(-50%) translateY(-50%) rotate(0deg)' },
          '50%': { transform: 'translateX(-50%) translateY(-50%) rotate(180deg) scale(1.2)' },
        },
        'aurora-2': {
          '0%, 100%': { transform: 'translateX(-50%) translateY(-50%) rotate(0deg)' },
          '50%': { transform: 'translateX(-50%) translateY(-50%) rotate(-180deg) scale(1.1)' },
        },
        'aurora-3': {
          '0%, 100%': { transform: 'translateX(-50%) translateY(-50%) rotate(0deg) scale(1.1)' },
          '50%': { transform: 'translateX(-50%) translateY(-50%) rotate(180deg) scale(1)' },
        },
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
