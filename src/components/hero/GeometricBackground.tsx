'use client';

import { useRef, useEffect, useState } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';

export default function GeometricBackground() {
  const ref = useRef<HTMLDivElement>(null);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  
  // Check for prefers-reduced-motion on mount
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    
    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };
    
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  
  // Parallax effect: 12px movement on scroll (disabled if prefers-reduced-motion)
  const y = useTransform(scrollYProgress, [0, 1], prefersReducedMotion ? [0, 0] : [0, 12]);

  return (
    <motion.div
      ref={ref}
      className="absolute inset-0 overflow-hidden pointer-events-none"
      style={{ y }}
      aria-hidden="true"
    >
      {/* 3D Grid Pattern with very low opacity */}
      <svg
        className="absolute inset-0 w-full h-full text-rafique-blue/5"
        viewBox="0 0 1000 1000"
        fill="none"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          {/* Grid pattern for 3D wireframe effect */}
          <pattern id="grid-3d" width="60" height="60" patternUnits="userSpaceOnUse">
            <path
              d="M 60 0 L 0 0 0 60"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
            />
          </pattern>
          
          {/* Perspective lines for 3D effect */}
          <pattern id="perspective-lines" width="200" height="200" patternUnits="userSpaceOnUse">
            <line
              x1="0" y1="0" x2="200" y2="200"
              stroke="currentColor"
              strokeWidth="0.3"
              opacity="0.5"
            />
            <line
              x1="200" y1="0" x2="0" y2="200"
              stroke="currentColor"
              strokeWidth="0.3"
              opacity="0.5"
            />
          </pattern>
        </defs>
        
        {/* Base grid */}
        <rect width="100%" height="100%" fill="url(#grid-3d)" />
        
        {/* Subtle perspective overlay */}
        <rect width="100%" height="100%" fill="url(#perspective-lines)" opacity="0.3" />
      </svg>
      
      {/* Gradient overlay to fade edges */}
      <div className="absolute inset-0 bg-gradient-to-br from-rafique-dark via-transparent to-rafique-dark/20" />
    </motion.div>
  );
}
