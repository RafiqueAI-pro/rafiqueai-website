'use client';

import { useRef, useEffect, useState, useCallback } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';

/**
 * Wealthsimple-inspired background with smooth, performant animations
 * Features:
 * - Subtle gradient orbs that float smoothly
 * - Graph-like grid that fades in
 * - No infinite animations on large elements
 * - Respects prefers-reduced-motion
 * - Uses GPU-accelerated transforms only
 */
export default function WealthsimpleBackground() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const prefersReducedMotion = useReducedMotion();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Graph-like data points for subtle animation
  const graphPoints = useCallback(() => {
    const points = [];
    for (let i = 0; i < 20; i++) {
      points.push({
        x: 5 + (i * 4.5),
        y: 30 + Math.sin(i * 0.8) * 20 + Math.random() * 10,
        delay: i * 0.05,
      });
    }
    return points;
  }, []);

  if (!mounted) return null;

  return (
    <div
      ref={ref}
      className="absolute inset-0 overflow-hidden pointer-events-none"
      aria-hidden="true"
    >
      {/* Subtle gradient orbs - inspired by wealthsimple's soft gradients */}
      {!prefersReducedMotion && (
        <>
          <motion.div
            className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full"
            style={{
              background: 'radial-gradient(circle, rgba(51,118,225,0.08) 0%, transparent 70%)',
              willChange: 'transform',
            }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{
              duration: 1.5,
              ease: [0.22, 1, 0.36, 1], // Editorial easing
            }}
          />
          
          <motion.div
            className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] rounded-full"
            style={{
              background: 'radial-gradient(circle, rgba(162,204,243,0.06) 0%, transparent 70%)',
              willChange: 'transform',
            }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{
              duration: 1.5,
              delay: 0.2,
              ease: [0.22, 1, 0.36, 1],
            }}
          />
        </>
      )}

      {/* Graph-like grid pattern - subtle and professional */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid slice"
        style={{ opacity: prefersReducedMotion ? 0.03 : 0.05 }}
      >
        <defs>
          {/* Subtle grid pattern */}
          <pattern id="wealthsimple-grid" width="10" height="10" patternUnits="userSpaceOnUse">
            <path
              d="M 10 0 L 0 0 0 10"
              fill="none"
              stroke="rgba(162,204,243,0.3)"
              strokeWidth="0.1"
            />
          </pattern>
          
          {/* Gradient mask for fade effect */}
          <mask id="grid-fade">
            <rect width="100" height="100" fill="white" />
            <rect width="100" height="100" fill="url(#fade-gradient)" />
          </mask>
          
          <linearGradient id="fade-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="white" stopOpacity="1" />
            <stop offset="50%" stopColor="white" stopOpacity="0.5" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Base grid */}
        <motion.rect
          width="100"
          height="100"
          fill="url(#wealthsimple-grid)"
          mask="url(#grid-fade)"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.3 }}
        />

        {/* Subtle animated graph line - wealthsimple inspired */}
        {!prefersReducedMotion && (
          <motion.path
            d={`M 0,${50 + Math.sin(0) * 20} ${graphPoints().map(p => `L ${p.x},${p.y}`).join(' ')}`}
            fill="none"
            stroke="rgba(51,118,225,0.15)"
            strokeWidth="0.3"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={isInView ? { pathLength: 1, opacity: 1 } : {}}
            transition={{
              pathLength: { duration: 2, ease: [0.22, 1, 0.36, 1] },
              opacity: { duration: 0.5 }
            }}
          />
        )}
      </svg>

      {/* Gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-rafique-dark/95 via-rafique-dark/90 to-rafique-dark/95" />
    </div>
  );
}
