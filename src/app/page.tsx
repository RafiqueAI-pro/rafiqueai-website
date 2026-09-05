import type { Metadata } from "next";
import Link from "next/link";
import { HeroBackdrop } from "@/components/site/HeroBackdrop";
import { PageFooter } from "@/components/site/PageFooter";
import { ButtonPrimary, ButtonOutline, Eyebrow } from "@/components/site/ui";
import { Faq } from "@/components/site/Faq";

export const metadata: Metadata = {
  title: "Rafique AI — Software que mostra o que está acontecendo",
  description:
    "Estúdio de produtos de automação e dados. Construímos a suíte Orkesta: Pulse, CRM e ContentOS.",
};

const STATS = [
  { value: "5+", label: "anos de experiência em automação" },
  { value: "20k+", label: "execuções/mês (workers e robôs)" },
  { value: "3", label: "produtos na suíte Orkesta" },
];

const FOUNDERS = [
  { initial: "R", name: "Rafael Meireles", role: "DevOps & Scrum Master" },
  { initial: "H", name: "Henrique Silva", role: "Arquitetura & Backend" },
];

const PRODUCTS = [
  {
    key: "pulse",
    label: "Pulse",
    dot: "bg-pulse-400",
    mono: "text-pulse-400",
    description: "Desenvolvimento, orquestração e monitoramento de automações.",
    href: "/produtos/orkesta#pulse",
  },
  {
    key: "crm",
    label: "CRM",
    dot: "bg-crm-400",
    mono: "text-crm-400",
    description: "Funil, mídias sociais, agentes e BI em um só lugar.",
    href: "/produtos/orkesta#crm",
  },
  {
    key: "contentos",
    label: "ContentOS",
    dot: "bg-contentos-400",
    mono: "text-contentos-400",
    description: "Produção e distribuição de conteúdo assistida por IA.",
    href: "/produtos/orkesta#contentos",
  },
] as const;

const HOME_FAQ = [
  {
    question: "Serve pro meu tipo de negócio?",
    answer:
      "Trabalhamos com perfis bem diferentes — de uma consultoria fitness (o Cadia, um produto próprio da Orkesta) a e-commerce e serviço local. O diagnóstico inicial existe justamente pra mapear se o seu fluxo tem automação que vale a pena antes de qualquer proposta.",
  },
  {
    question: "E se eu já uso n8n, Make ou Zapier?",
    answer:
      "A Orkesta conecta e substitui aos poucos — não exige jogar fora o que já existe. Entendemos o que já está rodando antes de propor qualquer troca.",
  },
  {
    question: "Quanto tempo até funcionar de verdade?",
    answer:
      "Usamos o Cadia como referência de prazo real: é um produto nosso, em produção, com 100 usuários ativos e 8 assinantes pagantes — não uma promessa abstrata de automação.",
  },
  {
    question: "RPA ou agente de IA — quem decide isso?",
    answer:
      "A gente. Errar essa escolha custa o projeto e a reputação de quem contratou — por isso o diagnóstico inclui recomendar a abordagem certa, não vender a mais cara.",
  },
];

