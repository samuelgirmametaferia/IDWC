'use client';

import React from 'react';

// Floating quill pen sprite
function QuillSprite({ style }: { style?: React.CSSProperties }) {
  return (
    <svg width="36" height="60" viewBox="0 0 36 60" fill="none" aria-hidden="true" style={style}>
      <path d="M30 2 Q36 10 28 20 Q20 30 18 58" stroke="rgba(200,169,110,0.25)" strokeWidth="1.2" fill="none"/>
      <path d="M30 2 Q24 8 22 16 Q20 24 18 58" stroke="rgba(200,169,110,0.15)" strokeWidth="0.8" fill="none"/>
      <path d="M30 2 Q32 6 28 12" stroke="rgba(200,169,110,0.3)" strokeWidth="1" fill="none"/>
      <path d="M18 52 l-3 6 3-1 3 1z" fill="rgba(200,169,110,0.2)"/>
    </svg>
  );
}

// Laurel wreath sprite
function LaurelSprite({ style }: { style?: React.CSSProperties }) {
  return (
    <svg width="70" height="50" viewBox="0 0 70 50" fill="none" aria-hidden="true" style={style}>
      {/* Left branch */}
      {[0, 1, 2, 3].map((i) => (
        <ellipse
          key={`l${i}`}
          cx={12 + i * 6}
          cy={25 - i * 3}
          rx="5"
          ry="3"
          transform={`rotate(${-30 + i * 10} ${12 + i * 6} ${25 - i * 3})`}
          fill="rgba(200,169,110,0.08)"
          stroke="rgba(200,169,110,0.2)"
          strokeWidth="0.8"
        />
      ))}
      {/* Right branch */}
      {[0, 1, 2, 3].map((i) => (
        <ellipse
          key={`r${i}`}
          cx={58 - i * 6}
          cy={25 - i * 3}
          rx="5"
          ry="3"
          transform={`rotate(${30 - i * 10} ${58 - i * 6} ${25 - i * 3})`}
          fill="rgba(200,169,110,0.08)"
          stroke="rgba(200,169,110,0.2)"
          strokeWidth="0.8"
        />
      ))}
      {/* Center star */}
      <path d="M35 18 l2 5h5l-4 3 1.5 5L35 28l-5.5 3 1.5-5-4-3h5z" fill="rgba(200,169,110,0.15)" stroke="rgba(200,169,110,0.3)" strokeWidth="0.8"/>
    </svg>
  );
}

// Compass rose sprite
function CompassSprite({ style }: { style?: React.CSSProperties }) {
  return (
    <svg width="55" height="55" viewBox="0 0 55 55" fill="none" aria-hidden="true" style={style}>
      <circle cx="27.5" cy="27.5" r="24" stroke="rgba(200,169,110,0.12)" strokeWidth="1"/>
      <circle cx="27.5" cy="27.5" r="16" stroke="rgba(200,169,110,0.08)" strokeWidth="1" strokeDasharray="3 3"/>
      <path d="M27.5 5 L30 22 L27.5 20 L25 22z" fill="rgba(200,169,110,0.2)" stroke="rgba(200,169,110,0.3)" strokeWidth="0.5"/>
      <path d="M27.5 50 L30 33 L27.5 35 L25 33z" fill="rgba(200,169,110,0.1)" stroke="rgba(200,169,110,0.2)" strokeWidth="0.5"/>
      <path d="M5 27.5 L22 25 L20 27.5 L22 30z" fill="rgba(200,169,110,0.1)" stroke="rgba(200,169,110,0.2)" strokeWidth="0.5"/>
      <path d="M50 27.5 L33 25 L35 27.5 L33 30z" fill="rgba(200,169,110,0.1)" stroke="rgba(200,169,110,0.2)" strokeWidth="0.5"/>
      <circle cx="27.5" cy="27.5" r="3" fill="rgba(200,169,110,0.2)" stroke="rgba(200,169,110,0.3)" strokeWidth="0.8"/>
      <text x="27.5" y="14" textAnchor="middle" fill="rgba(200,169,110,0.3)" fontSize="5" fontFamily="sans-serif">N</text>
    </svg>
  );
}

