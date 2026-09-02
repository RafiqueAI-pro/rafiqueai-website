/** Trama de sinal — novo.md §6. Barras 2px, grid 8px, opacidade ~6–7%. */
export function SignalWeave({ className = "" }: { className?: string }) {
  // Perfil de densidades inspirado no mock (ondas irregulares à direita).
  const pattern = [
    22, 38, 28, 55, 34, 72, 30, 48, 40, 85, 45, 62, 26, 58, 36, 78, 50, 68, 32,
    74, 42, 60, 35, 90, 48, 66, 28, 54, 38, 80, 52, 64, 34, 76, 44, 82, 30, 58,
    40, 88, 55, 70, 36, 78, 46, 62, 32, 72, 50, 86, 40, 56, 34, 76, 48, 68, 28,
    84, 54, 66, 42, 90, 46, 60, 34, 74, 52, 80, 38, 68, 44, 86, 56, 72, 30, 64,
    48, 78, 40, 70, 36, 82, 52, 66, 42, 76, 46, 88, 34, 62, 50, 80, 38, 68, 56,
    74, 32, 84, 44, 66, 40, 78, 48, 72, 36, 60, 52, 86, 42, 68, 30, 76, 46, 82,
    54, 70, 38, 64, 50, 88, 44, 72, 34, 78, 56, 66, 40, 84, 48, 74, 36, 62, 52,
    80, 42, 70, 32, 86, 46, 68, 54, 76, 38, 64, 50, 82, 44, 72, 34, 78, 56, 66,
  ];

  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute right-0 bottom-[18%] flex items-end justify-end gap-[6px] overflow-hidden opacity-[0.085] ${className}`}
      style={{ width: "46%" }}
    >
      {pattern.map((h, i) => (
        <span
          key={i}
          className="w-[2px] shrink-0 bg-slate-300"
          style={{ height: `${h}%` }}
        />
      ))}
    </div>
  );
}
