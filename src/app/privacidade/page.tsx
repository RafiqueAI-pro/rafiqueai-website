import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacidade — Rafique AI",
  description: "Política de privacidade da Rafique AI.",
};

export default function PrivacidadePage() {
  return (
    <section className="mx-auto max-w-site px-6 py-20 md:px-10 lg:px-12">
      <h1 className="text-3xl font-semibold tracking-[-0.02em] text-cream">
        Privacidade
      </h1>
      <p className="mt-6 max-w-2xl text-[15px] leading-relaxed text-slate-400">
        Tratamos dados com finalidade clara, retenção limitada e sem PII em
        painéis agregados. Para solicitações LGPD: contato@rafiqueai.com.br.
      </p>
    </section>
  );
}
