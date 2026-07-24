import React from 'react';

export default function Footer() {
  return (
    <footer className="relative py-8 md:py-10 px-4 sm:px-8 section-darker" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
        {/* Left */}
        <div className="flex flex-col items-center sm:items-start gap-1">
          <span
            className="font-bold tracking-[0.35em] text-foreground uppercase"
            style={{ fontSize: '0.8rem', opacity: 0.7 }}
          >
            IDWC
          </span>
          <p className="text-muted-foreground text-center sm:text-left" style={{ fontSize: '0.65rem', letterSpacing: '0.05em' }}>
            International Debate World Cup — Elite Online Championship
          </p>
        </div>

        {/* Right */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6" style={{ fontSize: '0.75rem' }}>
          <a
            href="https://forms.fillout.com/t/dSZ36gS5d8us"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold-matte hover:opacity-80 transition-opacity duration-200 focus:outline-none uppercase tracking-widest"
            style={{ fontSize: '0.65rem', letterSpacing: '0.2em' }}
          >
            Apply Now
          </a>
          <span className="text-muted-foreground opacity-20 hidden sm:inline" aria-hidden="true">·</span>
          <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors duration-200 focus:outline-none">
            About
          </a>
          <span className="text-muted-foreground opacity-20 hidden sm:inline" aria-hidden="true">·</span>
          <a href="#prize" className="text-muted-foreground hover:text-foreground transition-colors duration-200 focus:outline-none">
            Prize
          </a>
          <span className="text-muted-foreground opacity-20 hidden sm:inline" aria-hidden="true">·</span>
          <span className="text-muted-foreground" style={{ fontSize: '0.65rem', opacity: 0.4 }}>© 2026 IDWC</span>
        </div>
      </div>
    </footer>
  );
}