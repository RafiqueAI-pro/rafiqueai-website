import type { ReactNode } from "react";
import Image from "next/image";
import { PageHeader, type NavKey } from "@/components/site/PageHeader";

/** Wraps the header + a page's hero section in the waveform backdrop (wave-exact.svg). */
export function HeroBackdrop({
  current,
  children,
}: {
  current?: NavKey;
  children: ReactNode;
}) {
  return (
    <div className="relative overflow-hidden border-b border-white/[0.06]">
      <Image
        src="/brand/wave-exact.svg"
        alt=""
        aria-hidden="true"
        fill
        unoptimized
        className="pointer-events-none hidden object-cover object-right md:block"
      />
      <div className="relative">
        <PageHeader current={current} />
        {children}
      </div>
    </div>
  );
}
