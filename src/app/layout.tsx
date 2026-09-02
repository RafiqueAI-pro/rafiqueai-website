import type { Metadata, Viewport } from "next";
import { Instrument_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/home/SiteHeader";
import { cn } from "@/lib/utils";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Rafique AI",
  url: "https://rafiqueai.com.br",
  logo: "https://rafiqueai.com.br/logos/rafiqueai.png",
  description:
    "Estúdio de produtos de automação e dados. Construímos a suíte Orkesta.",
  founders: [
    { "@type": "Person", name: "Rafael" },
    { "@type": "Person", name: "Henrique" },
  ],
};

const sans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Rafique AI — Software que mostra o que está acontecendo",
  description:
    "Estúdio de produtos de automação e dados. Construímos a suíte Orkesta: Pulse, CRM e ContentOS.",
  metadataBase: new URL("https://rafiqueai.com.br"),
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://rafiqueai.com.br",
    title: "Rafique AI — Software que mostra o que está acontecendo",
    description:
      "Estúdio de produtos de automação e dados. Construímos a suíte Orkesta.",
    siteName: "Rafique AI",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rafique AI — Software que mostra o que está acontecendo",
    description:
      "Estúdio de produtos de automação e dados. Construímos a suíte Orkesta.",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0B121A",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className={cn("min-h-dvh bg-ink antialiased", sans.variable, mono.variable)}>
        <a href="#main-content" className="skip-to-content">
          Pular para o conteúdo principal
        </a>
        <div className="relative flex min-h-dvh flex-col">
          <SiteHeader />
          <main id="main-content" className="flex-1">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
