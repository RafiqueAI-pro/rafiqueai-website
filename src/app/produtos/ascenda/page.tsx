"use client";

import Link from "next/link";
import FeatureCard from "@/components/FeatureCard";

// SVG Icons for Ascenda Features
const WorkoutIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
  </svg>
);

const NutritionIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8.25v-1.5m0 1.5c-1.355 0-2.697.056-4.024.166C6.522 8.318 5.25 9.651 5.25 11.25v3.75m4.5-3.75h4.5m-4.5 0c1.355 0 2.697.056 4.024.166C17.478 12.682 18.75 14.015 18.75 15.75v3.75m-4.5-3.75h-4.5" />
  </svg>
);

const EvolutionIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
  </svg>
);

const TrackingIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const SocialIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
  </svg>
);

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

const ProfessionalTrackingIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const AscendaProIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
  </svg>
);

const CommunityIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
  </svg>
);

const ConnectionIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m9.86-2.556a4.5 4.5 0 00-1.242-7.244l-4.5-4.5a4.5 4.5 0 00-6.364 6.364L4.343 8.69" />
  </svg>
);

const AppStoreIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
    <path d="M11.673 7.222c-.884 0-1.668.533-2.167 1.333-.5-.8-1.283-1.333-2.167-1.333-.884 0-1.668.533-2.167 1.333v-1.333h-1.5v4.5h1.5v-2.667c0-.553.447-1 1-1s1 .447 1 1v2.667h1.5v-2.667c0-.553.447-1 1-1s1 .447 1 1v2.667h1.5v-2.667c0-.553.447-1 1-1s1 .447 1 1v2.667h1.5v-4.5h-1.5v1.333c-.5-.8-1.283-1.333-2.167-1.333z" />
    <path d="M18.5 6.5c-1.381 0-2.5 1.119-2.5 2.5s1.119 2.5 2.5 2.5 2.5-1.119 2.5-2.5-1.119-2.5-2.5-2.5zm0 1c.828 0 1.5.672 1.5 1.5s-.672 1.5-1.5 1.5-1.5-.672-1.5-1.5.672-1.5 1.5-1.5z" />
    <path d="M16.5 12c-1.933 0-3.5 1.567-3.5 3.5s1.567 3.5 3.5 3.5 3.5-1.567 3.5-3.5-1.567-3.5-3.5-3.5zm0 1c1.381 0 2.5 1.119 2.5 2.5s-1.119 2.5-2.5 2.5-2.5-1.119-2.5-2.5 1.119-2.5 2.5-2.5z" />
  </svg>
);

const GooglePlayIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
    <path d="M3.609 1.814L13.792 12 3.61 22.186a1.5 1.5 0 01-.609-1.203V3.017c0-.46.214-.894.609-1.203zm10.89 10.893l2.302 2.302-8.293 4.79-4.176-4.176 10.167-2.916zm2.302-2.302L14.5 8.207l-10.167 2.916 4.176-4.176 8.293 4.79z" />
  </svg>
);

