import Link from "next/link";

const NAV = [
  { href: "/#produtos", label: "Produtos" },
  { href: "/#estudio", label: "Estúdio" },
  { href: "/quem-somos", label: "Sobre" },
  { href: "/contato", label: "Contato" },
] as const;

/** Header do artboard 1376×768 — medidas do sitenovo.png */
export function SiteHeader() {
  return (
    <header className="absolute inset-x-0 top-0 z-20 h-[56px]">
      <div className="relative flex h-[56px] items-center px-[82px]">
        <Link
          href="/"
          className="font-sans text-[14px] font-semibold tracking-[0.06em] text-[#F3EEDC]"
        >
          RAFIQUE AI
        </Link>

        <nav
          className="absolute right-[82px] top-1/2 hidden -translate-y-1/2 items-center gap-7 md:flex"
          aria-label="Principal"
        >
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[13px] font-normal text-[#9AA3B0] transition-colors hover:text-[#F3EEDC]"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contato"
            className="ml-1 inline-flex h-[32px] items-center rounded-md border border-white/30 px-[14px] text-[13px] font-medium text-[#F3EEDC] transition-colors hover:border-white/50"
          >
            Falar com a gente
          </Link>
        </nav>
      </div>
      <div className="absolute inset-x-0 bottom-0 h-px bg-white/[0.06]" />
    </header>
  );
}
