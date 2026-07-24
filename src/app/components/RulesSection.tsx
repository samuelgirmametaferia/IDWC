'use client';

import React, { useEffect, useRef } from 'react';

const rules = [
  {
    number: '01',
    title: 'High School Only',
    description:
      'All applicants must be current high school students. Proof of enrollment may be required. No exceptions.',
  },
  {
    number: '02',
    title: 'Team of Five',
    description:
      'Form a team of exactly 5 members. No more, no less. Each team must be fully assembled before applying.',
  },
  {
    number: '03',
    title: 'Appoint a Team Lead',
    description:
      'One person acts as Team Lead and is solely responsible for submitting the application on behalf of the entire team.',
  },
];

export default function RulesSection() {
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
    <section id="apply" ref={sectionRef} className="relative py-20 md:py-28 lg:py-36 px-4 sm:px-8 section-mid">
      <div className="max-w-6xl mx-auto">

        {/* Centered header */}
        <div className="text-center mb-14 md:mb-20 section-reveal">
          <p className="eyebrow mb-4 inline-block">Requirements</p>
          <div className="divider-matte mx-auto" />
          <h2
            className="font-bold text-foreground leading-tight mb-4 mt-6"
            style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', letterSpacing: '-0.02em' }}
          >
            How to{' '}
            <span className="text-gradient-gold">Apply</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed mx-auto" style={{ fontSize: '0.95rem', maxWidth: '440px' }}>
            This is a selective application process. We are only looking for the best.
            Applying does not guarantee a spot.
          </p>
        </div>

        {/* Rules — responsive list */}
        <div className="section-reveal">
          {rules?.map((rule, i) => (
            <div
              key={rule?.number}
              className="flex flex-col sm:grid sm:grid-cols-[50px_1fr] md:grid-cols-[80px_1fr_2fr] gap-4 sm:gap-6 md:gap-8 py-8 md:py-10 items-start"
              style={{
                borderTop: '1px solid rgba(255,255,255,0.06)',
                animationDelay: `${i * 0.1}s`,
              }}
            >
              <span
                className="font-bold text-gold-matte"
                style={{ fontSize: '0.65rem', letterSpacing: '0.3em', textTransform: 'uppercase', opacity: 0.6, paddingTop: '4px' }}
              >
                {rule?.number}
              </span>
              <div className="sm:col-span-1 md:contents">
                <h3
                  className="font-bold text-foreground mb-2 md:mb-0"
                  style={{ fontSize: '1.05rem', letterSpacing: '-0.01em' }}
                >
                  {rule?.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{rule?.description}</p>
              </div>
            </div>
          ))}
          <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }} />
        </div>

        {/* Selective process note */}
        <div className="mt-10 md:mt-12 section-reveal">
          <div
            className="flex items-start gap-5 p-5 md:p-6"
            style={{ borderLeft: '2px solid rgba(200,169,110,0.3)', background: 'rgba(200,169,110,0.03)' }}
          >
            <p className="text-sm text-muted-foreground leading-relaxed">
              <span className="text-gold-matte font-semibold">Selective Process:</span>{' '}
              Applying does not guarantee registration. The IDWC is an elite competition — only the strongest
              applicants will be accepted to compete.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}