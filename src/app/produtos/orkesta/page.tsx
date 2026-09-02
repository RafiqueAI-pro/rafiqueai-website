import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Orkesta — Rafique AI",
  description: "A suíte Orkesta: Pulse, CRM e ContentOS.",
};

const PRODUCTS = [
  {
    href: "/produtos/orkesta#pulse",
    name: "Pulse",
    accent: "bg-pulse-500",
    blurb: "Desenvolvimento, orquestração e monitoramento de automações.",
  },
  {
    href: "/produtos/orkesta#crm",
    name: "CRM",
    accent: "bg-crm-500",
    blurb: "Funil, mídias sociais, agentes e BI em um só lugar.",
  },
  {
    href: "/produtos/orkesta#contentos",
    name: "ContentOS",
    accent: "bg-contentos-500",
    blurb: "Produção e distribuição de conteúdo assistida por IA.",
  },
] as const;

export default function OrkestaPage() {
  return (
    <section className="mx-auto max-w-site px-6 py-20 md:px-10 lg:px-12">
      <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-slate-500">
        Orkesta — by Rafique AI
      </p>
      <h1 className="mt-4 max-w-2xl text-[clamp(2rem,4vw,2.75rem)] font-semibold tracking-[-0.025em] text-cream">
        Uma operação, um lugar.
      </h1>
      <div className="mt-12 grid gap-4 md:grid-cols-3">
        {PRODUCTS.map((p) => (
          <article
            key={p.name}
            id={p.name.toLowerCase()}
            className="rounded-lg border border-white/[0.08] bg-white/[0.02] px-5 py-6"
          >
            <div className={`mb-4 h-[3px] w-10 rounded-full ${p.accent}`} />
            <h2 className="font-mono text-[11px] uppercase tracking-[0.14em] text-slate-400">
              {p.name}
            </h2>
            <p className="mt-3 text-[14px] text-slate-200">{p.blurb}</p>
          </article>
        ))}
      </div>
      <Link
        href="/contato"
        className="mt-10 inline-flex h-11 items-center rounded-lg bg-pulse-500 px-5 text-[14px] font-medium text-white hover:bg-pulse-600"
      >
        Falar com a gente
      </Link>
    </section>
  );
}
