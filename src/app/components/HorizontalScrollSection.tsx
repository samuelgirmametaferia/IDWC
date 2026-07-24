'use client';

import React, { useEffect, useRef, useState, useCallback } from 'react';

const panels = [
  {
    id: 'apply',
    label: '01 — Apply',
    headline: 'Build Your\nRoster',
    sub: 'Assemble five of the sharpest minds in your school. One Team Lead. One application. One shot at the World Cup.',
    accent: '#c8a96e',
    bg: 'radial-gradient(ellipse 80% 70% at 30% 50%, rgba(200,169,110,0.06) 0%, transparent 60%)',
    Illustration: PanelIllustration1,
  },
  {
    id: 'compete',
    label: '02 — Compete',
    headline: 'Argue.\nDefend.\nRefute.',
    sub: 'Ten days of Simplified British Parliamentary debate. Government vs Opposition. Logic, rhetoric, and strategy under pressure.',
    accent: '#8b9eb0',
    bg: 'radial-gradient(ellipse 80% 70% at 70% 50%, rgba(139,158,176,0.06) 0%, transparent 60%)',
    Illustration: PanelIllustration2,
  },
  {
    id: 'win',
    label: '03 — Win',
    headline: 'Claim the\nTitle',
    sub: 'The winning team earns the title of Best Debaters and splits the $2,500 prize pool — $500 per member.',
    accent: '#c8a96e',
    bg: 'radial-gradient(ellipse 80% 70% at 50% 30%, rgba(200,169,110,0.08) 0%, transparent 60%)',
    Illustration: PanelIllustration3,
  },
];

