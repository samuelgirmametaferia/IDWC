'use client';

import React from 'react';
import dynamic from 'next/dynamic';

const EarthCanvas = dynamic(() => import('./EarthCanvas'), { ssr: false });

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col overflow-hidden section-darker"
    >
      {/* Earth canvas background */}
      <div className="earth-container">
        <EarthCanvas />
      </div>
      {/* Cinematic gradient overlay */}
      <div className="absolute inset-0 cinematic-overlay z-10" aria-hidden="true" />
      {/* Vignette for depth */}
      <div className="absolute inset-0 vignette z-10" aria-hidden="true" />
      {/* Nav */}
      <nav className="relative z-30 flex items-center justify-between px-5 sm:px-8 md:px-16 pt-6 md:pt-8 pb-2">
        <div className="flex items-center gap-3">
          <span className="font-bold text-sm tracking-[0.35em] text-foreground uppercase opacity-90">IDWC</span>
        </div>
        <a
          href="https://forms.fillout.com/t/dSZ36gS5d8us"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-outline-matte text-xs px-4 sm:px-5 py-2 sm:py-2.5 rounded-sm focus:outline-none focus:ring-1 focus:ring-gold uppercase tracking-widest"
        >
          Apply Now
        </a>
      </nav>
      {/* Hero content */}
      <div className="relative z-30 flex-1 flex flex-col items-center justify-center text-center px-4 sm:px-6 py-12 md:py-20">

        {/* Eyebrow badge */}
        <div className="badge-matte mb-8 md:mb-10" style={{ animationDelay: '0.1s' }}>
          <span className="w-1 h-1 rounded-full bg-gold-matte inline-block" style={{ background: '#c8a96e' }} />
          Elite High School Debate Championship
        </div>

        {/* Main title */}
        <h1 className="font-extrabold tracking-tight leading-none mb-6 text-foreground">
          <span
            className="block font-light tracking-[0.3em] uppercase mb-4"
            style={{ fontSize: 'clamp(0.65rem, 2.5vw, 1.1rem)', color: '#7a7a7a', letterSpacing: '0.4em' }}
          >
            International Debate
          </span>
          <span
            className="block text-gradient-gold"
            style={{ fontSize: 'clamp(3.5rem, 16vw, 13rem)', lineHeight: 0.9, letterSpacing: '-0.02em' }}
          >
            WORLD CUP
          </span>
        </h1>

        {/* IDWC monogram */}
        <div
          className="font-bold tracking-[0.6em] mb-6 md:mb-8 text-foreground"
          style={{ fontSize: 'clamp(0.85rem, 3vw, 1.8rem)', opacity: 0.35, letterSpacing: '0.6em' }}
        >
          IDWC
        </div>

        {/* Divider */}
        <div className="rule-gold w-24 mb-6 md:mb-8" />

        {/* Tagline */}
        <p
          className="text-muted-foreground max-w-sm sm:max-w-lg leading-relaxed mb-10 md:mb-12"
          style={{ fontSize: 'clamp(0.8rem, 1.8vw, 1rem)', letterSpacing: '0.02em' }}
        >
          The world's most competitive online debate championship for high school students.
          Apply. Argue. Win.
        </p>

        {/* Stats row */}
        <div className="flex flex-wrap items-center justify-center gap-5 sm:gap-8 mb-10 md:mb-14">
          {[
            { value: 'Sept 5–15', label: 'Competition Dates' },
            { value: '100%', label: 'Online' },
            { value: 'Free', label: 'Entry' },
            { value: '$2,500', label: 'Prize Pool' },
          ]?.map((stat, i) => (
            <div key={stat?.label} className="flex flex-col items-center gap-1">
              <span
                className="font-bold text-foreground"
                style={{ fontSize: 'clamp(1rem, 2.5vw, 1.5rem)', color: i === 3 ? '#c8a96e' : '#e8e4dc' }}
              >
                {stat?.value}
              </span>
              <span className="text-muted-foreground" style={{ fontSize: '0.6rem', letterSpacing: '0.25em', textTransform: 'uppercase' }}>
                {stat?.label}
              </span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <a
          href="https://forms.fillout.com/t/dSZ36gS5d8us"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-matte inline-flex items-center gap-3 text-sm px-8 sm:px-10 py-4 rounded-sm focus:outline-none focus:ring-2 focus:ring-gold uppercase tracking-widest"
        >
          Apply Now
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
            <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>

        <p className="mt-4 md:mt-5 text-muted-foreground" style={{ fontSize: '0.6rem', letterSpacing: '0.25em', textTransform: 'uppercase' }}>
          Limited Spots · Selective Admission
        </p>
      </div>
      {/* Bottom fade to next section */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 z-20"
        style={{ background: 'linear-gradient(to bottom, transparent, #080808)' }}
        aria-hidden="true"
      />
    </section>
  );
}