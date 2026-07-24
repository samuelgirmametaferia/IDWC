'use client';

import React, { useEffect, useRef } from 'react';

export default function EarthCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animFrameRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = canvas.offsetWidth;
    let height = canvas.offsetHeight;
    canvas.width = width;
    canvas.height = height;

    const handleResize = () => {
      width = canvas.offsetWidth;
      height = canvas.offsetHeight;
      canvas.width = width;
      canvas.height = height;
    };
    window.addEventListener('resize', handleResize);

    // Star field
    const stars: { x: number; y: number; r: number; o: number }[] = [];
    for (let i = 0; i < 320; i++) {
      stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        r: Math.random() * 1.2,
        o: Math.random() * 0.6 + 0.1,
      });
    }

    // Earth landmass paths (simplified continent outlines as bezier curves on sphere surface)
    // We'll simulate the earth using layered circles + continent texture via canvas arcs
    const EARTH_RADIUS_FACTOR = 0.32;

    let angle = 0;

    function drawFrame(ts: number) {
      if (!ctx) return;
      angle = ts * 0.00008;

      ctx.clearRect(0, 0, width, height);

      // --- Stars ---
      stars.forEach((s) => {
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(220,220,230,${s.o})`;
        ctx.fill();
      });

      const cx = width * 0.5;
      const cy = height * 0.5;
      const R = Math.min(width, height) * EARTH_RADIUS_FACTOR;

      // --- Atmosphere outer glow ---
      const atmGrad = ctx.createRadialGradient(cx, cy, R * 0.9, cx, cy, R * 1.22);
      atmGrad.addColorStop(0, 'rgba(80,130,220,0.18)');
      atmGrad.addColorStop(0.5, 'rgba(60,100,200,0.07)');
      atmGrad.addColorStop(1, 'rgba(20,40,120,0)');
      ctx.beginPath();
      ctx.arc(cx, cy, R * 1.22, 0, Math.PI * 2);
      ctx.fillStyle = atmGrad;
      ctx.fill();

      // --- Ocean base ---
      const oceanGrad = ctx.createRadialGradient(cx - R * 0.25, cy - R * 0.25, R * 0.1, cx, cy, R);
      oceanGrad.addColorStop(0, '#1a3a5c');
      oceanGrad.addColorStop(0.4, '#0f2540');
      oceanGrad.addColorStop(0.8, '#081828');
      oceanGrad.addColorStop(1, '#040e18');
      ctx.beginPath();
      ctx.arc(cx, cy, R, 0, Math.PI * 2);
      ctx.fillStyle = oceanGrad;
      ctx.fill();

      // --- Continent patches (simplified, rotated with angle) ---
      ctx.save();
      ctx.beginPath();
      ctx.arc(cx, cy, R, 0, Math.PI * 2);
      ctx.clip();

      const continents = [
        // [relX, relY, rx, ry, rotation]
        [0.08, -0.18, 0.22, 0.28, 0.2],   // North America
        [0.12, 0.18, 0.14, 0.22, -0.1],   // South America
        [0.42, -0.12, 0.18, 0.32, 0.15],  // Europe/Africa
        [0.62, -0.08, 0.24, 0.26, -0.05], // Asia
        [0.72, 0.28, 0.12, 0.1, 0.3],     // Australia
        [-0.1, 0.38, 0.18, 0.1, 0.1],     // Antarctica hint
      ];

      continents.forEach(([rx, ry, rw, rh, rot]) => {
        const offsetX = ((rx + angle) % 1.0) * 2 * R - R;
        const x = cx + offsetX;
        const y = cy + ry * R;
        const w = rw * R;
        const h = rh * R;

        ctx.save();
        ctx.translate(x, y);
        ctx.rotate(rot);

        const landGrad = ctx.createRadialGradient(0, 0, 0, 0, 0, Math.max(w, h));
        landGrad.addColorStop(0, 'rgba(62,80,45,0.88)');
        landGrad.addColorStop(0.5, 'rgba(48,64,36,0.75)');
        landGrad.addColorStop(1, 'rgba(35,50,28,0.5)');

        ctx.beginPath();
        ctx.ellipse(0, 0, w, h, 0, 0, Math.PI * 2);
        ctx.fillStyle = landGrad;
        ctx.fill();
        ctx.restore();
      });

      // Wrap-around for continents near edge
      continents.forEach(([rx, ry, rw, rh, rot]) => {
        const rawOffset = ((rx + angle) % 1.0) * 2 * R - R;
        // draw mirrored copy for seamless wrap
        const offsetX = rawOffset > 0 ? rawOffset - 2 * R : rawOffset + 2 * R;
        const x = cx + offsetX;
        const y = cy + ry * R;
        const w = rw * R;
        const h = rh * R;

        ctx.save();
        ctx.translate(x, y);
        ctx.rotate(rot);

        const landGrad = ctx.createRadialGradient(0, 0, 0, 0, 0, Math.max(w, h));
        landGrad.addColorStop(0, 'rgba(62,80,45,0.88)');
        landGrad.addColorStop(0.5, 'rgba(48,64,36,0.75)');
        landGrad.addColorStop(1, 'rgba(35,50,28,0.5)');

        ctx.beginPath();
        ctx.ellipse(0, 0, w, h, 0, 0, Math.PI * 2);
        ctx.fillStyle = landGrad;
        ctx.fill();
        ctx.restore();
      });

      ctx.restore();

      // --- Sphere edge shading (dark limb) ---
      const limbGrad = ctx.createRadialGradient(cx - R * 0.3, cy - R * 0.3, R * 0.2, cx, cy, R);
      limbGrad.addColorStop(0, 'rgba(255,255,255,0)');
      limbGrad.addColorStop(0.7, 'rgba(0,0,0,0)');
      limbGrad.addColorStop(1, 'rgba(0,0,0,0.72)');
      ctx.beginPath();
      ctx.arc(cx, cy, R, 0, Math.PI * 2);
      ctx.fillStyle = limbGrad;
      ctx.fill();

      // --- Specular highlight (top-left) ---
      const specGrad = ctx.createRadialGradient(cx - R * 0.35, cy - R * 0.35, 0, cx - R * 0.35, cy - R * 0.35, R * 0.55);
      specGrad.addColorStop(0, 'rgba(180,210,255,0.12)');
      specGrad.addColorStop(0.5, 'rgba(120,170,240,0.04)');
      specGrad.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.beginPath();
      ctx.arc(cx, cy, R, 0, Math.PI * 2);
      ctx.fillStyle = specGrad;
      ctx.fill();

      // --- Thin atmosphere ring ---
      ctx.beginPath();
      ctx.arc(cx, cy, R + 2, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(100,160,255,0.15)';
      ctx.lineWidth = 3;
      ctx.stroke();

      animFrameRef.current = requestAnimationFrame(drawFrame);
    }

    animFrameRef.current = requestAnimationFrame(drawFrame);

    return () => {
      cancelAnimationFrame(animFrameRef.current);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ display: 'block' }}
      aria-hidden="true"
    />
  );
}
