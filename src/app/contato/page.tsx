import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contato — Rafique AI",
  description: "Fale com a Rafique AI sobre Pulse, CRM ou ContentOS.",
};

export default function ContatoPage() {
  return (
    <div className="min-h-dvh bg-[#0C1019] text-[#F3EEDC]">
      <header className="border-b border-white/[0.06] px-[82px] py-4 max-md:px-6">
        <Link href="/" className="text-[14px] font-semibold tracking-[0.06em]">
          RAFIQUE AI
        </Link>
      </header>
      <section className="px-[82px] py-20 max-md:px-6">
        <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-[#5C6573]">
          Contato
        </p>
        <h1 className="mt-4 text-[clamp(2rem,4vw,2.75rem)] font-semibold tracking-[-0.025em]">
          Falar com a gente
        </h1>
        <p className="mt-6 max-w-md text-[15px] leading-relaxed text-[#8B93A0]">
          Conte o que precisa. Resposta direta.
        </p>
        <a
          href="mailto:contato@rafiqueai.com.br"
          className="mt-10 inline-flex h-11 items-center rounded-md bg-[#37959D] px-5 text-[14px] font-medium text-white"
        >
          contato@rafiqueai.com.br
        </a>
      </section>
    </div>
  );
}
