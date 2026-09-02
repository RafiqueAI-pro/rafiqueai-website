import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contato — Rafique AI",
  description: "Fale com a Rafique AI sobre Pulse, CRM ou ContentOS.",
};

export default function ContatoPage() {
  return (
    <section className="mx-auto max-w-site px-6 py-20 md:px-10 lg:px-12">
      <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-slate-500">
        Contato
      </p>
      <h1 className="mt-4 text-[clamp(2rem,4vw,2.75rem)] font-semibold tracking-[-0.025em] text-cream">
        Falar com a gente
      </h1>
      <p className="mt-6 max-w-md text-[15px] leading-relaxed text-slate-400">
        Conte o que precisa. Resposta direta — sem formulário genérico de
        marketing.
      </p>
      <form
        className="mt-10 flex max-w-md flex-col gap-4"
        action="mailto:contato@rafiqueai.com.br"
        method="get"
      >
        <label className="flex flex-col gap-1.5 text-[13px] text-slate-400">
          Nome
          <input
            name="subject"
            required
            className="h-11 rounded-lg border border-white/10 bg-white/[0.03] px-3 text-[14px] text-cream outline-none focus:border-pulse-500"
          />
        </label>
        <label className="flex flex-col gap-1.5 text-[13px] text-slate-400">
          E-mail
          <input
            type="email"
            name="body"
            required
            className="h-11 rounded-lg border border-white/10 bg-white/[0.03] px-3 text-[14px] text-cream outline-none focus:border-pulse-500"
          />
        </label>
        <label className="flex flex-col gap-1.5 text-[13px] text-slate-400">
          O que precisa
          <textarea
            name="body"
            rows={4}
            required
            className="rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2 text-[14px] text-cream outline-none focus:border-pulse-500"
          />
        </label>
        <button
          type="submit"
          className="mt-2 inline-flex h-11 items-center justify-center rounded-lg bg-pulse-500 px-5 text-[14px] font-medium text-white hover:bg-pulse-600"
        >
          Enviar
        </button>
      </form>
    </section>
  );
}
