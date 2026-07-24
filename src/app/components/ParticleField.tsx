'use client';

import React, { useMemo } from 'react';

interface Particle {
  id: number;
  top: string;
  left: string;
  size: string;
  delay: string;
  duration: string;
  opacity: string;
}

export default function ParticleField() {
  const particles: Particle[] = useMemo(() => {
    const list: Particle[] = [];
    const positions = [
      [8, 15], [15, 72], [22, 38], [30, 91], [38, 5],
      [45, 55], [52, 82], [60, 28], [68, 63], [75, 10],
      [82, 47], [90, 88], [12, 50], [25, 20], [55, 95],
      [70, 35], [85, 70], [5, 85], [40, 12], [95, 22],
      [18, 65], [62, 48], [78, 92], [35, 78], [48, 30],
    ];
    positions.forEach(([top, left], i) => {
      list.push({
        id: i,
        top: `${top}%`,
        left: `${left}%`,
        size: i % 3 === 0 ? '3px' : i % 3 === 1 ? '2px' : '1.5px',
        delay: `${(i * 0.37) % 4}s`,
        duration: `${2.5 + (i * 0.19) % 2}s`,
        opacity: i % 4 === 0 ? '0.9' : '0.6',
      });
    });
    return list;
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {particles.map((p) => (
        <div
          key={p.id}
          className="particle animate-twinkle"
          style={{
            top: p.top,
            left: p.left,
            width: p.size,
            height: p.size,
            animationDelay: p.delay,
            animationDuration: p.duration,
            opacity: p.opacity,
          }}
        />
      ))}
    </div>
  );
}