export default function AscendaPage() {
  const userFeatures = [
    {
      icon: <WorkoutIcon />,
      title: "Treino",
      description: "Acesse seus treinos personalizados, acompanhe séries e repetições em tempo real.",
    },
    {
      icon: <NutritionIcon />,
      title: "Alimentação",
      description: "Registre refeições, acompanhe macronutrientes e receba orientações nutricionais.",
    },
    {
      icon: <EvolutionIcon />,
      title: "Evolução",
      description: "Acompanhe medidas, peso e progresso visual com gráficos e histórico completo.",
    },
    {
      icon: <TrackingIcon />,
      title: "Acompanhamento",
      description: "Monitore sua aderência e receba insights personalizados sobre sua jornada.",
    },
    {
      icon: <SocialIcon />,
      title: "Experiências sociais",
      description: "Conecte-se com outros usuários, compartilhe conquistas e participe de desafios.",
    },
  ];

  const professionalFeatures = [
    {
      icon: <StudentManagementIcon />,
      title: "Gestão de alunos",
      description: "Gerencie sua base de alunos, acompanhe progresso e mantenha comunicação direta.",
    },
    {
      icon: <PersonalizedPlansIcon />,
      title: "Planos personalizados",
      description: "Crie e entregue treinos e planos alimentares sob medida para cada aluno.",
    },
    {
      icon: <ProfessionalTrackingIcon />,
      title: "Acompanhamento",
      description: "Monitore a evolução dos seus alunos com métricas detalhadas e relatórios.",
    },
    {
      icon: <AscendaProIcon />,
      title: "Ascenda Pro",
      description: "Ferramentas avançadas para profissionais que buscam excelência no acompanhamento.",
    },
  ];

  return (
    <main className="bg-ascenda-navy">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center px-6 py-24 overflow-hidden">
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
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-ascenda-mint/20 border border-ascenda-mint/30 mb-8 animate-fade-in-up">
            <span className="w-2 h-2 rounded-full bg-ascenda-mint animate-pulse" />
            <span className="font-manrope text-sm text-ascenda-mint font-medium tracking-wide uppercase">
              Em desenvolvimento para iOS e Android
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="font-manrope text-6xl md:text-7xl lg:text-8xl font-bold text-ascenda-cream mb-6 animate-fade-in-up">
            Ascenda
          </h1>

          {/* Subtitle */}
          <p
            className="font-manrope text-xl md:text-2xl text-ascenda-cream/90 mb-8 animate-fade-in-up"
            style={{ animationDelay: "100ms" }}
          >
            Sua saúde, sua evolução e sua comunidade em um só app.
          </p>

          {/* Description */}
          <p
            className="font-inter text-lg md:text-xl text-ascenda-cream/70 max-w-3xl mx-auto leading-relaxed mb-12 animate-fade-in-up"
            style={{ animationDelay: "200ms" }}
          >
            A Ascenda reúne treino, alimentação, acompanhamento e experiências sociais em uma plataforma criada para usuários e profissionais de saúde e performance.
          </p>

          {/* App Store Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: "300ms" }}>
            <button
              disabled
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-ascenda-cream/10 border border-ascenda-mint/20 text-ascenda-cream/50 cursor-not-allowed font-manrope font-semibold"
            >
              <AppStoreIcon />
              App Store
            </button>
            <button
              disabled
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-ascenda-cream/10 border border-ascenda-mint/20 text-ascenda-cream/50 cursor-not-allowed font-manrope font-semibold"
            >
              <GooglePlayIcon />
              Google Play
            </button>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <svg
              className="w-6 h-6 text-ascenda-cream/40"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </div>
      </section>

      {/* Features for Users Section */}
      <section className="px-6 py-24 bg-ascenda-navy/50">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="font-manrope text-4xl md:text-5xl font-bold text-ascenda-cream mb-4">
              Para Usuários
            </h2>
            <p className="font-inter text-ascenda-cream/60 max-w-2xl mx-auto">
              Tudo o que você precisa para transformar sua saúde e performance em um único lugar.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {userFeatures.map((feature, index) => (
              <FeatureCard
                key={feature.title}
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

      {/* Features for Professionals Section */}
      <section className="px-6 py-24 bg-ascenda-navy">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="font-manrope text-4xl md:text-5xl font-bold text-ascenda-cream mb-4">
              Para Profissionais
            </h2>
            <p className="font-inter text-ascenda-cream/60 max-w-2xl mx-auto">
              Ferramentas completas para acompanhar seus alunos e entregar resultados de excelência.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {professionalFeatures.map((feature, index) => (
              <FeatureCard
                key={feature.title}
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

      {/* Social Experience Section */}
      <section className="px-6 py-24 bg-ascenda-navy/50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-ascenda-primary/10 mb-6">
              <CommunityIcon />
            </div>
            <h2 className="font-manrope text-4xl md:text-5xl font-bold text-ascenda-cream mb-4">
              Experiência Social
            </h2>
            <p className="font-inter text-ascenda-cream/70 max-w-2xl mx-auto leading-relaxed">
              Conecte-se com uma comunidade que compartilha dos mesmos objetivos. Compartilhe conquistas, participe de desafios e mantenha-se motivado com o apoio de outros usuários e profissionais.
            </p>
          </div>
        </div>
      </section>

      {/* Ascenda Pro Section */}
      <section className="px-6 py-24 bg-ascenda-navy">
        <div className="container mx-auto max-w-4xl">
          <div className="relative border border-ascenda-mint/20 rounded-3xl p-12 bg-ascenda-navy/50 overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-ascenda-primary/5 rounded-full blur-3xl" />
            
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <AscendaProIcon />
                <h2 className="font-manrope text-4xl md:text-5xl font-bold text-ascenda-cream">
                  Ascenda Pro
                </h2>
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-ascenda-mint/20 border border-ascenda-mint/30 text-ascenda-mint text-sm font-manrope font-medium">
                  Em breve
                </span>
              </div>
              
              <p className="font-inter text-ascenda-cream/70 text-lg leading-relaxed mb-8">
                A versão Pro da Ascenda oferece recursos exclusivos para usuários que buscam uma experiência ainda mais completa. Com funcionalidades avançadas de acompanhamento, análises detalhadas e integrações premium, o Ascenda Pro leva sua jornada de saúde e performance ao próximo nível.
              </p>

              <div className="mb-8">
                <Link
                  href="/produtos/ascenda-pro"
                  className="inline-flex items-center gap-2 text-ascenda-mint hover:text-ascenda-cream transition-colors duration-300 font-manrope font-semibold"
                >
                  Conheça a Ascenda Pro
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                  </svg>
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-ascenda-mint mt-2 flex-shrink-0" />
                  <p className="font-inter text-ascenda-cream/70">Análises avançadas de progresso</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-ascenda-mint mt-2 flex-shrink-0" />
                  <p className="font-inter text-ascenda-cream/70">Relatórios detalhados de performance</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-ascenda-mint mt-2 flex-shrink-0" />
                  <p className="font-inter text-ascenda-cream/70">Integrações com dispositivos wearables</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-ascenda-mint mt-2 flex-shrink-0" />
                  <p className="font-inter text-ascenda-cream/70">Acompanhamento prioritário</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Optional Cadia Integration Section */}
      <section className="px-6 py-24 bg-ascenda-navy/50">
        <div className="container mx-auto max-w-4xl">
          <div className="flex flex-col md:flex-row items-center gap-8 p-8 rounded-2xl bg-ascenda-cream/5 border border-ascenda-mint/10">
            <div className="flex-shrink-0">
              <div className="w-16 h-16 rounded-full bg-ascenda-primary/10 flex items-center justify-center">
                <ConnectionIcon />
              </div>
            </div>
            <div className="flex-1">
              <h3 className="font-manrope text-2xl font-bold text-ascenda-cream mb-3">
                Integração Opcional com Cadia
              </h3>
              <p className="font-inter text-ascenda-cream/70 leading-relaxed">
                A Ascenda é uma plataforma independente. Você pode usar a Ascenda separadamente, sem depender de outros produtos. No entanto, se você já utiliza a Cadia, poderá integrar os dois aplicativos para uma experiência ainda mais completa. A escolha é sua.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Interest Form Section */}
      <section className="px-6 py-24 bg-ascenda-navy">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-12">
            <h2 className="font-manrope text-4xl md:text-5xl font-bold text-ascenda-cream mb-4">
              Quer ser o primeiro a saber?
            </h2>
            <p className="font-inter text-ascenda-cream/60">
              Deixe seu email e receba novidades sobre o lançamento da Ascenda.
            </p>
          </div>

          <div className="relative">
            <div className="flex flex-col sm:flex-row gap-3 p-2 rounded-2xl bg-ascenda-cream/10 border border-ascenda-mint/30">
              <input
                type="email"
                placeholder="seu@email.com"
                disabled
                className="flex-1 px-6 py-4 rounded-xl bg-transparent text-ascenda-cream/50 font-inter placeholder:text-ascenda-cream/30 focus:outline-none cursor-not-allowed"
              />
              <button
                disabled
                className="px-8 py-4 rounded-xl bg-ascenda-primary/50 text-ascenda-cream/50 font-manrope font-semibold cursor-not-allowed"
              >
                Quero saber
              </button>
            </div>
            <div className="absolute -top-3 -right-3">
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-ascenda-mint/20 border border-ascenda-mint/30 text-ascenda-mint text-xs font-manrope font-medium">
                Em breve
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-24 bg-ascenda-navy/50">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="font-manrope text-4xl md:text-5xl font-bold text-ascenda-cream mb-6">
            Acompanhe o desenvolvimento
          </h2>
          <p className="font-inter text-lg text-ascenda-cream/70 mb-10 max-w-2xl mx-auto">
            A Ascenda está sendo criada com foco na sua experiência. Fique atento às novidades e seja parte desta evolução.
          </p>
          <Link
            href="/#contato"
            className="inline-flex font-manrope text-lg font-semibold bg-ascenda-primary text-ascenda-cream px-10 py-4 rounded-full hover:bg-ascenda-dark transition-all duration-300 hover:scale-105"
          >
            Fale com a Rafique AI
          </Link>
        </div>
      </section>
    </main>
  );
}
