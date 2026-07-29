'use client';

import { useEffect, useRef, useState, ReactNode } from 'react';
import { useInView } from 'framer-motion';

interface SmoothRevealOptions {
  threshold?: number;
  rootMargin?: string;
  delay?: number;
  once?: boolean;
}

interface SmoothRevealResult {
  ref: React.RefObject<HTMLDivElement | null>;
  isVisible: boolean;
}

/**
 * Optimized hook for smooth reveal animations
 * Uses framer-motion's useInView for better performance
 * Features:
 * - No continuous re-renders
 * - Respects once option to prevent re-triggering
 * - Better performance than multiple IntersectionObservers
 */
export function useSmoothReveal({
  threshold = 0.1,
  rootMargin = '0px',
  delay = 0,
  once = true,
}: SmoothRevealOptions = {}): SmoothRevealResult {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, {
    once,
    margin: rootMargin as any,
    amount: threshold,
  });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isInView && !isVisible) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, delay);
      return () => clearTimeout(timer);
    }
  }, [isInView, delay, isVisible]);

  return { ref, isVisible };
}

interface SmoothRevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  threshold?: number;
  rootMargin?: string;
  once?: boolean;
}

/**
 * Component wrapper that uses framer-motion's useInView for better performance
 * Replaces the old ScrollReveal component
 */
export function SmoothReveal({
  children,
  delay = 0,
  className = '',
  threshold,
  rootMargin,
  once = true,
}: SmoothRevealProps) {
  const { ref, isVisible } = useSmoothReveal({ threshold, rootMargin, delay, once });

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`transition-all duration-1000 ease-editorial ${
        isVisible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-6'
      } ${className}`}
    >
      {children}
    </div>
  );
}

/**
 * Hook for creating staggered animations in lists
 * Optimized to prevent unnecessary re-renders
 */
export function useStaggerReveal(itemCount: number, baseDelay = 0, staggerDelay = 100) {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  
  const getDelay = (index: number) => isInView ? baseDelay + index * staggerDelay : 0;
  
  return { ref, isVisible: isInView, getDelay };
}
