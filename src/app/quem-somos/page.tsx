import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sobre — Rafique AI",
  description: "Estúdio de produtos de automação e dados. Rafael e Henrique.",
};

export default function QuemSomosPage() {
  return (
    <section className="mx-auto max-w-site px-6 py-20 md:px-10 lg:px-12">
      <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-slate-500">
        Sobre
      </p>
      <h1 className="mt-4 max-w-xl text-[clamp(2rem,4vw,2.75rem)] font-semibold tracking-[-0.025em] text-cream">
        Estúdio de produtos de automação e dados.
      </h1>
      <p className="mt-6 max-w-lg text-[15px] leading-relaxed text-slate-400">
        Rafique AI é a casa. Construímos a suíte Orkesta — Pulse, CRM e
        ContentOS — para operação sob controle.
      </p>
      <Link
        href="/contato"
        className="mt-10 inline-flex h-11 items-center rounded-lg bg-pulse-500 px-5 text-[14px] font-medium text-white hover:bg-pulse-600"
      >
        Falar com a gente
      </Link>
    </section>
  );
}
