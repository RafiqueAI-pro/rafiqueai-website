'use client';

import React from 'react';
import Link from 'next/link';
import { SmoothReveal } from '@/hooks/useSmoothReveal';

export default function AboutCallSection() {
  return (
    <section className="py-32 md:py-40 bg-rafique-dark" id="quem-somos">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SmoothReveal>
          <div className="max-w-3xl mx-auto text-center">
            {/* Headline */}
            <h2 className="font-manrope text-3xl md:text-4xl lg:text-5xl font-bold text-rafique-cream mb-8 text-balance">
              Conheça quem está por trás da tecnologia
            </h2>

            {/* Description */}
            <p className="font-inter text-lg text-rafique-cream/80 mb-12 leading-relaxed text-balance">
              Somos uma equipe apaixonada por resolver problemas reais através da tecnologia.
              Nossa abordagem é prática, direta e focada em resultados que fazem sentido para o seu negócio.
            </p>

            {/* CTA Button */}
            <SmoothReveal delay={200}>
              <Link
                href="/sobre"
                className="inline-flex items-center gap-3 px-8 py-4 font-inter font-semibold text-rafique-cream border border-rafique-blue/30 rounded-lg hover:bg-rafique-blue/10 hover:border-rafique-blue/50 transition-all duration-300 btn-secondary"
              >
                Quem somos
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.5 15L12.5 10L7.5 5"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </SmoothReveal>
          </div>
        </SmoothReveal>
      </div>
    </section>
  );
}
