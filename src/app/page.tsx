import type { Metadata } from "next";
import Image from "next/image";
import { PageHeader } from "@/components/site/PageHeader";
import { PageFooter } from "@/components/site/PageFooter";
import { ButtonPrimary, ButtonOutline } from "@/components/site/ui";

export const metadata: Metadata = {
  title: "Rafique AI — Software que mostra o que está acontecendo",
  description:
    "Estúdio de produtos de automação e dados. Construímos a suíte Orkesta: Pulse, CRM e ContentOS.",
};

const PRODUCTS = [
  {
    key: "pulse",
    label: "Pulse",
    accent: "bg-pulse-400",
    mono: "text-pulse-400",
    description: "Desenvolvimento, orquestração e monitoramento de automações.",
    href: "/produtos/orkesta#pulse",
  },
  {
    key: "crm",
    label: "CRM",
    accent: "bg-crm-400",
    mono: "text-crm-400",
    description: "Funil, mídias sociais, agentes e BI em um só lugar.",
    href: "/produtos/orkesta#crm",
  },
  {
    key: "contentos",
    label: "ContentOS",
    accent: "bg-contentos-400",
    mono: "text-contentos-400",
    description: "Produção e distribuição de conteúdo assistida por IA.",
    href: "/produtos/orkesta#contentos",
  },
] as const;

export default function HomePage() {
  return (
    <>
      <PageHeader />
      <main>
        <section className="relative overflow-hidden border-b border-white/[0.06]">
          <Image
            src="/brand/wave-exact.svg"
            alt=""
            aria-hidden="true"
            fill
            unoptimized
            className="pointer-events-none hidden object-cover object-right md:block"
          />
          <div className="relative mx-auto max-w-site px-6 pb-20 pt-16 md:px-10 md:pb-28 md:pt-20 lg:px-14">
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
        </section>

        <section
          id="produtos"
          className="scroll-mt-24 mx-auto max-w-site px-6 py-16 md:px-10 md:py-20 lg:px-14"
        >
          <div id="estudio" className="scroll-mt-24 grid gap-5 md:grid-cols-3">
            {PRODUCTS.map((product) => (
              <a
                key={product.key}
                href={product.href}
                className="group rounded-xl border border-slate-800 bg-[#11161F] p-6 transition-colors hover:border-slate-600"
              >
                <span
                  className={`block h-[3px] w-6 rounded-full ${product.accent}`}
                />
                <div
                  className={`mt-4 font-mono text-[11px] uppercase tracking-[0.1em] ${product.mono}`}
                >
                  {product.label}
                </div>
                <p className="mt-2.5 text-[15px] leading-relaxed text-cream">
                  {product.description}
                </p>
              </a>
            ))}
          </div>
        </section>
      </main>
      <PageFooter />
    </>
  );
}
