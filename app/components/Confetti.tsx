"use client";

import { useMemo } from "react";

const COLORS = ["#1f2a52", "#ffb238", "#dc5b5b", "#7fa7c9", "#f2ecd6"];

export function Confetti({ active }: { active: boolean }) {
  const pieces = useMemo(() => {
    if (!active) return [];
    return Array.from({ length: 48 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 0.6,
      duration: 2.4 + Math.random() * 1.6,
      rotate: Math.random() * 360,
      color: COLORS[i % COLORS.length],
      width: 6 + Math.random() * 5,
      height: 10 + Math.random() * 6,
    }));
  }, [active]);

  if (!active) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
      {pieces.map((p) => (
        <span
          key={p.id}
          className="absolute top-0 rounded-sm"
          style={{
            left: `${p.left}%`,
            width: p.width,
            height: p.height,
            backgroundColor: p.color,
            transform: `rotate(${p.rotate}deg)`,
            animation: `confetti-fall ${p.duration}s linear ${p.delay}s forwards`,
          }}
        />
      ))}
    </div>
  );
}
