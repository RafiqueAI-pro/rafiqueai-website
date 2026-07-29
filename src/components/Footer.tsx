// components/Footer.tsx
import Link from 'next/link';

const Footer = () => {
  return (
    <footer id="contato" className="border-t border-white/10 mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <h3 className="text-xl font-bold text-white">Rafique AI</h3>
            <p className="mt-2 text-rafique-subtle">Inteligência que Transforma a Realidade.</p>
          </div>
          <div>
            <h4 className="font-semibold text-white">Navegação</h4>
            <ul className="mt-2 space-y-1">
              <li><Link href="/#produtos" className="text-rafique-subtle hover:text-white">Produtos</Link></li>
              <li><Link href="/#tecnologia" className="text-rafique-subtle hover:text-white">Tecnologia</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white">Contato</h4>
            <p className="mt-2 text-rafique-subtle">Pronto para construir o futuro?</p>
            <a href="mailto:contato@rafique.ai" className="mt-2 inline-block text-rafique-highlight hover:underline">contato@rafique.ai</a>
          </div>
        </div>
        <div className="mt-12 text-center text-sm text-rafique-subtle border-t border-white/10 pt-8">
          <p>&copy; {new Date().getFullYear()} Rafique AI. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;