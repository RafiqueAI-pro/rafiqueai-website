import type { Metadata } from 'next';
import HeroSection from '@/components/sections/HeroSection';
import PositioningSection from '@/components/sections/PositioningSection';
import ProductsSection from '@/components/sections/ProductsSection';
import ProcessSection from '@/components/sections/ProcessSection';
import AboutCallSection from '@/components/sections/AboutCallSection';
import CTASection from '@/components/sections/CTASection';
import SectionDivider from '@/components/SectionDivider';
import GeometricDecoration from '@/components/tech/GeometricDecoration';
import CodeSnippet from '@/components/tech/CodeSnippet';
import TechBadge from '@/components/tech/TechBadge';

export const metadata: Metadata = {
  title: "Rafique AI - Tecnologia que Transforma a Realidade",
  description: "Desenvolvemos produtos digitais, automações e soluções inteligentes para simplificar processos e transformar ideias em operações reais.",
  openGraph: {
    title: "Rafique AI - Tecnologia que Transforma a Realidade",
    description: "Desenvolvemos produtos digitais, automações e soluções inteligentes para simplificar processos e transformar ideias em operações reais.",
    url: "https://rafiqueai.com.br",
  },
  twitter: {
    title: "Rafique AI - Tecnologia que Transforma a Realidade",
    description: "Desenvolvemos produtos digitais, automações e soluções inteligentes para simplificar processos e transformar ideias em operações reais.",
  },
};

export default function HomePage() {
  return (
    <div className="relative">
      {/* Elementos decorativos de fundo */}
      <GeometricDecoration size="lg" position="top-right" color="rafique-blue" />
      <GeometricDecoration size="md" position="bottom-left" color="rafique-blue" />
      <CodeSnippet
        code={`const rafique = {\n  tech: "inteligente",\n  future: true\n};`}
        language="typescript"
        position="top-1/4 -right-40"
      />
      <CodeSnippet
        code={`export const solutions = {\n  ai: true,\n  automation: true\n};`}
        language="typescript"
        position="bottom-1/4 -left-40"
      />
      
      {/* ===== 1. HERO INSTITUCIONAL ===== */}
      <HeroSection />

      {/* Divisor de seção */}
      <SectionDivider />

      {/* ===== 2. POSICIONAMENTO DA RAFIQUE AI ===== */}
      <PositioningSection />

      {/* Divisor de seção */}
      <SectionDivider />

      {/* ===== 3. CARDS DAS ÁREAS DE ATUAÇÃO ===== */}
      <ProductsSection />

      {/* Divisor de seção */}
      <SectionDivider />

      {/* ===== 4. PROCESSO DE CONSTRUÇÃO ===== */}
      <ProcessSection />

      {/* Divisor de seção */}
      <SectionDivider />

      {/* ===== 5. CHAMADA PARA QUEM SOMOS ===== */}
      <AboutCallSection />

      {/* Divisor de seção */}
      <SectionDivider />

      {/* ===== 6. CTA FINAL ===== */}
      <CTASection />
      
      {/* Tech Badges no final da página */}
      <div className="relative z-10 container mx-auto px-6 pb-8 flex justify-center gap-4 flex-wrap">
        <TechBadge label="Next.js 16" />
        <TechBadge label="TypeScript" />
        <TechBadge label="Tailwind" />
        <TechBadge label="Framer Motion" />
      </div>
    </div>
  );
}
