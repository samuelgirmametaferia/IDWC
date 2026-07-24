'use client';

import React, { useEffect, useRef } from 'react';

const pillars = [
  {
    number: '01',
    title: 'Elite Competition',
    description:
      'Designed to surface the highest-performing high school debaters in the world. This is not an open tournament — we select only the best.',
  },
  {
    number: '02',
    title: '100% Online',
    description:
      'Compete from anywhere on the planet. No travel required — just your arguments, your team, and your drive to win.',
  },
  {
    number: '03',
    title: 'High School Only',
    description:
      'Exclusively for current high school students worldwide. A level playing field for the next generation of global thinkers.',
  },
];

export default function AboutSection() {
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
    <section id="about" ref={sectionRef} className="relative py-20 md:py-28 lg:py-36 px-4 sm:px-8 section-dark">
      <div className="max-w-6xl mx-auto">

        {/* Centered header */}
        <div className="text-center mb-14 md:mb-20 section-reveal">
          <p className="eyebrow mb-4 inline-block">About</p>
          <div className="divider-matte mx-auto" />
          <h2
            className="font-bold text-foreground mb-4 md:mb-6 leading-tight mt-6"
            style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', letterSpacing: '-0.02em' }}
          >
            What is the{' '}
            <span className="text-gradient-gold">IDWC?</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed mx-auto" style={{ fontSize: '1rem', maxWidth: '520px' }}>
            The International Debate World Cup is an elite, online-only competition designed to find the
            highest-performing high school debaters in the world. Not a participation trophy — a championship.
          </p>
        </div>

        {/* Pillars — responsive grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-px bg-border section-reveal">
          {pillars?.map((p, i) => (
            <div
              key={p?.number}
              className="section-dark p-8 md:p-10 flex flex-col gap-5 md:gap-6 group transition-colors duration-300 hover:bg-muted"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <span
                className="font-bold text-gold-matte"
                style={{ fontSize: '0.65rem', letterSpacing: '0.3em', textTransform: 'uppercase', opacity: 0.7 }}
              >
                {p?.number}
              </span>
              <h3
                className="font-bold text-foreground"
                style={{ fontSize: '1.15rem', letterSpacing: '-0.01em' }}
              >
                {p?.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed flex-1">{p?.description}</p>
              <div
                className="w-6 h-px transition-all duration-300 group-hover:w-12"
                style={{ background: '#c8a96e', opacity: 0.5 }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}