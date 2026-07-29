'use client';

import { motion } from 'framer-motion';

interface LoadingDotsProps {
  color?: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const sizeMap = {
  sm: 'w-1.5 h-1.5',
  md: 'w-2 h-2',
  lg: 'w-3 h-3',
};

/**
 * Componente de loading com 3 pontos pulsando
 * Segue o estilo "Clean Tech Motion" (Stripe/Apple)
 * Cores padrão: rafique-blue
 * Animação respeita prefers-reduced-motion
 */
export default function LoadingDots({
  color = 'var(--color-rafique-blue)',
  size = 'md',
  className = '',
}: LoadingDotsProps) {
  return (
    <div className={`flex items-center gap-1 ${className}`} role="status" aria-label="Carregando">
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className={`${sizeMap[size]} rounded-full`}
          style={{ backgroundColor: color }}
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{
            duration: 1.2,
            repeat: Infinity,
            delay: i * 0.2,
            ease: [0.22, 1, 0.36, 1], // cubic-bezier equivalent
          }}
        />
      ))}
      <span className="sr-only">Carregando...</span>
    </div>
  );
}
