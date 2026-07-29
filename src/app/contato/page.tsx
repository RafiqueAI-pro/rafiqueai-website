import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Contato - Rafique AI",
  description: "Vamos conversar sobre seu projeto. Entre em contato com a Rafique AI.",
  openGraph: {
    title: "Contato - Rafique AI",
    description: "Vamos conversar sobre seu projeto. Entre em contato com a Rafique AI.",
    url: "https://rafiqueai.com.br/contato",
  },
  twitter: {
    title: "Contato - Rafique AI",
    description: "Vamos conversar sobre seu projeto. Entre em contato com a Rafique AI.",
  },
};

export default function ContatoPage() {
  return (
    <>
      {/* ===== 1. HERO ===== */}
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
            Contato
          </h1>
          <p
            className={cn(
              "mt-6 font-inter text-xl md:text-2xl",
              "text-rafique-cream/80",
              "animate-fade-in-up"
            )}
            style={{ animationDelay: "100ms" }}
          >
            Vamos conversar sobre seu projeto.
          </p>
        </div>
      </section>

      {/* ===== 2. INFORMAÇÕES DE CONTATO ===== */}
      <section
        className={cn(
          "bg-rafique-dark/95",
          "px-6 py-24 md:py-32"
        )}
      >
        <div className="container mx-auto max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Email */}
            <div
              className={cn(
                "animate-fade-in-up"
              )}
            >
              <h2
                className={cn(
                  "font-manrope text-2xl font-semibold",
                  "text-rafique-cream",
                  "mb-6"
                )}
              >
                Informações de Contato
              </h2>

              <div className="space-y-6">
                <div>
                  <h3 className={cn("font-manrope text-sm font-semibold uppercase tracking-wider", "text-rafique-light/80", "mb-2")}>
                    Email
                  </h3>
                  <a
                    href="mailto:contato@rafiqueai.com"
                    className={cn("font-inter text-lg", "text-rafique-cream hover:text-rafique-blue transition-colors")}
                  >
                    contato@rafiqueai.com
                  </a>
                </div>

                <div>
                  <h3 className={cn("font-manrope text-sm font-semibold uppercase tracking-wider", "text-rafique-light/80", "mb-2")}>
                    WhatsApp
                  </h3>
                  <p className={cn("font-inter text-lg", "text-rafique-cream/70")}>
                    Disponível em breve
                  </p>
                </div>

                <div>
                  <h3 className={cn("font-manrope text-sm font-semibold uppercase tracking-wider", "text-rafique-light/80", "mb-2")}>
                    Localização
                  </h3>
                  <p className={cn("font-inter text-lg", "text-rafique-cream/70")}>
                    Remoto - Brasil
                  </p>
                </div>

                <div>
                  <h3 className={cn("font-manrope text-sm font-semibold uppercase tracking-wider", "text-rafique-light/80", "mb-2")}>
                    Horário de Atendimento
                  </h3>
                  <p className={cn("font-inter text-lg", "text-rafique-cream/70")}>
                    Segunda a Sexta, 9h às 18h
                  </p>
                </div>
              </div>
            </div>

            {/* ===== 3. FORMULÁRIO VISUAL ===== */}
            <div
              className={cn(
                "animate-fade-in-up"
              )}
              style={{ animationDelay: "100ms" }}
            >
              <div
                className={cn(
                  "bg-rafique-dark/50",
                  "border border-rafique-light/10",
                  "rounded-lg p-8"
                )}
              >
                <h3
                  className={cn(
                    "font-manrope text-xl font-semibold",
                    "text-rafique-cream",
                    "mb-6"
                  )}
                >
                  Envie uma mensagem
                </h3>

                <form className="space-y-6" aria-label="Formulário de contato">
                  {/* Nome */}
                  <div>
                    <label
                      htmlFor="nome"
                      className={cn("block font-inter text-sm", "text-rafique-cream/80", "mb-2")}
                    >
                      Nome <span className="text-rafique-blue" aria-hidden="true">*</span>
                    </label>
                    <input
                      type="text"
                      id="nome"
                      name="nome"
                      placeholder="Seu nome completo"
                      required
                      aria-required="true"
                      className={cn(
                        "w-full px-4 py-3",
                        "bg-rafique-dark/80",
                        "border border-rafique-light/10",
                        "rounded-md",
                        "text-rafique-cream",
                        "font-inter text-base",
                        "placeholder:text-rafique-cream/40",
                        "focus:outline-none focus:border-rafique-blue focus:ring-2 focus:ring-rafique-blue/50",
                        "transition-colors",
                        "focus:ring-offset-2"
                      )}
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className={cn("block font-inter text-sm", "text-rafique-cream/80", "mb-2")}
                    >
                      Email <span className="text-rafique-blue" aria-hidden="true">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="seu@email.com"
                      required
                      aria-required="true"
                      className={cn(
                        "w-full px-4 py-3",
                        "bg-rafique-dark/80",
                        "border border-rafique-light/10",
                        "rounded-md",
                        "text-rafique-cream",
                        "font-inter text-base",
                        "placeholder:text-rafique-cream/40",
                        "focus:outline-none focus:border-rafique-blue focus:ring-2 focus:ring-rafique-blue/50",
                        "transition-colors",
                        "focus:ring-offset-2"
                      )}
                    />
                  </div>

                  {/* Empresa */}
                  <div>
                    <label
                      htmlFor="empresa"
                      className={cn("block font-inter text-sm", "text-rafique-cream/80", "mb-2")}
                    >
                      Empresa (opcional)
                    </label>
                    <input
                      type="text"
                      id="empresa"
                      name="empresa"
                      placeholder="Nome da sua empresa"
                      className={cn(
                        "w-full px-4 py-3",
                        "bg-rafique-dark/80",
                        "border border-rafique-light/10",
                        "rounded-md",
                        "text-rafique-cream",
                        "font-inter text-base",
                        "placeholder:text-rafique-cream/40",
                        "focus:outline-none focus:border-rafique-blue focus:ring-2 focus:ring-rafique-blue/50",
                        "transition-colors"
                      )}
                    />
                  </div>

                  {/* Mensagem */}
                  <div>
                    <label
                      htmlFor="mensagem"
                      className={cn("block font-inter text-sm", "text-rafique-cream/80", "mb-2")}
                    >
                      Mensagem <span className="text-rafique-blue" aria-hidden="true">*</span>
                    </label>
                    <textarea
                      id="mensagem"
                      name="mensagem"
                      rows={5}
                      placeholder="Conte-nos sobre seu projeto..."
                      required
                      aria-required="true"
                      className={cn(
                        "w-full px-4 py-3",
                        "bg-rafique-dark/80",
                        "border border-rafique-light/10",
                        "rounded-md",
                        "text-rafique-cream",
                        "font-inter text-base",
                        "placeholder:text-rafique-cream/40",
                        "focus:outline-none focus:border-rafique-blue focus:ring-2 focus:ring-rafique-blue/50",
                        "transition-colors",
                        "resize-none",
                        "focus:ring-offset-2"
                      )}
                    />
                  </div>

                  {/* Botão */}
                  <button
                    type="submit"
                    disabled
                    aria-disabled="true"
                    className={cn(
                      "w-full px-6 py-3",
                      "bg-rafique-blue/50",
                      "text-rafique-cream/70",
                      "font-manrope font-semibold text-base",
                      "rounded-md",
                      "cursor-not-allowed",
                      "transition-colors",
                      "focus:outline-none focus-visible:ring-2 focus-visible:ring-rafique-blue focus-visible:ring-offset-2"
                    )}
                  >
                    Enviar mensagem (Em breve)
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== 4. CTA PARA PRODUTOS ===== */}
      <section
        className={cn(
          "bg-rafique-dark",
          "px-6 py-24 md:py-32"
        )}
      >
        <div className="container mx-auto max-w-4xl text-center">
          <h2
            className={cn(
              "font-manrope text-3xl font-semibold md:text-4xl",
              "text-rafique-cream",
              "mb-12",
              "animate-fade-in-up"
            )}
          >
            Conheça nossas soluções
          </h2>

          <div
            className={cn(
              "grid grid-cols-1 md:grid-cols-3 gap-8",
              "animate-fade-in-up"
            )}
            style={{ animationDelay: "100ms" }}
          >
            {/* Orkesta */}
            <Link
              href="/produtos/orkesta"
              className={cn(
                "group",
                "bg-rafique-dark/50",
                "border border-rafique-light/10",
                "rounded-lg p-8",
                "hover:border-rafique-blue/50 transition-colors",
                "flex flex-col items-center gap-4"
              )}
            >
              <div className="relative w-16 h-16">
                <Image
                  src="/logos/orkesta.png"
                  alt="Orkesta"
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className={cn("font-manrope text-xl font-semibold", "text-rafique-cream")}>
                Orkesta
              </h3>
              <p className={cn("font-inter text-sm", "text-rafique-cream/70")}>
                Gestão Operacional
              </p>
            </Link>

            {/* Cadia */}
            <Link
              href="/produtos/cadia"
              className={cn(
                "group",
                "bg-rafique-dark/50",
                "border border-rafique-light/10",
                "rounded-lg p-8",
                "hover:border-rafique-blue/50 transition-colors",
                "flex flex-col items-center gap-4"
              )}
            >
              <div className="relative w-16 h-16">
                <Image
                  src="/logos/cadia.png"
                  alt="Cadia"
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className={cn("font-manrope text-xl font-semibold", "text-rafique-cream")}>
                Cadia
              </h3>
              <p className={cn("font-inter text-sm", "text-rafique-cream/70")}>
                Clínica e Agenda
              </p>
            </Link>

            {/* Ascenda */}
            <Link
              href="/produtos/ascenda"
              className={cn(
                "group",
                "bg-rafique-dark/50",
                "border border-rafique-light/10",
                "rounded-lg p-8",
                "hover:border-rafique-blue/50 transition-colors",
                "flex flex-col items-center gap-4"
              )}
            >
              <div className="relative w-16 h-16">
                <Image
                  src="/logos/ascenda.png"
                  alt="Ascenda"
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className={cn("font-manrope text-xl font-semibold", "text-rafique-cream")}>
                Ascenda
              </h3>
              <p className={cn("font-inter text-sm", "text-rafique-cream/70")}>
                Educação e LMS
              </p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
