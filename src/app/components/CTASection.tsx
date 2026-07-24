'use client';

import React, { useEffect, useRef } from 'react';

export default function CTASection() {
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
    <section
      ref={sectionRef}
      className="relative py-28 md:py-40 lg:py-48 px-4 sm:px-8 section-darker overflow-hidden"
    >
      {/* Subtle center radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(200,169,110,0.04) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Top rule */}
        <div className="rule-gold mb-12 md:mb-16 section-reveal" />

        {/* Content — centered */}
        <div className="section-reveal">
          <p className="eyebrow mb-5 md:mb-6 inline-block">Applications Open</p>
          <h2
            className="font-extrabold text-foreground leading-tight mb-5 md:mb-6"
            style={{ fontSize: 'clamp(2.5rem, 7vw, 5.5rem)', letterSpacing: '-0.03em' }}
          >
            Ready to{' '}
            <span className="text-gradient-gold">Compete?</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-2 mx-auto" style={{ fontSize: '0.95rem', maxWidth: '420px' }}>
            The Team Lead must submit the application on behalf of the entire 5-person team.
          </p>
          <p className="text-muted-foreground mb-10 md:mb-12" style={{ fontSize: '0.65rem', letterSpacing: '0.25em', textTransform: 'uppercase' }}>
            September 5 – 15 · 100% Online · Free Entry
          </p>

          {/* CTA */}
          <div className="flex flex-col items-center gap-4">
            <a
              href="https://forms.fillout.com/t/dSZ36gS5d8us"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-matte inline-flex items-center gap-3 text-sm px-8 sm:px-10 py-4 rounded-sm focus:outline-none focus:ring-2 focus:ring-gold uppercase tracking-widest whitespace-nowrap"
            >
              Apply Now
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <p className="text-muted-foreground" style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase' }}>
              Limited Spots · Selective Admission
            </p>
          </div>
        </div>

        {/* Bottom rule */}
        <div className="rule-gold mt-12 md:mt-16 section-reveal" />
      </div>
    </section>
  );
}