import Link from "next/link";
import type { Metadata } from "next";
import FeatureCard from "@/components/FeatureCard";

export const metadata: Metadata = {
  title: "Ascenda Pro - Para Profissionais | Rafique AI",
  description: "A plataforma completa para profissionais de saúde e performance.",
  openGraph: {
    title: "Ascenda Pro - Para Profissionais | Rafique AI",
    description: "A plataforma completa para profissionais de saúde e performance.",
    url: "https://rafiqueai.com.br/produtos/ascenda-pro",
  },
  twitter: {
    title: "Ascenda Pro - Para Profissionais | Rafique AI",
    description: "A plataforma completa para profissionais de saúde e performance.",
  },
};

// SVG Icons for Ascenda Pro Features
const StudentManagementIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
  </svg>
);

const PersonalizedPlansIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
  </svg>
);

const EvolutionTrackingIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
  </svg>
);

const CommunicationIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
  </svg>
);

const ReportsIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
  </svg>
);

const ProfessionalIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a8.25 8.25 0 103.682-4.573V.75a.75.75 0 00-1.5 0v4.953a8.25 8.25 0 00-2.832 4.394zM12 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5z" />
  </svg>
);

export default function AscendaProPage() {
  const professionalFeatures = [
    {
      icon: <StudentManagementIcon />,
      title: "Gestão de alunos",
      description: "Gerencie sua base de alunos, organize perfis e mantenha histórico completo de cada aluno.",
    },
    {
      icon: <PersonalizedPlansIcon />,
      title: "Planos personalizados",
      description: "Crie e entregue treinos e planos alimentares sob medida para cada aluno, combinando treino e nutrição.",
    },
    {
      icon: <EvolutionTrackingIcon />,
      title: "Acompanhamento de evolução",
      description: "Monitore a evolução dos seus alunos com métricas detalhadas, gráficos e histórico completo.",
    },
    {
      icon: <CommunicationIcon />,
      title: "Comunicação com alunos",
      description: "Mantenha contato direto com seus alunos, envie feedbacks e acompanhe o engajamento.",
    },
    {
      icon: <ReportsIcon />,
      title: "Relatórios e insights",
      description: "Gere relatórios detalhados sobre a progressão dos alunos e obtenha insights acionáveis.",
    },
  ];

  const targetAudience = [
    "Personal trainers",
    "Nutricionistas",
    "Profissionais de educação física",
    "Clínicas e estúdios",
  ];

  return (
    <main className="bg-ascenda-navy">
      {/* Back Link */}
      <div className="container mx-auto px-6 pt-8">
        <Link
          href="/produtos/ascenda"
          className="inline-flex items-center gap-2 text-ascenda-mint/70 hover:text-ascenda-mint transition-colors duration-300 font-inter text-sm"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
          </svg>
          Voltar para Ascenda
        </Link>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center px-6 py-24 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 25% 25%, #98D6BB 0%, transparent 50%), radial-gradient(circle at 75% 75%, #27877D 0%, transparent 50%)`,
            }}
          />
        </div>

        <div className="container mx-auto text-center relative z-10 max-w-5xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-ascenda-mint/20 border border-ascenda-mint/30 mb-8 animate-fade-in-up">
            <span className="w-2 h-2 rounded-full bg-ascenda-mint animate-pulse" />
            <span className="font-manrope text-sm text-ascenda-mint font-medium tracking-wide uppercase">
              Ascenda Pro
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="font-manrope text-5xl md:text-6xl lg:text-7xl font-bold text-ascenda-cream mb-6 animate-fade-in-up">
            Ascenda Pro
          </h1>

          {/* Subtitle */}
          <p
            className="font-inter text-xl md:text-2xl text-ascenda-cream/90 mb-8 animate-fade-in-up"
            style={{ animationDelay: "100ms" }}
          >
            A plataforma completa para profissionais de saúde e performance.
          </p>

          {/* Description */}
          <p
            className="font-inter text-lg text-ascenda-cream/70 max-w-3xl mx-auto leading-relaxed animate-fade-in-up"
            style={{ animationDelay: "200ms" }}
          >
            Ferramentas avançadas para profissionais que buscam excelência no acompanhamento de seus alunos.
            Uma versão especializada da Ascenda, criada para quem transforma vidas através do movimento e nutrição.
          </p>
        </div>
      </section>

      {/* Target Audience Section */}
      <section className="px-6 py-24 bg-ascenda-navy/50">
        <div className="container mx-auto max-w-5xl">
          <h2 className="font-manrope text-3xl md:text-4xl font-bold text-ascenda-cream text-center mb-16 animate-fade-in-up">
            Para quem é a Ascenda Pro?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {targetAudience.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-6 rounded-xl bg-ascenda-navy/80 border border-ascenda-mint/10 hover:border-ascenda-mint/30 transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-10 h-10 rounded-lg bg-ascenda-primary/10 flex items-center justify-center flex-shrink-0">
                  <ProfessionalIcon />
                </div>
                <span className="font-inter text-lg text-ascenda-cream">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Features Section */}
      <section className="px-6 py-24">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="font-manrope text-3xl md:text-4xl font-bold text-ascenda-cream mb-6 animate-fade-in-up">
              Recursos Profissionais
            </h2>
            <p
              className="font-inter text-lg text-ascenda-cream/70 max-w-2xl mx-auto animate-fade-in-up"
              style={{ animationDelay: "100ms" }}
            >
              Tudo o que você precisa para gerenciar sua prática profissional e oferecer o melhor acompanhamento aos seus alunos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {professionalFeatures.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                index={index}
                theme="ascenda"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table Section (Optional) */}
      <section className="px-6 py-24 bg-ascenda-navy/50">
        <div className="container mx-auto max-w-5xl">
          <h2 className="font-manrope text-3xl md:text-4xl font-bold text-ascenda-cream text-center mb-16 animate-fade-in-up">
            Ascenda vs Ascenda Pro
          </h2>

          <div className="overflow-x-auto animate-fade-in-up" style={{ animationDelay: "100ms" }}>
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-ascenda-mint/20">
                  <th className="text-left font-manrope text-lg text-ascenda-cream p-4">Recurso</th>
                  <th className="text-center font-manrope text-lg text-ascenda-cream p-4">Ascenda</th>
                  <th className="text-center font-manrope text-lg text-ascenda-mint p-4">Ascenda Pro</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-ascenda-mint/10">
                  <td className="font-inter text-ascenda-cream/90 p-4">Treino e nutrição</td>
                  <td className="text-center p-4">
                    <svg className="w-6 h-6 text-ascenda-mint mx-auto" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </td>
                  <td className="text-center p-4">
                    <svg className="w-6 h-6 text-ascenda-mint mx-auto" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </td>
                </tr>
                <tr className="border-b border-ascenda-mint/10">
                  <td className="font-inter text-ascenda-cream/90 p-4">Acompanhamento de evolução</td>
                  <td className="text-center p-4">
                    <svg className="w-6 h-6 text-ascenda-mint mx-auto" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </td>
                  <td className="text-center p-4">
                    <svg className="w-6 h-6 text-ascenda-mint mx-auto" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </td>
                </tr>
                <tr className="border-b border-ascenda-mint/10">
                  <td className="font-inter text-ascenda-cream/90 p-4">Gestão de alunos</td>
                  <td className="text-center p-4 text-ascenda-cream/50">—</td>
                  <td className="text-center p-4">
                    <svg className="w-6 h-6 text-ascenda-mint mx-auto" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </td>
                </tr>
                <tr className="border-b border-ascenda-mint/10">
                  <td className="font-inter text-ascenda-cream/90 p-4">Planos personalizados</td>
                  <td className="text-center p-4 text-ascenda-cream/50">—</td>
                  <td className="text-center p-4">
                    <svg className="w-6 h-6 text-ascenda-mint mx-auto" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </td>
                </tr>
                <tr className="border-b border-ascenda-mint/10">
                  <td className="font-inter text-ascenda-cream/90 p-4">Relatórios avançados</td>
                  <td className="text-center p-4 text-ascenda-cream/50">—</td>
                  <td className="text-center p-4">
                    <svg className="w-6 h-6 text-ascenda-mint mx-auto" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </td>
                </tr>
                <tr>
                  <td className="font-inter text-ascenda-cream/90 p-4">Comunicação direta</td>
                  <td className="text-center p-4 text-ascenda-cream/50">—</td>
                  <td className="text-center p-4">
                    <svg className="w-6 h-6 text-ascenda-mint mx-auto" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="text-center mt-8">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-ascenda-mint/10 border border-ascenda-mint/20">
              <span className="font-manrope text-sm text-ascenda-mint font-medium">Em breve</span>
            </span>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-24">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="font-manrope text-3xl md:text-4xl font-bold text-ascenda-cream mb-6 animate-fade-in-up">
            Interessado na versão Pro?
          </h2>
          <p
            className="font-inter text-lg text-ascenda-cream/70 mb-12 max-w-2xl mx-auto animate-fade-in-up"
            style={{ animationDelay: "100ms" }}
          >
            Entre em contato conosco e descubra como a Ascenda Pro pode transformar sua prática profissional.
          </p>
          <div className="animate-fade-in-up" style={{ animationDelay: "200ms" }}>
            <Link
              href="#"
              className="inline-flex items-center gap-3 px-10 py-5 rounded-full bg-ascenda-primary hover:bg-ascenda-dark transition-all duration-300 text-ascenda-cream font-manrope font-semibold text-lg shadow-lg hover:shadow-xl hover:shadow-ascenda-primary/20"
            >
              Fale com a Rafique AI
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
