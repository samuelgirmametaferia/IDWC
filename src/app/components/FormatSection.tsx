'use client';

import React, { useEffect, useRef } from 'react';

const govPoints = [
  'Argues in favor of the motion',
  'Opens the debate with constructive arguments',
  'Defends the position under cross-examination',
  'Rebuts Opposition claims effectively',
];

const oppPoints = [
  'Argues against the motion',
  'Challenges and dismantles Government arguments',
  'Presents a coherent counter-narrative',
  'Closes the debate with a strong rebuttal',
];

export default function FormatSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('revealed');
        });
      },
      { threshold: 0.1 }
    );
    const els = sectionRef?.current?.querySelectorAll('.section-reveal');
    els?.forEach((el) => observer?.observe(el));
    return () => observer?.disconnect();
  }, []);

  return (
    <section id="format" ref={sectionRef} className="relative py-20 md:py-28 lg:py-36 px-4 sm:px-8 section-dark">
      <div className="max-w-6xl mx-auto">

        {/* Header — centered */}
        <div className="text-center mb-14 md:mb-20 section-reveal">
          <p className="eyebrow mb-4 inline-block">The Format</p>
          <div className="divider-matte mx-auto" />
          <h2
            className="font-bold text-foreground leading-tight mt-6 mb-4"
            style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', letterSpacing: '-0.02em' }}
          >
            Simplified{' '}
            <span className="text-gradient-gold">British Parliamentary</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed mx-auto" style={{ fontSize: '0.95rem', maxWidth: '520px' }}>
            A streamlined BP format adapted for a 5-person roster. Build strong logical arguments,
            defend your position, and dismantle opposing claims.
          </p>
        </div>

        {/* Government vs Opposition */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_60px_1fr] lg:grid-cols-[1fr_80px_1fr] gap-0 items-stretch section-reveal">
          {/* Government */}
          <div className="matte-card p-6 sm:p-8 lg:p-10" style={{ borderRadius: 0 }}>
            <div className="flex items-center gap-4 mb-6 md:mb-8">
              <div
                className="w-8 h-8 flex items-center justify-center font-bold text-xs flex-shrink-0"
                style={{
                  background: 'rgba(200,169,110,0.1)',
                  border: '1px solid rgba(200,169,110,0.25)',
                  color: '#c8a96e',
                  letterSpacing: '0.1em',
                }}
              >
                G
              </div>
              <div>
                <p className="font-bold text-foreground" style={{ fontSize: '1rem' }}>Government</p>
                <p className="text-muted-foreground" style={{ fontSize: '0.6rem', letterSpacing: '0.25em', textTransform: 'uppercase' }}>Proposing Side</p>
              </div>
            </div>
            <ul className="space-y-3 md:space-y-4">
              {govPoints?.map((pt) => (
                <li key={pt} className="flex items-start gap-3 text-sm text-muted-foreground leading-relaxed">
                  <span
                    className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0"
                    style={{ background: '#c8a96e', opacity: 0.6 }}
                  />
                  {pt}
                </li>
              ))}
            </ul>
          </div>

          {/* VS divider */}
          <div className="flex items-center justify-center py-6 md:py-0">
            <div
              className="font-bold text-muted-foreground"
              style={{ fontSize: '0.65rem', letterSpacing: '0.3em', textTransform: 'uppercase', writingMode: 'vertical-rl', opacity: 0.4 }}
            >
              VS
            </div>
          </div>

          {/* Opposition */}
          <div className="matte-card-dim p-6 sm:p-8 lg:p-10" style={{ borderRadius: 0 }}>
            <div className="flex items-center gap-4 mb-6 md:mb-8">
              <div
                className="w-8 h-8 flex items-center justify-center font-bold text-xs flex-shrink-0"
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  color: '#7a7a7a',
                  letterSpacing: '0.1em',
                }}
              >
                O
              </div>
              <div>
                <p className="font-bold text-foreground" style={{ fontSize: '1rem' }}>Opposition</p>
                <p className="text-muted-foreground" style={{ fontSize: '0.6rem', letterSpacing: '0.25em', textTransform: 'uppercase' }}>Opposing Side</p>
              </div>
            </div>
            <ul className="space-y-3 md:space-y-4">
              {oppPoints?.map((pt) => (
                <li key={pt} className="flex items-start gap-3 text-sm text-muted-foreground leading-relaxed">
                  <span
                    className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0"
                    style={{ background: '#7a7a7a', opacity: 0.5 }}
                  />
                  {pt}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* 5-person note */}
        <div className="mt-6 md:mt-8 section-reveal">
          <div
            className="flex items-start gap-5 p-5 md:p-6"
            style={{ borderLeft: '2px solid rgba(200,169,110,0.3)', background: 'rgba(200,169,110,0.03)' }}
          >
            <p className="text-sm text-muted-foreground leading-relaxed">
              <span className="text-foreground font-semibold">5-Person Roster:</span>{' '}
              Teams must fill all five positions. Every member contributes to building arguments,
              defending positions under pressure, and refuting opposing claims.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}