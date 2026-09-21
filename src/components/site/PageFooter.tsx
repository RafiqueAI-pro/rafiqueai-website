import Link from "next/link";

const PRODUCTS = [
  { href: "/produtos/pulse", label: "Pulse" },
  { href: "/produtos/crm", label: "CRM" },
  { href: "/produtos/contentos", label: "ContentOS" },
];

const COMPANY = [
  { href: "/quem-somos", label: "Sobre" },
  { href: "/estudio", label: "Estúdio" },
  { href: "https://orkesta.rafiqueai.com.br/blog", label: "Blog" },
  { href: "/contato", label: "Contato" },
];

const LEGAL = [
  { href: "/privacidade", label: "Privacidade" },
  { href: "/termos", label: "Termos" },
];

export function PageFooter() {
  return (
    <footer className="mt-24 border-t border-white/[0.06]">
      <div className="mx-auto max-w-site px-6 py-14 md:px-10 lg:px-14">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Link
              href="/"
              className="text-[14px] font-semibold uppercase tracking-[0.06em] text-cream"
            >
              Rafique<span className="align-super font-mono text-[10px] font-medium">.ai</span>
            </Link>
            <p className="mt-3 max-w-[32ch] text-[13px] leading-relaxed text-slate-500">
              Estúdio de produtos de automação e dados. Construímos a suíte Orkesta.
            </p>
          </div>
          <FooterCol title="Produtos" items={PRODUCTS} />
          <FooterCol title="Empresa" items={COMPANY} />
          <FooterCol title="Legal" items={LEGAL} />
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-between gap-2 border-t border-white/[0.06] pt-5 font-mono text-[11px] text-slate-500">
          <span>© 2026 Rafique AI. Todos os direitos reservados.</span>
          <span>contato@rafiqueai.com.br</span>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  items,
}: {
  title: string;
  items: { href: string; label: string }[];
}) {
  return (
    <div>
      <h4 className="font-mono text-[10.5px] uppercase tracking-[0.08em] text-slate-500">
        {title}
      </h4>
      <div className="mt-3.5 flex flex-col gap-2.5">
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="text-[13.5px] text-slate-400 hover:text-cream"
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
