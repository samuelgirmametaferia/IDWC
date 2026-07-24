'use client';

import React, { useEffect, useRef, useState } from 'react';

const timelineEvents = [
  {
    id: 'apply',
    phase: 'Phase 01',
    title: 'Applications Open',
    date: 'Now',
    dateDetail: 'Open Until Aug 20',
    status: 'active',
    statusLabel: 'Open Now',
    description: 'Team Lead submits application for the full 5-person roster. Selective admission — only the best teams qualify.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <rect x="4" y="6" width="20" height="16" rx="2" stroke="#c8a96e" strokeWidth="1.5"/>
        <path d="M4 10h20" stroke="#c8a96e" strokeWidth="1.5"/>
        <path d="M9 14h10M9 17h6" stroke="#c8a96e" strokeWidth="1.2" strokeLinecap="round"/>
        <circle cx="22" cy="22" r="4" fill="#c8a96e"/>
        <path d="M20.5 22l1 1 2-2" stroke="#080808" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    id: 'deadline',
    phase: 'Phase 02',
    title: 'Application Deadline',
    date: 'Aug 20',
    dateDetail: 'August 20, 2025',
    status: 'upcoming',
    statusLabel: 'Upcoming',
    description: 'Final day to submit your team application. Late submissions will not be considered. Prepare your roster early.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <circle cx="14" cy="14" r="9" stroke="#7a7a7a" strokeWidth="1.5"/>
        <path d="M14 9v5l3 3" stroke="#7a7a7a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M11 4h6" stroke="#7a7a7a" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M14 3v2" stroke="#7a7a7a" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    id: 'tournament',
    phase: 'Phase 03',
    title: 'Tournament Begins',
    date: 'Sept 5',
    dateDetail: 'September 5, 2025',
    status: 'upcoming',
    statusLabel: 'Upcoming',
    description: 'The competition officially begins. Teams face off in Simplified British Parliamentary rounds across 10 intense days.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <path d="M14 4L16.5 10h6.5l-5.25 3.8 2 6.2L14 16.5 8.25 20l2-6.2L5 10h6.5L14 4z" stroke="#7a7a7a" strokeWidth="1.5" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    id: 'finals',
    phase: 'Phase 04',
    title: 'Tournament Finals',
    date: 'Sept 15',
    dateDetail: 'September 15, 2025',
    status: 'upcoming',
    statusLabel: 'Upcoming',
    description: 'The final rounds. The best teams in the world compete for the title of Best Debaters and the $2,500 prize pool.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <path d="M9 6h10v8a5 5 0 01-10 0V6z" stroke="#7a7a7a" strokeWidth="1.5"/>
        <path d="M9 8H6a2 2 0 000 4h3M19 8h3a2 2 0 010 4h-3" stroke="#7a7a7a" strokeWidth="1.5"/>
        <path d="M14 19v3M10 22h8" stroke="#7a7a7a" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    id: 'winner',
    phase: 'Phase 05',
    title: 'Winner Announced',
    date: 'Sept 16',
    dateDetail: 'September 16, 2025',
    status: 'future',
    statusLabel: 'Coming Soon',
    description: 'The winning team is crowned Best Debaters. $2,500 prize pool distributed — $500 per team member.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <circle cx="14" cy="12" r="6" stroke="#7a7a7a" strokeWidth="1.5"/>
        <path d="M10 18l-2 6h12l-2-6" stroke="#7a7a7a" strokeWidth="1.5" strokeLinejoin="round"/>
        <path d="M14 6v2M14 16v2" stroke="#7a7a7a" strokeWidth="1.2" strokeLinecap="round"/>
        <path d="M8 12H6M22 12h-2" stroke="#7a7a7a" strokeWidth="1.2" strokeLinecap="round"/>
      </svg>
    ),
  },
];

// Decorative sprite: floating debate podium
function PodiumSprite({ className = '' }: { className?: string }) {
  return (
    <svg className={className} width="80" height="90" viewBox="0 0 80 90" fill="none" aria-hidden="true">
      <rect x="20" y="50" width="40" height="30" rx="2" fill="rgba(200,169,110,0.08)" stroke="rgba(200,169,110,0.2)" strokeWidth="1"/>
      <rect x="28" y="38" width="24" height="14" rx="1" fill="rgba(200,169,110,0.06)" stroke="rgba(200,169,110,0.15)" strokeWidth="1"/>
      <circle cx="40" cy="22" r="10" fill="rgba(200,169,110,0.05)" stroke="rgba(200,169,110,0.2)" strokeWidth="1"/>
      <path d="M35 22c0-2.76 2.24-5 5-5s5 2.24 5 5-2.24 5-5 5-5-2.24-5-5z" fill="rgba(200,169,110,0.15)"/>
      <path d="M30 35c0-5.52 4.48-10 10-10s10 4.48 10 10" stroke="rgba(200,169,110,0.2)" strokeWidth="1" fill="none"/>
      <path d="M25 65h30" stroke="rgba(200,169,110,0.15)" strokeWidth="1"/>
      <path d="M30 70h20" stroke="rgba(200,169,110,0.1)" strokeWidth="1"/>
    </svg>
  );
}

