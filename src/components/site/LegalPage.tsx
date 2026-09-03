import Link from "next/link";
import { HeroBackdrop } from "@/components/site/HeroBackdrop";
import { PageFooter } from "@/components/site/PageFooter";
import { Eyebrow } from "@/components/site/ui";
import { cn } from "@/lib/utils";

type LegalSection = {
  num: string;
  id: string;
  title: string;
  body: string[];
};

type LegalPageProps = {
  current: "termos" | "privacidade";
  title: string;
  updated: string;
  sections: LegalSection[];
};

const TOGGLE = [
  { key: "termos", href: "/termos", label: "Termos" },
  { key: "privacidade", href: "/privacidade", label: "Privacidade" },
] as const;

export function LegalPage({ current, title, updated, sections }: LegalPageProps) {
  return (
    <>
      <HeroBackdrop current="produtos">
        <div className="mx-auto flex max-w-site flex-wrap items-end justify-between gap-4 px-6 pt-[72px] md:px-10 lg:px-14">
          <div>
            <Eyebrow>Legal</Eyebrow>
            <h1 className="text-[clamp(28px,3.4vw,38px)] font-semibold tracking-[-0.02em] text-cream">
              {title}
            </h1>
            <p className="mt-2.5 font-mono text-[12px] text-slate-500">
              Última atualização · {updated}
            </p>
          </div>

          <div className="inline-flex gap-0.5 rounded-[7px] border border-slate-800 p-[3px]">
            {TOGGLE.map((t) => (
              <Link
                key={t.key}
                href={t.href}
                className={cn(
                  "rounded-[5px] px-3.5 py-1.5 font-mono text-[11px] uppercase tracking-[0.04em]",
                  current === t.key
                    ? "bg-[#131822] text-cream"
                    : "text-slate-400 hover:text-cream",
                )}
              >
                {t.label}
              </Link>
            ))}
          </div>
        </div>
      </HeroBackdrop>
      <main className="mx-auto max-w-site px-6 md:px-10 lg:px-14">
        <div className="grid gap-14 pb-24 pt-12 lg:grid-cols-[220px_1fr]">
          <nav className="flex h-fit flex-col gap-0.5 lg:sticky lg:top-[100px]">
            {sections.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="flex gap-2.5 py-1.5 text-[13px] text-slate-400 hover:text-cream"
              >
                <b className="w-5 shrink-0 font-mono font-medium text-slate-600">
                  {s.num}
                </b>
                {s.title}
              </a>
            ))}
          </nav>

          <div>
            {sections.map((s) => (
              <section key={s.id} id={s.id} className="mb-9 scroll-mt-24">
                <h2 className="mb-2.5 text-[15px] font-semibold text-cream">
                  <span className="mr-2.5 font-mono text-pulse-400">{s.num}</span>
                  {s.title}
                </h2>
                {s.body.map((p) => (
                  <p
                    key={p}
                    className="mb-3 max-w-[64ch] text-[14px] leading-[1.7] text-slate-400"
                  >
                    {p}
                  </p>
                ))}
              </section>
            ))}
          </div>
        </div>
      </main>
      <PageFooter />
    </>
  );
}
