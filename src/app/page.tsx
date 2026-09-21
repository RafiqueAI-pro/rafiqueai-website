import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { HeroBackdrop } from "@/components/site/HeroBackdrop";
import { PageFooter } from "@/components/site/PageFooter";
import { ButtonPrimary, ButtonOutline, Eyebrow } from "@/components/site/ui";
import { Faq } from "@/components/site/Faq";

export const metadata: Metadata = {
  title: "Rafique AI — Software que mostra o que está acontecendo",
  description:
    "Automatizamos seus sistemas. Entregamos dados que fazem a diferença. RPA, IA e BI aplicados à sua operação — estúdio por trás da suíte Orkesta.",
};

const PILLARS = [
  {
    tag: "Automação & RPA",
    color: "text-pulse-400",
    title: "Sistemas que passam a conversar",
    desc: "Conectamos as ferramentas que você já usa e eliminamos o trabalho manual repetitivo — de captura de lead a emissão de boleto.",
  },
  {
    tag: "IA aplicada",
    color: "text-crm-400",
    title: "Agentes que fazem o trabalho repetitivo",
    desc: "Atendimento, triagem e geração de conteúdo com IA — sem substituir critério humano onde ele importa.",
  },
  {
    tag: "BI & Dados",
    color: "text-contentos-400",
    title: "Um painel para ver o que importa",
    desc: "Dashboards que unificam dados de todos os sistemas — no Pulse, no PowerBI ou no Metabase, onde sua equipe já trabalha.",
  },
] as const;

const STATS = [
  { value: "5+", label: "anos de experiência em automação" },
  { value: "20k+", label: "execuções/mês (workers e robôs)" },
  { value: "3", label: "produtos na suíte Orkesta" },
];

const INTEGRATIONS = [
  { name: "GNEXT", category: "GoHighLevel", logo: null, swatch: "light" },
  { name: "Atlas Jus", category: "Gestão jurídica", logo: "/brand/integrations/atlas-jus.svg", swatch: "light" },
  { name: "Conta Azul", category: "Financeiro", logo: "/brand/integrations/conta-azul.svg", swatch: "light" },
  { name: "Asaas", category: "Cobrança", logo: "/brand/integrations/asaas.svg", swatch: "light" },
  { name: "Google Workspace", category: "Produtividade", logo: "/brand/integrations/google-workspace.svg", swatch: "light" },
  { name: "Microsoft 365", category: "E-mail & Teams", logo: "/brand/integrations/microsoft-365.svg", swatch: "light" },
  { name: "Oystr", category: "Gestão jurídica", logo: "/brand/integrations/oystr.png", swatch: "light" },
  // iiLex's exported mark uses near-white fills meant for a dark ground.
  { name: "iiLex", category: "Gestão jurídica", logo: "/brand/integrations/ilex.svg", swatch: "dark" },
  { name: "RD Station", category: "Marketing", logo: "/brand/integrations/rd-station.svg", swatch: "light" },
  { name: "Pipedrive", category: "CRM", logo: "/brand/integrations/pipedrive.svg", swatch: "light" },
  // PipeRun's wordmark is white-on-transparent, same reason.
  { name: "PipeRun", category: "CRM", logo: "/brand/integrations/piperun.svg", swatch: "dark" },
  { name: "WhatsApp", category: "Mensageria", logo: "/brand/integrations/whatsapp.svg", swatch: "light" },
  { name: "Telegram", category: "Mensageria", logo: "/brand/integrations/telegram.svg", swatch: "light" },
] as const;

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
    description:
      "Dashboard total de controle — conecta o que você já automatizou e mostra o que importa.",
    href: "/produtos/pulse",
  },
  {
    key: "crm",
    label: "CRM",
    dot: "bg-crm-400",
    mono: "text-crm-400",
    description: "Funil, mídias sociais, agentes e BI em um só lugar.",
    href: "/produtos/crm",
  },
  {
    key: "contentos",
    label: "ContentOS",
    dot: "bg-contentos-400",
    mono: "text-contentos-400",
    description: "Produção e distribuição de conteúdo assistida por IA.",
    href: "/produtos/contentos",
  },
] as const;

const CLIENTS = [
  { name: "Ascenda", logo: "/logos/ascenda.png", desc: "App mobile — aluno e profissional", own: false },
  { name: "Harumi Doi Arquitetura", logo: null, desc: "Site institucional, gerido no ContentOS", own: false },
  { name: "GCDR Advogados", logo: null, desc: "Automação de processos e atendimento", own: false },
  { name: "Orkesta Pulse", logo: "/logos/orkesta.png", desc: "Nosso próprio controle de automações", own: true },
  { name: "Orkesta CRM", logo: "/logos/orkesta.png", desc: "Nosso próprio funil comercial", own: true },
] as const;

