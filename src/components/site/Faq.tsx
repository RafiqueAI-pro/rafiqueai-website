"use client";

import { useState } from "react";

export interface FaqItem {
  question: string;
  answer: string;
}

export function Faq({ items }: { items: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="flex flex-col">
      {items.map((item, i) => {
        const open = openIndex === i;
        return (
          <div key={item.question} className="border-b border-white/[0.06] first:border-t">
            <button
              type="button"
              onClick={() => setOpenIndex(open ? null : i)}
              aria-expanded={open}
              className="flex w-full items-center justify-between gap-4 py-5 text-left"
            >
              <span className="text-[15px] font-medium text-cream">{item.question}</span>
              <span
                className={`shrink-0 font-mono text-[18px] text-slate-500 transition-transform ${open ? "rotate-45" : ""}`}
                aria-hidden
              >
                +
              </span>
            </button>
            {open ? (
              <p className="max-w-[62ch] pb-5 text-[14.5px] leading-relaxed text-slate-400">
                {item.answer}
              </p>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
