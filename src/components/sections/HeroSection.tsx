'use client';

import React from 'react';
import Link from 'next/link';
import WealthsimpleBackground from '@/components/hero/WealthsimpleBackground';
import { useSmoothReveal } from '@/hooks/useSmoothReveal';

export default function HeroSection() {
  const { ref: eyebrowRef, isVisible: eyebrowVisible } = useSmoothReveal({ delay: 0 });
  const { ref: headlineRef, isVisible: headlineVisible } = useSmoothReveal({ delay: 150 });
  const { ref: descriptionRef, isVisible: descriptionVisible } = useSmoothReveal({ delay: 300 });
  const { ref: ctaRef, isVisible: ctaVisible } = useSmoothReveal({ delay: 450 });

  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 py-32 bg-gradient-to-br from-rafique-dark via-rafique-dark to-rafique-dark/95 overflow-hidden">
      {/* Wealthsimple-inspired background with smooth animations */}
      <WealthsimpleBackground />
      
      {/* Content with z-index to appear above background */}
      <div className="relative z-10 container mx-auto text-center max-w-5xl">
        {/* Eyebrow */}
        <div ref={eyebrowRef as React.RefObject<HTMLDivElement>}>
          <div className={`mb-8 transition-all duration-1000 ease-editorial ${
            eyebrowVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-4'
          }`}>
            <span className="font-manrope text-sm md:text-base uppercase tracking-[0.2em] text-rafique-light/70">
              Produtos Digitais · Automação · Tecnologia
            </span>
          </div>
        </div>

        {/* Headline */}
        <div ref={headlineRef as React.RefObject<HTMLDivElement>}>
          <h1 className={`font-manrope text-5xl md:text-7xl font-extrabold text-rafique-cream mb-8 text-balance transition-all duration-1000 ease-editorial ${
            headlineVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-6'
          }`}>
            Tecnologia que nasce de problemas reais.
          </h1>
        </div>

        {/* Description */}
        <div ref={descriptionRef as React.RefObject<HTMLDivElement>}>
          <p className={`font-inter text-lg md:text-xl text-rafique-cream/80 max-w-3xl mx-auto mb-12 text-balance transition-all duration-1000 ease-editorial ${
            descriptionVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-6'
          }`}>
            Desenvolvemos produtos digitais, automações e soluções inteligentes para simplificar processos, criar novas experiências e transformar boas ideias em operações reais.
          </p>
        </div>

        {/* CTAs */}
        <div ref={ctaRef as React.RefObject<HTMLDivElement>}>
          <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center transition-all duration-1000 ease-editorial ${
            ctaVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-6'
          }`}>
            <Link
              href="/#solucoes"
              className="px-8 py-4 font-inter font-semibold text-white bg-rafique-blue rounded-lg hover:bg-rafique-blue/90 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-rafique-dark btn-primary"
            >
              Conheça nossas soluções
            </Link>
            <Link
              href="/#fale-conosco"
              className="px-8 py-4 font-inter font-semibold text-rafique-cream border border-rafique-light/30 rounded-lg hover:bg-rafique-light/10 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-rafique-light focus-visible:ring-offset-2 focus-visible:ring-offset-rafique-dark btn-secondary"
            >
              Fale com a Rafique AI
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
