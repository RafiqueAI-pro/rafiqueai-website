import Link from "next/link";

const NAV = [
  { href: "/#produtos", label: "Produtos" },
  { href: "/#estudio", label: "Estúdio" },
  { href: "/quem-somos", label: "Sobre" },
  { href: "/contato", label: "Contato" },
] as const;

export function SiteHeader() {
  return (
    <header className="relative z-20 border-b border-white/[0.06]">
      <div className="mx-auto flex h-[64px] max-w-site items-center justify-between px-6 md:px-10 lg:px-12">
        <Link
          href="/"
          className="font-sans text-[15px] font-semibold tracking-[0.04em] text-cream"
        >
          RAFIQUE AI
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Principal">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[14px] font-normal text-slate-300 transition-colors duration-base ease-standard hover:text-cream"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contato"
            className="rounded-lg border border-white/25 px-4 py-2 text-[14px] font-medium text-cream transition-colors duration-base ease-standard hover:border-white/50 hover:bg-white/[0.04]"
          >
            Falar com a gente
          </Link>
        </nav>

        <Link
          href="/contato"
          className="rounded-lg border border-white/25 px-3 py-1.5 text-[13px] text-cream md:hidden"
        >
          Contato
        </Link>
      </div>
    </header>
  );
}
