'use client';

import { useEffect, useRef, useState, ReactNode } from 'react';

interface ScrollRevealOptions {
  threshold?: number;
  rootMargin?: string;
}

interface ScrollRevealResult {
  ref: React.RefObject<HTMLDivElement | null>;
  isVisible: boolean;
}

/**
 * Hook para detectar quando um elemento entra na viewport usando IntersectionObserver
 * @param options - Opções para o IntersectionObserver
 * @returns Objeto com ref e isVisible
 */
export function useScrollReveal(options?: ScrollRevealOptions): ScrollRevealResult {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: options?.threshold ?? 0.1,
        rootMargin: options?.rootMargin ?? '0px',
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [options?.threshold, options?.rootMargin]);

  return { ref, isVisible };
}

interface ScrollRevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  threshold?: number;
  rootMargin?: string;
}

/**
 * Componente wrapper que aplica animação de scroll reveal
 * Usa classes do Tailwind para transição suave
 */
export function ScrollReveal({
  children,
  delay = 0,
  className = '',
  threshold,
  rootMargin,
}: ScrollRevealProps) {
  const { ref, isVisible } = useScrollReveal({ threshold, rootMargin });

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`transition-all duration-700 ease-editorial ${
        isVisible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-8'
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

/**
 * Hook para criar efeito de stagger em múltiplos elementos
 * Útil para animar listas ou grids com delay escalonado
 */
export function useStaggerReveal(itemCount: number, baseDelay = 0, staggerDelay = 100) {
  const { ref, isVisible } = useScrollReveal();
  
  const getDelay = (index: number) => isVisible ? baseDelay + index * staggerDelay : 0;
  
  return { ref, isVisible, getDelay };
}
