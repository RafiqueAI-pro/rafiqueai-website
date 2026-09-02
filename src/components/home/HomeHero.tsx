import Link from "next/link";
import { SignalWeave } from "./SignalWeave";

const PRODUCTS = [
  {
    id: "pulse",
    name: "PULSE",
    accent: "bg-pulse-500",
    description: "Desenvolvimento, orquestração e monitoramento de automações.",
  },
  {
    id: "crm",
    name: "CRM",
    accent: "bg-crm-500",
    description: "Funil, mídias sociais, agentes e BI em um só lugar.",
  },
  {
    id: "contentos",
    name: "CONTENTOS",
    accent: "bg-contentos-500",
    description: "Produção e distribuição de conteúdo assistida por IA.",
  },
] as const;

/** Labels exatamente como no mock sitenovo.png. */
const STATS = [
  { value: "191", label: "MONO STATISTICS" },
  { value: "765", label: "MEDIA STATISTICS" },
  { value: "2.9K", label: "TABULA FIGURES" },
  { value: "3.6M", label: "CONT REPORTS" },
  { value: "37%", label: "REGUNDED MAIDS" },
  { value: "138", label: "HIGH-LEVEL OF REFIOES" },
] as const;

export function HomeHero() {
  return (
    <section className="relative isolate min-h-[calc(100dvh-64px)] overflow-hidden">
      <SignalWeave className="top-[8%] hidden h-[70%] md:flex" />

      <div className="relative z-10 mx-auto flex h-[calc(100dvh-64px)] max-w-site flex-col px-6 pb-8 pt-12 md:px-10 lg:px-12 lg:pt-14">
        <div className="max-w-[620px]">
          <h1 className="font-sans text-[clamp(2.25rem,4.4vw,3.35rem)] font-semibold leading-[1.06] tracking-[-0.03em] text-cream">
            Software que mostra
            <br />
            o que está acontecendo.
          </h1>
          <p className="mt-5 max-w-[400px] text-[15px] leading-[1.55] text-slate-400">
            Estúdio de produtos de automação e dados.
            <br />
            Construímos a suíte Orkesta.
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-3">
            <Link
              href="/produtos/orkesta"
              className="inline-flex h-10 items-center justify-center rounded-lg bg-pulse-500 px-5 text-[14px] font-medium text-white transition-colors duration-base ease-standard hover:bg-pulse-600"
            >
              Conhecer o Pulse
            </Link>
            <Link
              href="/#produtos"
              className="inline-flex h-10 items-center justify-center rounded-lg border border-white/20 px-5 text-[14px] font-medium text-cream transition-colors duration-base ease-standard hover:border-white/40 hover:bg-white/[0.04]"
            >
              Ver a suíte
            </Link>
          </div>
        </div>

        <div
          id="produtos"
          className="mt-auto grid grid-cols-1 gap-3 pt-10 md:grid-cols-3 md:gap-3"
        >
          {PRODUCTS.map((product) => (
            <article
              key={product.id}
              className="rounded-lg border border-white/[0.09] bg-[#0e141c] px-5 py-5"
            >
              <div className={`mb-3.5 h-[3px] w-9 rounded-[1px] ${product.accent}`} />
              <h2 className="font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-slate-400">
                {product.name}
              </h2>
              <p className="mt-2.5 text-[14px] leading-[1.5] text-slate-200">
                {product.description}
              </p>
            </article>
          ))}
        </div>

        <div
          id="estudio"
          className="mt-8 grid grid-cols-2 gap-x-6 gap-y-6 sm:grid-cols-3 md:grid-cols-6 md:gap-x-3"
        >
          {STATS.map((stat) => (
            <div key={stat.label}>
              <div className="font-mono text-[26px] font-medium tabular-nums tracking-[-0.02em] text-cream md:text-[28px]">
                {stat.value}
              </div>
              <div className="mt-1 font-mono text-[9px] font-medium uppercase tracking-[0.1em] text-slate-500">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