// Decorative sprite: star burst
function StarSprite({ className = '', size = 40 }: { className?: string; size?: number }) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <path d="M20 2l2.5 7.5H30l-6 4.5 2.5 7.5L20 17l-6.5 4.5 2.5-7.5-6-4.5h7.5L20 2z" fill="rgba(200,169,110,0.12)" stroke="rgba(200,169,110,0.25)" strokeWidth="0.8"/>
      <circle cx="20" cy="20" r="3" fill="rgba(200,169,110,0.2)"/>
    </svg>
  );
}

// Decorative sprite: globe lines
function GlobeSprite({ className = '' }: { className?: string }) {
  return (
    <svg className={className} width="60" height="60" viewBox="0 0 60 60" fill="none" aria-hidden="true">
      <circle cx="30" cy="30" r="22" stroke="rgba(200,169,110,0.15)" strokeWidth="1"/>
      <ellipse cx="30" cy="30" rx="10" ry="22" stroke="rgba(200,169,110,0.1)" strokeWidth="1"/>
      <path d="M8 30h44" stroke="rgba(200,169,110,0.1)" strokeWidth="1"/>
      <path d="M12 20h36M12 40h36" stroke="rgba(200,169,110,0.08)" strokeWidth="1"/>
    </svg>
  );
}

export default function TimelineSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeIdx, setActiveIdx] = useState(0);

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

  // Auto-cycle active highlight
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % timelineEvents.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="timeline"
      ref={sectionRef}
      className="relative py-24 md:py-36 px-4 sm:px-8 section-mid overflow-hidden"
    >
      {/* Decorative sprites */}
      <PodiumSprite className="absolute top-12 left-6 opacity-40 animate-float-slow hidden md:block" />
      <GlobeSprite className="absolute top-20 right-8 opacity-30 animate-float-slow hidden md:block" style={{ animationDelay: '1.5s' } as React.CSSProperties} />
      <StarSprite className="absolute bottom-24 left-16 opacity-50 animate-subtle-pulse hidden sm:block" size={50} />
      <StarSprite className="absolute top-32 right-24 opacity-30 animate-subtle-pulse hidden sm:block" size={30} style={{ animationDelay: '1s' } as React.CSSProperties} />
      <StarSprite className="absolute bottom-16 right-12 opacity-40 animate-float-slow hidden md:block" size={35} style={{ animationDelay: '2s' } as React.CSSProperties} />

      {/* Radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 70% 60% at 50% 50%, rgba(200,169,110,0.03) 0%, transparent 70%)' }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 md:mb-24 section-reveal">
          <p className="eyebrow mb-4 inline-block">Key Dates</p>
          <div className="divider-matte mx-auto" />
          <h2
            className="font-bold text-foreground mb-4 mt-6 leading-tight"
            style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', letterSpacing: '-0.02em' }}
          >
            Tournament{' '}
            <span className="text-gradient-gold">Timeline</span>
          </h2>
          <p className="text-muted-foreground mx-auto" style={{ fontSize: '0.95rem', maxWidth: '440px' }}>
            From application to champion — every critical milestone on your path to the World Cup.
          </p>
        </div>

        {/* Timeline track */}
        <div className="relative section-reveal">
          {/* Vertical connector line (desktop) */}
          <div
            className="absolute left-1/2 top-0 bottom-0 w-px hidden md:block"
            style={{ background: 'linear-gradient(to bottom, transparent, rgba(200,169,110,0.2) 10%, rgba(200,169,110,0.2) 90%, transparent)', transform: 'translateX(-50%)' }}
            aria-hidden="true"
          />

          <div className="flex flex-col gap-0">
            {timelineEvents.map((event, i) => {
              const isActive = event.status === 'active';
              const isHighlighted = i === activeIdx;
              const isLeft = i % 2 === 0;

              return (
                <div
                  key={event.id}
                  className={`relative flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-0 py-8 md:py-10 cursor-pointer group transition-all duration-500 ${isHighlighted ? 'timeline-item-active' : ''}`}
                  onClick={() => setActiveIdx(i)}
                  style={{ animationDelay: `${i * 0.12}s` }}
                >
                  {/* Left content (even items on desktop) */}
                  <div className={`w-full md:w-5/12 ${isLeft ? 'md:text-right md:pr-12' : 'md:order-3 md:pl-12'}`}>
                    {isLeft ? (
                      <TimelineCard event={event} isHighlighted={isHighlighted} isActive={isActive} />
                    ) : (
                      <div className="hidden md:block" />
                    )}
                    {!isLeft && (
                      <TimelineCard event={event} isHighlighted={isHighlighted} isActive={isActive} />
                    )}
                  </div>

                  {/* Center node */}
                  <div className="hidden md:flex md:w-2/12 justify-center items-center md:order-2 relative z-10">
                    <div
                      className={`relative flex items-center justify-center w-14 h-14 rounded-full border transition-all duration-500 ${
                        isActive
                          ? 'border-gold bg-gold/10'
                          : isHighlighted
                          ? 'border-gold/50 bg-gold/5' :'border-border bg-muted'
                      }`}
                      style={{
                        boxShadow: isHighlighted ? '0 0 20px rgba(200,169,110,0.15)' : 'none',
                      }}
                    >
                      {event.icon}
                      {isActive && (
                        <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-gold animate-ping" style={{ background: '#c8a96e' }} />
                      )}
                    </div>
                  </div>

                  {/* Mobile node */}
                  <div className="flex md:hidden items-center gap-4 w-full">
                    <div
                      className={`flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full border transition-all duration-300 ${
                        isActive ? 'border-gold bg-gold/10' : 'border-border bg-muted'
                      }`}
                    >
                      {event.icon}
                    </div>
                    <div className="flex-1">
                      <TimelineCard event={event} isHighlighted={isHighlighted} isActive={isActive} />
                    </div>
                  </div>

                  {/* Right content (odd items on desktop) */}
                  <div className={`hidden md:block w-full md:w-5/12 ${!isLeft ? 'md:text-right md:pr-12 md:order-1' : 'md:pl-12 md:order-3'}`}>
                    {isLeft ? (
                      <div />
                    ) : (
                      <div />
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Progress bar */}
        <div className="mt-12 md:mt-16 section-reveal">
          <div className="flex items-center justify-between mb-3">
            <span className="eyebrow" style={{ fontSize: '0.55rem' }}>Tournament Progress</span>
            <span className="text-muted-foreground" style={{ fontSize: '0.6rem', letterSpacing: '0.2em' }}>PHASE 1 OF 5</span>
          </div>
          <div className="h-px w-full bg-border relative overflow-hidden">
            <div
              className="absolute left-0 top-0 h-full transition-all duration-1000"
              style={{ width: '20%', background: 'linear-gradient(90deg, #c8a96e, #d4b483)' }}
            />
          </div>
          <div className="flex justify-between mt-2">
            {timelineEvents.map((e, i) => (
              <button
                key={e.id}
                onClick={() => setActiveIdx(i)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${i === activeIdx ? 'scale-150' : ''}`}
                style={{ background: i === 0 ? '#c8a96e' : i <= activeIdx ? 'rgba(200,169,110,0.5)' : 'rgba(200,169,110,0.15)' }}
                aria-label={`Go to ${e.title}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TimelineCard({
  event,
  isHighlighted,
  isActive,
}: {
  event: (typeof timelineEvents)[0];
  isHighlighted: boolean;
  isActive: boolean;
}) {
  return (
    <div
      className={`p-5 md:p-6 rounded-sm border transition-all duration-500 ${
        isHighlighted
          ? 'border-gold/30 bg-gold/5' :'border-border bg-muted/30'
      }`}
      style={{ boxShadow: isHighlighted ? '0 4px 24px rgba(200,169,110,0.06)' : 'none' }}
    >
      <div className="flex items-center gap-2 mb-2 flex-wrap">
        <span className="eyebrow" style={{ fontSize: '0.55rem', opacity: 0.7 }}>{event.phase}</span>
        <span
          className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-semibold tracking-widest uppercase ${
            isActive
              ? 'bg-gold/15 text-gold-matte border border-gold/30' :'bg-border/50 text-muted-foreground border border-border'
          }`}
          style={{ fontSize: '0.5rem', letterSpacing: '0.2em' }}
        >
          {isActive && <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse inline-block" style={{ background: '#c8a96e' }} />}
          {event.statusLabel}
        </span>
      </div>
      <h3
        className="font-bold text-foreground mb-1"
        style={{ fontSize: 'clamp(1rem, 2vw, 1.2rem)', letterSpacing: '-0.01em' }}
      >
        {event.title}
      </h3>
      <p
        className="font-bold mb-2"
        style={{ fontSize: 'clamp(1.4rem, 3vw, 2rem)', color: '#c8a96e', letterSpacing: '-0.02em', lineHeight: 1 }}
      >
        {event.date}
      </p>
      <p className="text-muted-foreground text-sm leading-relaxed" style={{ fontSize: '0.8rem' }}>
        {event.description}
      </p>
    </div>
  );
}
