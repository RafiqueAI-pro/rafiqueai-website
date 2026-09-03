import type { Metadata } from "next";
import { PageHeader } from "@/components/site/PageHeader";
import { PageFooter } from "@/components/site/PageFooter";
import { ContactForm } from "@/components/site/ContactForm";
import { Eyebrow } from "@/components/site/ui";

export const metadata: Metadata = {
  title: "Contato — Rafique AI",
  description: "Fale com a Rafique AI sobre Pulse, CRM ou ContentOS.",
};

const AFTER_STEPS = [
  {
    n: "01",
    text: "Lemos e confirmamos recebimento por e-mail.",
  },
  {
    n: "02",
    text: "Agendamos uma call de 30min para entender o fluxo.",
  },
  {
    n: "03",
    text: "Retornamos com escopo e prazo — sem proposta genérica.",
  },
];

export default function ContatoPage() {
  return (
    <>
      <PageHeader current="contato" />
      <main className="mx-auto max-w-site px-6 md:px-10 lg:px-14">
        <section className="pt-[88px]">
          <Eyebrow>Contato</Eyebrow>
          <h1 className="max-w-[15ch] text-balance text-[clamp(34px,4.6vw,52px)] font-semibold leading-[1.08] tracking-[-0.025em] text-cream">
            Conte o que você precisa resolver.
          </h1>
          <p className="mt-5 max-w-[52ch] text-[17px] leading-relaxed text-slate-400">
            Respondemos em até 1 dia útil. Sem formulário de qualificação,
            sem robô de chat.
          </p>
        </section>

        <section className="grid gap-16 py-14 lg:grid-cols-[1.1fr_0.9fr]">
          <ContactForm />

          <div>
            <div className="rounded-lg border border-slate-800 bg-[#131822] p-8">
              <div className="mb-2.5 font-mono text-[10.5px] uppercase tracking-[0.08em] text-slate-500">
                Contato direto
              </div>
              <a
                href="mailto:contato@rafiqueai.com.br"
                className="block font-mono text-[15px] text-cream hover:text-pulse-400"
              >
                contato@rafiqueai.com.br
              </a>
              <div className="mt-1.5 font-mono text-[15px] text-slate-400">
                São Paulo, Brasil — remoto
              </div>
            </div>

            <div className="mt-6">
              <div className="mb-4 font-mono text-[10.5px] uppercase tracking-[0.08em] text-slate-500">
                Depois do envio
              </div>
              <div className="flex flex-col gap-4">
                {AFTER_STEPS.map((s) => (
                  <div key={s.n} className="flex items-start gap-3.5">
                    <div className="font-mono text-[16px] font-semibold text-slate-700">
                      {s.n}
                    </div>
                    <p className="pt-0.5 text-[14px] leading-relaxed text-slate-300">
                      {s.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <PageFooter />
    </>
  );
}
