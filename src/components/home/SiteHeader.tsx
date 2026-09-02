import Link from "next/link";

const NAV = [
  { href: "/#produtos", label: "Produtos" },
  { href: "/#estudio", label: "Estúdio" },
  { href: "/quem-somos", label: "Sobre" },
  { href: "/contato", label: "Contato" },
] as const;

export function SiteHeader() {
  return (
    <header className="relative z-20">
      <div className="mx-auto flex h-14 max-w-site items-center justify-between px-[82px] max-[1375px]:px-10 max-md:px-6">
        <Link
          href="/"
          className="font-sans text-[14px] font-semibold tracking-[0.06em] text-cream"
        >
          RAFIQUE AI
        </Link>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Principal">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[13px] font-normal text-[#9AA3B0] transition-colors duration-base ease-standard hover:text-cream"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contato"
            className="ml-1 rounded-md border border-white/30 px-[14px] py-[7px] text-[13px] font-medium text-cream transition-colors duration-base ease-standard hover:border-white/50 hover:bg-white/[0.03]"
          >
            Falar com a gente
          </Link>
        </nav>

        <Link
          href="/contato"
          className="rounded-md border border-white/30 px-3 py-1.5 text-[13px] text-cream md:hidden"
        >
          Contato
        </Link>
      </div>
      <div className="h-px w-full bg-white/[0.06]" />
    </header>
  );
}
