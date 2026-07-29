// app/produtos/[slug]/page.tsx
import { notFound } from 'next/navigation';
import { Metadata } from 'next';

// --- Mock de Dados ---
// Em um projeto real, isso viria de um CMS ou do banco de dados.
const productsData = {
  ascenda: {
    title: 'Ascenda',
    tagline: 'Escale suas operações de IA com performance e otimização incomparáveis.',
    color: 'product-ascenda',
    description: 'Ascenda é nossa solução de ponta para escalar pipelines de IA. Desde o treinamento de modelos massivos até a entrega de inferências em tempo real para milhões de usuários, Ascenda garante que sua infraestrutura nunca seja o gargalo.',
    features: ['Auto-scaling de recursos de computação', 'Otimização de custos de inferência', 'Cache de resultados inteligente', 'Deployments com zero downtime'],
  },
  orkesta: {
    title: 'Orkesta',
    tagline: 'Orquestre fluxos de trabalho complexos e automatize suas pipelines de IA.',
    color: 'product-orkesta',
    description: 'Orkesta é o maestro da sua stack de IA. Ele permite criar, visualizar e gerenciar fluxos de trabalho complexos que conectam diferentes modelos, fontes de dados e APIs, transformando processos manuais em sistemas automatizados e resilientes.',
    features: ['Editor visual de workflows (drag-and-drop)', 'Gatilhos baseados em eventos', 'Monitoramento e logging centralizados', 'Integração com centenas de serviços'],
  },
  cadia: {
    title: 'Cadia',
    tagline: 'Extraia insights valiosos com análise de dados rítmica e previsível.',
    color: 'product-cadia',
    description: 'Cadia transforma dados caóticos em inteligência acionável. Utilizando modelos de IA para análise de séries temporais, detecção de anomalias e processamento de linguagem natural, Cadia encontra os padrões que importam para o seu negócio.',
    features: ['Análise preditiva de séries temporais', 'Detecção de anomalias em tempo real', 'Sumarização e classificação de textos', 'Dashboards de visualização interativos'],
  },
};
// --- Fim do Mock de Dados ---

type Props = {
  params: { slug: string };
};

// Gera os metadados dinamicamente para cada página
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const product = productsData[params.slug as keyof typeof productsData];
  if (!product) return {};
  return { title: `${product.title} - Rafique AI`, description: product.tagline };
}

// Pré-renderiza as páginas para cada produto em tempo de build (melhora SEO e performance)
export async function generateStaticParams() {
  return Object.keys(productsData).map((slug) => ({
    slug,
  }));
}

export default function ProductPage({ params }: Props) {
  const { slug } = params;
  const product = productsData[slug as keyof typeof productsData];

  // Se o slug não corresponder a nenhum produto, mostra a página 404
  if (!product) {
    notFound();
  }

  // Mapeia a string de cor para classes de Tailwind
  const colorClasses = {
    'product-ascenda': 'text-product-ascenda border-product-ascenda shadow-product-ascenda/30',
    'product-orkesta': 'text-product-orkesta border-product-orkesta shadow-product-orkesta/30',
    'product-cadia': 'text-product-cadia border-product-cadia shadow-product-cadia/30',
  };
  const productColors = colorClasses[product.color as keyof typeof colorClasses];

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center">
        <h1 className={`text-6xl font-bold ${productColors.split(' ')[0]}`}>{product.title}</h1>
        <p className="mt-4 text-xl text-rafique-subtle max-w-2xl mx-auto">{product.tagline}</p>
      </div>

      <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-3xl font-bold text-white">O que é {product.title}?</h2>
          <p className="mt-4 text-rafique-subtle leading-relaxed">{product.description}</p>
          <div className="mt-8">
             <a href="#contato" className={`inline-block px-6 py-3 font-semibold text-white bg-${product.color} rounded-full shadow-[0_0_20px] ${productColors.split(' ')[2]} hover:scale-105 transition-transform`}>
                Solicitar Demonstração
            </a>
          </div>
        </div>
        <div>
          {/* Placeholder para uma visualização 3D ou diagrama técnico do produto */}
          <div className={`w-full h-80 rounded-lg border ${productColors.split(' ')[1]} bg-rafique-dark/50 flex items-center justify-center`}>
            <p className="text-rafique-subtle">Visualização Técnica do {product.title}</p>
          </div>
        </div>
      </div>

      <div className="mt-24">
         <h2 className="text-3xl font-bold text-white text-center">Principais Funcionalidades</h2>
         <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {product.features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                    <div className={`flex-shrink-0 w-6 h-6 rounded-full bg-${product.color}/20 flex items-center justify-center mt-1`}>
                        <span className={`${productColors.split(' ')[0]}`}>&#10003;</span>
                    </div>
                    <p className="text-rafique-subtle">{feature}</p>
                </div>
            ))}
         </div>
      </div>
    </div>
  );
}
