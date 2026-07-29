import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AnimatedAuroraBackground from "@/components/AnimatedAuroraBackground";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rafique AI - Inteligência que Transforma a Realidade",
  description: "Desenvolvemos plataformas de IA subjacentes que capacitam outras empresas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${inter.className} relative`}>
      <body>
        <AnimatedAuroraBackground />
        <div className="relative z-10 flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
