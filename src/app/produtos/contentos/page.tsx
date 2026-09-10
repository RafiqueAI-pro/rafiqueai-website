import type { Metadata } from "next";
import { HeroBackdrop } from "@/components/site/HeroBackdrop";
import { PageFooter } from "@/components/site/PageFooter";
import { Faq } from "@/components/site/Faq";
import { ScreenshotGallery } from "@/components/site/ScreenshotGallery";
import { ButtonPrimary, ButtonOutline, Eyebrow, MonoLabel } from "@/components/site/ui";

const TITLE = "Orkesta ContentOS — Rafique AI";
const DESCRIPTION =
  "Do briefing à publicação, com agentes de IA fazendo o trabalho repetitivo. Editor de página pixel-exato, Magic Write e funil editorial com aprovação — do jeito que já roda hoje pros nossos clientes.";
const URL = "https://rafiqueai.com.br/produtos/contentos";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: URL },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: URL,
    title: TITLE,
    description: DESCRIPTION,
    siteName: "Rafique AI",
  },
};

const FEATURES = [
  {
    icon: "🖊️",
    title: "Editor pixel-exato",
    desc: "Canvas de página com blocos editáveis — o que você vê no editor é o que publica.",
  },
  {
    icon: "🪄",
    title: "Magic Write",
    desc: "A IA gera o primeiro rascunho a partir do briefing — seu time revisa, não parte do zero.",
  },
  {
    icon: "✅",
    title: "Funil editorial com aprovação",
    desc: "Rascunho → revisão → publicado, com dono e prazo em cada etapa.",
  },
  {
    icon: "🌐",
    title: "Multi-site",
    desc: "Vários sites e domínios num painel só, cada um com seu próprio funil de páginas.",
  },
];

const STEPS = [
  {
    n: "01",
    title: "Conecte seu site",
    desc: "Domínio e páginas existentes entram no painel — sem migrar conteúdo manualmente.",
  },
  {
    n: "02",
    title: "Gere com Magic Write",
    desc: "Descreva o briefing, a IA entrega o primeiro rascunho pronto pra revisão.",
  },
  {
    n: "03",
    title: "Publique com aprovação",
    desc: "Cada página passa por um funil de revisão antes de ir ao ar — sem publicar sem querer.",
  },
];

const SCREENSHOTS = [
  { src: "/screenshots/contentos/visao-geral.jpg", label: "Visão geral", desc: "Páginas publicadas, atividade recente e funil editorial num só painel." },
  { src: "/screenshots/contentos/sites.jpg", label: "Sites", desc: "Domínio, páginas e última publicação de cada site conectado." },
  { src: "/screenshots/contentos/conteudo.jpg", label: "Conteúdo", desc: "Magic Write e o funil de aprovação editorial, lado a lado." },
  { src: "/screenshots/contentos/editor.jpg", label: "Editor de páginas", desc: "Canvas pixel-exato com blocos editáveis direto no layout real." },
];

const FAQS = [
  {
    question: "Preciso trocar de site ou CMS?",
    answer:
      "Não. Conectamos ao domínio e à estrutura de páginas que você já tem — sem migração forçada de plataforma.",
  },
  {
    question: "A IA publica sozinha?",
    answer:
      "Não. O Magic Write gera o rascunho; toda página passa pelo funil de aprovação antes de ir ao ar.",
  },
  {
    question: "Dá pra gerenciar mais de um site?",
    answer:
      "Sim — o ContentOS já é multi-site: cada domínio tem seu próprio funil de páginas, no mesmo painel.",
  },
  {
    question: "Funciona pra quem não tem time de conteúdo?",
    answer:
      "É pensado exatamente pra isso — o Magic Write cobre o trabalho de primeiro rascunho que normalmente exigiria um redator dedicado.",
  },
];

