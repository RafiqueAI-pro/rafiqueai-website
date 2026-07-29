'use client';

import { motion } from 'framer-motion';

interface GeometricDecorationProps {
  size?: 'sm' | 'md' | 'lg';
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'center';
  color?: 'rafique-blue' | 'rafique-light' | 'rafique-cream';
  className?: string;
}

const colorClasses = {
  'rafique-blue': 'text-rafique-blue',
  'rafique-light': 'text-rafique-light',
  'rafique-cream': 'text-rafique-cream',
};

export default function GeometricDecoration({
  size = 'md',
  position = 'center',
  color = 'rafique-blue',
  className = ''
}: GeometricDecorationProps) {
  const sizes = {
    sm: 200,
    md: 400,
    lg: 600,
  };
  
  const positions = {
    'top-left': '-top-20 -left-20',
    'top-right': '-top-20 -right-20',
    'bottom-left': '-bottom-20 -left-20',
    'bottom-right': '-bottom-20 -right-20',
    'center': 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2',
  };
  
  const svgSize = sizes[size];
  const colorClass = colorClasses[color];
  
  return (
    <div className={`absolute ${positions[position]} pointer-events-none z-0 ${className}`}>
      {/* Removed infinite animation - now static for better performance */}
      <svg
        width={svgSize}
        height={svgSize}
        viewBox={`0 0 ${svgSize} ${svgSize}`}
        fill="none"
        className="opacity-[0.04]"
      >
        <circle
          cx={svgSize / 2}
          cy={svgSize / 2}
          r={svgSize * 0.45}
          stroke="currentColor"
          strokeWidth="0.5"
          className={colorClass}
        />
        <circle
          cx={svgSize / 2}
          cy={svgSize / 2}
          r={svgSize * 0.35}
          stroke="currentColor"
          strokeWidth="0.5"
          className={colorClass}
        />
        <circle
          cx={svgSize / 2}
          cy={svgSize / 2}
          r={svgSize * 0.25}
          stroke="currentColor"
          strokeWidth="0.5"
          className={colorClass}
        />
        {/* Vértices */}
        <circle cx={svgSize / 2} cy={svgSize * 0.05} r="3" fill="currentColor" className={`${colorClass}/20`} />
        <circle cx={svgSize * 0.95} cy={svgSize / 2} r="3" fill="currentColor" className={`${colorClass}/20`} />
        <circle cx={svgSize / 2} cy={svgSize * 0.95} r="3" fill="currentColor" className={`${colorClass}/20`} />
        <circle cx={svgSize * 0.05} cy={svgSize / 2} r="3" fill="currentColor" className={`${colorClass}/20`} />
      </svg>
    </div>
  );
}
