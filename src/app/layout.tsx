import type { Metadata, Viewport } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { cn } from "@/lib/utils";

// Structured Data (JSON-LD) for Organization
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Rafique AI",
  "url": "https://rafiqueai.com.br",
  "logo": "https://rafiqueai.com.br/logos/rafiqueai.png",
  "description": "Desenvolvemos produtos digitais, automações e soluções inteligentes para simplificar processos e transformar ideias em operações reais.",
  "founders": [
    { "@type": "Person", "name": "Rafael" },
    { "@type": "Person", "name": "Henrique" }
  ],
  "sameAs": [
    "https://www.linkedin.com/company/rafique-ai",
    "https://github.com/rafiqueai"
  ]
};

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: 'swap',
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["400", "500", "600", "700", "800"],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Rafique AI - Tecnologia que Transforma a Realidade",
  description: "Desenvolvemos produtos digitais, automações e soluções inteligentes para simplificar processos e transformar ideias em operações reais.",
  metadataBase: new URL('https://rafiqueai.com.br'),
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://rafiqueai.com.br',
    title: 'Rafique AI - Tecnologia que Transforma a Realidade',
    description: 'Desenvolvemos produtos digitais, automações e soluções inteligentes para simplificar processos e transformar ideias em operações reais.',
    siteName: 'Rafique AI',
    images: [{
      url: 'https://rafiqueai.com.br/og-image.jpg',
      width: 1200,
      height: 630,
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rafique AI - Tecnologia que Transforma a Realidade',
    description: 'Desenvolvemos produtos digitais, automações e soluções inteligentes para simplificar processos e transformar ideias em operações reais.',
    images: ['https://rafiqueai.com.br/og-image.jpg'],
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#2B375D',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData)
          }}
        />
      </head>
      <body className={cn(
        "min-h-screen bg-rafique-dark font-inter antialiased",
        inter.variable,
        manrope.variable
      )}>
        {/* Skip to main content link for keyboard navigation */}
        <a
          href="#main-content"
          className="skip-to-content"
          aria-label="Pular para o conteúdo principal"
        >
          Pular para o conteúdo principal
        </a>
        
        <div className="relative z-10 flex min-h-screen flex-col">
          <Navbar />
          <main id="main-content" className="flex-1 pt-20" role="main">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
