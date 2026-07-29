import React from "react";
import type { Metadata } from "next";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Política de Privacidade - Rafique AI",
  description: "Leia nossa política de privacidade e proteção de dados.",
  openGraph: {
    title: "Política de Privacidade - Rafique AI",
    description: "Leia nossa política de privacidade e proteção de dados.",
    url: "https://rafiqueai.com.br/privacidade",
  },
  twitter: {
    title: "Política de Privacidade - Rafique AI",
    description: "Leia nossa política de privacidade e proteção de dados.",
  },
};

export default function PrivacidadePage() {
  return (
    <>
      {/* ===== HERO ===== */}
      <section
        className={cn(
          "relative flex min-h-[40vh] items-center justify-center",
          "bg-rafique-dark",
          "px-6 py-24 md:py-32"
        )}
      >
        <div className="container mx-auto text-center">
          <h1
            className={cn(
              "font-manrope text-5xl font-bold md:text-6xl",
              "text-rafique-cream",
              "animate-fade-in-up"
            )}
          >
            Política de Privacidade
          </h1>
          <p
            className={cn(
              "mt-4 font-inter text-lg",
              "text-rafique-cream/70"
            )}
          >
            Última atualização: Julho de 2026
          </p>
        </div>
      </section>

      {/* ===== CONTEÚDO ===== */}
      <article
        className={cn(
          "bg-rafique-dark/95",
          "px-6 py-24 md:py-32"
        )}
      >
        <div className="container mx-auto max-w-4xl">
          <div className="prose prose-invert prose-lg max-w-none">
            <section className="mb-12">
              <h2
                className={cn(
                  "font-manrope text-2xl font-semibold md:text-3xl",
                  "text-rafique-cream",
                  "mb-6"
                )}
              >
                1. Introdução
              </h2>
              <p className={cn("font-inter text-base leading-relaxed", "text-rafique-cream/80", "mb-4")}>
                Esta Política de Privacidade descreve como coletamos, usamos e protegemos as informações pessoais
                que você nos fornece ao utilizar nossos serviços. Estamos comprometidos com a transparência e
                com a proteção da sua privacidade.
              </p>
              <p className={cn("font-inter text-base leading-relaxed", "text-rafique-cream/80")}>
                Ao utilizar nossos serviços, você concorda com as práticas descritas nesta política.
                Recomendamos a leitura atenta deste documento.
              </p>
            </section>

            <section className="mb-12">
              <h2
                className={cn(
                  "font-manrope text-2xl font-semibold md:text-3xl",
                  "text-rafique-cream",
                  "mb-6"
                )}
              >
                2. Coleta de Dados
              </h2>
              <p className={cn("font-inter text-base leading-relaxed", "text-rafique-cream/80", "mb-4")}>
                Podemos coletar os seguintes tipos de informações:
              </p>
              <ul className={cn("font-inter text-base leading-relaxed", "text-rafique-cream/80", "list-disc pl-6 space-y-2")}>
                <li>
                  <strong className="text-rafique-cream">Informações de identificação pessoal:</strong> Nome, email,
                  telefone e outras informações fornecidas voluntariamente através de formulários de contato.
                </li>
                <li>
                  <strong className="text-rafique-cream">Dados de uso:</strong> Informações sobre como você interage
                  com nossos serviços, incluindo páginas visitadas e tempo de permanência.
                </li>
                <li>
                  <strong className="text-rafique-cream">Dados técnicos:</strong> Endereço IP, tipo de navegador,
                  provedor de serviços de internet e dados de log.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2
                className={cn(
                  "font-manrope text-2xl font-semibold md:text-3xl",
                  "text-rafique-cream",
                  "mb-6"
                )}
              >
                3. Uso de Dados
              </h2>
              <p className={cn("font-inter text-base leading-relaxed", "text-rafique-cream/80", "mb-4")}>
                Utilizamos as informações coletadas para:
              </p>
              <ul className={cn("font-inter text-base leading-relaxed", "text-rafique-cream/80", "list-disc pl-6 space-y-2")}>
                <li>Fornecer, manter e melhorar nossos serviços;</li>
                <li>Responder a solicitações de suporte e comunicações;</li>
                <li>Enviar comunicações administrativas e atualizações;</li>
                <li>Analisar o uso dos serviços para aprimoramento contínuo;</li>
                <li>Cumprir obrigações legais e regulatórias.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2
                className={cn(
                  "font-manrope text-2xl font-semibold md:text-3xl",
                  "text-rafique-cream",
                  "mb-6"
                )}
              >
                4. Cookies e Tecnologias Similares
              </h2>
              <p className={cn("font-inter text-base leading-relaxed", "text-rafique-cream/80", "mb-4")}>
                Utilizamos cookies e tecnologias similares para melhorar a experiência do usuário,
                analisar o tráfego do site e personalizar conteúdo.
              </p>
              <p className={cn("font-inter text-base leading-relaxed", "text-rafique-cream/80")}>
                Você pode controlar o uso de cookies através das configurações do seu navegador.
                No entanto, a desativação de cookies pode afetar a funcionalidade de alguns recursos do site.
              </p>
            </section>

            <section className="mb-12">
              <h2
                className={cn(
                  "font-manrope text-2xl font-semibold md:text-3xl",
                  "text-rafique-cream",
                  "mb-6"
                )}
              >
                5. Compartilhamento de Dados
              </h2>
              <p className={cn("font-inter text-base leading-relaxed", "text-rafique-cream/80", "mb-4")}>
                Não vendemos, alugamos ou compartilhamos suas informações pessoais com terceiros, exceto nas
                seguintes circunstâncias:
              </p>
              <ul className={cn("font-inter text-base leading-relaxed", "text-rafique-cream/80", "list-disc pl-6 space-y-2")}>
                <li>Com seu consentimento explícito;</li>
                <li>Para cumprir obrigações legais ou responder a processos judiciais;</li>
                <li>Para proteger nossos direitos, propriedade ou segurança;</li>
                <li>Com prestadores de serviços que nos auxiliam na operação do site (sob rigorosos acordos de confidencialidade).</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2
                className={cn(
                  "font-manrope text-2xl font-semibold md:text-3xl",
                  "text-rafique-cream",
                  "mb-6"
                )}
              >
                6. Seus Direitos
              </h2>
              <p className={cn("font-inter text-base leading-relaxed", "text-rafique-cream/80", "mb-4")}>
                De acordo com a legislação aplicável (incluindo a LGPD - Lei Geral de Proteção de Dados),
                você tem os seguintes direitos:
              </p>
              <ul className={cn("font-inter text-base leading-relaxed", "text-rafique-cream/80", "list-disc pl-6 space-y-2")}>
                <li>Direito de acesso aos seus dados pessoais;</li>
                <li>Direito de correção de dados incompletos, inexatos ou desatualizados;</li>
                <li>Direito de eliminação dos dados tratados com seu consentimento;</li>
                <li>Direito de portabilidade dos dados a outro fornecedor de serviço;</li>
                <li>Direito de revogar o consentimento a qualquer momento.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2
                className={cn(
                  "font-manrope text-2xl font-semibold md:text-3xl",
                  "text-rafique-cream",
                  "mb-6"
                )}
              >
                7. Segurança dos Dados
              </h2>
              <p className={cn("font-inter text-base leading-relaxed", "text-rafique-cream/80")}>
                Implementamos medidas técnicas e organizacionais apropriadas para proteger suas informações
                pessoais contra acesso não autorizado, alteração, divulgação ou destruição. No entanto,
                nenhum método de transmissão pela internet ou armazenamento eletrônico é 100% seguro,
                e não podemos garantir segurança absoluta.
              </p>
            </section>

            <section className="mb-12">
              <h2
                className={cn(
                  "font-manrope text-2xl font-semibold md:text-3xl",
                  "text-rafique-cream",
                  "mb-6"
                )}
              >
                8. Alterações nesta Política
              </h2>
              <p className={cn("font-inter text-base leading-relaxed", "text-rafique-cream/80")}>
                Podemos atualizar esta Política de Privacidade periodicamente. Notificaremos sobre
                alterações significativas através de um aviso em nosso site ou por email. Recomendamos
                que você revise esta página regularmente para se manter informado sobre nossas práticas de privacidade.
              </p>
            </section>

            <section>
              <h2
                className={cn(
                  "font-manrope text-2xl font-semibold md:text-3xl",
                  "text-rafique-cream",
                  "mb-6"
                )}
              >
                9. Contato
              </h2>
              <p className={cn("font-inter text-base leading-relaxed", "text-rafique-cream/80", "mb-4")}>
                Se você tiver dúvidas sobre esta Política de Privacidade ou sobre o tratamento dos seus
                dados pessoais, entre em contato conosco através do email:
              </p>
              <p className={cn("font-inter text-base", "text-rafique-blue")}>
                contato@rafiqueai.com
              </p>
            </section>
          </div>
        </div>
      </article>
    </>
  );
}
