"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export type Screenshot = {
  src: string;
  label: string;
  desc: string;
};

const ACCENT_RING: Record<string, string> = {
  crm: "group-hover:ring-crm-400/70",
  contentos: "group-hover:ring-contentos-400/70",
  pulse: "group-hover:ring-pulse-400/70",
};

const ACCENT_TEXT: Record<string, string> = {
  crm: "text-crm-400",
  contentos: "text-contentos-400",
  pulse: "text-pulse-400",
};

export function ScreenshotGallery({
  items,
  accent = "crm",
  columns = 3,
  altPrefix,
}: {
  items: readonly Screenshot[];
  accent?: "crm" | "contentos" | "pulse";
  columns?: 2 | 3;
  altPrefix: string;
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const close = useCallback(() => setOpenIndex(null), []);
  const prev = useCallback(
    () => setOpenIndex((i) => (i === null ? null : (i - 1 + items.length) % items.length)),
    [items.length],
  );
  const next = useCallback(
    () => setOpenIndex((i) => (i === null ? null : (i + 1) % items.length)),
    [items.length],
  );

  useEffect(() => {
    if (openIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [openIndex, close, prev, next]);

  const active = openIndex !== null ? items[openIndex] : null;

  return (
    <>
      <div
        className={cn(
          "mt-8 grid gap-6 sm:grid-cols-2",
          columns === 3 ? "lg:grid-cols-3" : "lg:grid-cols-2",
        )}
      >
        {items.map((s, i) => (
          <button
            key={s.label}
            type="button"
            onClick={() => setOpenIndex(i)}
            className="group overflow-hidden rounded-lg border border-slate-800 bg-[#11161F] text-left transition-colors hover:border-slate-700"
            aria-label={`Ampliar: ${altPrefix} — ${s.label}`}
          >
            <div
              className={cn(
                "relative aspect-[16/10] w-full overflow-hidden border-b border-slate-800 ring-1 ring-inset ring-transparent transition-all",
                ACCENT_RING[accent],
              )}
            >
              <Image
                src={s.src}
                alt={`${altPrefix} — ${s.label}`}
                fill
                unoptimized
                className="object-cover object-top transition-transform duration-300 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition-all duration-200 group-hover:bg-black/25 group-hover:opacity-100">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-black/60 text-cream backdrop-blur-sm">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path
                      d="M8 3H4a1 1 0 0 0-1 1v4M16 3h4a1 1 0 0 1 1 1v4M8 21H4a1 1 0 0 1-1-1v-4M16 21h4a1 1 0 0 0 1-1v-4"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </div>
            </div>
            <div className="p-4">
              <div className="text-[13px] font-semibold text-cream">{s.label}</div>
              <p className="mt-1 text-[12px] leading-relaxed text-slate-400">{s.desc}</p>
            </div>
          </button>
        ))}
      </div>

      {active ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm md:p-10"
          role="dialog"
          aria-modal="true"
          aria-label={`${altPrefix} — ${active.label}`}
          onClick={close}
        >
          <button
            type="button"
            onClick={close}
            className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-cream transition-colors hover:bg-white/15 md:right-8 md:top-8"
            aria-label="Fechar"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M6 6l12 12M18 6 6 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          </button>

          {items.length > 1 ? (
            <>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  prev();
                }}
                className="absolute left-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-white/5 text-cream transition-colors hover:bg-white/15 md:left-6"
                aria-label="Anterior"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M15 6l-6 6 6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  next();
                }}
                className="absolute right-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-white/5 text-cream transition-colors hover:bg-white/15 md:right-6"
                aria-label="Próxima"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </>
          ) : null}

          <div
            className="flex max-h-full max-w-full flex-col items-center gap-3"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative max-h-[80vh] max-w-[92vw] overflow-hidden rounded-lg border border-white/10 shadow-[0_24px_80px_rgba(0,0,0,0.5)]">
              <Image
                src={active.src}
                alt={`${altPrefix} — ${active.label}`}
                width={1600}
                height={1000}
                unoptimized
                className="max-h-[80vh] w-auto object-contain"
              />
            </div>
            <div className="text-center">
              <div className={cn("text-[13px] font-semibold", ACCENT_TEXT[accent])}>{active.label}</div>
              <p className="mt-1 max-w-[60ch] text-[12.5px] leading-relaxed text-slate-400">{active.desc}</p>
              {items.length > 1 ? (
                <p className="mt-2 font-mono text-[11px] text-slate-500">
                  {(openIndex ?? 0) + 1} / {items.length}
                </p>
              ) : null}
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
