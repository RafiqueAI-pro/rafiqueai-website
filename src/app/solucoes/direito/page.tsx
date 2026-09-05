import type { Metadata } from "next";
import { HeroBackdrop } from "@/components/site/HeroBackdrop";
import { PageFooter } from "@/components/site/PageFooter";
import { ButtonPrimary, ButtonOutline, Eyebrow, MonoLabel } from "@/components/site/ui";

const TITLE = "Automação para Escritórios de Advocacia — Rafique AI";
const DESCRIPTION =
  "Conecte Atlas Jus, iiLex, Oystr e sua operação em um só painel. Automação e dashboards para escritórios de advocacia que já cresceram demais para planilha.";
const URL = "https://rafiqueai.com.br/solucoes/direito";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "automação para escritório de advocacia",
    "CRM jurídico",
    "integração Atlas Jus",
    "integração iiLex",
    "integração Oystr",
    "dashboard jurídico",
    "gestão de processos automatizada",
  ],
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

const PAINS = [
  {
    icon: "🧩",
    title: "Ferramentas que não conversam",
    desc: "Atlas Jus, iiLex, planilha e e-mail — cada um isolado, ninguém vê o quadro completo.",
  },
  {
    icon: "⏱️",
    title: "Esforço administrativo alto",
    desc: "Hora de advogado gasta copiando dado de um sistema pro outro, todo dia.",
  },
  {
    icon: "📉",
    title: "Prazo perdido no invisível",
    desc: "Não por erro jurídico — por falta de visibilidade sobre o que está andando.",
  },
  {
    icon: "🕳️",
    title: "Decisão no escuro",
    desc: "Sem dashboard, sócio não sabe quantos processos, quanto fatura, o que travou.",
  },
];

const STEPS = [
  {
    n: "01",
    title: "Conectamos o que você já usa",
    desc: "Atlas Jus, iiLex ou Oystr ligados ao Pulse — sem migração, sem reimplantação.",
  },
  {
    n: "02",
    title: "Automatizamos o repetitivo",
    desc: "Intake de cliente, cobrança, lembrete de prazo — o que hoje é copiar e colar vira automático.",
  },
  {
    n: "03",
    title: "Você vê certo",
    desc: "Dashboard de processos, faturamento e prazos, atualizado sozinho, sem planilha manual.",
  },
];

const PROOF = [
  "Atlas Jus",
  "iiLex",
  "Oystr",
  "Conta Azul",
  "Asaas",
  "Google Workspace",
  "Microsoft 365",
];

