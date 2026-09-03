import type { Metadata } from "next";
import { LegalPage } from "@/components/site/LegalPage";

export const metadata: Metadata = {
  title: "Privacidade — Rafique AI",
  description: "Política de privacidade da Rafique AI.",
};

const SECTIONS = [
  {
    num: "01",
    id: "coleta",
    title: "Dados coletados",
    body: [
      "Coletamos nome, e-mail e o conteúdo enviado pelo formulário de contato. Nos produtos Orkesta, coletamos dados operacionais necessários para execução e auditoria dos fluxos.",
    ],
  },
  {
    num: "02",
    id: "uso",
    title: "Uso dos dados",
    body: [
      "Usamos os dados para responder contato, prestar o serviço contratado e manter registro de execução exigido por auditoria técnica. Não usamos dados de clientes para treinar modelos de terceiros.",
    ],
  },
  {
    num: "03",
    id: "compartilhamento",
    title: "Compartilhamento",
    body: [
      "Não vendemos dados a terceiros. Compartilhamos dados operacionais apenas com provedores de infraestrutura necessários para rodar os produtos contratados, sob contrato de confidencialidade.",
    ],
  },
  {
    num: "04",
    id: "direitos",
    title: "Seus direitos (LGPD)",
    body: [
      "Você pode solicitar acesso, correção ou exclusão dos seus dados a qualquer momento pelo e-mail de contato abaixo.",
    ],
  },
  {
    num: "05",
    id: "contato-dpo",
    title: "Contato do DPO",
    body: ["Solicitações LGPD: contato@rafiqueai.com.br."],
  },
];

export default function PrivacidadePage() {
  return (
    <LegalPage
      current="privacidade"
      title="Política de privacidade"
      updated="03 set 2026"
      sections={SECTIONS}
    />
  );
}
