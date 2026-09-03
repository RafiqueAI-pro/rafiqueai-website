"use client";

import { useState, type FormEvent } from "react";
import { ButtonPrimary } from "@/components/site/ui";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-lg border border-slate-800 bg-[#131822] p-8">
        <div className="font-mono text-[11px] uppercase tracking-[0.08em] text-pulse-400">
          Mensagem enviada
        </div>
        <p className="mt-3 text-[15px] leading-relaxed text-slate-300">
          Recebemos sua mensagem. Respondemos em até 1 dia útil no e-mail
          informado.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-[18px] flex flex-col gap-2">
        <label
          htmlFor="c-nome"
          className="font-mono text-[11px] uppercase tracking-[0.04em] text-slate-400"
        >
          Nome
        </label>
        <input
          id="c-nome"
          name="nome"
          type="text"
          required
          placeholder="Seu nome"
          className="rounded-md border border-slate-800 bg-[#11161F] px-[14px] py-3 text-[14px] text-cream outline-none transition-colors placeholder:text-slate-600 focus:border-pulse-400"
        />
      </div>
      <div className="mb-[18px] flex flex-col gap-2">
        <label
          htmlFor="c-email"
          className="font-mono text-[11px] uppercase tracking-[0.04em] text-slate-400"
        >
          E-mail
        </label>
        <input
          id="c-email"
          name="email"
          type="email"
          required
          placeholder="voce@empresa.com"
          className="rounded-md border border-slate-800 bg-[#11161F] px-[14px] py-3 text-[14px] text-cream outline-none transition-colors placeholder:text-slate-600 focus:border-pulse-400"
        />
      </div>
      <div className="mb-[18px] flex flex-col gap-2">
        <label
          htmlFor="c-msg"
          className="font-mono text-[11px] uppercase tracking-[0.04em] text-slate-400"
        >
          O que você precisa
        </label>
        <textarea
          id="c-msg"
          name="mensagem"
          required
          placeholder="Descreva o problema ou o fluxo que hoje é manual."
          className="min-h-[100px] resize-y rounded-md border border-slate-800 bg-[#11161F] px-[14px] py-3 text-[14px] text-cream outline-none transition-colors placeholder:text-slate-600 focus:border-pulse-400"
        />
      </div>
      <ButtonPrimary type="submit">Enviar mensagem →</ButtonPrimary>
    </form>
  );
}
