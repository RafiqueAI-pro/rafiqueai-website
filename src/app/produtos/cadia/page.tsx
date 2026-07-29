"use client";

import Link from "next/link";
import { useState } from "react";
import FeatureCard from "@/components/FeatureCard";
import ProductSwitcher from "@/components/ProductSwitcher";
import ConversationDemo from "@/components/ConversationDemo";

// SVG Icons for Feature Cards
const AnamneseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h.008v.008H8.25v-.008zm0-3h.008v.008H8.25v-.008zm0-3h.008v.008H8.25v-.008zm0-3h.008v.008H8.25v-.008zm0-3h.008v.008H8.25v-.008zm3 12h.008v.008H11.25v-.008zm0-3h.008v.008H11.25v-.008zm0-3h.008v.008H11.25v-.008zm0-3h.008v.008H11.25v-.008zm3 12h.008v.008H14.25v-.008zm0-3h.008v.008H14.25v-.008zm0-3h.008v.008H14.25v-.008zm0-3h.008v.008H14.25v-.008zm3 12h.008v.008H17.25v-.008zm0-3h.008v.008H17.25v-.008zm0-3h.008v.008H17.25v-.008zm0-3h.008v.008H17.25v-.008z" />
  </svg>
);

const MeasuresIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
  </svg>
);

const HealthIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
  </svg>
);

const CheckInIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const MealIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8.25v-1.5m0 1.5c-1.355 0-2.697.056-4.024.166C6.522 8.318 5.25 9.651 5.25 11.25v3.75m4.5-3.75h4.5m-4.5 0c1.355 0 2.697.056 4.024.166C17.478 12.682 18.75 14.015 18.75 15.75v3.75m-4.5-3.75h-4.5" />
  </svg>
);

const ReminderIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
  </svg>
);

const HistoryIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const PlanIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
  </svg>
);

const StudentIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
  </svg>
);

const UploadIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
  </svg>
);

const SuggestionIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z" />
  </svg>
);

const CadiaProIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
  </svg>
);

