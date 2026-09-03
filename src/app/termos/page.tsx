import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Termos — Rafique AI",
  description: "Termos de uso da Rafique AI.",
};

export default function TermosPage() {
  return (
    <section className="mx-auto max-w-site px-6 py-20 md:px-10 lg:px-12">
      <h1 className="text-3xl font-semibold tracking-[-0.02em] text-cream">
        Termos de uso
      </h1>
      <p className="mt-6 max-w-2xl text-[15px] leading-relaxed text-slate-400">
        O uso do site e dos produtos Orkesta segue os contratos comerciais
        aplicáveis a cada cliente. Dúvidas: contato@rafiqueai.com.br.
      </p>
    </section>
  );
}
