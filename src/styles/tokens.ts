/**
 * Rafique AI Design System - Color Tokens
 * 
 * Centralized color tokens for use in components.
 * These tokens map to the Tailwind config colors and CSS variables defined in globals.css
 */

export const colors = {
  // Rafique Palette
  rafique: {
    dark: '#2B375D',      // Azul escuro (bg primário)
    blue: '#3376E1',      // Azul vibrante (CTAs)
    light: '#A2CCF3',     // Azul claro (destaques)
    cream: '#FAF7F4',     // Off-white (textos sobre dark)
  },
  
  // Orkesta Palette
  orkesta: {
    dark1: '#1E293B',
    dark2: '#334155',
    light: '#F1F5F9',
    accent: '#8B5CF6',
  },
  
  // Cadia Palette
  cadia: {
    primary: '#F96842',
    secondary: '#FC8623',
    dark: '#303850',
    cream: '#F5E4D0',
  },
  
  // Ascenda Palette
  ascenda: {
    primary: '#27877D',
    dark: '#1E5C50',
    navy: '#263247',
    mint: '#98D6BB',
    cream: '#FBF5EA',
  },
} as const;

// Type definitions for color keys
export type RafiqueColorKey = keyof typeof colors.rafique;
export type OrkestaColorKey = keyof typeof colors.orkesta;
export type CadiaColorKey = keyof typeof colors.cadia;
export type AscendaColorKey = keyof typeof colors.ascenda;

// Helper function to get color with opacity
export const getColorWithOpacity = (color: string, opacity: number): string => {
  const opacityHex = Math.round(opacity * 255).toString(16).padStart(2, '0');
  return `${color}${opacityHex}`;
};

// Product color mapping
export const productColors = {
  ascenda: colors.ascenda,
  orkesta: colors.orkesta,
  cadia: colors.cadia,
} as const;

export type ProductName = keyof typeof productColors;
