import Link from "next/link";
import { cn } from "@/lib/utils";

const NAV = [
  { href: "/estudio", label: "Estúdio", key: "estudio" },
  { href: "/quem-somos", label: "Sobre", key: "sobre" },
  { href: "/contato", label: "Contato", key: "contato" },
] as const;

export type NavKey = (typeof NAV)[number]["key"] | "produtos";

const PRODUCT_LINKS = [
  { href: "/produtos/orkesta", label: "Visão geral", dot: "#8C97A6" },
  { href: "/produtos/orkesta#pulse", label: "Pulse", dot: "#4AADB4" },
  { href: "/produtos/crm", label: "CRM", dot: "#6C79E0" },
  { href: "/produtos/contentos", label: "ContentOS", dot: "#BE68A6" },
] as const;

function ProductsNavItem({ active }: { active: boolean }) {
  return (
    <div className="group relative">
      <Link
        href="/produtos/orkesta"
        className={cn(
          "relative flex items-center gap-1 text-[13px] transition-colors",
          active
            ? "text-cream after:absolute after:-bottom-[26px] after:left-0 after:right-0 after:h-[2px] after:bg-pulse-400"
            : "text-slate-400 hover:text-cream",
        )}
      >
        Produtos
        <svg
          width="9"
          height="6"
          viewBox="0 0 9 6"
          fill="none"
          aria-hidden="true"
          className="mt-px opacity-70 transition-transform duration-150 group-hover:rotate-180"
        >
          <path d="M1 1l3.5 3.5L8 1" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </Link>
      <div className="invisible absolute left-1/2 top-full z-20 w-56 -translate-x-1/2 pt-3 opacity-0 transition-opacity duration-150 group-hover:visible group-hover:opacity-100">
        <div className="rounded-lg border border-slate-800 bg-[#131822] p-1.5 shadow-[0_12px_32px_rgba(0,0,0,0.35)]">
          {PRODUCT_LINKS.map((p) => (
            <Link
              key={p.href}
              href={p.href}
              className="flex items-center gap-2.5 rounded-md px-3 py-2.5 text-[13px] text-slate-300 transition-colors hover:bg-slate-800 hover:text-cream"
            >
              <span className="h-[6px] w-[6px] shrink-0 rounded-full" style={{ background: p.dot }} aria-hidden="true" />
              {p.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

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
          <ProductsNavItem active={current === "produtos"} />
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
