import type { ReactNode } from "react";
import { PageHeader, type NavKey } from "@/components/site/PageHeader";
import { WaveBars } from "@/components/site/WaveBars";

/** Wraps the header + a page's hero section in the animated waveform backdrop. */
export function HeroBackdrop({
  current,
  children,
}: {
  current?: NavKey;
  children: ReactNode;
}) {
  return (
    <div className="relative overflow-hidden border-b border-white/[0.06]">
      <WaveBars />
      <div className="relative">
        <PageHeader current={current} />
        {children}
      </div>
    </div>
  );
}
