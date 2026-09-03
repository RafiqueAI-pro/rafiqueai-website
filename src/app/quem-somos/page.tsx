import type { Metadata } from "next";
import { HeroBackdrop } from "@/components/site/HeroBackdrop";
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

const STATS = [
  { value: "5+", label: "anos de experiência em automação" },
  { value: "20k+", label: "execuções/mês (workers e robôs)" },
  { value: "3", label: "produtos na suíte Orkesta" },
];

export default function QuemSomosPage() {
  return (
    <>
      <HeroBackdrop current="sobre">
        <div className="mx-auto max-w-site px-6 pt-[88px] md:px-10 lg:px-14">
          <Eyebrow>Quem somos</Eyebrow>
          <h1 className="max-w-[15ch] text-balance text-[clamp(34px,4.6vw,52px)] font-semibold leading-[1.08] tracking-[-0.025em] text-cream">
            Dois fundadores. Um estúdio de engenharia aplicada.
          </h1>
          <p className="mt-5 max-w-[52ch] text-[17px] leading-relaxed text-slate-400">
            Rafael e Henrique constroem software que expõe o que está
            acontecendo — não painéis bonitos, produto que resolve. A Orkesta
            nasceu de operação real, não de brainstorm.
          </p>
        </div>
      </HeroBackdrop>
      <main className="mx-auto max-w-site px-6 md:px-10 lg:px-14">
        <section className="pb-8 pt-14">
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
          <a
            href="/estudio"
            className="mt-6 inline-flex items-center gap-1.5 text-[13px] font-medium text-pulse-400 hover:text-pulse-400/80"
          >
            Como trabalhamos →
          </a>
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