// Panel 1 illustration: team formation
function PanelIllustration1() {
  return (
    <svg width="260" height="220" viewBox="0 0 260 220" fill="none" aria-hidden="true" className="w-full max-w-xs mx-auto">
      {/* Five figures */}
      {[0, 1, 2, 3, 4]?.map((i) => {
        const x = 30 + i * 50;
        const isCenter = i === 2;
        return (
          <g key={i}>
            <circle cx={x} cy={80} r={isCenter ? 18 : 14} fill="rgba(200,169,110,0.08)" stroke="rgba(200,169,110,0.3)" strokeWidth="1.2"/>
            <circle cx={x} cy={80} r={isCenter ? 9 : 7} fill="rgba(200,169,110,0.15)"/>
            <path
              d={`M${x - (isCenter ? 14 : 11)} ${isCenter ? 110 : 106} Q${x} ${isCenter ? 130 : 124} ${x + (isCenter ? 14 : 11)} ${isCenter ? 110 : 106}`}
              stroke="rgba(200,169,110,0.25)" strokeWidth="1.2" fill="none"
            />
            {isCenter && (
              <path d={`M${x - 6} 80 l4 4 8-8`} stroke="#c8a96e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            )}
          </g>
        );
      })}
      {/* Connection lines */}
      {[0, 1, 3, 4]?.map((i) => (
        <line key={i} x1={30 + i * 50 + 14} y1={80} x2={130 - 18} y2={80} stroke="rgba(200,169,110,0.1)" strokeWidth="1" strokeDasharray="3 3"/>
      ))}
      {/* Label */}
      <text x="130" y="165" textAnchor="middle" fill="rgba(200,169,110,0.4)" fontSize="9" letterSpacing="3" fontFamily="sans-serif">TEAM OF FIVE</text>
      {/* Stars */}
      {[40, 90, 140, 190, 240]?.map((x, i) => (
        <path key={i} d={`M${x} 195 l2 5h5l-4 3 1.5 5L${x} 205l-4.5 3 1.5-5-4-3h5z`} fill="rgba(200,169,110,0.15)" stroke="rgba(200,169,110,0.2)" strokeWidth="0.5"/>
      ))}
    </svg>
  );
}

// Panel 2 illustration: debate podiums
function PanelIllustration2() {
  return (
    <svg width="260" height="220" viewBox="0 0 260 220" fill="none" aria-hidden="true" className="w-full max-w-xs mx-auto">
      {/* Left podium — Government */}
      <rect x="20" y="100" width="80" height="70" rx="2" fill="rgba(139,158,176,0.06)" stroke="rgba(139,158,176,0.2)" strokeWidth="1"/>
      <rect x="35" y="80" width="50" height="22" rx="1" fill="rgba(139,158,176,0.08)" stroke="rgba(139,158,176,0.15)" strokeWidth="1"/>
      <circle cx="60" cy="60" r="16" fill="rgba(139,158,176,0.08)" stroke="rgba(139,158,176,0.2)" strokeWidth="1"/>
      <circle cx="60" cy="60" r="8" fill="rgba(139,158,176,0.15)"/>
      <text x="60" y="148" textAnchor="middle" fill="rgba(139,158,176,0.5)" fontSize="7" letterSpacing="2" fontFamily="sans-serif">GOVT</text>
      {/* Right podium — Opposition */}
      <rect x="160" y="100" width="80" height="70" rx="2" fill="rgba(200,169,110,0.06)" stroke="rgba(200,169,110,0.2)" strokeWidth="1"/>
      <rect x="175" y="80" width="50" height="22" rx="1" fill="rgba(200,169,110,0.08)" stroke="rgba(200,169,110,0.15)" strokeWidth="1"/>
      <circle cx="200" cy="60" r="16" fill="rgba(200,169,110,0.08)" stroke="rgba(200,169,110,0.2)" strokeWidth="1"/>
      <circle cx="200" cy="60" r="8" fill="rgba(200,169,110,0.15)"/>
      <text x="200" y="148" textAnchor="middle" fill="rgba(200,169,110,0.5)" fontSize="7" letterSpacing="2" fontFamily="sans-serif">OPP</text>
      {/* VS */}
      <text x="130" y="115" textAnchor="middle" fill="rgba(255,255,255,0.15)" fontSize="22" fontWeight="bold" fontFamily="sans-serif">VS</text>
      {/* Speech bubbles */}
      <path d="M80 75 Q100 65 120 70 Q115 80 95 82 Q90 88 85 85 Q88 82 80 75z" fill="rgba(139,158,176,0.08)" stroke="rgba(139,158,176,0.15)" strokeWidth="0.8"/>
      <path d="M180 75 Q160 65 140 70 Q145 80 165 82 Q170 88 175 85 Q172 82 180 75z" fill="rgba(200,169,110,0.08)" stroke="rgba(200,169,110,0.15)" strokeWidth="0.8"/>
      {/* Motion lines */}
      {[0, 1, 2]?.map((i) => (
        <line key={i} x1={105 + i * 8} y1={170 + i * 5} x2={155 - i * 8} y2={170 + i * 5} stroke="rgba(255,255,255,0.04)" strokeWidth="1"/>
      ))}
    </svg>
  );
}

// Panel 3 illustration: trophy + prize
function PanelIllustration3() {
  return (
    <svg width="260" height="220" viewBox="0 0 260 220" fill="none" aria-hidden="true" className="w-full max-w-xs mx-auto">
      {/* Trophy */}
      <path d="M100 40 h60 v60 a30 30 0 01-60 0 V40z" fill="rgba(200,169,110,0.08)" stroke="rgba(200,169,110,0.3)" strokeWidth="1.5"/>
      <path d="M100 50 H80 a20 20 0 000 40 h20M160 50 h20 a20 20 0 010 40 h-20" stroke="rgba(200,169,110,0.2)" strokeWidth="1.5" fill="none"/>
      <path d="M130 100 v30M110 130 h40" stroke="rgba(200,169,110,0.3)" strokeWidth="1.5" strokeLinecap="round"/>
      <rect x="105" y="128" width="50" height="12" rx="2" fill="rgba(200,169,110,0.1)" stroke="rgba(200,169,110,0.2)" strokeWidth="1"/>
      {/* Stars around trophy */}
      {[
        [75, 45], [185, 45], [65, 90], [195, 90], [130, 30],
      ]?.map(([x, y], i) => (
        <path key={i} d={`M${x} ${y} l3 7h7l-5.5 4 2 7L${x} ${y + 10}l-6.5 4 2-7-5.5-4h7z`}
          fill="rgba(200,169,110,0.12)" stroke="rgba(200,169,110,0.25)" strokeWidth="0.8"/>
      ))}
      {/* Prize text */}
      <text x="130" y="175" textAnchor="middle" fill="rgba(200,169,110,0.6)" fontSize="18" fontWeight="bold" fontFamily="sans-serif">$2,500</text>
      <text x="130" y="192" textAnchor="middle" fill="rgba(200,169,110,0.3)" fontSize="7" letterSpacing="3" fontFamily="sans-serif">PRIZE POOL</text>
      {/* Confetti dots */}
      {[
        [50, 160], [210, 155], [45, 130], [215, 130], [55, 190], [205, 185],
      ]?.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="2.5" fill={i % 2 === 0 ? 'rgba(200,169,110,0.2)' : 'rgba(139,158,176,0.2)'}/>
      ))}
    </svg>
  );
}

