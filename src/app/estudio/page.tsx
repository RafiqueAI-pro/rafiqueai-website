import type { Metadata } from "next";
import Link from "next/link";
import { HeroBackdrop } from "@/components/site/HeroBackdrop";
import { PageFooter } from "@/components/site/PageFooter";
import { ButtonPrimary, Eyebrow, MonoLabel } from "@/components/site/ui";

export const metadata: Metadata = {
  title: "Estúdio — Rafique AI",
  description:
    "Como a Rafique AI constrói automação que aguenta produção: diagnóstico, partitura, ensaio e regência.",
};

const STEPS = [
  {
    n: "01",
    title: "Diagnóstico",
    desc: "Mapeamos o fluxo real: onde o dado trava, quem reprocessa na mão.",
  },
  {
    n: "02",
    title: "Partitura",
    desc: "Desenhamos o fluxo como template — o que roda, em que ordem, com qual sinal de falha.",
  },
  {
    n: "03",
    title: "Ensaio",
    desc: "Rodamos em sandbox contra dado real antes de qualquer produção.",
  },
  {
    n: "04",
    title: "Regência",
    desc: "Publicamos com observabilidade — você vê a execução acontecer, não só o resultado.",
  },
];

const PRINCIPLES = [
  {
    title: "Evidência, não promessa",
    desc: "Toda automação publica seu próprio estado. Se não dá para ver rodando, não está pronta.",
  },
  {
    title: "Sandbox antes de produção",
    desc: "Nunca testamos fluxo novo contra dado de cliente. Ensaio primeiro, sempre.",
  },
  {
    title: "Dono, não órfão",
    desc: "Toda automação tem um responsável e uma forma de reprocessar quando falha.",
  },
];

const STACK = [
  "TypeScript",
  "Next.js",
  "Fastify",
  "PostgreSQL",
  "Observabilidade própria",
  "CI/CD",
];

export default function EstudioPage() {
  return (
    <>
      <HeroBackdrop current="estudio">
        <div className="mx-auto max-w-site px-6 pb-8 pt-[88px] md:px-10 lg:px-14">
          <Eyebrow>Estúdio</Eyebrow>
          <h1 className="max-w-[19ch] text-balance text-[clamp(32px,4.6vw,52px)] font-semibold leading-[1.1] tracking-[-0.025em] text-cream">
            Como construímos automação que aguenta produção.
          </h1>
          <p className="mt-5 max-w-[56ch] text-[17px] leading-relaxed text-slate-400">
            Todo projeto passa pelas mesmas quatro etapas. Sem atalho, sem
            gambiarra que vira dívida técnica depois.
          </p>
        </div>
      </HeroBackdrop>

      <main className="mx-auto max-w-site px-6 md:px-10 lg:px-14">
        <section className="pb-14 pt-14">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((s) => (
              <div key={s.n}>
                <div className="font-mono text-[28px] font-semibold text-slate-700">
                  {s.n}
                </div>
                <h3 className="mt-3.5 text-[15px] font-semibold text-cream">
                  {s.title}
                </h3>
                <p className="mt-2 text-[13.5px] leading-relaxed text-slate-400">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="border-t border-white/[0.06] pb-14 pt-14">
          <Eyebrow>Princípios</Eyebrow>
          <h2 className="max-w-[22ch] text-balance text-[clamp(24px,3vw,32px)] font-semibold leading-tight tracking-[-0.02em] text-cream">
            O que não abrimos mão.
          </h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {PRINCIPLES.map((p) => (
              <div
                key={p.title}
                className="rounded-lg border border-slate-800 bg-[#131822] p-6"
              >
                <h3 className="text-[15px] font-semibold text-cream">
                  {p.title}
                </h3>
                <p className="mt-2.5 text-[13.5px] leading-relaxed text-slate-400">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="border-t border-white/[0.06] py-14">
          <MonoLabel>Como operamos</MonoLabel>
          <p className="mt-2.5 max-w-[60ch] text-[14px] text-slate-400">
            As mesmas ferramentas em todo produto da suíte — sem exceção por
            cliente.
          </p>
          <div className="mt-5 flex flex-wrap gap-2.5">
            {STACK.map((s) => (
              <span
                key={s}
                className="rounded-full border border-slate-800 px-3.5 py-2 font-mono text-[11.5px] tracking-[0.01em] text-slate-300"
              >
                {s}
              </span>
            ))}
          </div>
        </section>

        <section className="pb-20 pt-6">
          <div className="flex flex-wrap items-center justify-between gap-6 rounded-lg border border-slate-800 bg-gradient-to-b from-[#131822] to-[#0F1420] p-8">
            <div>
              <h3 className="text-[18px] font-semibold text-cream">
                Quer ver o método rodando no seu fluxo?
              </h3>
              <div className="mt-2.5 flex flex-wrap gap-4">
                <a
                  href="/quem-somos"
                  className="text-[13px] text-slate-400 hover:text-pulse-400"
                >
                  Conhecer os fundadores →
                </a>
                <Link
                  href="/produtos/orkesta"
                  className="text-[13px] text-slate-400 hover:text-pulse-400"
                >
                  Ver os produtos →
                </Link>
              </div>
            </div>
            <ButtonPrimary href="/contato">Falar com a gente</ButtonPrimary>
          </div>
        </section>
      </main>
      <PageFooter />
    </>
  );
}