export default function ContentosPage() {
  return (
    <>
      <HeroBackdrop current="produtos">
        <div className="mx-auto max-w-site px-6 pb-8 pt-[88px] md:px-10 lg:px-14">
          <Eyebrow>Orkesta ContentOS</Eyebrow>
          <h1 className="max-w-[20ch] text-balance text-[clamp(32px,4.8vw,54px)] font-bold leading-[1.1] tracking-[-0.025em] text-cream">
            Do briefing à publicação, com IA fazendo o trabalho repetitivo.
          </h1>
          <p className="mt-5 max-w-[56ch] text-[17px] leading-relaxed text-slate-400">
            Editor de página pixel-exato, funil editorial com aprovação, e
            Magic Write gerando o primeiro rascunho — do jeito que já roda
            hoje pros nossos clientes.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonPrimary href="/contato">Falar com a gente</ButtonPrimary>
            <ButtonOutline href="#telas">Ver telas reais</ButtonOutline>
          </div>
        </div>
      </HeroBackdrop>

      <main className="mx-auto max-w-site px-6 md:px-10 lg:px-14">
        <section className="py-14">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {FEATURES.map((f) => (
              <div
                key={f.title}
                className="rounded-lg border border-slate-800 bg-[#131822] p-5"
              >
                <div
                  className="flex h-7 w-7 items-center justify-center rounded-md text-[14px]"
                  style={{ background: "rgba(190,104,166,0.12)" }}
                  aria-hidden="true"
                >
                  {f.icon}
                </div>
                <h3 className="mt-3.5 text-[14px] font-semibold leading-snug text-cream">
                  {f.title}
                </h3>
                <p className="mt-2 text-[12.5px] leading-relaxed text-slate-400">
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section id="como-funciona" className="scroll-mt-24 border-t border-white/[0.06] py-14">
          <Eyebrow>Como funciona</Eyebrow>
          <h2 className="max-w-[22ch] text-balance text-[clamp(24px,3vw,32px)] font-semibold leading-tight tracking-[-0.02em] text-cream">
            Três passos, do domínio à página publicada.
          </h2>
          <div className="mt-8 flex flex-col">
            {STEPS.map((s, i) => (
              <div
                key={s.n}
                className={`flex gap-5 border-t border-white/[0.06] py-5 ${
                  i === STEPS.length - 1 ? "border-b" : ""
                }`}
              >
                <div className="w-6 shrink-0 pt-0.5 font-mono text-[13px] text-contentos-400">
                  {s.n}
                </div>
                <div>
                  <h3 className="text-[15px] font-semibold text-cream">
                    {s.title}
                  </h3>
                  <p className="mt-1.5 max-w-[64ch] text-[14px] leading-relaxed text-slate-400">
                    {s.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="telas" className="scroll-mt-24 border-t border-white/[0.06] py-14">
          <Eyebrow>Telas reais</Eyebrow>
          <h2 className="max-w-[26ch] text-balance text-[clamp(22px,2.8vw,28px)] font-semibold leading-[1.3] tracking-[-0.015em] text-cream">
            O produto rodando, não um mockup.
          </h2>
          <ScreenshotGallery items={SCREENSHOTS} accent="contentos" columns={2} altPrefix="Orkesta ContentOS" />
        </section>

        <section className="border-t border-white/[0.06] py-14">
          <Eyebrow>Perguntas frequentes</Eyebrow>
          <h2 className="max-w-[26ch] text-balance text-[clamp(22px,2.8vw,28px)] font-semibold leading-[1.3] tracking-[-0.015em] text-cream">
            O que times de marketing perguntam antes de fechar.
          </h2>
          <div className="mx-auto mt-7 max-w-[800px]">
            <Faq items={FAQS} />
          </div>
        </section>

        <section className="py-14 pb-20">
          <div className="flex flex-wrap items-center justify-between gap-6 rounded-lg border border-slate-800 bg-gradient-to-b from-[#2A1522] to-[#0F1420] p-8">
            <div>
              <MonoLabel>Pronto pra tirar conteúdo do gargalo?</MonoLabel>
              <p className="mt-2 max-w-[44ch] text-[13.5px] text-slate-400">
                30 minutos, sem compromisso — a gente mostra o ContentOS com
                seu próprio site.
              </p>
            </div>
            <ButtonPrimary href="/contato">Falar com a gente →</ButtonPrimary>
          </div>
        </section>
      </main>
      <PageFooter />
    </>
  );
}
