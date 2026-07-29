// components/Navbar.tsx
import Link from 'next/link';

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 border-b border-white/10 backdrop-blur-md">
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-white">
              Rafique AI
            </Link>
          </div>
          <div className="hidden md:flex md:items-center md:space-x-8">
            <Link href="/#produtos" className="text-rafique-subtle hover:text-white transition-colors">Produtos</Link>
            <Link href="/#tecnologia" className="text-rafique-subtle hover:text-white transition-colors">Tecnologia</Link>
            <Link href="/#sobre" className="text-rafique-subtle hover:text-white transition-colors">Sobre</Link>
          </div>
          <div>
            <a href="#contato" className="px-5 py-2 text-sm font-medium text-white bg-rafique-highlight/20 border border-rafique-highlight rounded-full hover:bg-rafique-highlight/40 transition-colors">
              Fale Conosco
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;