export default function HomePage() {
  return (
    <>
      <HeroBackdrop>
        <div className="mx-auto max-w-site px-6 pb-20 pt-16 md:px-10 md:pb-28 md:pt-20 lg:px-14">
          <h1 className="max-w-[17ch] text-balance text-[clamp(38px,6.4vw,84px)] font-bold leading-[1.04] tracking-[-0.03em] text-cream">
            Software que mostra o que está acontecendo.
          </h1>
          <p className="mt-6 max-w-[46ch] text-[17px] leading-relaxed text-slate-400 md:text-[18px]">
            Estúdio de produtos de automação e dados. Construímos a suíte
            Orkesta.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonPrimary href="/produtos/orkesta">
              Conhecer o Pulse
            </ButtonPrimary>
            <ButtonOutline href="#produtos">Ver a suíte</ButtonOutline>
          </div>
        </div>
      </HeroBackdrop>

      <main>
        <section className="border-b border-white/[0.06]">
          <div className="mx-auto flex max-w-site flex-wrap gap-12 px-6 py-10 md:px-10 lg:px-14">
            {STATS.map((s) => (
              <div key={s.label}>
                <b className="block font-mono text-[34px] font-semibold tracking-[-0.01em] text-cream">
                  {s.value}
                </b>
                <span className="font-mono text-[10.5px] uppercase tracking-[0.06em] text-slate-500">
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </section>

        <section className="border-b border-white/[0.06] py-16 md:py-20">
          <div className="mx-auto grid max-w-site gap-10 px-6 md:px-10 lg:grid-cols-[1.2fr_1fr] lg:px-14">
            <div>
              <Eyebrow>O estúdio</Eyebrow>
              <h2 className="max-w-[20ch] text-balance text-[clamp(24px,3vw,32px)] font-semibold leading-[1.25] tracking-[-0.02em] text-cream">
                Software para quem precisa ver o que está rodando, não
                adivinhar.
              </h2>
              <p className="mt-4 max-w-[52ch] text-[15.5px] leading-relaxed text-slate-400">
                Rafael e Henrique constroem produtos que expõem a operação —
                não painéis bonitos, ferramenta que resolve. A Orkesta nasceu
                de operação real, não de brainstorm.
              </p>
              <a
                href="/estudio"
                className="mt-5 inline-flex items-center gap-1.5 text-[13px] font-medium text-pulse-400 hover:text-pulse-400/80"
              >
                Conhecer o estúdio →
              </a>
            </div>
            <div className="flex flex-col gap-3">
              {FOUNDERS.map((f) => (
                <div
                  key={f.name}
                  className="flex items-center gap-3.5 rounded-lg border border-slate-800 bg-[#131822] p-4"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-slate-700 font-mono text-[15px] font-semibold text-cream">
                    {f.initial}
                  </div>
                  <div>
                    <div className="text-[14px] font-semibold text-cream">
                      {f.name}
                    </div>
                    <div className="mt-0.5 font-mono text-[10.5px] uppercase tracking-[0.05em] text-pulse-400">
                      {f.role}
                    </div>
                  </div>
                </div>
              ))}
              <a
                href="/quem-somos"
                className="mt-0.5 self-start text-[13px] font-medium text-pulse-400 hover:text-pulse-400/80"
              >
                Ver os fundadores →
              </a>
            </div>
          </div>
        </section>

        <section
          id="produtos"
          className="scroll-mt-24 mx-auto max-w-site px-6 py-16 md:px-10 md:py-20 lg:px-14"
        >
          <div>
            {PRODUCTS.map((product) => (
              <a
                key={product.key}
                href={product.href}
                className="flex flex-wrap items-center gap-3.5 border-b border-white/[0.06] py-5 first:border-t hover:border-white/[0.12]"
              >
                <span className={`h-2 w-2 shrink-0 rounded-full ${product.dot}`} />
                <span
                  className={`w-[110px] shrink-0 font-mono text-[12.5px] uppercase tracking-[0.06em] ${product.mono}`}
                >
                  {product.label}
                </span>
                <span className="min-w-[200px] flex-1 text-[14px] text-slate-400">
                  {product.description}
                </span>
              </a>
            ))}
          </div>
          <Link
            href="/produtos/orkesta"
            className="mt-6 inline-flex items-center gap-1.5 text-[13px] font-medium text-pulse-400 hover:text-pulse-400/80"
          >
            Ver a suíte completa →
          </Link>
        </section>

        <section className="border-t border-white/[0.06] py-16 md:py-20">
          <div className="mx-auto max-w-site px-6 md:px-10 lg:px-14">
            <Eyebrow>Perguntas frequentes</Eyebrow>
            <h2 className="mb-8 max-w-[26ch] text-balance text-[clamp(22px,2.8vw,28px)] font-semibold leading-[1.25] tracking-[-0.02em] text-cream">
              Antes de falar com a gente
            </h2>
            <Faq items={HOME_FAQ} />
          </div>
        </section>
      </main>
      <PageFooter />
    </>
  );
}
