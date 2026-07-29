'use client';

import React from 'react';
import { SmoothReveal } from '@/hooks/useSmoothReveal';

const positioningItems = [
  {
    id: 1,
    title: 'Produtos Digitais',
    description: 'Criamos interfaces e experiências que resolvem problemas reais com design centrado no usuário e tecnologia moderna.',
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="8" y="8" width="32" height="32" rx="4" stroke="currentColor" strokeWidth="2" fill="none"/>
        <rect x="14" y="14" width="20" height="20" rx="2" stroke="currentColor" strokeWidth="2" fill="none"/>
        <rect x="20" y="20" width="8" height="8" rx="1" fill="currentColor" opacity="0.3"/>
      </svg>
    ),
  },
  {
    id: 2,
    title: 'Automação',
    description: 'Eliminamos tarefas repetitivas e conectamos sistemas para que sua operação ganhe escala e eficiência.',
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 24H32" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M24 16V32" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="16" cy="24" r="4" stroke="currentColor" strokeWidth="2" fill="none"/>
        <circle cx="32" cy="24" r="4" stroke="currentColor" strokeWidth="2" fill="none"/>
        <path d="M20 16L28 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M20 32L28 32" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    id: 3,
    title: 'Tecnologia Personalizada',
    description: 'Desenvolvemos soluções sob medida que se adaptam ao seu negócio, integrando sistemas e criando novas possibilidades.',
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M24 12V36" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M18 18L24 12L30 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M18 30L24 36L30 30" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="24" cy="24" r="8" stroke="currentColor" strokeWidth="2" fill="none"/>
        <path d="M12 24H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M32 24H36" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
];

export default function PositioningSection() {
  return (
    <section className="py-32 md:py-40 bg-rafique-dark/95" id="posicionamento">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Headline */}
        <SmoothReveal>
          <div className="text-center mb-16 md:mb-20">
            <h2 className="font-manrope text-4xl md:text-5xl font-bold text-rafique-cream text-balance">
              O que fazemos
            </h2>
          </div>
        </SmoothReveal>

        {/* Editorial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
          {positioningItems.map((item, index) => (
            <SmoothReveal key={item.id} delay={index * 150}>
              <article
                className="group bg-rafique-dark/50 backdrop-blur-sm border border-rafique-light/10 rounded-2xl p-8 md:p-10 transition-all duration-300 hover:border-rafique-light/20 hover:bg-rafique-dark/70 card-hover"
              >
              {/* Icon */}
              <div className="mb-6 text-rafique-light/60 group-hover:text-rafique-light transition-colors duration-300">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="font-manrope text-2xl font-bold text-rafique-cream mb-4">
                {item.title}
              </h3>

              {/* Description */}
              <p className="font-inter text-base text-rafique-cream/80 leading-relaxed max-w-3xl">
                {item.description}
              </p>
              </article>
            </SmoothReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
