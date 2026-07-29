import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-rafique-dark border-t border-white/10">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <Link href="/" aria-label="Rafique AI - Página inicial">
              <Image
                src="/logos/rafiqueai.png"
                alt="Rafique AI"
                width={120}
                height={40}
                className="h-10 w-auto"
              />
            </Link>
            <p className="font-inter text-rafique-cream/70 text-sm leading-relaxed">
              Inteligência que Transforma a Realidade. Desenvolvemos plataformas de IA subjacentes que capacitam outras empresas.
            </p>
          </div>

          {/* Solutions Column */}
          <div>
            <h4 className="font-manrope text-rafique-cream text-sm font-semibold uppercase tracking-wider mb-4">
              Soluções
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/produtos/orkesta"
                  className="font-inter text-rafique-cream/70 hover:text-rafique-cream transition-colors text-sm"
                >
                  Orkesta
                </Link>
              </li>
              <li>
                <Link
                  href="/produtos/cadia"
                  className="font-inter text-rafique-cream/70 hover:text-rafique-cream transition-colors text-sm"
                >
                  Cadia
                </Link>
              </li>
              <li>
                <Link
                  href="/produtos/ascenda"
                  className="font-inter text-rafique-cream/70 hover:text-rafique-cream transition-colors text-sm"
                >
                  Ascenda
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="font-manrope text-rafique-cream text-sm font-semibold uppercase tracking-wider mb-4">
              Empresa
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/#quem-somos"
                  className="font-inter text-rafique-cream/70 hover:text-rafique-cream transition-colors text-sm"
                >
                  Quem somos
                </Link>
              </li>
              <li>
                <Link
                  href="/contato"
                  className="font-inter text-rafique-cream/70 hover:text-rafique-cream transition-colors text-sm"
                >
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Column */}
          <div>
            <h4 className="font-manrope text-rafique-cream text-sm font-semibold uppercase tracking-wider mb-4">
              Legal
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/privacidade"
                  className="font-inter text-rafique-cream/70 hover:text-rafique-cream transition-colors text-sm"
                >
                  Privacidade
                </Link>
              </li>
              <li>
                <Link
                  href="/termos"
                  className="font-inter text-rafique-cream/70 hover:text-rafique-cream transition-colors text-sm"
                >
                  Termos de Uso
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Brand Logos Row */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-wrap items-center gap-8 opacity-60">
            <span className="font-manrope text-rafique-cream/50 text-xs uppercase tracking-wider">
              Nossas soluções:
            </span>
            <span className="font-manrope text-rafique-cream/70 text-sm font-medium">
              Orkesta
            </span>
            <span className="font-manrope text-rafique-cream/70 text-sm font-medium">
              Cadia
            </span>
            <span className="font-manrope text-rafique-cream/70 text-sm font-medium">
              Ascenda
            </span>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-inter text-rafique-cream/50 text-sm">
            &copy; {currentYear} Rafique AI. Todos os direitos reservados.
          </p>
          <p className="font-inter text-rafique-cream/50 text-sm">
            Desenvolvido com precisão
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
