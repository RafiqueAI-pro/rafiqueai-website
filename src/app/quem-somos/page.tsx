import type { Metadata } from "next";
import { PageHeader } from "@/components/site/PageHeader";
import { PageFooter } from "@/components/site/PageFooter";
import { Eyebrow } from "@/components/site/ui";

export const metadata: Metadata = {
  title: "Quem somos — Rafique AI",
  description:
    "Rafael Meireles e Henrique Silva. Estúdio de engenharia aplicada por trás da suíte Orkesta.",
};

const FOUNDERS = [
  {
    initial: "R",
    name: "Rafael Meireles",
    role: "DevOps & Scrum Master",
    bio: "Mantém a esteira de deploy, infraestrutura e cadência de time. Garante que o que sai do ensaio chega em produção sem sobressalto.",
    stack: "DevOps · CI/CD · Scrum",
  },
  {
    initial: "H",
    name: "Henrique Silva",
    role: "Arquitetura & Backend",
    bio: "Desenha a arquitetura e constrói a base: API, banco de dados, orquestração. Mantém o que roda em produção rodando.",
    stack: "Arquitetura · Backend · Dados",
  },
];

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

const STATS = [
  { value: "9", label: "anos de operação" },
  { value: "1.284", label: "execuções/mês em produção" },
  { value: "3", label: "produtos na suíte Orkesta" },
];

export default function QuemSomosPage() {
  return (
    <>
      <PageHeader current="sobre" />
      <main className="mx-auto max-w-site px-6 md:px-10 lg:px-14">
        <section className="pt-[88px]">
          <Eyebrow>Quem somos</Eyebrow>
          <h1 className="max-w-[15ch] text-balance text-[clamp(34px,4.6vw,52px)] font-semibold leading-[1.08] tracking-[-0.025em] text-cream">
            Dois fundadores. Um estúdio de engenharia aplicada.
          </h1>
          <p className="mt-5 max-w-[52ch] text-[17px] leading-relaxed text-slate-400">
            Rafael e Henrique constroem software que expõe o que está
            acontecendo — não painéis bonitos, produto que resolve. A Orkesta
            nasceu de operação real, não de brainstorm.
          </p>
        </section>

        <section className="pb-14 pt-14">
          <div className="grid gap-6 md:grid-cols-2">
            {FOUNDERS.map((f) => (
              <div
                key={f.name}
                className="rounded-lg border border-slate-800 bg-[#131822] p-8"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-md border border-slate-700 font-mono text-xl font-semibold text-cream">
                  {f.initial}
                </div>
                <h3 className="text-lg font-semibold text-cream">{f.name}</h3>
                <div className="mt-1 font-mono text-[11px] uppercase tracking-[0.06em] text-pulse-400">
                  {f.role}
                </div>
                <p className="mt-3.5 text-[14px] leading-relaxed text-slate-400">
                  {f.bio}
                </p>
                <div className="mt-4 border-t border-white/[0.06] pt-4 font-mono text-[11.5px] text-slate-500">
                  {f.stack}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="pb-14">
          <Eyebrow>Como trabalhamos</Eyebrow>
          <h2 className="max-w-[22ch] text-balance text-[clamp(24px,3vw,32px)] font-semibold leading-tight tracking-[-0.02em] text-cream">
            Da automação manual ao produto em produção — quatro etapas, sem
            atalho.
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
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

        <section className="pb-20">
          <div className="flex flex-wrap gap-14">
            {STATS.map((s) => (
              <div key={s.label}>
                <b className="block font-mono text-[36px] font-semibold tracking-[-0.01em] text-cream">
                  {s.value}
                </b>
                <span className="font-mono text-[10.5px] uppercase tracking-[0.06em] text-slate-500">
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </section>
      </main>
      <PageFooter />
    </>
  );
}
