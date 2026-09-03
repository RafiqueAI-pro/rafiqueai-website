import type { Metadata } from "next";
import { LegalPage } from "@/components/site/LegalPage";

export const metadata: Metadata = {
  title: "Termos — Rafique AI",
  description: "Termos de uso da Rafique AI e da suíte Orkesta.",
};

const SECTIONS = [
  {
    num: "01",
    id: "objeto",
    title: "Objeto",
    body: [
      "Estes termos regem o uso do site rafiqueai.com.br e o acesso institucional aos produtos da suíte Orkesta. O uso comercial de cada produto segue o contrato firmado com o cliente.",
    ],
  },
  {
    num: "02",
    id: "uso",
    title: "Uso do serviço",
    body: [
      "O conteúdo deste site é informativo. Não reproduza, revenda ou automatize a coleta de conteúdo sem autorização por escrito.",
    ],
  },
  {
    num: "03",
    id: "contas",
    title: "Contas e acesso",
    body: [
      "Credenciais de acesso aos produtos Orkesta são pessoais e intransferíveis. O compartilhamento de login pode suspender o acesso.",
    ],
  },
  {
    num: "04",
    id: "limites",
    title: "Limites de responsabilidade",
    body: [
      "Não respondemos por decisões tomadas com base em dados de terceiros integrados aos produtos Orkesta. A disponibilidade de cada produto segue o SLA definido em contrato.",
    ],
  },
  {
    num: "05",
    id: "contato-legal",
    title: "Contato",
    body: [
      "Dúvidas sobre estes termos: contato@rafiqueai.com.br.",
    ],
  },
];

export default function TermosPage() {
  return (
    <LegalPage
      current="termos"
      title="Termos de uso"
      updated="03 set 2026"
      sections={SECTIONS}
    />
  );
}
