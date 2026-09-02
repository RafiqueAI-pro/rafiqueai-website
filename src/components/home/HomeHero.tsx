import Link from "next/link";
import { SignalWeave } from "./SignalWeave";

const PRODUCTS = [
  {
    id: "pulse",
    name: "PULSE",
    accent: "bg-pulse-500",
    description: "Desenvolvimento, orquestração e monitoramento de automações.",
    stats: [
      { value: "191", label: "MONO STATITCS" },
      { value: "765", label: "MEDIA STATICS" },
    ],
  },
  {
    id: "crm",
    name: "CRM",
    accent: "bg-crm-500",
    description: "Funil, mídias sociais, agentes e BI em um só lugar.",
    stats: [
      { value: "2.9K", label: "TABULA FIGURES" },
      { value: "3.6M", label: "CONT REPORTS" },
    ],
  },
  {
    id: "contentos",
    name: "CONTENTOS",
    accent: "bg-contentos-500",
    description: "Produção e distribuição de conteúdo assistida por IA.",
    stats: [
      { value: "37%", label: "REOUNDED MAIDS" },
      { value: "138", label: "HIGH-LAVEL OF REFIOES" },
    ],
  },
] as const;

export function HomeHero() {
  return (
    <section className="relative isolate overflow-hidden">
      <SignalWeave />

      <div
        className="relative z-10 mx-auto flex w-full max-w-site flex-col px-[82px] max-[1375px]:px-10 max-md:px-6"
        style={{ minHeight: "calc(100dvh - 57px)" }}
      >
        <div className="pt-[58px] max-md:pt-10">
          <h1 className="max-w-[700px] font-sans text-[56px] font-semibold leading-[1.02] tracking-[-0.038em] text-cream max-lg:text-[44px] max-md:text-[34px]">
            Software que mostra
            <br />
            o que está acontecendo.
          </h1>
          <p className="mt-5 max-w-[390px] text-[15px] leading-[1.55] text-[#8B93A0]">
            Estúdio de produtos de automação e dados.
            <br />
            Construímos a suíte Orkesta.
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-3">
            <Link
              href="/produtos/orkesta"
              className="inline-flex h-[38px] items-center justify-center rounded-md bg-pulse-500 px-5 text-[13px] font-medium text-white transition-colors duration-base ease-standard hover:bg-pulse-600"
            >
              Conhecer o Pulse
            </Link>
            <Link
              href="/#produtos"
              className="inline-flex h-[38px] items-center justify-center rounded-md border border-white/30 px-5 text-[13px] font-medium text-cream transition-colors duration-base ease-standard hover:border-white/45 hover:bg-white/[0.03]"
            >
              Ver a suíte
            </Link>
          </div>
        </div>

        <div className="mt-[88px] flex flex-1 flex-col justify-end pb-6 max-md:mt-12">
          <div
            id="produtos"
            className="grid grid-cols-1 gap-2.5 md:grid-cols-3"
          >
            {PRODUCTS.map((product) => (
              <article
                key={product.id}
                className="rounded-[10px] border border-white/[0.11] bg-transparent px-5 pb-[18px] pt-4"
              >
                <div className={`mb-3 h-[3px] w-9 ${product.accent}`} />
                <h2 className="font-sans text-[11px] font-medium uppercase tracking-[0.16em] text-[#8B93A0]">
                  {product.name}
                </h2>
                <p className="mt-2 text-[14px] leading-[1.45] text-cream/90">
                  {product.description}
                </p>
              </article>
            ))}
          </div>

          <div
            id="estudio"
            className="mt-8 grid grid-cols-1 gap-2.5 md:grid-cols-3"
          >
            {PRODUCTS.map((product) => (
              <div key={product.id} className="grid grid-cols-2 gap-x-4">
                {product.stats.map((stat) => (
                  <div key={stat.label}>
                    <div className="font-sans text-[28px] font-semibold tabular-nums tracking-[-0.03em] text-cream">
                      {stat.value}
                    </div>
                    <div className="mt-1 font-mono text-[9px] font-medium uppercase tracking-[0.12em] text-[#5C6573]">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
