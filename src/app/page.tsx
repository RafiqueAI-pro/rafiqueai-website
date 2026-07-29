'use client'; // Necessário para usar hooks de animação no futuro (ex: para scroll)

import React from 'react';
import ProductCard from '@/components/ProductCard';
import AscendaIcon from '@/components/AscendaIcon';
import OrkestaIcon from '@/components/OrkestaIcon';
import CadiaIcon from '@/components/CadiaIcon';

export default function HomePage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      {/* ===== 1. SEÇÃO HERO ===== */}
      <section className="text-center h-[80vh] flex flex-col justify-center items-center relative">
        <div className="opacity-0 animate-fade-in-up [animation-delay:0.1s]">
          <h1 className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-rafique-subtle">
            Inteligência que
          </h1>
          <h1 className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-rafique-subtle">
            Transforma a Realidade.
          </h1>
        </div>
        <p className="mt-6 max-w-2xl mx-auto text-lg text-rafique-subtle opacity-0 animate-fade-in-up [animation-delay:0.3s]">
          A Rafique AI cria a infraestrutura de inteligência artificial que capacita as empresas do futuro. Confiável, escalável e fundamental.
        </p>
        <div className="mt-10 opacity-0 animate-fade-in-up [animation-delay:0.5s]">
          <a
            href="/#produtos"
            className="px-8 py-3 font-semibold text-white bg-rafique-highlight rounded-full shadow-[0_0_20px] shadow-rafique-highlight/30 hover:scale-105 transition-transform"
          >
            Descubra Nossas Soluções
          </a>
        </div>
        {/* Placeholder para o objeto 3D interativo */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 -z-10 opacity-20">
            {/* Seu componente 3D (ex: React Three Fiber) iria aqui */}
            <div className="w-full h-full bg-rafique-highlight rounded-full blur-3xl"></div>
        </div>
      </section>

      {/* ===== 2. SEÇÃO PRODUTOS ===== */}
      <section id="produtos" className="pt-20">
        <h2 className="text-center text-4xl font-bold text-white mb-12">Nossas Soluções de IA</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProductCard
            title="Ascenda"
            description="Escale suas operações de IA com performance e otimização incomparáveis."
            icon={<AscendaIcon />}
            glowColorClass="group-hover:shadow-product-ascenda/30"
            href="/produtos/ascenda"
          />
          <ProductCard
            title="Orkesta"
            description="Orquestre fluxos de trabalho complexos e automatize suas pipelines de IA."
            icon={<OrkestaIcon />}
            glowColorClass="group-hover:shadow-product-orkesta/30"
            href="/produtos/orkesta"
          />
          <ProductCard
            title="Cadia"
            description="Extraia insights valiosos com análise de dados rítmica e previsível."
            icon={<CadiaIcon />}
            glowColorClass="group-hover:shadow-product-cadia/30"
            href="/produtos/cadia"
          />
        </div>
      </section>

      {/* ===== 3. SEÇÃO TECNOLOGIA (ESTÁTICA) ===== */}
      {/* NOTA: A animação de scroll-triggering requer uma biblioteca como Framer Motion ou GSAP.
          Esta é uma representação visual estática do conceito. */}
      <section id="tecnologia" className="pt-32 text-center">
         <h2 className="text-center text-4xl font-bold text-white mb-4">Tecnologia Fluida e Integrada</h2>
         <p className="max-w-3xl mx-auto text-rafique-subtle mb-16">
            Nossas soluções trabalham em harmonia para transformar dados brutos em resultados inteligentes, de forma orquestrada e escalável.
         </p>
         <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
            <div className="p-4 border border-white/10 rounded-lg text-center">
                <p className="font-bold text-white">Dados Brutos</p>
                <p className="text-sm text-rafique-subtle">Entrada</p>
            </div>
            <div className="text-2xl text-product-orkesta">&rarr;</div>
            <div className="p-4 border border-product-orkesta/50 rounded-lg bg-product-orkesta/10 text-center">
                <p className="font-bold text-product-orkesta">Orkesta</p>
                <p className="text-sm text-rafique-subtle">Organiza & Conecta</p>
            </div>
             <div className="text-2xl text-product-cadia">&rarr;</div>
            <div className="p-4 border border-product-cadia/50 rounded-lg bg-product-cadia/10 text-center">
                <p className="font-bold text-product-cadia">Cadia</p>
                <p className="text-sm text-rafique-subtle">Analisa & Processa</p>
            </div>
             <div className="text-2xl text-product-ascenda">&rarr;</div>
             <div className="p-4 border border-product-ascenda/50 rounded-lg bg-product-ascenda/10 text-center">
                <p className="font-bold text-product-ascenda">Ascenda</p>
                <p className="text-sm text-rafique-subtle">Escala & Entrega</p>
            </div>
         </div>
      </section>
      
      {/* ===== 4. SEÇÃO SOBRE/MANIFESTO ===== */}
      <section id="sobre" className="pt-32 max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-8">Nossa Missão</h2>
          <p className="text-2xl leading-relaxed text-rafique-light">
              "Acreditamos que a inteligência artificial não deve ser uma caixa preta complexa, mas uma força fundamental e acessível que impulsiona o progresso humano. Construímos a base para que qualquer empresa possa inovar com confiança e escala."
          </p>
      </section>
    </div>
  );
}
