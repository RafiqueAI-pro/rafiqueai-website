'use client';

import React from 'react';
import { SmoothReveal } from '@/hooks/useSmoothReveal';

const processSteps = [
  {
    id: 1,
    number: '01',
    title: 'Diagnóstico',
    description: 'Entendemos seus desafios, mapeamos processos e identificamos oportunidades reais de melhoria.',
  },
  {
    id: 2,
    number: '02',
    title: 'Design & Prototipação',
    description: 'Criamos interfaces e fluxos centrados no usuário, validando soluções antes do desenvolvimento.',
  },
  {
    id: 3,
    number: '03',
    title: 'Desenvolvimento',
    description: 'Implementamos com tecnologias modernas, garantindo performance, segurança e escalabilidade.',
  },
  {
    id: 4,
    number: '04',
    title: 'Evolução',
    description: 'Acompanhamos métricas, iteramos continuamente e evoluímos a solução junto com seu negócio.',
  },
];

export default function ProcessSection() {
  return (
    <section className="py-32 md:py-40 bg-rafique-dark/95" id="processo">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Headline */}
        <SmoothReveal>
          <div className="text-center mb-16 md:mb-20">
            <h2 className="font-manrope text-4xl md:text-5xl font-bold text-rafique-cream text-balance">
              Como construímos
            </h2>
          </div>
        </SmoothReveal>

        {/* Process Steps - Horizontal on desktop, vertical on mobile */}
        <div className="relative">
          {/* Connector Line (visible only on desktop) */}
          <div className="hidden md:block absolute top-24 left-0 right-0 h-[2px] bg-rafique-light/10 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 relative z-10">
            {processSteps.map((step, index) => (
              <SmoothReveal key={step.id} delay={index * 150}>
                <div className="group flex flex-col items-center text-center card-hover">
                  {/* Large Number */}
                  <div className="mb-6">
                    <span className="font-manrope text-6xl md:text-7xl font-extrabold text-rafique-light/20 group-hover:text-rafique-light/40 transition-colors duration-300">
                      {step.number}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-manrope text-xl md:text-2xl font-bold text-rafique-cream mb-4">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="font-inter text-base text-rafique-cream/80 leading-relaxed max-w-3xl">
                    {step.description}
                  </p>
                </div>
              </SmoothReveal>
            ))}
          </div>
        </div>

        {/* Link to About page */}
        <SmoothReveal delay={600}>
          <div className="text-center mt-16 md:mt-20">
            <a
              href="/sobre"
              className="inline-flex items-center gap-2 font-inter font-medium text-rafique-blue hover:text-rafique-blue/80 transition-colors duration-300 link-slide"
            >
              Conheça nossa história
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 12L10 8L6 4"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
        </SmoothReveal>
      </div>
    </section>
  );
}