// Scroll/document sprite
function ScrollSprite({ style }: { style?: React.CSSProperties }) {
  return (
    <svg width="45" height="55" viewBox="0 0 45 55" fill="none" aria-hidden="true" style={style}>
      <rect x="5" y="8" width="35" height="40" rx="2" fill="rgba(200,169,110,0.05)" stroke="rgba(200,169,110,0.15)" strokeWidth="1"/>
      <path d="M5 8 Q5 2 11 2 Q17 2 17 8" stroke="rgba(200,169,110,0.15)" strokeWidth="1" fill="none"/>
      <path d="M5 48 Q5 54 11 54 Q17 54 17 48" stroke="rgba(200,169,110,0.15)" strokeWidth="1" fill="none"/>
      {[16, 22, 28, 34].map((y) => (
        <path key={y} d={`M12 ${y}h21`} stroke="rgba(200,169,110,0.1)" strokeWidth="0.8"/>
      ))}
      <path d="M12 16h14" stroke="rgba(200,169,110,0.2)" strokeWidth="1"/>
    </svg>
  );
}

// Atom/debate symbol sprite
function AtomSprite({ style }: { style?: React.CSSProperties }) {
  return (
    <svg width="60" height="60" viewBox="0 0 60 60" fill="none" aria-hidden="true" style={style}>
      <ellipse cx="30" cy="30" rx="26" ry="10" stroke="rgba(200,169,110,0.12)" strokeWidth="1"/>
      <ellipse cx="30" cy="30" rx="26" ry="10" stroke="rgba(200,169,110,0.08)" strokeWidth="1" transform="rotate(60 30 30)"/>
      <ellipse cx="30" cy="30" rx="26" ry="10" stroke="rgba(200,169,110,0.08)" strokeWidth="1" transform="rotate(120 30 30)"/>
      <circle cx="30" cy="30" r="4" fill="rgba(200,169,110,0.15)" stroke="rgba(200,169,110,0.25)" strokeWidth="0.8"/>
    </svg>
  );
}

// Floating dots constellation
function ConstellationSprite({ style }: { style?: React.CSSProperties }) {
  const points = [[10, 10], [30, 5], [50, 15], [40, 35], [20, 40], [5, 28]];
  return (
    <svg width="60" height="50" viewBox="0 0 60 50" fill="none" aria-hidden="true" style={style}>
      {points.map(([x1, y1], i) =>
        points.slice(i + 1).map(([x2, y2], j) => {
          const dist = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
          return dist < 35 ? (
            <line key={`${i}-${j}`} x1={x1} y1={y1} x2={x2} y2={y2} stroke="rgba(200,169,110,0.08)" strokeWidth="0.6"/>
          ) : null;
        })
      )}
      {points.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="2" fill="rgba(200,169,110,0.25)"/>
      ))}
    </svg>
  );
}

export default function SpritesOverlay() {
  return (
    <div className="pointer-events-none" aria-hidden="true">
      {/* After hero, before about */}
      <div className="relative overflow-hidden" style={{ height: 0 }}>
        <QuillSprite style={{ position: 'absolute', top: -200, left: '8%', opacity: 0.6, animation: 'floatSlow 7s ease-in-out infinite' }}/>
        <LaurelSprite style={{ position: 'absolute', top: -180, right: '10%', opacity: 0.5, animation: 'floatSlow 9s ease-in-out infinite', animationDelay: '1s' }}/>
      </div>

      {/* Fixed decorative sprites on sides */}
      <div className="fixed left-4 top-1/3 z-10 hidden xl:block" style={{ opacity: 0.3, animation: 'floatSlow 8s ease-in-out infinite' }}>
        <CompassSprite />
      </div>
      <div className="fixed right-4 top-1/2 z-10 hidden xl:block" style={{ opacity: 0.25, animation: 'floatSlow 10s ease-in-out infinite', animationDelay: '2s' }}>
        <AtomSprite />
      </div>
      <div className="fixed left-4 top-2/3 z-10 hidden xl:block" style={{ opacity: 0.2, animation: 'floatSlow 12s ease-in-out infinite', animationDelay: '3s' }}>
        <ConstellationSprite />
      </div>
      <div className="fixed right-4 top-1/4 z-10 hidden xl:block" style={{ opacity: 0.25, animation: 'floatSlow 9s ease-in-out infinite', animationDelay: '1.5s' }}>
        <ScrollSprite />
      </div>
    </div>
  );
}
