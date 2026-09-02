/**
 * Alturas das barras medidas no mock (gaps filtrados).
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
        width: "78%",
        opacity: 0.145,
        maskImage:
          "linear-gradient(90deg, transparent 0%, rgba(0,0,0,.4) 12%, #000 28%)",
        WebkitMaskImage:
          "linear-gradient(90deg, transparent 0%, rgba(0,0,0,.4) 12%, #000 28%)",
      }}
    >
      {/* Faixa vertical alinhada ao hero do mock (entre header e cards). */}
      <div
        className="absolute inset-x-0 flex items-end justify-end"
        style={{ top: "7%", bottom: "38%", gap: "5px" }}
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