const HOME_FAQ = [
  {
    question: "Serve pro meu tipo de negócio?",
    answer:
      "Trabalhamos com perfis bem diferentes — de escritórios de advocacia e clínicas a e-commerce e serviço local. O diagnóstico inicial existe justamente pra mapear se o seu fluxo tem automação que vale a pena antes de qualquer proposta.",
  },
  {
    question: "E se eu já uso n8n, Make ou Zapier?",
    answer:
      "A Orkesta conecta e substitui aos poucos — não exige jogar fora o que já existe. Entendemos o que já está rodando antes de propor qualquer troca.",
  },
  {
    question: "Quanto tempo até funcionar de verdade?",
    answer:
      "Não existe prazo padrão — depende do fluxo. O diagnóstico mapeia o fluxo real em poucos dias, e a primeira automação roda em sandbox contra dado real antes de qualquer coisa tocar produção. Não é promessa abstrata, é processo testado antes de valer pra você.",
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
        <div className="mx-auto max-w-site px-6 pb-16 pt-16 md:px-10 md:pb-20 md:pt-20 lg:px-14">
          <h1 className="max-w-[17ch] text-balance text-[clamp(38px,6vw,76px)] font-bold leading-[1.04] tracking-[-0.03em] text-cream">
            Software que mostra o que está acontecendo.
          </h1>
          <p className="mt-6 max-w-[48ch] text-[18px] font-medium leading-relaxed text-cream">
            Automatizamos seus sistemas. Entregamos dados que fazem a
            diferença.
          </p>
          <p className="mt-2.5 max-w-[46ch] text-[15px] leading-relaxed text-slate-500">
            RPA, IA e BI aplicados à sua operação — não em teoria, no seu
            fluxo real.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonPrimary href="/produtos/pulse">
              Conhecer o Pulse
            </ButtonPrimary>
            <ButtonOutline href="#produtos">Ver a suíte</ButtonOutline>
          </div>
        </div>
      </HeroBackdrop>

      <main>
        <section className="border-b border-white/[0.06] py-16 md:py-20">
          <div className="mx-auto max-w-site px-6 md:px-10 lg:px-14">
            <Eyebrow>O que fazemos</Eyebrow>
            <h2 className="max-w-[22ch] text-balance text-[clamp(24px,3vw,32px)] font-semibold leading-[1.25] tracking-[-0.02em] text-cream">
              RPA, IA e BI — na sua operação, não em teoria.
            </h2>
            <div className="mt-9 grid gap-5 md:grid-cols-3">
              {PILLARS.map((p) => (
                <div
                  key={p.tag}
                  className="rounded-xl border border-slate-800 bg-[#131822] p-6"
                >
                  <div
                    className={`font-mono text-[10.5px] uppercase tracking-[0.08em] ${p.color}`}
                  >
                    {p.tag}
                  </div>
                  <h3 className="mt-3 text-[17px] font-semibold text-cream">
                    {p.title}
                  </h3>
                  <p className="mt-2.5 text-[13.5px] leading-relaxed text-slate-400">
                    {p.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-white/[0.06]">
          <div className="mx-auto flex max-w-site flex-wrap gap-12 px-6 py-9 md:px-10 lg:px-14">
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
          <div className="mx-auto max-w-site px-6 md:px-10 lg:px-14">
            <Eyebrow>Integrações</Eyebrow>
            <h2 className="max-w-[26ch] text-balance text-[clamp(22px,2.8vw,28px)] font-semibold leading-[1.3] tracking-[-0.015em] text-cream">
              Conectamos com o que você já usa.
            </h2>
            <p className="mt-2.5 max-w-[52ch] text-[14.5px] leading-relaxed text-slate-400">
              Sem trocar de sistema. O Pulse lê e escreve direto nas
              ferramentas que já rodam no seu negócio.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-2.5 sm:grid-cols-3 md:grid-cols-4">
              {INTEGRATIONS.map((it) => (
                <div
                  key={it.name}
                  className="flex items-center gap-3 rounded-lg border border-slate-800 bg-[#131822] p-3.5"
                >
                  <div
                    className={`relative h-10 w-14 shrink-0 overflow-hidden rounded-md ${
                      it.swatch === "dark" ? "bg-[#1A2029]" : "bg-white"
                    }`}
                  >
                    {it.logo ? (
                      <Image
                        src={it.logo}
                        alt={it.name}
                        fill
                        unoptimized
                        className="object-contain p-2"
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center font-mono text-[13px] font-semibold text-slate-900">
                        {it.name.slice(0, 1)}
                      </div>
                    )}
                  </div>
                  <div className="min-w-0">
                    <div className="truncate text-[13px] font-medium text-slate-200">
                      {it.name}
                    </div>
                    <div className="mt-0.5 font-mono text-[10px] text-slate-500">
                      {it.category}
                    </div>
                  </div>
                </div>
              ))}
            </div>
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
            <Eyebrow>Quem já roda com a gente</Eyebrow>
            <h2 className="max-w-[26ch] text-balance text-[clamp(22px,2.8vw,28px)] font-semibold leading-[1.25] tracking-[-0.02em] text-cream">
              Inclusive nós mesmos.
            </h2>
            <p className="mt-4 max-w-[60ch] text-[14.5px] leading-relaxed text-slate-400">
              O Pulse e o CRM não são só produtos que vendemos — são o que a
              Rafique AI usa todo dia pra rodar a própria operação.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {CLIENTS.map((c) => (
                <div
                  key={c.name}
                  className={`flex items-center gap-3.5 rounded-lg border p-4 ${
                    c.own
                      ? "border-pulse-500/40 bg-pulse-400/[0.06]"
                      : "border-slate-800 bg-[#131822]"
                  }`}
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-md border border-slate-700 bg-white">
                    {c.logo ? (
                      <Image src={c.logo} alt={c.name} width={40} height={40} unoptimized className="object-contain p-1.5" />
                    ) : (
                      <span className="font-mono text-[13px] font-semibold text-slate-900">
                        {c.name.slice(0, 1)}
                      </span>
                    )}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2">
                      <span className="truncate text-[13.5px] font-semibold text-cream">{c.name}</span>
                      {c.own ? (
                        <span className="shrink-0 rounded-[4px] border border-pulse-500/40 bg-pulse-400/10 px-[6px] py-[1px] font-mono text-[9px] font-semibold uppercase tracking-[0.04em] text-pulse-400">
                          Usamos
                        </span>
                      ) : null}
                    </div>
                    <p className="mt-0.5 truncate text-[12px] text-slate-400">{c.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
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
