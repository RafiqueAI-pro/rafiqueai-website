"use client";

import Link from "next/link";
import FeatureCard from "@/components/FeatureCard";
import MethodStep from "@/components/MethodStep";

// SVG Icons for Feature Cards
const ProcessIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
  </svg>
);

const AutomationIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.1 5.1a1.5 1.5 0 01-2.12-2.12l5.1-5.1m0 0l5.1-5.1a1.5 1.5 0 012.12 2.12l-5.1 5.1m-5.1 0l5.1 5.1" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 9.75h10.5m-10.5 4.5h10.5" />
  </svg>
);

const TemplateIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
  </svg>
);

const AIIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
  </svg>
);

export default function OrkestaPage() {
  return (
    <main className="bg-orkesta-dark1">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center px-6 py-24 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, #8B5CF6 0%, transparent 50%), radial-gradient(circle at 75% 75%, #8B5CF6 0%, transparent 50%)`,
          }} />
        </div>

        <div className="container mx-auto text-center relative z-10 max-w-5xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orkesta-accent/10 border border-orkesta-accent/20 mb-8 animate-fade-in-up">
            <span className="w-2 h-2 rounded-full bg-orkesta-accent animate-pulse" />
            <span className="font-inter text-sm text-orkesta-accent font-medium">
              Consultoria & Automação
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="font-manrope text-6xl md:text-7xl lg:text-8xl font-bold text-orkesta-light mb-6 animate-fade-in-up">
            Orkesta
          </h1>

          {/* Subtitle */}
          <p className="font-manrope text-xl md:text-2xl text-orkesta-light/90 mb-8 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
            Faça sua operação trabalhar em sintonia.
          </p>

          {/* Description */}
          <p className="font-inter text-lg md:text-xl text-orkesta-light/70 max-w-3xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            Identificamos gargalos, desenhamos processos e implementamos automações para reduzir tarefas manuais, conectar sistemas e tornar sua operação mais eficiente.
          </p>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <svg className="w-6 h-6 text-orkesta-light/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </section>

      {/* Offers Section */}
      <section className="px-6 py-24 bg-orkesta-dark2/30">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="font-manrope text-4xl md:text-5xl font-bold text-orkesta-light mb-4">
              Nossas Ofertas
            </h2>
            <p className="font-inter text-orkesta-light/60 max-w-2xl mx-auto">
              Soluções personalizadas para transformar sua operação através de processos otimizados e automação inteligente.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <FeatureCard
              icon={<ProcessIcon />}
              title="Consultoria de Processos"
              description="Análise profunda da sua operação atual para identificar ineficiências, mapear fluxos de trabalho e desenhar processos otimizados que eliminam redundâncias."
              index={0}
            />
            <FeatureCard
              icon={<AutomationIcon />}
              title="Automações Personalizadas"
              description="Desenvolvimento de soluções de automação sob medida que conectam seus sistemas, eliminam tarefas repetitivas e aceleram fluxos de trabalho críticos."
              index={1}
            />
            <FeatureCard
              icon={<TemplateIcon />}
              title="Templates e Aceleradores"
              description="Biblioteca de processos pré-configurados e templates de automação que aceleram a implementação de soluções comuns em sua indústria."
              index={2}
            />
            <FeatureCard
              icon={<AIIcon />}
              title="IA Aplicada a Processos"
              description="Integração de inteligência artificial em seus fluxos de trabalho para análise preditiva, tomada de decisão automatizada e extração de insights operacionais."
              index={3}
            />
          </div>
        </div>
      </section>

      {/* Method Section */}
      <section className="px-6 py-24 bg-orkesta-dark1">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="font-manrope text-4xl md:text-5xl font-bold text-orkesta-light mb-4">
              Nosso Método
            </h2>
            <p className="font-inter text-orkesta-light/60 max-w-2xl mx-auto">
              Uma abordagem estruturada e comprovada para transformar sua operação de forma sistemática e mensurável.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
            <MethodStep
              number={1}
              title="Diagnóstico"
              description="Mapeamento completo da operação atual, identificação de gargalos e análise de oportunidades de melhoria."
            />
            <MethodStep
              number={2}
              title="Design de Processo"
              description="Desenho de fluxos otimizados, definição de responsabilidades e arquitetura de integração entre sistemas."
            />
            <MethodStep
              number={3}
              title="Implementação"
              description="Execução das automações, configuração de ferramentas e deploy das soluções desenvolvidas."
            />
            <MethodStep
              number={4}
              title="Evolução"
              description="Monitoramento contínuo, ajustes baseados em dados e melhoria iterativa dos processos implementados."
              isLast
            />
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="px-6 py-24 bg-orkesta-dark2/30">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="font-manrope text-4xl md:text-5xl font-bold text-orkesta-light mb-4">
              Exemplos de Aplicação
            </h2>
            <p className="font-inter text-orkesta-light/60 max-w-2xl mx-auto">
              Processos que podem ser otimizados e automatizados em diferentes áreas da sua operação.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Use Case 1 */}
            <div className="bg-orkesta-dark2/50 border border-orkesta-light/10 rounded-2xl p-8 hover:border-orkesta-accent/20 transition-colors duration-300">
              <div className="w-12 h-12 rounded-lg bg-orkesta-accent/10 flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-orkesta-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h.008v.008H8.25v-.008zm0-3h.008v.008H8.25v-.008zm0-3h.008v.008H8.25v-.008zm0-3h.008v.008H8.25v-.008zm0-3h.008v.008H8.25v-.008zm3 12h.008v.008H11.25v-.008zm0-3h.008v.008H11.25v-.008zm0-3h.008v.008H11.25v-.008zm0-3h.008v.008H11.25v-.008zm3 12h.008v.008H14.25v-.008zm0-3h.008v.008H14.25v-.008zm0-3h.008v.008H14.25v-.008zm0-3h.008v.008H14.25v-.008zm3 12h.008v.008H17.25v-.008zm0-3h.008v.008H17.25v-.008zm0-3h.008v.008H17.25v-.008zm0-3h.008v.008H17.25v-.008z" />
                </svg>
              </div>
              <h3 className="font-manrope text-xl font-semibold text-orkesta-light mb-3">
                Gestão de Dados
              </h3>
              <p className="font-inter text-orkesta-light/60 text-sm leading-relaxed">
                Automação de coleta, validação e consolidação de dados de múltiplas fontes, eliminando entrada manual e reduzindo erros.
              </p>
            </div>

            {/* Use Case 2 */}
            <div className="bg-orkesta-dark2/50 border border-orkesta-light/10 rounded-2xl p-8 hover:border-orkesta-accent/20 transition-colors duration-300">
              <div className="w-12 h-12 rounded-lg bg-orkesta-accent/10 flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-orkesta-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008zm0 3h.008v.008H8.25v-.008zm0 3h.008v.008H8.25v-.008zm3-6.75h.008v.008H11.25v-.008zm0 3h.008v.008H11.25v-.008zm0 3h.008v.008H11.25v-.008zm3-6.75h.008v.008H14.25v-.008zm0 3h.008v.008H14.25v-.008zm0 3h.008v.008H14.25v-.008z" />
                </svg>
              </div>
              <h3 className="font-manrope text-xl font-semibold text-orkesta-light mb-3">
                Aprovações e Fluxos
              </h3>
              <p className="font-inter text-orkesta-light/60 text-sm leading-relaxed">
                Criação de fluxos de aprovação automatizados com notificações inteligentes e rastreamento em tempo real de status.
              </p>
            </div>

            {/* Use Case 3 */}
            <div className="bg-orkesta-dark2/50 border border-orkesta-light/10 rounded-2xl p-8 hover:border-orkesta-accent/20 transition-colors duration-300">
              <div className="w-12 h-12 rounded-lg bg-orkesta-accent/10 flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-orkesta-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
                </svg>
              </div>
              <h3 className="font-manrope text-xl font-semibold text-orkesta-light mb-3">
                Integração de Sistemas
              </h3>
              <p className="font-inter text-orkesta-light/60 text-sm leading-relaxed">
                Conexão entre diferentes plataformas e ferramentas, sincronizando dados e automatizando transferências entre sistemas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-24 bg-orkesta-dark1 relative overflow-hidden">
        {/* Background Accent */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            background: `radial-gradient(circle at 50% 50%, #8B5CF6 0%, transparent 70%)`,
          }} />
        </div>

        <div className="container mx-auto text-center relative z-10 max-w-4xl">
          <h2 className="font-manrope text-4xl md:text-5xl font-bold text-orkesta-light mb-6">
            Vamos otimizar sua operação?
          </h2>
          <p className="font-inter text-xl text-orkesta-light/70 mb-12 max-w-2xl mx-auto">
            Nossa equipe está pronta para analisar seus processos e desenhar uma estratégia personalizada de automação e eficiência operacional.
          </p>
          
          <Link
            href="#contato"
            className="inline-flex items-center gap-3 px-8 py-4 bg-orkesta-accent hover:bg-orkesta-accent/90 text-orkesta-light font-manrope font-semibold text-lg rounded-full transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(117,101,186,0.4)]"
          >
            Fale com a Orkesta
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>

          <p className="font-inter text-sm text-orkesta-light/40 mt-6">
            Sem compromisso inicial. Vamos conversar sobre sua operação.
          </p>
        </div>
      </section>
    </main>
  );
}
