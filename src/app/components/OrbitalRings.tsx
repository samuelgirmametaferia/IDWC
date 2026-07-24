import React from 'react';

export default function OrbitalRings() {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden" aria-hidden="true">
      {/* Outer ring — slow spin */}
      <div
        className="absolute"
        style={{
          width: 'min(700px, 90vw)',
          height: 'min(700px, 90vw)',
          animation: 'orbitalSpin 30s linear infinite',
          transformOrigin: 'center',
        }}
      >
        <svg viewBox="0 0 700 700" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <ellipse cx="350" cy="350" rx="340" ry="130" stroke="url(#ringGrad1)" strokeWidth="1" strokeDasharray="8 12" opacity="0.45" />
          <defs>
            <linearGradient id="ringGrad1" x1="0" y1="0" x2="700" y2="0">
              <stop offset="0%" stopColor="#00d4ff" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#7c3aed" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.8" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Middle ring — reverse spin */}
      <div
        className="absolute"
        style={{
          width: 'min(520px, 70vw)',
          height: 'min(520px, 70vw)',
          animation: 'orbitalSpin 20s linear infinite reverse',
          transformOrigin: 'center',
        }}
      >
        <svg viewBox="0 0 520 520" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <ellipse cx="260" cy="260" rx="248" ry="95" stroke="url(#ringGrad2)" strokeWidth="1" strokeDasharray="4 8" opacity="0.35" />
          <defs>
            <linearGradient id="ringGrad2" x1="0" y1="0" x2="520" y2="0">
              <stop offset="0%" stopColor="#7c3aed" stopOpacity="0.9" />
              <stop offset="50%" stopColor="#00d4ff" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#7c3aed" stopOpacity="0.9" />
            </linearGradient>
          </defs>
          {/* Orbital node */}
          <circle cx="508" cy="260" r="5" fill="#7c3aed" opacity="0.9">
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="0 260 260"
              to="360 260 260"
              dur="20s"
              repeatCount="indefinite"
            />
          </circle>
        </svg>
      </div>

      {/* Inner ring */}
      <div
        className="absolute"
        style={{
          width: 'min(340px, 50vw)',
          height: 'min(340px, 50vw)',
          animation: 'orbitalSpin 14s linear infinite',
          transformOrigin: 'center',
        }}
      >
        <svg viewBox="0 0 340 340" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <ellipse cx="170" cy="170" rx="160" ry="62" stroke="url(#ringGrad3)" strokeWidth="1.5" opacity="0.3" />
          <defs>
            <linearGradient id="ringGrad3" x1="0" y1="0" x2="340" y2="0">
              <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#00d4ff" stopOpacity="0.2" />
            </linearGradient>
          </defs>
          {/* Orbital node */}
          <circle cx="330" cy="170" r="4" fill="#00d4ff" opacity="1">
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="0 170 170"
              to="360 170 170"
              dur="14s"
              repeatCount="indefinite"
            />
          </circle>
        </svg>
      </div>

      {/* Spline curve left */}
      <svg
        className="absolute left-0 top-0 w-full h-full opacity-20"
        viewBox="0 0 1440 800"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        <path
          d="M -100 400 C 200 100, 600 700, 900 300 S 1300 600, 1540 200"
          stroke="url(#splineGrad1)"
          strokeWidth="1.5"
          strokeDasharray="6 10"
        />
        <path
          d="M -100 600 C 300 200, 700 800, 1100 400 S 1400 700, 1540 500"
          stroke="url(#splineGrad2)"
          strokeWidth="1"
          strokeDasharray="4 8"
        />
        <defs>
          <linearGradient id="splineGrad1" x1="0" y1="0" x2="1440" y2="0">
            <stop offset="0%" stopColor="#00d4ff" stopOpacity="0" />
            <stop offset="40%" stopColor="#00d4ff" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#7c3aed" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="splineGrad2" x1="0" y1="0" x2="1440" y2="0">
            <stop offset="0%" stopColor="#7c3aed" stopOpacity="0" />
            <stop offset="50%" stopColor="#06b6d4" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#7c3aed" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}