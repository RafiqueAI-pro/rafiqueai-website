import type { Metadata } from "next";
import { HeroBackdrop } from "@/components/site/HeroBackdrop";
import { PageFooter } from "@/components/site/PageFooter";
import { ButtonOutline, Eyebrow, MonoLabel } from "@/components/site/ui";

export const metadata: Metadata = {
  title: "Produtos anteriores — Rafique AI",
  description:
    "Ascenda, Ascenda Pro e Cadia — produtos anteriores à suíte Orkesta, mantidos para clientes com contrato vigente.",
};

const LEGACY_PRODUCTS = [
  {
    name: "Ascenda",
    dot: "#27877D",
    desc: "Plataforma de gestão para clínicas — agenda, prontuário e cobrança.",
    status: "Mantido",
  },
  {
    name: "Ascenda Pro",
    dot: "#1E5C50",
    desc: "Camada avançada do Ascenda — multi-unidade e relatórios financeiros.",
    status: "Mantido",
  },
  {
    name: "Cadia",
    dot: "#F96842",
    desc: "Automação comercial para academias — matrícula, cobrança e retenção.",
    status: "Arquivado",
  },
] as const;

export default function LegadoPage() {
  return (
    <>
      <HeroBackdrop current="produtos">
        <div className="mx-auto max-w-site px-6 pb-6 pt-[88px] md:px-10 lg:px-14">
          <Eyebrow>Produtos anteriores</Eyebrow>
          <h1 className="max-w-[18ch] text-balance text-[clamp(30px,4vw,44px)] font-semibold leading-[1.1] tracking-[-0.025em] text-cream">
            Produtos que construímos antes da Orkesta.
          </h1>
          <p className="mt-5 max-w-[58ch] text-[16px] leading-relaxed text-slate-400">
            Ascenda, Ascenda Pro e Cadia seguem ativos para clientes com
            contrato vigente. Não fazem parte da suíte Orkesta e não recebem
            novo desenvolvimento de marca.
          </p>
        </div>
      </HeroBackdrop>
      <main className="mx-auto max-w-site px-6 md:px-10 lg:px-14">
        <section className="py-8">
          {LEGACY_PRODUCTS.map((p) => (
            <div
              key={p.name}
              className="flex flex-col gap-3 border-b border-white/[0.06] py-6 sm:flex-row sm:items-center sm:gap-5"
            >
              <span
                className="h-[9px] w-[9px] shrink-0 rounded-full"
                style={{ backgroundColor: p.dot }}
                aria-hidden="true"
              />
              <span className="w-full shrink-0 text-[16px] font-semibold text-cream sm:w-[180px]">
                {p.name}
              </span>
              <span className="flex-1 text-[13.5px] text-slate-400">
                {p.desc}
              </span>
              <span className="w-fit shrink-0 rounded-[4px] border border-slate-800 px-[9px] py-1 font-mono text-[10px] uppercase tracking-[0.06em] text-slate-500">
                {p.status}
              </span>
            </div>
          ))}
        </section>

        <section className="pb-20 pt-8">
          <div className="flex flex-wrap items-center justify-between gap-6 rounded-lg border border-slate-800 bg-[#131822] p-8">
            <div>
              <MonoLabel>Precisa de suporte em um desses produtos?</MonoLabel>
              <p className="mt-2 text-[14px] text-slate-400">
                Suporte contratual continua pelo canal combinado com sua
                equipe.
              </p>
            </div>
            <ButtonOutline href="/contato">Falar com o suporte →</ButtonOutline>
          </div>
        </section>
      </main>
      <PageFooter />
    </>
  );
}
