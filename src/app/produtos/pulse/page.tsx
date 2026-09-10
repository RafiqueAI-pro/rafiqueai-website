import type { Metadata } from "next";
import { HeroBackdrop } from "@/components/site/HeroBackdrop";
import { PageFooter } from "@/components/site/PageFooter";
import { Faq } from "@/components/site/Faq";
import { ScreenshotGallery } from "@/components/site/ScreenshotGallery";
import { ButtonPrimary, ButtonOutline, Eyebrow, MonoLabel } from "@/components/site/ui";

const TITLE = "Orkesta Pulse — Rafique AI";
const DESCRIPTION =
  "Automação com evidência: build, orquestração e observabilidade no mesmo produto. Toda execução auditável passo a passo, com reprocesso de falhas sem depender de log bruto.";
const URL = "https://rafiqueai.com.br/produtos/pulse";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: URL },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: URL,
    title: TITLE,
    description: DESCRIPTION,
    siteName: "Rafique AI",
  },
};

const FEATURES = [
  {
    icon: "🧩",
    title: "Build de automações",
    desc: "Fluxos com definição versionada — rascunho, ativo, pausado ou arquivado, sem editar direto em produção.",
  },
  {
    icon: "🗂️",
    title: "Orquestração em kanban",
    desc: "As mesmas execuções da tabela de Execuções, agrupadas visualmente por fluxo e por estágio.",
  },
  {
    icon: "🔍",
    title: "Execução com evidência",
    desc: "Cada corrida guarda o passo a passo — não é só \"rodou\" ou \"falhou\", é o que aconteceu em cada etapa.",
  },
  {
    icon: "🛠️",
    title: "Dead letters & reprocesso",
    desc: "Falha vira incidente rastreável, com reprocesso de um clique — sem caçar em log bruto.",
  },
];

const STEPS = [
  {
    n: "01",
    title: "Conectamos suas automações",
    desc: "Workers existentes entram no Pulse como fluxos monitorados — sem reescrever o que já roda.",
  },
  {
    n: "02",
    title: "Toda execução vira evidência",
    desc: "Cada corrida registra etapa por etapa, com status, tempo e o que falhou, se falhou.",
  },
  {
    n: "03",
    title: "Você enxerga a operação inteira",
    desc: "Automações, execuções, workers, incidentes e métricas num painel só — sem depender do desenvolvedor pra saber o que travou.",
  },
];

const SCREENSHOTS = [
  { src: "/screenshots/pulse/visao-geral.jpg", label: "Visão geral", desc: "Centro de operações: automações ativas, execuções recentes e atalhos pro que precisa de atenção." },
  { src: "/screenshots/pulse/automacoes.jpg", label: "Automações", desc: "Fluxos por status — rascunho, ativa, pausada, arquivada — com contagem em tempo real." },
  { src: "/screenshots/pulse/orquestracao.jpg", label: "Orquestração", desc: "As execuções em kanban, agrupadas por fluxo, pra ver o estágio de cada uma de relance." },
  { src: "/screenshots/pulse/execucoes.jpg", label: "Execuções", desc: "Tabela com evidência de cada corrida — em fila, executando, concluído, falhou ou cancelado." },
  { src: "/screenshots/pulse/incidentes.jpg", label: "Incidentes", desc: "Dead letters abertas, com reprocesso — falha vira ação, não vira log perdido." },
  { src: "/screenshots/pulse/metricas.jpg", label: "Métricas", desc: "Ritmo da operação: volume, sucesso e falha ao longo do tempo." },
];

const FAQS = [
  {
    question: "O Pulse substitui minhas automações atuais?",
    answer:
      "Não precisa reescrever nada. Os workers que já rodam entram no Pulse como fluxos monitorados — o que muda é que agora toda execução fica visível e auditável.",
  },
  {
    question: "O que acontece quando uma automação falha?",
    answer:
      "A falha vira uma dead letter rastreável em Incidentes, com o passo exato onde travou — e reprocesso de um clique, sem precisar recriar a execução do zero.",
  },
  {
    question: "Dá pra ver o histórico de uma execução específica?",
    answer:
      "Sim. Cada execução guarda evidência etapa a etapa — não só o resultado final, mas o que aconteceu em cada passo do fluxo.",
  },
  {
    question: "Funciona junto com o CRM e o ContentOS?",
    answer:
      "Sim — os três produtos da Orkesta compartilham a mesma base de dados. Uma automação do Pulse pode mover um negócio no funil do CRM ou disparar uma publicação no ContentOS.",
  },
];

