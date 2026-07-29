import React from "react";
import type { Metadata } from "next";
import FounderCard from "@/components/FounderCard";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Quem Somos - Rafique AI",
  description: "Conheça a origem da Rafique AI e os fundadores Rafael e Henrique.",
  openGraph: {
    title: "Quem Somos - Rafique AI",
    description: "Conheça a origem da Rafique AI e os fundadores Rafael e Henrique.",
    url: "https://rafiqueai.com.br/quem-somos",
  },
  twitter: {
    title: "Quem Somos - Rafique AI",
    description: "Conheça a origem da Rafique AI e os fundadores Rafael e Henrique.",
  },
};

// Dados configuráveis dos fundadores
const founders = [
  {
    name: "Rafael",
    role: "Co-fundador",
    description:
      "Visão estratégica e liderança técnica para transformar ideias em realidade.",
    initials: "R",
    links: [],
  },
  {
    name: "Henrique",
    role: "Co-fundador",
    description:
      "Foco em inovação e experiência do usuário para criar produtos excepcionais.",
    initials: "H",
    links: [],
  },
];

export default function QuemSomosPage() {
  return (
    <>
      {/* ===== 1. HERO DA PÁGINA ===== */}
      <section
        className={cn(
          "relative flex min-h-[60vh] items-center justify-center",
          "bg-rafique-dark",
          "px-6 py-24 md:py-32"
        )}
      >
        <div className="container mx-auto text-center">
          <h1
            className={cn(
              "font-manrope text-5xl font-bold md:text-6xl lg:text-7xl",
              "text-rafique-cream",
              "animate-fade-in-up"
            )}
          >
            Quem somos
          </h1>
          <p
            className={cn(
              "mt-6 font-inter text-xl md:text-2xl",
              "text-rafique-cream/80",
              "animate-fade-in-up"
            )}
            style={{ animationDelay: "100ms" }}
          >
            Duas trajetórias. Uma empresa criada para construir.
          </p>
        </div>
      </section>

      {/* ===== 2. ORIGEM DO NOME ===== */}
      <section
        className={cn(
          "bg-rafique-dark/95",
          "px-6 py-24 md:py-32"
        )}
      >
        <div className="container mx-auto max-w-4xl">
          <div
            className={cn(
              "text-center md:text-left",
              "animate-fade-in-up"
            )}
          >
            <h2
              className={cn(
                "font-manrope text-3xl font-semibold md:text-4xl",
                "text-rafique-cream",
                "mb-8"
              )}
            >
              A origem do nome
            </h2>

            <div className="space-y-6">
              <p
                className={cn(
                  "font-inter text-lg leading-relaxed",
                  "text-rafique-cream/80"
                )}
              >
                <span className="font-manrope text-rafique-blue font-semibold text-2xl">
                  Rafique
                </span>{" "}
                nasce da união de duas jornadas complementares. É a fusão de{" "}
                <strong className="text-rafique-cream">Rafael</strong> e{" "}
                <strong className="text-rafique-cream">Henrique</strong> — dois
                nomes, uma parceria, uma empresa.
              </p>

              <p
                className={cn(
                  "font-inter text-lg leading-relaxed",
                  "text-rafique-cream/80"
                )}
              >
                Mais do que uma escolha de marca, essa fusão representa o
                compromisso de construir soluções que unem diferentes
                perspectivas, experiências e talentos para criar algo maior que a
                soma das partes.
              </p>
            </div>

            {/* Elemento gráfico sutil */}
            <div className="mt-12 flex items-center justify-center md:justify-start gap-4">
              <div className="h-[2px] w-16 bg-rafique-blue/40" />
              <span className="font-manrope text-rafique-light/60 text-sm">
                Rafael + Henrique
              </span>
              <div className="h-[2px] w-16 bg-rafique-blue/40" />
            </div>
          </div>
        </div>
      </section>

      {/* ===== 3. FOUNDER CARDS ===== */}
      <section
        className={cn(
          "bg-rafique-dark",
          "px-6 py-24 md:py-32"
        )}
      >
        <div className="container mx-auto max-w-6xl">
          <h2
            className={cn(
              "font-manrope text-3xl font-semibold md:text-4xl",
              "text-rafique-cream",
              "text-center mb-16",
              "animate-fade-in-up"
            )}
          >
            Nossos fundadores
          </h2>

          <div
            className={cn(
              "grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-10",
              "animate-fade-in-up"
            )}
            style={{ animationDelay: "100ms" }}
          >
            {founders.map((founder, index) => (
              <FounderCard
                key={founder.name}
                name={founder.name}
                role={founder.role}
                description={founder.description}
                initials={founder.initials}
                links={founder.links}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ===== 4. CTA DE TRANSIÇÃO ===== */}
      <section
        className={cn(
          "bg-rafique-dark/95",
          "px-6 py-24 md:py-32"
        )}
      >
        <div className="container mx-auto max-w-4xl text-center">
          <h2
            className={cn(
              "font-manrope text-3xl font-semibold md:text-4xl",
              "text-rafique-cream",
              "mb-6",
              "animate-fade-in-up"
            )}
          >
            Quer construir com a gente?
          </h2>

          <p
            className={cn(
              "font-inter text-lg",
              "text-rafique-cream/70",
              "mb-10",
              "animate-fade-in-up"
            )}
            style={{ animationDelay: "100ms" }}
          >
            Estamos prontos para transformar suas ideias em realidade.
          </p>

          <a
            href="#"
            className={cn(
              "inline-flex font-manrope text-base font-medium",
              "px-8 py-4 rounded-full",
              "bg-rafique-blue text-rafique-cream",
              "transition-all duration-300 ease-editorial",
              "hover:bg-rafique-blue/90 hover:scale-105",
              "focus:outline-none focus:ring-2 focus:ring-rafique-blue focus:ring-offset-2 focus:ring-offset-rafique-dark",
              "animate-fade-in-up"
            )}
            style={{ animationDelay: "200ms" }}
            aria-label="Fale com a Rafique AI (link temporário)"
          >
            Fale com a Rafique AI
          </a>
        </div>
      </section>
    </>
  );
}
