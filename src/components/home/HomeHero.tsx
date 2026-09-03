import Image from "next/image";
import Link from "next/link";

/**
 * Home 1:1 (artboard 1376×768).
 * Camada visual = sitenovo.png (fidelidade pixel).
 * Camada React = Links absolutos + H1 semântico (SEO/a11y).
 * Mesmo padrão POC do Pulse/Content OS na VPS.
 */
export function HomeHero() {
  return (
    <div className="rafique-stage">
      <div className="rafique-artboard relative overflow-hidden bg-[#0C1019]">
        <h1 className="sr-only">
          Software que mostra o que está acontecendo. Estúdio de produtos de
          automação e dados. Construímos a suíte Orkesta.
        </h1>

        <Image
          src="/brand/sitenovo.png"
          alt="Rafique AI — Software que mostra o que está acontecendo. Suíte Orkesta: Pulse, CRM e ContentOS."
          width={1376}
          height={768}
          priority
          unoptimized
          className="pointer-events-none select-none"
          style={{ width: 1376, height: 768, maxWidth: "none" }}
        />

        <Link
          href="/"
          aria-label="Rafique AI — início"
          className="absolute z-10"
          style={{ left: 70, top: 18, width: 150, height: 36 }}
        />
        <Link
          href="/#produtos"
          aria-label="Produtos"
          className="absolute z-10"
          style={{ left: 920, top: 18, width: 72, height: 32 }}
        />
        <Link
          href="/#estudio"
          aria-label="Estúdio"
          className="absolute z-10"
          style={{ left: 1000, top: 18, width: 64, height: 32 }}
        />
        <Link
          href="/quem-somos"
          aria-label="Sobre"
          className="absolute z-10"
          style={{ left: 1072, top: 18, width: 52, height: 32 }}
        />
        <Link
          href="/contato"
          aria-label="Contato"
          className="absolute z-10"
          style={{ left: 1132, top: 18, width: 64, height: 32 }}
        />
        <Link
          href="/contato"
          aria-label="Falar com a gente"
          className="absolute z-10"
          style={{ left: 1204, top: 16, width: 150, height: 36 }}
        />

        <Link
          href="/produtos/orkesta"
          aria-label="Conhecer o Pulse"
          className="absolute z-10"
          style={{ left: 82, top: 432, width: 206, height: 46 }}
        />
        <Link
          href="/#produtos"
          aria-label="Ver a suíte"
          className="absolute z-10"
          style={{ left: 301, top: 431, width: 142, height: 47 }}
        />

        <Link
          href="/produtos/orkesta#pulse"
          aria-label="Pulse — desenvolvimento, orquestração e monitoramento de automações"
          className="absolute z-10"
          style={{ left: 81, top: 544, width: 396, height: 112 }}
          id="produtos"
        />
        <Link
          href="/produtos/orkesta#crm"
          aria-label="CRM — funil, mídias sociais, agentes e BI"
          className="absolute z-10"
          style={{ left: 491, top: 544, width: 393, height: 112 }}
        />
        <Link
          href="/produtos/orkesta#contentos"
          aria-label="ContentOS — produção e distribuição de conteúdo assistida por IA"
          className="absolute z-10"
          style={{ left: 898, top: 544, width: 395, height: 112 }}
        />

        <div id="estudio" className="absolute" style={{ left: 81, top: 678, width: 1, height: 1 }} />
      </div>
    </div>
  );
}
