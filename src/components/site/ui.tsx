import Link from "next/link";
import type { ReactNode } from "react";

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <div className="mb-[18px] flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.12em] text-pulse-400">
      <span className="h-px w-3.5 bg-pulse-400" />
      {children}
    </div>
  );
}

export function ButtonPrimary({
  href,
  children,
  type,
}: {
  href?: string;
  children: ReactNode;
  type?: "submit";
}) {
  const className =
    "inline-flex items-center gap-2 rounded-md border border-pulse-500 bg-pulse-500 px-5 py-3 text-[13.5px] font-medium text-white transition-colors hover:border-pulse-400 hover:bg-pulse-400";
  if (type === "submit") {
    return (
      <button type="submit" className={className}>
        {children}
      </button>
    );
  }
  return (
    <Link href={href ?? "#"} className={className}>
      {children}
    </Link>
  );
}

export function ButtonOutline({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link
      href={href}
      className="inline-flex items-center gap-2 rounded-md border border-slate-700 px-5 py-3 text-[13.5px] font-medium text-cream transition-colors hover:border-slate-500"
    >
      {children}
    </Link>
  );
}

export function MonoLabel({ children }: { children: ReactNode }) {
  return (
    <div className="font-mono text-[10.5px] uppercase tracking-[0.08em] text-slate-500">
      {children}
    </div>
  );
}
