/**
 * Alturas das barras medidas no mock (gaps filtrados).
 * densify → ~80 barras, 2px + gap 5px ≈ trama do sitenovo.
 */
const MEASURED = [
  12, 14, 10, 10, 10, 10, 10, 17, 42, 14, 34, 23, 10, 17, 22, 12, 35, 10, 16,
  73, 51, 63, 16, 31, 40, 29, 22, 13, 38, 28, 14, 10, 28, 16, 18, 24, 27, 47,
  70, 63, 10, 23, 36, 18, 20, 35, 51,
];

function densify(src: number[], target: number): number[] {
  const out: number[] = [];
  for (let i = 0; i < target; i++) {
    const t = (i / Math.max(1, target - 1)) * (src.length - 1);
    const a = Math.floor(t);
    const b = Math.min(src.length - 1, a + 1);
    const f = t - a;
    out.push(Math.round(src[a] * (1 - f) + src[b] * f));
  }
  return out;
}

const HEIGHTS = densify(MEASURED, 84);

export function SignalWeave({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-y-0 right-0 hidden overflow-hidden md:block ${className}`}
      style={{
        width: "68%",
        opacity: 0.14,
        maskImage:
          "linear-gradient(90deg, transparent 0%, rgba(0,0,0,.45) 14%, #000 32%)",
        WebkitMaskImage:
          "linear-gradient(90deg, transparent 0%, rgba(0,0,0,.45) 14%, #000 32%)",
      }}
    >
      <div
        className="absolute inset-x-0 bottom-[24%] top-[9%] flex items-end justify-end"
        style={{ gap: "5px" }}
      >
        {HEIGHTS.map((h, i) => (
          <span
            key={i}
            className="w-[2px] shrink-0 bg-[#9AA3B0]"
            style={{ height: `${Math.max(10, Math.min(96, h))}%` }}
          />
        ))}
      </div>
    </div>
  );
}
