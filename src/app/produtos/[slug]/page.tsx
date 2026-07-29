// app/produtos/[slug]/page.tsx (VERSÃO CORRIGIDA PARA NEXT.JS 16+)

import { notFound } from 'next/navigation';
import { Metadata } from 'next';

// --- Dados de produto ---
const productsData = {
  ascenda: {
    title: 'Ascenda',
    tagline: 'Escale suas operações de IA com performance e otimização incomparáveis.',
    colorName: 'product-ascenda',
    description: 'Ascenda é nossa solução de ponta para escalar pipelines de IA. Desde o treinamento de modelos massivos até a entrega de inferências em tempo real para milhões de usuários, Ascenda garante que sua infraestrutura nunca seja o gargalo.',
    features: ['Auto-scaling de recursos de computação', 'Otimização de custos de inferência', 'Cache de resultados inteligente', 'Deployments com zero downtime'],
    seoDescription: 'Sua saúde, sua evolução e sua comunidade em um só app. Em desenvolvimento para iOS e Android.',
    fullTitle: 'Ascenda - App de Saúde e Performance | Rafique AI',
  },
  orkesta: {
    title: 'Orkesta',
    tagline: 'Orquestre fluxos de trabalho complexos e automatize suas pipelines de IA.',
    colorName: 'product-orkesta',
    description: 'Orkesta é o maestro da sua stack de IA. Ele permite criar, visualizar e gerenciar fluxos de trabalho complexos que conectam diferentes modelos, fontes de dados e APIs, transformando processos manuais em sistemas automatizados e resilientes.',
    features: ['Editor visual de workflows (drag-and-drop)', 'Gatilhos baseados em eventos', 'Monitoramento e logging centralizados', 'Integração com centenas de serviços'],
    seoDescription: 'Faça sua operação trabalhar em sintonia. Consultoria de processos, automações personalizadas e IA aplicada.',
    fullTitle: 'Orkesta - Consultoria e Automação | Rafique AI',
  },
  cadia: {
    title: 'Cadia',
    tagline: 'Extraia insights valiosos com análise de dados rítmica e previsível.',
    colorName: 'product-cadia',
    description: 'Cadia transforma dados caóticos em inteligência acionável. Utilizando modelos de IA para análise de séries temporais, detecção de anomalias e processamento de linguagem natural, Cadia encontra os padrões que importam para o seu negócio.',
    features: ['Análise preditiva de séries temporais', 'Detecção de anomalias em tempo real', 'Sumarização e classificação de textos', 'Dashboards de visualização interativos'],
    seoDescription: 'Seu acompanhamento cabe em uma conversa. Assistente de treino e alimentação para WhatsApp e Telegram.',
    fullTitle: 'Cadia - Assistente Conversacional | Rafique AI',
  },
};

// --- Mapeamento para evitar classes dinâmicas ---
const colorMap = {
  'product-ascenda': {
    text: 'text-product-ascenda',
    border: 'border-product-ascenda',
    shadow: 'shadow-product-ascenda/30',
    bg: 'bg-product-ascenda',
  },
  'product-orkesta': {
    text: 'text-product-orkesta',
    border: 'border-product-orkesta',
    shadow: 'shadow-product-orkesta/30',
    bg: 'bg-product-orkesta',
  },
  'product-cadia': {
    text: 'text-product-cadia',
    border: 'border-product-cadia',
    shadow: 'shadow-product-cadia/30',
    bg: 'bg-product-cadia',
  },
};

// CORREÇÃO: params é uma Promise no Next.js 16+
type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = productsData[slug as keyof typeof productsData];
  if (!product) return {};
  
  return {
    title: product.fullTitle || `${product.title} - Rafique AI`,
    description: product.seoDescription || product.tagline,
    openGraph: {
      title: product.fullTitle || `${product.title} - Rafique AI`,
      description: product.seoDescription || product.tagline,
      url: `https://rafiqueai.com.br/produtos/${slug}`,
    },
    twitter: {
      title: product.fullTitle || `${product.title} - Rafique AI`,
      description: product.seoDescription || product.tagline,
    },
  };
}

export async function generateStaticParams() {
  return Object.keys(productsData).map((slug) => ({ slug }));
}

// CORREÇÃO: Componente deve ser async para usar await params
export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = productsData[slug as keyof typeof productsData];

  if (!product) {
    notFound();
  }

  const productColors = colorMap[product.colorName as keyof typeof colorMap];

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 animate-fade-in-up">
      <div className="text-center">
        <h1 className={`text-6xl font-bold ${productColors.text}`}>{product.title}</h1>
        <p className="mt-4 text-xl text-rafique-subtle max-w-2xl mx-auto">{product.tagline}</p>
      </div>

      <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-3xl font-bold text-white">O que é {product.title}?</h2>
          <p className="mt-4 text-rafique-subtle leading-relaxed">{product.description}</p>
          <div className="mt-8">
             <a href="#contato" className={`inline-block px-6 py-3 font-semibold text-rafique-dark ${productColors.bg} rounded-full shadow-[0_0_20px] ${productColors.shadow} hover:scale-105 transition-transform`}>
                Solicitar Demonstração
            </a>
          </div>
        </div>
        <div>
          <div className={`w-full h-80 rounded-lg border ${productColors.border} bg-rafique-dark/50 flex items-center justify-center`}>
            <p className="text-rafique-subtle">Visualização Técnica do {product.title}</p>
          </div>
        </div>
      </div>

      <div className="mt-24">
         <h2 className="text-3xl font-bold text-white text-center">Principais Funcionalidades</h2>
         <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {product.features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                    <div className={`flex-shrink-0 w-6 h-6 rounded-full ${productColors.bg}/20 flex items-center justify-center mt-1`}>
                        <span className={productColors.text}>&#10003;</span>
                    </div>
                    <p className="text-rafique-subtle">{feature}</p>
                </div>
            ))}
         </div>
      </div>
    </div>
  );
}
