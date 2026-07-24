'use client';

import React, { useEffect, useRef } from 'react';

export default function PrizeSection() {
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
    <section id="prize" ref={sectionRef} className="relative py-20 md:py-28 lg:py-36 px-4 sm:px-8 section-mid overflow-hidden">
      {/* Subtle background texture line */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          className="absolute top-1/2 left-0 right-0 h-px"
          style={{ background: 'linear-gradient(90deg, transparent, rgba(200,169,110,0.06), transparent)' }}
        />
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Centered header */}
        <div className="text-center mb-14 md:mb-20 section-reveal">
          <p className="eyebrow mb-4 inline-block">The Prize</p>
          <div className="divider-matte mx-auto" />
          <h2
            className="font-bold text-foreground leading-tight mt-6"
            style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', letterSpacing: '-0.02em' }}
          >
            Win Big.{' '}
            <span className="text-gradient-gold">Debate Better.</span>
          </h2>
        </div>

        {/* Prize display */}
        <div className="section-reveal">
          <div className="border-top-gold pt-12 md:pt-16 pb-12 md:pb-16">
            {/* Main prize number — centered on mobile, left-aligned on md+ */}
            <div className="flex flex-col items-center text-center md:flex-row md:items-end md:text-left gap-6 md:gap-16 mb-12 md:mb-16">
              <div>
                <p
                  className="text-muted-foreground mb-2"
                  style={{ fontSize: '0.65rem', letterSpacing: '0.3em', textTransform: 'uppercase' }}
                >
                  Total Prize Pool
                </p>
                <div
                  className="font-extrabold text-gradient-gold"
                  style={{ fontSize: 'clamp(4rem, 18vw, 14rem)', lineHeight: 0.85, letterSpacing: '-0.04em' }}
                >
                  $2,500
                </div>
              </div>
              <div className="md:pb-4 max-w-xs">
                <p className="text-muted-foreground leading-relaxed" style={{ fontSize: '0.9rem' }}>
                  The winning team earns the title of{' '}
                  <span className="text-foreground font-semibold">Best Debaters</span>{' '}
                  and the prize is split evenly among all five team members.
                </p>
              </div>
            </div>

            {/* Breakdown row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-border">
              <div className="section-dark p-6 md:p-8 text-center sm:text-left">
                <p
                  className="text-muted-foreground mb-3"
                  style={{ fontSize: '0.6rem', letterSpacing: '0.25em', textTransform: 'uppercase' }}
                >
                  Per Team Member
                </p>
                <p
                  className="font-bold text-gold-matte"
                  style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', letterSpacing: '-0.02em' }}
                >
                  $500
                </p>
              </div>
              <div className="section-dark p-6 md:p-8 text-center sm:text-left">
                <p
                  className="text-muted-foreground mb-3"
                  style={{ fontSize: '0.6rem', letterSpacing: '0.25em', textTransform: 'uppercase' }}
                >
                  Team Size
                </p>
                <p
                  className="font-bold text-foreground"
                  style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', letterSpacing: '-0.02em' }}
                >
                  5 Members
                </p>
              </div>
              <div className="section-dark p-6 md:p-8 text-center sm:text-left">
                <p
                  className="text-muted-foreground mb-3"
                  style={{ fontSize: '0.6rem', letterSpacing: '0.25em', textTransform: 'uppercase' }}
                >
                  Title Awarded
                </p>
                <p
                  className="font-bold text-foreground"
                  style={{ fontSize: 'clamp(1.2rem, 3vw, 1.8rem)', letterSpacing: '-0.01em', lineHeight: 1.2 }}
                >
                  Best Debaters
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}