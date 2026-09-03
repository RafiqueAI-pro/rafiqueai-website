/**
 * Símbolo "Anel Segmentado" (novo.md §5): 8 arcos, gap 12°, terminais retos.
 * Geometria calculada, não path data escrito à mão.
 */
type RingMarkProps = {
  size?: number;
  className?: string;
};

function buildRingSegments(segCount = 8, gapDeg = 12, r = 44, cx = 60, cy = 60) {
  const segDeg = 360 / segCount - gapDeg;
  const large = segDeg > 180 ? 1 : 0;
  const polar = (deg: number) => {
    const rad = (deg * Math.PI) / 180;
    return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
  };

  return Array.from({ length: segCount }, (_, i) => {
    const start = i * (360 / segCount) - 90;
    const end = start + segDeg;
    const s = polar(start);
    const e = polar(end);
    return `M ${s.x.toFixed(2)} ${s.y.toFixed(2)} A ${r} ${r} 0 ${large} 1 ${e.x.toFixed(2)} ${e.y.toFixed(2)}`;
  });
}

const SEGMENTS = buildRingSegments();

export function RingMark({ size = 120, className }: RingMarkProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      className={className}
      aria-hidden="true"
    >
      {SEGMENTS.map((d, i) => (
        <path
          key={d}
          d={d}
          fill="none"
          stroke={i < 3 ? "#4AADB4" : "#F3EEDC"}
          strokeWidth={3}
          strokeLinecap="butt"
        />
      ))}
    </svg>
  );
}
