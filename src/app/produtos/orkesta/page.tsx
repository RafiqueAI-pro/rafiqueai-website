import type { Metadata } from "next";
import Link from "next/link";
import { HeroBackdrop } from "@/components/site/HeroBackdrop";
import { PageFooter } from "@/components/site/PageFooter";
import { RingMark } from "@/components/site/RingMark";
import { ButtonPrimary, ButtonOutline, Eyebrow } from "@/components/site/ui";

export const metadata: Metadata = {
  title: "Orkesta — Rafique AI",
  description:
    "Orkesta: uma operação, um lugar. Pulse, CRM e ContentOS — a suíte que substitui a colcha de retalhos de CRM, planilhas e automações soltas.",
};

export default function OrkestaPage() {
  return (
    <>
      <HeroBackdrop current="produtos">
        <div className="mx-auto flex max-w-site flex-col items-start gap-10 px-6 pb-10 pt-[88px] md:px-10 lg:flex-row lg:items-center lg:px-14">
          <div className="flex-1">
            <Eyebrow>Orkesta — suíte</Eyebrow>
            <h1 className="max-w-[13ch] text-balance text-[clamp(34px,4.6vw,52px)] font-semibold leading-[1.08] tracking-[-0.025em] text-cream">
              Uma operação, um lugar.
            </h1>
            <p className="mt-5 max-w-[52ch] text-[17px] leading-relaxed text-slate-400">
              A suíte que substitui a colcha de retalhos de CRM, planilhas,
              automações soltas e BI desconectado.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <ButtonPrimary href="/contato">Falar com a gente</ButtonPrimary>
              <ButtonOutline href="#pulse">Ver a suíte</ButtonOutline>
            </div>
          </div>
          <RingMark size={180} className="shrink-0" />
        </div>
      </HeroBackdrop>
      <main className="mx-auto max-w-site px-6 md:px-10 lg:px-14">
        <section id="pulse" className="scroll-mt-24 py-9">
          <div className="grid items-center gap-10 rounded-xl border border-slate-800 bg-gradient-to-b from-[#0F2427] to-[#131822] p-10 lg:grid-cols-2">
            <div>
              <div className="mb-3.5 font-mono text-[11px] uppercase tracking-[0.08em] text-pulse-400">
                Orkesta Pulse — produto-farol
              </div>
              <h2 className="text-[26px] font-semibold tracking-[-0.015em] text-cream">
                Automação que você enxerga.
              </h2>
              <p className="mt-3.5 max-w-[46ch] text-[14.5px] leading-relaxed text-slate-400">
                A maioria das ferramentas de RPA/IA entrega execução às
                cegas. O Pulse entrega execução com evidência: build,
                orquestração e observabilidade no mesmo produto.
              </p>
              <Link
                href="/produtos/pulse"
                className="mt-6 inline-flex items-center gap-1.5 text-[13px] font-medium text-pulse-400 hover:text-pulse-400/80"
              >
                Conhecer o Pulse →
              </Link>
            </div>

            <div className="flex gap-3 overflow-x-auto">
              <div className="w-[170px] shrink-0 rounded-lg border border-slate-800 bg-[#11161F] p-3">
                <div className="mb-2.5 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.04em] text-slate-500">
                  <span>Executando</span>
                  <span>2</span>
                </div>
                <div className="mb-2 rounded-md border border-slate-800 bg-[#131822] p-2.5">
                  <div className="text-[12px] font-medium text-cream">
                    Sync CRM → BI
                  </div>
                  <div className="mt-1.5">
                    <span className="inline-flex items-center gap-1.5 rounded-[4px] bg-[#0F2427] px-2 py-[3px] font-mono text-[10px] font-medium uppercase tracking-[0.04em] text-pulse-400">
                      <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-pulse-400" />
                      Executando
                    </span>
                  </div>
                </div>
                <div className="rounded-md border border-slate-800 bg-[#131822] p-2.5">
                  <div className="text-[12px] font-medium text-cream">
                    Reprocesso DLQ
                  </div>
                  <div className="mt-1.5 font-mono text-[10px] text-slate-500">
                    00:04:12
                  </div>
                </div>
              </div>

              <div className="w-[170px] shrink-0 rounded-lg border border-slate-800 bg-[#11161F] p-3">
                <div className="mb-2.5 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.04em] text-slate-500">
                  <span>Concluído</span>
                  <span>14</span>
                </div>
                <div className="mb-2 rounded-md border border-slate-800 bg-[#131822] p-2.5">
                  <div className="text-[12px] font-medium text-cream">
                    Import leads WA
                  </div>
                  <div className="mt-1.5">
                    <span className="inline-flex items-center rounded-[4px] bg-[#0E241C] px-2 py-[3px] font-mono text-[10px] font-medium uppercase tracking-[0.04em] text-[#16A272]">
                      Concluído
                    </span>
                  </div>
                </div>
                <div className="rounded-md border border-slate-800 bg-[#131822] p-2.5">
                  <div className="text-[12px] font-medium text-cream">
                    Rel. semanal
                  </div>
                  <div className="mt-1.5 font-mono text-[10px] text-slate-500">
                    00:00:48
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="grid gap-6 py-9 pb-20 md:grid-cols-2">
          <Link
            id="crm"
            href="/produtos/crm"
            className="scroll-mt-24 rounded-xl border border-slate-800 bg-gradient-to-b from-[#171B33] to-[#131822] p-10 transition-colors hover:border-crm-500"
          >
            <div className="mb-3.5 inline-flex items-center gap-1.5 rounded-[4px] border border-[#4A3B14] bg-[#241D0C] px-[9px] py-1 font-mono text-[10px] font-semibold uppercase tracking-[0.08em] text-[#D6A93A]">
              <span className="inline-block h-[5px] w-[5px] rounded-full bg-[#D6A93A]" />
              Em breve
            </div>
            <div className="mb-3.5 font-mono text-[11px] uppercase tracking-[0.08em] text-crm-400">
              Orkesta CRM
            </div>
            <h2 className="text-[22px] font-semibold tracking-[-0.015em] text-cream">
              Funil, mídias sociais, agentes e BI em um só lugar.
            </h2>
            <p className="mt-3.5 max-w-[46ch] text-[14.5px] leading-relaxed text-slate-400">
              Substitui o CRM de mercado sem abrir mão de automação e IA no
              funil.
            </p>
            <span className="mt-6 inline-flex items-center gap-1.5 text-[13px] font-medium text-crm-400">
              Conhecer o CRM →
            </span>
          </Link>

          <Link
            id="contentos"
            href="/produtos/contentos"
            className="scroll-mt-24 rounded-xl border border-slate-800 bg-gradient-to-b from-[#2A1522] to-[#131822] p-10 transition-colors hover:border-contentos-500"
          >
            <div className="mb-3.5 inline-flex items-center gap-1.5 rounded-[4px] border border-[#4A3B14] bg-[#241D0C] px-[9px] py-1 font-mono text-[10px] font-semibold uppercase tracking-[0.08em] text-[#D6A93A]">
              <span className="inline-block h-[5px] w-[5px] rounded-full bg-[#D6A93A]" />
              Em breve
            </div>
            <div className="mb-3.5 font-mono text-[11px] uppercase tracking-[0.08em] text-contentos-400">
              Orkesta ContentOS
            </div>
            <h2 className="text-[22px] font-semibold tracking-[-0.015em] text-cream">
              Produção e distribuição de conteúdo assistida por IA.
            </h2>
            <p className="mt-3.5 max-w-[46ch] text-[14.5px] leading-relaxed text-slate-400">
              Do briefing à publicação, com agentes que executam o trabalho
              repetitivo.
            </p>
            <span className="mt-6 inline-flex items-center gap-1.5 text-[13px] font-medium text-contentos-400">
              Conhecer o ContentOS →
            </span>
          </Link>
        </section>
      </main>
      <PageFooter />
    </>
  );
}
