import React from "react";
import type { Metadata } from "next";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Termos de Uso - Rafique AI",
  description: "Leia nossos termos de uso e condições de serviço.",
  openGraph: {
    title: "Termos de Uso - Rafique AI",
    description: "Leia nossos termos de uso e condições de serviço.",
    url: "https://rafiqueai.com.br/termos",
  },
  twitter: {
    title: "Termos de Uso - Rafique AI",
    description: "Leia nossos termos de uso e condições de serviço.",
  },
};

export default function TermosPage() {
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
            Termos de Uso
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
                1. Aceitação dos Termos
              </h2>
              <p className={cn("font-inter text-base leading-relaxed", "text-rafique-cream/80", "mb-4")}>
                Ao acessar ou utilizar este site e nossos serviços, você concorda em cumprir e estar
                legalmente vinculado a estes Termos de Uso. Se você não concordar com qualquer parte
                destes termos, não deverá utilizar nossos serviços.
              </p>
              <p className={cn("font-inter text-base leading-relaxed", "text-rafique-cream/80")}>
                Estes termos constituem um acordo legal entre você e nossa empresa. Reservamo-nos o
                direito de modificar estes termos a qualquer momento, com ou sem aviso prévio.
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
                2. Uso do Serviço
              </h2>
              <p className={cn("font-inter text-base leading-relaxed", "text-rafique-cream/80", "mb-4")}>
                Você concorda em utilizar nossos serviços apenas para fins legais e de acordo com estes Termos.
                É proibido:
              </p>
              <ul className={cn("font-inter text-base leading-relaxed", "text-rafique-cream/80", "list-disc pl-6 space-y-2")}>
                <li>Utilizar os serviços para qualquer finalidade ilegal ou não autorizada;</li>
                <li>Tentar acessar áreas restritas do sistema ou contas de outros usuários;</li>
                <li>Interferir ou interromper a integridade ou o desempenho dos serviços;</li>
                <li>Coletar ou coletar dados de outros usuários sem consentimento;</li>
                <li>Utilizar robôs, spiders ou outras ferramentas automáticas para acessar os serviços.</li>
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
                3. Propriedade Intelectual
              </h2>
              <p className={cn("font-inter text-base leading-relaxed", "text-rafique-cream/80", "mb-4")}>
                Todo o conteúdo disponível em nosso site, incluindo mas não limitado a textos, gráficos,
                logotipos, ícones, imagens, clipes de áudio, downloads digitais e compilações de dados,
                é propriedade nossa ou de nossos fornecedores e está protegido por leis de propriedade
                intelectual.
              </p>
              <p className={cn("font-inter text-base leading-relaxed", "text-rafique-cream/80")}>
                Você não pode modificar, copiar, distribuir, transmitir, exibir, executar, reproduzir,
                publicar, licenciar, criar trabalhos derivados, transferir ou vender qualquer informação,
                software, produtos ou serviços obtidos a partir deste site sem nossa autorização expressa.
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
                4. Contas de Usuário
              </h2>
              <p className={cn("font-inter text-base leading-relaxed", "text-rafique-cream/80", "mb-4")}>
                Se você criar uma conta em nossos serviços, você é responsável por:
              </p>
              <ul className={cn("font-inter text-base leading-relaxed", "text-rafique-cream/80", "list-disc pl-6 space-y-2")}>
                <li>Manter a confidencialidade de sua senha e conta;</li>
                <li>Restringir o acesso ao seu computador ou dispositivo;</li>
                <li>Assumir a responsabilidade por todas as atividades que ocorram em sua conta.</li>
              </ul>
              <p className={cn("font-inter text-base leading-relaxed", "text-rafique-cream/80", "mt-4")}>
                Você concorda em nos notificar imediatamente sobre qualquer uso não autorizado de sua
                conta ou qualquer outra violação de segurança.
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
                5. Limitação de Responsabilidade
              </h2>
              <p className={cn("font-inter text-base leading-relaxed", "text-rafique-cream/80", "mb-4")}>
                Em nenhuma circunstância seremos responsáveis por danos indiretos, incidentais, especiais,
                consequenciais ou punitivos, ou por qualquer perda de lucros ou receitas, seja incorrida
                direta ou indiretamente, ou qualquer perda de dados, uso, boa vontade ou outras perdas
                intangíveis.
              </p>
              <p className={cn("font-inter text-base leading-relaxed", "text-rafique-cream/80")}>
                Nossa responsabilidade total por quaisquer reclamações sob estes termos não excederá o
                valor pago por você, se houver, por serviços durante o período de doze meses anteriores
                à reclamação.
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
                6. Indenização
              </h2>
              <p className={cn("font-inter text-base leading-relaxed", "text-rafique-cream/80")}>
                Você concorda em indenizar e isentar-nos de qualquer reclamação, dano, obrigação, perda,
                responsabilidade, custo ou dívida e despesas (incluindo honorários advocatícios) decorrentes
                de: (i) seu uso e acesso aos serviços; (ii) sua violação de qualquer termo destes Termos de Uso;
                (iii) sua violação de qualquer direito de terceiros, incluindo, sem limitação, direitos de
                propriedade intelectual ou privacidade.
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
                7. Rescisão
              </h2>
              <p className={cn("font-inter text-base leading-relaxed", "text-rafique-cream/80")}>
                Reservamo-nos o direito de suspender ou encerrar seu acesso aos serviços, a nosso critério
                exclusivo, sem aviso prévio ou responsabilidade, por qualquer motivo, incluindo, sem limitação,
                se você violar estes Termos de Uso.
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
                8. Lei Aplicável
              </h2>
              <p className={cn("font-inter text-base leading-relaxed", "text-rafique-cream/80")}>
                Estes Termos de Uso serão regidos e interpretados de acordo com as leis do Brasil.
                Qualquer disputa decorrente destes termos estará sujeita à jurisdição exclusiva dos
                tribunais localizados em São Paulo, SP, Brasil.
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
                Se você tiver dúvidas sobre estes Termos de Uso, entre em contato conosco através do email:
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
