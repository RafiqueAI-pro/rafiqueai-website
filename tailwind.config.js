/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // === Rafique AI Design System ===
        rafique: {
          dark: '#2B375D',      // Azul escuro (bg primário)
          blue: '#3376E1',      // Azul vibrante (CTAs)
          light: '#A2CCF3',     // Azul claro (destaques)
          cream: '#FAF7F4',     // Off-white (textos sobre dark)
        },
        orkesta: {
          dark1: '#1E293B',
          dark2: '#334155',
          light: '#F1F5F9',
          accent: '#8B5CF6',
        },
        cadia: {
          primary: '#F96842',
          secondary: '#FC8623',
          dark: '#303850',
          cream: '#F5E4D0',
        },
        ascenda: {
          primary: '#27877D',
          dark: '#1E5C50',
          navy: '#263247',
          mint: '#98D6BB',
          cream: '#FBF5EA',
        },
        // ================================
      },
      fontFamily: {
        'manrope': ['Manrope', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
      },
      transitionTimingFunction: {
        'editorial': 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
      boxShadow: {
        '3d': '0 20px 60px -15px rgba(51, 118, 225, 0.15), 0 10px 30px -10px rgba(51, 118, 225, 0.1)',
        '3d-sm': '0 10px 30px -10px rgba(51, 118, 225, 0.1)',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
