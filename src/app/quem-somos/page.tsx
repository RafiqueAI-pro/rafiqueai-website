import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sobre — Rafique AI",
  description: "Estúdio de produtos de automação e dados. Rafael e Henrique.",
};

export default function QuemSomosPage() {
  return (
    <div className="min-h-dvh bg-[#0C1019] text-[#F3EEDC]">
      <header className="border-b border-white/[0.06] px-[82px] py-4 max-md:px-6">
        <Link href="/" className="text-[14px] font-semibold tracking-[0.06em]">
          RAFIQUE AI
        </Link>
      </header>
      <section className="px-[82px] py-20 max-md:px-6">
        <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-[#5C6573]">
          Sobre
        </p>
        <h1 className="mt-4 max-w-xl text-[clamp(2rem,4vw,2.75rem)] font-semibold tracking-[-0.025em]">
          Estúdio de produtos de automação e dados.
        </h1>
        <p className="mt-6 max-w-lg text-[15px] leading-relaxed text-[#8B93A0]">
          Rafique AI é a casa. Construímos a suíte Orkesta — Pulse, CRM e
          ContentOS — para operação sob controle.
        </p>
        <Link
          href="/contato"
          className="mt-10 inline-flex h-11 items-center rounded-md bg-[#37959D] px-5 text-[14px] font-medium text-white"
        >
          Falar com a gente
        </Link>
      </section>
    </div>
  );
}