export default function PulsePage() {
  return (
    <>
      <HeroBackdrop current="produtos">
        <div className="mx-auto max-w-site px-6 pb-8 pt-[88px] md:px-10 lg:px-14">
          <Eyebrow>Orkesta Pulse — produto-farol</Eyebrow>
          <h1 className="max-w-[20ch] text-balance text-[clamp(32px,4.8vw,54px)] font-bold leading-[1.1] tracking-[-0.025em] text-cream">
            Automação que você enxerga.
          </h1>
          <p className="mt-5 max-w-[58ch] text-[17px] leading-relaxed text-slate-400">
            A maioria das ferramentas de RPA/IA entrega execução às cegas. O
            Pulse entrega execução com evidência — build, orquestração e
            observabilidade no mesmo produto, com a mesma base de dados que
            já alimenta o CRM e o ContentOS.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonPrimary href="/contato">Falar com a gente</ButtonPrimary>
            <ButtonOutline href="#telas">Ver telas reais</ButtonOutline>
          </div>
        </div>
      </HeroBackdrop>

      <main className="mx-auto max-w-site px-6 md:px-10 lg:px-14">
        <section className="py-14">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {FEATURES.map((f) => (
              <div
                key={f.title}
                className="rounded-lg border border-slate-800 bg-[#131822] p-5"
              >
                <div
                  className="flex h-7 w-7 items-center justify-center rounded-md text-[14px]"
                  style={{ background: "rgba(74,173,180,0.12)" }}
                  aria-hidden="true"
                >
                  {f.icon}
                </div>
                <h3 className="mt-3.5 text-[14px] font-semibold leading-snug text-cream">
                  {f.title}
                </h3>
                <p className="mt-2 text-[12.5px] leading-relaxed text-slate-400">
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section id="como-funciona" className="scroll-mt-24 border-t border-white/[0.06] py-14">
          <Eyebrow>Como funciona</Eyebrow>
          <h2 className="max-w-[22ch] text-balance text-[clamp(24px,3vw,32px)] font-semibold leading-tight tracking-[-0.02em] text-cream">
            Três passos, sem reescrever o que já roda.
          </h2>
          <div className="mt-8 flex flex-col">
            {STEPS.map((s, i) => (
              <div
                key={s.n}
                className={`flex gap-5 border-t border-white/[0.06] py-5 ${
                  i === STEPS.length - 1 ? "border-b" : ""
                }`}
              >
                <div className="w-6 shrink-0 pt-0.5 font-mono text-[13px] text-pulse-400">
                  {s.n}
                </div>
                <div>
                  <h3 className="text-[15px] font-semibold text-cream">
                    {s.title}
                  </h3>
                  <p className="mt-1.5 max-w-[64ch] text-[14px] leading-relaxed text-slate-400">
                    {s.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="telas" className="scroll-mt-24 border-t border-white/[0.06] py-14">
          <Eyebrow>Telas reais</Eyebrow>
          <h2 className="max-w-[26ch] text-balance text-[clamp(22px,2.8vw,28px)] font-semibold leading-[1.3] tracking-[-0.015em] text-cream">
            O produto mais maduro da suíte, rodando de verdade.
          </h2>
          <ScreenshotGallery items={SCREENSHOTS} accent="pulse" altPrefix="Orkesta Pulse" />
        </section>

        <section className="border-t border-white/[0.06] py-14">
          <Eyebrow>Perguntas frequentes</Eyebrow>
          <h2 className="max-w-[26ch] text-balance text-[clamp(22px,2.8vw,28px)] font-semibold leading-[1.3] tracking-[-0.015em] text-cream">
            O que times de operação perguntam antes de conectar.
          </h2>
          <div className="mx-auto mt-7 max-w-[800px]">
            <Faq items={FAQS} />
          </div>
        </section>

        <section className="py-14 pb-20">
          <div className="flex flex-wrap items-center justify-between gap-6 rounded-lg border border-slate-800 bg-gradient-to-b from-[#0F2427] to-[#0F1420] p-8">
            <div>
              <MonoLabel>Pronto pra enxergar sua operação?</MonoLabel>
              <p className="mt-2 max-w-[44ch] text-[13.5px] text-slate-400">
                30 minutos, sem compromisso — a gente mostra o Pulse com uma
                automação real sua.
              </p>
            </div>
            <ButtonPrimary href="/contato">Falar com a gente →</ButtonPrimary>
          </div>
        </section>
      </main>
      <PageFooter />
    </>
  );
}
