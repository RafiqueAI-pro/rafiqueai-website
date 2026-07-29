"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useCallback } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle Escape key to close mobile menu
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape' && isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    
    // Add keyboard listener for Escape key
    if (isMobileMenuOpen) {
      document.addEventListener('keydown', handleKeyDown);
    }
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isMobileMenuOpen, handleKeyDown]);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-rafique-dark/90 backdrop-blur-md" : "bg-transparent"
      }`}
      role="banner"
    >
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between" role="navigation" aria-label="Menu principal">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0" aria-label="Rafique AI - Página inicial">
          <Image
            src="/logos/rafiqueai.png"
            alt="Rafique AI"
            width={120}
            height={40}
            className="h-10 w-auto"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8" role="menubar">
          <div className="relative group">
            <button
              className="nav-link font-manrope text-rafique-cream/70 hover:text-rafique-cream text-sm font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-rafique-blue focus-visible:ring-offset-2 focus-visible:ring-offset-rafique-dark rounded"
              aria-expanded={isMobileMenuOpen}
              aria-haspopup="true"
              aria-controls="desktop-dropdown"
            >
              Soluções
            </button>
            <div
              id="desktop-dropdown"
              className="absolute top-full left-0 mt-2 w-48 bg-rafique-dark/95 backdrop-blur-md border border-white/10 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200"
              role="menu"
            >
              <Link
                href="/produtos/orkesta"
                className="block px-4 py-3 text-sm text-rafique-cream/70 hover:text-rafique-cream hover:bg-white/5 transition-colors"
                role="menuitem"
              >
                Orkesta
              </Link>
              <Link
                href="/produtos/cadia"
                className="block px-4 py-3 text-sm text-rafique-cream/70 hover:text-rafique-cream hover:bg-white/5 transition-colors"
                role="menuitem"
              >
                Cadia
              </Link>
              <Link
                href="/produtos/ascenda"
                className="block px-4 py-3 text-sm text-rafique-cream/70 hover:text-rafique-cream hover:bg-white/5 transition-colors"
                role="menuitem"
              >
                Ascenda
              </Link>
            </div>
          </div>
          <Link
            href="/quem-somos"
            className="nav-link font-manrope text-rafique-cream/70 hover:text-rafique-cream text-sm font-medium"
          >
            Quem somos
          </Link>
          <Link
            href="/#contato"
            className="nav-link font-manrope text-rafique-cream/70 hover:text-rafique-cream text-sm font-medium"
          >
            Contato
          </Link>
        </div>

        {/* CTA Button */}
        <Link
          href="/#contato"
          className="hidden md:inline-flex font-manrope text-sm font-medium border border-rafique-blue text-rafique-blue hover:bg-rafique-blue hover:text-rafique-dark px-5 py-2 rounded-full transition-all duration-300 btn-secondary"
        >
          Fale Conosco
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-rafique-cream/70 hover:text-rafique-cream transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-rafique-blue focus-visible:ring-offset-2 focus-visible:ring-offset-rafique-dark rounded"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div
          id="mobile-menu"
          className="md:hidden bg-rafique-dark/95 backdrop-blur-md border-t border-white/10"
          role="menu"
          aria-label="Menu mobile"
        >
          <div className="container mx-auto px-6 py-4 space-y-4">
            <div className="space-y-2">
              <p className="font-manrope text-rafique-cream/50 text-xs font-semibold uppercase tracking-wider">
                Soluções
              </p>
              <Link
                href="/produtos/orkesta"
                className="block py-2 text-rafique-cream/70 hover:text-rafique-cream transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Orkesta
              </Link>
              <Link
                href="/produtos/cadia"
                className="block py-2 text-rafique-cream/70 hover:text-rafique-cream transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Cadia
              </Link>
              <Link
                href="/produtos/ascenda"
                className="block py-2 text-rafique-cream/70 hover:text-rafique-cream transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Ascenda
              </Link>
            </div>
            <Link
              href="/#quem-somos"
              className="block py-2 text-rafique-cream/70 hover:text-rafique-cream transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Quem somos
            </Link>
            <Link
              href="/#contato"
              className="block py-2 text-rafique-cream/70 hover:text-rafique-cream transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contato
            </Link>
            <Link
              href="/#contato"
              className="inline-block font-manrope text-sm font-medium border border-rafique-blue text-rafique-blue hover:bg-rafique-blue hover:text-rafique-dark px-5 py-2 rounded-full transition-all duration-300"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Fale Conosco
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
