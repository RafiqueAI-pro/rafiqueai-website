import type { Metadata } from "next";
import { HeroBackdrop } from "@/components/site/HeroBackdrop";
import { PageFooter } from "@/components/site/PageFooter";
import { Faq } from "@/components/site/Faq";
import { ScreenshotGallery } from "@/components/site/ScreenshotGallery";
import { ButtonPrimary, ButtonOutline, Eyebrow, MonoLabel } from "@/components/site/ui";

const TITLE = "Orkesta CRM — Rafique AI";
const DESCRIPTION =
  "Funil, contatos e inteligência comercial num só lugar, com WhatsApp integrado e IA priorizando os negócios quentes — a mesma base de dados que já alimenta o Pulse e o ContentOS.";
const URL = "https://rafiqueai.com.br/produtos/crm";

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
    icon: "📊",
    title: "Funil visual",
    desc: "Pipeline em kanban por estágio — arraste o card, o negócio muda de fase.",
  },
  {
    icon: "🗂️",
    title: "Contatos & Empresas",
    desc: "Base comercial unificada, com filtros e colunas configuráveis pra cada time.",
  },
  {
    icon: "💬",
    title: "WhatsApp integrado",
    desc: "Inbox único por conversa, com filtro de não respondidas e negócios quentes em destaque.",
  },
  {
    icon: "✨",
    title: "Inteligência comercial",
    desc: "A Orkesta Intelligence aponta risco, prioridade e a próxima ação — sem precisar caçar no funil.",
  },
];

const STEPS = [
  {
    n: "01",
    title: "Conectamos seu funil",
    desc: "Importamos contatos e negócios existentes — sem re-trabalho manual, sem planilha de transição.",
  },
  {
    n: "02",
    title: "A IA prioriza por você",
    desc: "A Orkesta Intelligence identifica negócios quentes parados e sugere a próxima ação, direto no painel.",
  },
  {
    n: "03",
    title: "Você fecha mais rápido",
    desc: "WhatsApp, e-mail e automações no mesmo lugar do funil — sem alternar entre cinco ferramentas.",
  },
];

const SCREENSHOTS = [
  { src: "/screenshots/crm/dashboard.jpg", label: "Início", desc: "Pipeline, previsão do mês e ritmo comercial num só painel." },
  { src: "/screenshots/crm/pipeline.jpg", label: "Negócios", desc: "Kanban por estágio, com histórico e próxima ação por card." },
  { src: "/screenshots/crm/whatsapp.jpg", label: "WhatsApp — premium", desc: "Inbox com não respondidas e a IA sugerindo negócios quentes pendentes." },
  { src: "/screenshots/crm/whatsapp-web.jpg", label: "WhatsApp — estilo WhatsApp Web", desc: "Mesma função, com a cara do app que seu time já usa todo dia." },
  { src: "/screenshots/crm/inteligencia.jpg", label: "Inteligência", desc: "Alertas de risco e conversão por origem, sem precisar cruzar planilha." },
  { src: "/screenshots/crm/relatorios.jpg", label: "Relatórios", desc: "Funil por estágio e motivos de perda, atualizados sozinhos." },
];

const FAQS = [
  {
    question: "Preciso migrar meus dados do CRM atual?",
    answer:
      "Importamos contatos, empresas e negócios existentes na configuração inicial — sem planilha de transição nem período sem funil.",
  },
  {
    question: "O WhatsApp já vem integrado?",
    answer:
      "Sim. Conecta via Evolution API ou Meta Cloud, com inbox único, filtro de não respondidas e as mesmas conversas aparecendo no negócio certo do funil.",
  },
  {
    question: "A IA substitui meu time comercial?",
    answer:
      "Não — ela prioriza. A Orkesta Intelligence aponta o que está travado e o que está quente, seu time decide e executa.",
  },
  {
    question: "Funciona para equipes pequenas?",
    answer:
      "Sim. O funil, o WhatsApp e os relatórios funcionam do mesmo jeito com 3 ou com 30 vendedores — o que muda é o plano.",
  },
];

export default function CrmPage() {
  return (
    <>
      <HeroBackdrop current="produtos">
        <div className="mx-auto max-w-site px-6 pb-8 pt-[88px] md:px-10 lg:px-14">
          <Eyebrow>Orkesta CRM</Eyebrow>
          <h1 className="max-w-[18ch] text-balance text-[clamp(32px,4.8vw,54px)] font-bold leading-[1.1] tracking-[-0.025em] text-cream">
            Funil, contatos e inteligência comercial num só lugar.
          </h1>
          <p className="mt-5 max-w-[56ch] text-[17px] leading-relaxed text-slate-400">
            Substitui o CRM de mercado sem abrir mão de automação e IA no
            funil — a mesma base de dados que já alimenta o Pulse e o
            ContentOS.
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
                  style={{ background: "rgba(108,121,224,0.12)" }}
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
            Três passos, sem trocar sua rotina de vendas.
          </h2>
          <div className="mt-8 flex flex-col">
            {STEPS.map((s, i) => (
              <div
                key={s.n}
                className={`flex gap-5 border-t border-white/[0.06] py-5 ${
                  i === STEPS.length - 1 ? "border-b" : ""
                }`}
              >
                <div className="w-6 shrink-0 pt-0.5 font-mono text-[13px] text-crm-400">
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
            O produto rodando, não um mockup.
          </h2>
          <ScreenshotGallery items={SCREENSHOTS} accent="crm" altPrefix="Orkesta CRM" />
        </section>

        <section className="border-t border-white/[0.06] py-14">
          <Eyebrow>Perguntas frequentes</Eyebrow>
          <h2 className="max-w-[26ch] text-balance text-[clamp(22px,2.8vw,28px)] font-semibold leading-[1.3] tracking-[-0.015em] text-cream">
            O que times comerciais perguntam antes de fechar.
          </h2>
          <div className="mx-auto mt-7 max-w-[800px]">
            <Faq items={FAQS} />
          </div>
        </section>

        <section className="py-14 pb-20">
          <div className="flex flex-wrap items-center justify-between gap-6 rounded-lg border border-slate-800 bg-gradient-to-b from-[#171B33] to-[#0F1420] p-8">
            <div>
              <MonoLabel>Pronto pra ver o funil em um só lugar?</MonoLabel>
              <p className="mt-2 max-w-[44ch] text-[13.5px] text-slate-400">
                30 minutos, sem compromisso — a gente mostra o CRM com seu
                próprio processo comercial.
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
