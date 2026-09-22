"use client";

import { useReducedMotion } from "framer-motion";

/**
 * Sound-bar waveform matching public/brand/wave-exact.svg geometry.
 * Animates with GPU-friendly scaleY; static under prefers-reduced-motion.
 */
const BARS: ReadonlyArray<{ x: number; y: number; h: number }> = [
  { x: 819.5, y: 188, h: 124 },
  { x: 893.0, y: 233, h: 94 },
  { x: 913.0, y: 253, h: 62 },
  { x: 928.5, y: 257, h: 54 },
  { x: 938.5, y: 223, h: 115 },
  { x: 949.0, y: 234, h: 92 },
  { x: 959.5, y: 255, h: 88 },
  { x: 969.5, y: 208, h: 145 },
  { x: 980.0, y: 259, h: 43 },
  { x: 990.5, y: 248, h: 65 },
  { x: 1001.0, y: 130, h: 301 },
  { x: 1011.5, y: 175, h: 211 },
  { x: 1021.5, y: 150, h: 258 },
  { x: 1032.5, y: 248, h: 65 },
  { x: 1042.5, y: 217, h: 129 },
  { x: 1053.0, y: 199, h: 163 },
  { x: 1063.5, y: 221, h: 119 },
  { x: 1074.0, y: 235, h: 91 },
  { x: 1084.5, y: 253, h: 55 },
  { x: 1094.5, y: 202, h: 156 },
  { x: 1105.5, y: 223, h: 117 },
  { x: 1115.5, y: 251, h: 58 },
  { x: 1126.0, y: 261, h: 39 },
  { x: 1136.5, y: 223, h: 115 },
  { x: 1147.0, y: 240, h: 83 },
  { x: 1157.5, y: 243, h: 83 },
  { x: 1167.5, y: 231, h: 99 },
  { x: 1178.0, y: 252, h: 57 },
  { x: 1188.5, y: 226, h: 110 },
  { x: 1198.5, y: 173, h: 218 },
  { x: 1209.5, y: 184, h: 192 },
  { x: 1219.5, y: 226, h: 109 },
  { x: 1230.5, y: 136, h: 288 },
  { x: 1240.5, y: 221, h: 119 },
  { x: 1251.0, y: 154, h: 257 },
  { x: 1267.5, y: 266, h: 34 },
  { x: 1278.0, y: 259, h: 42 },
  { x: 1288.5, y: 232, h: 100 },
  { x: 1298.5, y: 207, h: 147 },
  { x: 1309.5, y: 241, h: 77 },
  { x: 1319.5, y: 267, h: 26 },
  { x: 1329.5, y: 240, h: 82 },
  { x: 1340.5, y: 210, h: 142 },
  { x: 1350.5, y: 176, h: 209 },
];

export function WaveBars() {
  const reduceMotion = useReducedMotion();

  return (
    <div
      className="pointer-events-none absolute inset-0 hidden md:block"
      aria-hidden="true"
    >
      <svg
        className="h-full w-full"
        viewBox="0 0 1376 768"
        preserveAspectRatio="xMaxYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="1376" height="768" fill="#0C1019" />
        {BARS.map((bar, i) => {
          const midY = bar.y + bar.h / 2;
          const duration = 1.6 + (i % 7) * 0.18;
          const delay = (i % 11) * 0.11;
          return (
            <rect
              key={`${bar.x}-${bar.h}`}
              className={reduceMotion ? undefined : "rafique-wave-bar"}
              x={bar.x}
              y={bar.y}
              width={2}
              height={bar.h}
              fill="#9AA3B0"
              fillOpacity={0.14}
              style={
                reduceMotion
                  ? undefined
                  : {
                      transformOrigin: `${bar.x + 1}px ${midY}px`,
                      animationDuration: `${duration}s`,
                      animationDelay: `${delay}s`,
                    }
              }
            />
          );
        })}
      </svg>
    </div>
  );
}