export default function CadiaPage() {
  const [target, setTarget] = useState<"user" | "professional">("user");

  const userFeatures = [
    {
      icon: <AnamneseIcon />,
      title: "Anamnese",
      description: "Preencha sua anamnese diretamente pelo chat, de forma natural e conversada.",
    },
    {
      icon: <MeasuresIcon />,
      title: "Medidas e peso",
      description: "Registre suas medidas e peso corporal pelo WhatsApp ou Telegram a qualquer momento.",
    },
    {
      icon: <HealthIcon />,
      title: "Informações de saúde",
      description: "Informe condições de saúde relevantes para um acompanhamento mais seguro.",
    },
    {
      icon: <CheckInIcon />,
      title: "Check-in de treino",
      description: "Faça check-in dos seus treinos diários de forma rápida e simples, sem sair do chat.",
    },
    {
      icon: <MealIcon />,
      title: "Check-in de refeições",
      description: "Registre suas refeições e receba acompanhamento nutricional pelo aplicativo que você já usa.",
    },
    {
      icon: <ReminderIcon />,
      title: "Lembretes",
      description: "Receba lembretes personalizados para treinos, refeições e registros de progresso.",
    },
    {
      icon: <HistoryIcon />,
      title: "Histórico",
      description: "Acesse seu histórico completo de treinos, medidas e refeições a qualquer momento.",
    },
    {
      icon: <PlanIcon />,
      title: "Planos para usuários",
      description: "Escolha o plano que melhor se adapta ao seu objetivo e ritmo de treino.",
    },
  ];

  const professionalFeatures = [
    {
      icon: <StudentIcon />,
      title: "Acompanhamento de alunos",
      description: "Acompanhe seus alunos diretamente pelo chat, recebendo check-ins e atualizações em tempo real.",
    },
    {
      icon: <UploadIcon />,
      title: "Upload de plano",
      description: "Envie planos de treino e alimentação que a Cadia entregará aos seus alunos pelo chat.",
    },
    {
      icon: <SuggestionIcon />,
      title: "Sugestões personalizadas",
      description: "Receba sugestões baseadas nos dados dos seus alunos para ajustes finos nos planos.",
    },
    {
      icon: <HistoryIcon />,
      title: "Histórico de alunos",
      description: "Acesse o histórico completo de cada aluno, incluindo medidas, treinos e aderência.",
    },
    {
      icon: <CadiaProIcon />,
      title: "Cadia Pro",
      description: "Plano exclusivo para profissionais com ferramentas avançadas de acompanhamento e gestão.",
    },
  ];

  return (
    <main className="bg-cadia-dark">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center px-6 py-24 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 25% 25%, #F96842 0%, transparent 50%), radial-gradient(circle at 75% 75%, #FC8623 0%, transparent 50%)`,
            }}
          />
        </div>

        <div className="container mx-auto text-center relative z-10 max-w-5xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cadia-primary/10 border border-cadia-primary/20 mb-8 animate-fade-in-up">
            <span className="w-2 h-2 rounded-full bg-cadia-primary animate-pulse" />
            <span className="font-inter text-sm text-cadia-primary font-medium">
              Assistente Conversacional
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="font-manrope text-6xl md:text-7xl lg:text-8xl font-bold text-cadia-cream mb-6 animate-fade-in-up">
            Cadia
          </h1>

          {/* Subtitle */}
          <p
            className="font-manrope text-xl md:text-2xl text-cadia-cream/90 mb-8 animate-fade-in-up"
            style={{ animationDelay: "100ms" }}
          >
            Seu acompanhamento cabe em uma conversa.
          </p>

          {/* Description */}
          <p
            className="font-inter text-lg md:text-xl text-cadia-cream/70 max-w-3xl mx-auto leading-relaxed animate-fade-in-up"
            style={{ animationDelay: "200ms" }}
          >
            A Cadia acompanha seus treinos, alimentação, medidas e evolução
            diretamente pelos aplicativos que você já usa todos os dias.
          </p>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <svg
              className="w-6 h-6 text-cadia-cream/40"
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

      {/* Product Switcher Section */}
      <section className="px-6 py-12 bg-cadia-dark">
        <div className="container mx-auto max-w-7xl">
          <ProductSwitcher onSwitch={setTarget} activeTarget={target} />
        </div>
      </section>

      {/* Features Section */}
      <section className="px-6 py-24 bg-cadia-dark/50">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="font-manrope text-4xl md:text-5xl font-bold text-cadia-cream mb-4">
              {target === "user" ? "Para Você" : "Para Profissionais"}
            </h2>
            <p className="font-inter text-cadia-cream/60 max-w-2xl mx-auto">
              {target === "user"
                ? "Acompanhe seu progresso de forma simples, direto pelo WhatsApp ou Telegram."
                : "Gerencie seus alunos e entregue acompanhamento de alta qualidade pelo chat."}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {(target === "user" ? userFeatures : professionalFeatures).map(
              (feature, index) => (
                <FeatureCard
                  key={feature.title}
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                  index={index}
                  theme="cadia"
                />
              )
            )}
          </div>
        </div>
      </section>

      {/* Conversation Demo Section */}
      <section className="px-6 py-24 bg-cadia-dark">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="font-manrope text-4xl md:text-5xl font-bold text-cadia-cream mb-4">
              Veja como funciona
            </h2>
            <p className="font-inter text-cadia-cream/60 max-w-2xl mx-auto">
              Uma demonstração simples de como é fazer check-in de treino com a
              Cadia.
            </p>
          </div>

          <ConversationDemo />
        </div>
      </section>

      {/* Responsible Language Section */}
      <section className="px-6 py-12 bg-cadia-dark/50">
        <div className="container mx-auto max-w-4xl">
          <div className="flex items-start gap-3 p-6 rounded-2xl bg-cadia-primary/5 border border-cadia-primary/10">
            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-cadia-primary/20 flex items-center justify-center mt-0.5">
              <span className="font-manrope text-cadia-primary text-xs font-bold">
                ⓘ
              </span>
            </div>
            <p className="font-inter text-sm text-cadia-cream/60 leading-relaxed">
              <strong className="text-cadia-cream/80">Aviso importante:</strong> A
              Cadia não substitui profissionais habilitados. Ela é uma ferramenta
              de acompanhamento e registro. Para questões de saúde, diagnósticos
              ou prescrições, consulte sempre um profissional qualificado.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-24 bg-cadia-dark">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="font-manrope text-4xl md:text-5xl font-bold text-cadia-cream mb-6">
            Comece a usar a Cadia
          </h2>
          <p className="font-inter text-lg text-cadia-cream/70 mb-10 max-w-2xl mx-auto">
            Transforme seu acompanhamento de treinos e alimentação em uma
            conversa simples no WhatsApp ou Telegram.
          </p>
          <Link
            href="/#contato"
            className="inline-flex font-manrope text-lg font-semibold bg-cadia-primary text-cadia-dark px-10 py-4 rounded-full hover:bg-cadia-secondary transition-all duration-300 hover:scale-105"
          >
            Fale com a Rafique AI
          </Link>
        </div>
      </section>
    </main>
  );
}
