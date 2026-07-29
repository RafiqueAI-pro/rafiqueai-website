'use client';

import React from 'react';
import Link from 'next/link';
import OrkestaIcon from '@/components/icons/OrkestaIcon';
import CadiaIcon from '@/components/icons/CadiaIcon';
import AscendaIcon from '@/components/icons/AscendaIcon';
import { SmoothReveal } from '@/hooks/useSmoothReveal';

const products = [
  {
    id: 'orkesta',
    title: 'Orkesta',
    description: 'Orquestre fluxos de trabalho complexos e automatize suas pipelines com inteligência e precisão.',
    icon: <OrkestaIcon className="w-16 h-16" />,
    accentColor: '#8B5CF6',
    borderColor: 'border-[#8B5CF6]/30',
    hoverBorderColor: 'hover:border-[#8B5CF6]/50',
    textColor: 'text-[#8B5CF6]',
    bgHover: 'hover:bg-[#8B5CF6]/5',
    href: '/produtos/orkesta',
  },
  {
    id: 'cadia',
    title: 'Cadia',
    description: 'Extraia insights valiosos com análise de dados rítmica e previsível para sua operação.',
    icon: <CadiaIcon className="w-16 h-16" />,
    accentColor: '#F96842',
    borderColor: 'border-[#F96842]/30',
    hoverBorderColor: 'hover:border-[#F96842]/50',
    textColor: 'text-[#F96842]',
    bgHover: 'hover:bg-[#F96842]/5',
    href: '/produtos/cadia',
  },
  {
    id: 'ascenda',
    title: 'Ascenda',
    description: 'Escale suas operações com performance e otimização incomparáveis para o próximo nível.',
    icon: <AscendaIcon className="w-16 h-16" />,
    accentColor: '#27877D',
    borderColor: 'border-[#27877D]/30',
    hoverBorderColor: 'hover:border-[#27877D]/50',
    textColor: 'text-[#27877D]',
    bgHover: 'hover:bg-[#27877D]/5',
    href: '/produtos/ascenda',
  },
];

export default function ProductsSection() {
  return (
    <section className="py-32 md:py-40 bg-rafique-dark" id="solucoes">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Headline */}
        <SmoothReveal>
          <div className="text-center mb-16 md:mb-20">
            <h2 className="font-manrope text-4xl md:text-5xl font-bold text-rafique-cream text-balance">
              Nossas Soluções
            </h2>
          </div>
        </SmoothReveal>

        {/* Independent Product Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6" role="list">
          {products.map((product, index) => (
            <SmoothReveal key={product.id} delay={index * 150}>
              <article
                className={`group bg-rafique-dark/50 backdrop-blur-sm border ${product.borderColor} ${product.hoverBorderColor} ${product.bgHover} rounded-2xl p-8 md:p-10 transition-all duration-300 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-rafique-blue card-hover`}
                role="listitem"
                tabIndex={0}
              >
              {/* Icon */}
              <div className="mb-6 transition-transform duration-300 group-hover:scale-105">
                {product.icon}
              </div>

              {/* Title */}
              <h3 className={`font-manrope text-2xl font-bold text-rafique-cream mb-4`}>
                {product.title}
              </h3>

              {/* Description */}
              <p className="font-inter text-rafique-cream/80 mb-8 leading-relaxed text-balance">
                {product.description}
              </p>

              {/* Link */}
              <Link
                href={product.href}
                className="inline-flex items-center gap-2 font-inter font-semibold text-rafique-cream/90 hover:text-rafique-cream transition-colors group/link"
                aria-label={`Saiba mais sobre ${product.title}`}
              >
                Saiba mais
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="transition-transform duration-300 group-hover/link:translate-x-1"
                >
                  <path
                    d="M6 12L10 8L6 4"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </article>
            </SmoothReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