const FAQS = [
  {
    q: "Preciso trocar de sistema jurídico?",
    a: "Não. Conectamos ao que você já usa — Atlas Jus, iiLex ou Oystr — sem migração de dado e sem reimplantar nada.",
  },
  {
    q: "Quanto tempo leva para implementar?",
    a: "Diagnóstico do fluxo real em poucos dias; a primeira automação roda em sandbox antes de qualquer coisa tocar seus dados de produção.",
  },
  {
    q: "Funciona para escritório pequeno?",
    a: "Funciona melhor quando o volume de processos já não cabe mais em planilha e WhatsApp. Conversamos no diagnóstico se faz sentido pro seu tamanho.",
  },
  {
    q: "Os dados do processo ficam seguros?",
    a: "Sim — conectamos via integração oficial de cada sistema, sem expor dado de cliente fora do que já está contratado com você.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function DireitoPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <HeroBackdrop current="produtos">
        <div className="mx-auto max-w-site px-6 pb-8 pt-[88px] md:px-10 lg:px-14">
          <Eyebrow>Para escritórios de advocacia</Eyebrow>
          <h1 className="max-w-[18ch] text-balance text-[clamp(32px,4.8vw,54px)] font-bold leading-[1.1] tracking-[-0.025em] text-cream">
            Seu escritório roda em cinco sistemas que não conversam entre si.
          </h1>
          <p className="mt-5 max-w-[56ch] text-[17px] leading-relaxed text-slate-400">
            Atlas Jus, iiLex, planilha de prazo, WhatsApp do cliente, e-mail —
            cada um isolado, tudo copiado à mão. A gente conecta tudo isso em
            um painel só.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonPrimary href="/contato">
              Agendar diagnóstico gratuito
            </ButtonPrimary>
            <ButtonOutline href="#como-funciona">Ver como funciona</ButtonOutline>
          </div>
        </div>
      </HeroBackdrop>

      <main className="mx-auto max-w-site px-6 md:px-10 lg:px-14">
        <section className="py-14">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {PAINS.map((p) => (
              <div
                key={p.title}
                className="rounded-lg border border-slate-800 bg-[#131822] p-5"
              >
                <div
                  className="flex h-7 w-7 items-center justify-center rounded-md text-[14px]"
                  style={{ background: "rgba(190,104,166,0.12)" }}
                  aria-hidden="true"
                >
                  {p.icon}
                </div>
                <h3 className="mt-3.5 text-[14px] font-semibold leading-snug text-cream">
                  {p.title}
                </h3>
                <p className="mt-2 text-[12.5px] leading-relaxed text-slate-400">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section id="como-funciona" className="scroll-mt-24 border-t border-white/[0.06] py-14">
          <Eyebrow>Como resolvemos</Eyebrow>
          <h2 className="max-w-[22ch] text-balance text-[clamp(24px,3vw,32px)] font-semibold leading-tight tracking-[-0.02em] text-cream">
            Três passos, sem trocar de sistema jurídico.
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

        <section className="border-t border-white/[0.06] py-14">
          <MonoLabel>Já conectamos com</MonoLabel>
          <p className="mt-2.5 max-w-[60ch] text-[14px] text-slate-400">
            Sistemas jurídicos e financeiros que escritórios de advocacia já
            usam no dia a dia.
          </p>
          <div className="mt-5 flex flex-wrap gap-2.5">
            {PROOF.map((p) => (
              <span
                key={p}
                className="rounded-full border border-slate-800 px-3.5 py-2 font-mono text-[11.5px] tracking-[0.01em] text-slate-300"
              >
                {p}
              </span>
            ))}
          </div>
        </section>

        <section className="border-t border-white/[0.06] py-14">
          <Eyebrow>Perguntas frequentes</Eyebrow>
          <h2 className="max-w-[26ch] text-balance text-[clamp(22px,2.8vw,28px)] font-semibold leading-[1.3] tracking-[-0.015em] text-cream">
            O que escritórios perguntam antes de fechar.
          </h2>
          <div className="mx-auto mt-7 flex max-w-[800px] flex-col">
            {FAQS.map((f, i) => (
              <details
                key={f.q}
                className={`group border-t border-white/[0.06] ${
                  i === FAQS.length - 1 ? "border-b" : ""
                }`}
                open={i === 0}
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-3 py-4 text-[14.5px] font-semibold text-cream [&::-webkit-details-marker]:hidden">
                  {f.q}
                  <span className="shrink-0 font-mono text-[16px] text-slate-500 group-open:hidden">
                    +
                  </span>
                  <span className="hidden shrink-0 font-mono text-[16px] text-slate-500 group-open:block">
                    –
                  </span>
                </summary>
                <p className="max-w-[68ch] pb-4 text-[13.5px] leading-relaxed text-slate-400">
                  {f.a}
                </p>
              </details>
            ))}
          </div>
        </section>

        <section className="py-14 pb-20">
          <div className="flex flex-wrap items-center justify-between gap-6 rounded-lg border border-slate-800 bg-gradient-to-b from-[#131822] to-[#0F1420] p-8">
            <div>
              <h3 className="text-[18px] font-semibold text-cream">
                Vamos ver onde seu escritório está perdendo tempo?
              </h3>
              <p className="mt-2 max-w-[44ch] text-[13.5px] text-slate-400">
                30 minutos, sem compromisso. Você sai sabendo exatamente o
                que dá pra automatizar primeiro.
              </p>
            </div>
            <ButtonPrimary href="/contato">
              Agendar diagnóstico gratuito
            </ButtonPrimary>
          </div>
        </section>
      </main>
      <PageFooter />
    </>
  );
}
