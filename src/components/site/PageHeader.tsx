import Link from "next/link";
import { cn } from "@/lib/utils";

const NAV = [
  { href: "/produtos/orkesta", label: "Produtos", key: "produtos" },
  { href: "/#estudio", label: "Estúdio", key: "estudio" },
  { href: "/quem-somos", label: "Sobre", key: "sobre" },
  { href: "/contato", label: "Contato", key: "contato" },
] as const;

export type NavKey = (typeof NAV)[number]["key"];

export function PageHeader({ current }: { current?: NavKey }) {
  return (
    <header className="border-b border-white/[0.06]">
      <div className="mx-auto flex h-[72px] max-w-site items-center gap-8 px-6 md:px-10 lg:px-14">
        <Link
          href="/"
          className="shrink-0 text-[14px] font-semibold uppercase tracking-[0.06em] text-cream"
        >
          Rafique<span className="align-super font-mono text-[10px] font-medium">.ai</span>
        </Link>

        <nav className="ml-auto hidden items-center gap-7 md:flex" aria-label="Principal">
          {NAV.map((item) => (
            <Link
              key={item.key}
              href={item.href}
              className={cn(
                "relative text-[13px] transition-colors",
                current === item.key
                  ? "text-cream after:absolute after:-bottom-[26px] after:left-0 after:right-0 after:h-[2px] after:bg-pulse-400"
                  : "text-slate-400 hover:text-cream",
              )}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contato"
            className="ml-1 inline-flex h-[32px] items-center rounded-md border border-white/30 px-[14px] text-[13px] font-medium text-cream transition-colors hover:border-white/50"
          >
            Falar com a gente
          </Link>
        </nav>
      </div>
    </header>
  );
}
