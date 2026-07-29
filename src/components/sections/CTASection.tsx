'use client';

import React from 'react';
import Link from 'next/link';
import { SmoothReveal } from '@/hooks/useSmoothReveal';

export default function CTASection() {
  return (
    <section className="py-32 md:py-40 bg-gradient-to-br from-rafique-dark via-rafique-dark to-rafique-dark/95" id="fale-conosco">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SmoothReveal>
          <div className="max-w-4xl mx-auto bg-rafique-blue/10 backdrop-blur-sm border border-rafique-blue/30 rounded-2xl p-8 md:p-12 lg:p-16 text-center">
            {/* Headline */}
            <h2 className="font-manrope text-3xl md:text-4xl lg:text-5xl font-bold text-rafique-cream mb-8 text-balance">
              Pronto para transformar sua operação?
            </h2>

            {/* CTA Button */}
            <SmoothReveal delay={200}>
              <Link
                href="/contato"
                className="inline-flex items-center justify-center px-8 py-4 font-inter font-semibold text-white bg-rafique-blue rounded-lg hover:bg-rafique-blue/90 transition-all duration-300 btn-primary shadow-lg shadow-rafique-blue/20"
              >
                Fale com a Rafique AI
              </Link>
            </SmoothReveal>
          </div>
        </SmoothReveal>
      </div>
    </section>
  );
}