export default function HorizontalScrollSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const [activePanel, setActivePanel] = useState(0);
  const [progress, setProgress] = useState(0);
  const [hasEntered, setHasEntered] = useState(false);

  const handleScroll = useCallback(() => {
    const container = containerRef?.current;
    if (!container) return;

    const rect = container?.getBoundingClientRect();
    const containerHeight = container?.offsetHeight;
    const windowHeight = window.innerHeight;

    // How far we've scrolled into the sticky section
    const scrolled = -rect?.top;
    const totalScrollable = containerHeight - windowHeight;

    if (scrolled < 0 || scrolled > totalScrollable) return;

    const p = Math.max(0, Math.min(1, scrolled / totalScrollable));
    setProgress(p);
    setHasEntered(scrolled > 0);

    // Map progress to panel index
    const panelIndex = Math.min(panels?.length - 1, Math.floor(p * panels?.length));
    setActivePanel(panelIndex);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  // Horizontal translate: 0% → -200% across 3 panels
  const translateX = -(progress * (panels?.length - 1)) * (100 / panels?.length) * panels?.length;
  // Clamp to valid range
  const clampedTranslate = Math.max(-(panels?.length - 1) * 100, Math.min(0, translateX));

  return (
    <div
      ref={containerRef}
      className="relative"
      style={{ height: `${panels?.length * 100}vh` }}
      aria-label="Horizontal scroll journey"
    >
      {/* Sticky viewport */}
      <div
        ref={stickyRef}
        className="sticky top-0 h-screen overflow-hidden"
        style={{ background: '#050505' }}
      >
        {/* Background gradient that shifts with panel */}
        <div
          className="absolute inset-0 transition-all duration-700"
          style={{ background: panels?.[activePanel]?.bg }}
          aria-hidden="true"
        />

        {/* Animated grid lines */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true"
          style={{
            backgroundImage: 'linear-gradient(rgba(200,169,110,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(200,169,110,0.03) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
            transform: `translateX(${progress * -30}px)`,
            transition: 'transform 0.1s linear',
          }}
        />

        {/* Floating sprite decorations */}
        <div className="absolute top-8 left-8 opacity-20 animate-float-slow hidden md:block" aria-hidden="true">
          <svg width="50" height="50" viewBox="0 0 50 50" fill="none">
            <circle cx="25" cy="25" r="20" stroke="rgba(200,169,110,0.4)" strokeWidth="1" strokeDasharray="4 4"/>
            <circle cx="25" cy="25" r="12" stroke="rgba(200,169,110,0.2)" strokeWidth="1"/>
            <circle cx="25" cy="25" r="4" fill="rgba(200,169,110,0.3)"/>
          </svg>
        </div>
        <div className="absolute bottom-12 right-12 opacity-20 animate-float-slow hidden md:block" style={{ animationDelay: '2s' }} aria-hidden="true">
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
            <path d="M20 4l4 12h12l-10 7 4 12-10-7-10 7 4-12L4 16h12z" stroke="rgba(200,169,110,0.4)" strokeWidth="1" fill="rgba(200,169,110,0.05)"/>
          </svg>
        </div>
        <div className="absolute top-1/3 right-8 opacity-15 animate-subtle-pulse hidden lg:block" aria-hidden="true">
          <svg width="30" height="80" viewBox="0 0 30 80" fill="none">
            <line x1="15" y1="0" x2="15" y2="80" stroke="rgba(200,169,110,0.4)" strokeWidth="1" strokeDasharray="3 5"/>
            {[10, 30, 50, 70]?.map((y) => (
              <circle key={y} cx="15" cy={y} r="2" fill="rgba(200,169,110,0.3)"/>
            ))}
          </svg>
        </div>

        {/* Panel strip — slides horizontally */}
        <div
          className="flex h-full"
          style={{
            width: `${panels?.length * 100}%`,
            transform: `translateX(${clampedTranslate / panels?.length}%)`,
            transition: 'transform 0.05s linear',
            willChange: 'transform',
          }}
        >
          {panels?.map((panel, i) => {
            const Illustration = panel?.Illustration;
            const isPanelActive = i === activePanel;
            return (
              <div
                key={panel?.id}
                className="relative flex items-center justify-center h-full flex-shrink-0"
                style={{ width: `${100 / panels?.length}%` }}
              >
                <div className="max-w-5xl mx-auto px-6 sm:px-12 w-full flex flex-col md:flex-row items-center gap-10 md:gap-20">
                  {/* Text */}
                  <div className="flex-1 text-center md:text-left">
                    <p
                      className="eyebrow mb-5 inline-block"
                      style={{ color: panel?.accent, opacity: isPanelActive ? 1 : 0.4, transition: 'opacity 0.5s' }}
                    >
                      {panel?.label}
                    </p>
                    <h2
                      className="font-extrabold text-foreground mb-6 leading-none whitespace-pre-line"
                      style={{
                        fontSize: 'clamp(2.5rem, 7vw, 6rem)',
                        letterSpacing: '-0.03em',
                        opacity: isPanelActive ? 1 : 0.3,
                        transform: isPanelActive ? 'translateY(0)' : 'translateY(20px)',
                        transition: 'opacity 0.6s, transform 0.6s',
                      }}
                    >
                      {panel?.headline}
                    </h2>
                    <div
                      className="h-px w-16 mb-6"
                      style={{ background: panel?.accent, opacity: isPanelActive ? 0.6 : 0.1, transition: 'opacity 0.5s' }}
                    />
                    <p
                      className="text-muted-foreground leading-relaxed"
                      style={{
                        fontSize: 'clamp(0.85rem, 1.5vw, 1.05rem)',
                        maxWidth: '380px',
                        opacity: isPanelActive ? 1 : 0.2,
                        transition: 'opacity 0.7s 0.1s',
                      }}
                    >
                      {panel?.sub}
                    </p>
                  </div>

                  {/* Illustration */}
                  <div
                    className="flex-shrink-0 w-full md:w-auto"
                    style={{
                      opacity: isPanelActive ? 1 : 0.15,
                      transform: isPanelActive ? 'scale(1)' : 'scale(0.9)',
                      transition: 'opacity 0.6s, transform 0.6s',
                    }}
                  >
                    <Illustration />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Panel indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-3 z-20">
          {panels?.map((p, i) => (
            <div
              key={p?.id}
              className="transition-all duration-400 rounded-full"
              style={{
                width: i === activePanel ? '24px' : '6px',
                height: '6px',
                background: i === activePanel ? '#c8a96e' : 'rgba(200,169,110,0.25)',
              }}
            />
          ))}
        </div>

        {/* Scroll hint */}
        {!hasEntered && (
          <div className="absolute bottom-16 right-8 flex flex-col items-center gap-2 opacity-40 animate-float-slow">
            <span style={{ fontSize: '0.55rem', letterSpacing: '0.25em', color: '#c8a96e', textTransform: 'uppercase' }}>Scroll</span>
            <svg width="12" height="20" viewBox="0 0 12 20" fill="none" aria-hidden="true">
              <rect x="1" y="1" width="10" height="18" rx="5" stroke="#c8a96e" strokeWidth="1"/>
              <circle cx="6" cy="6" r="2" fill="#c8a96e" className="animate-float-slow"/>
            </svg>
          </div>
        )}

        {/* Panel label top right */}
        <div className="absolute top-8 right-8 text-right hidden md:block">
          <p style={{ fontSize: '0.55rem', letterSpacing: '0.3em', color: 'rgba(200,169,110,0.4)', textTransform: 'uppercase' }}>
            {activePanel + 1} / {panels?.length}
          </p>
        </div>
      </div>
    </div>
  );
}
