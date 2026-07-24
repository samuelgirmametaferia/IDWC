'use client';

import React, { useEffect, useRef, useState, useCallback } from 'react';

// Generates a short tone using Web Audio API
function createTone(
  ctx: AudioContext,
  frequency: number,
  duration: number,
  type: OscillatorType = 'sine',
  gain = 0.08
): void {
  const osc = ctx.createOscillator();
  const gainNode = ctx.createGain();
  osc.connect(gainNode);
  gainNode.connect(ctx.destination);
  osc.type = type;
  osc.frequency.setValueAtTime(frequency, ctx.currentTime);
  gainNode.gain.setValueAtTime(gain, ctx.currentTime);
  gainNode.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration);
  osc.start(ctx.currentTime);
  osc.stop(ctx.currentTime + duration);
}

// Generates ambient background drone
function startAmbientDrone(ctx: AudioContext): () => void {
  const nodes: AudioNode[] = [];

  // Low drone
  const drone1 = ctx.createOscillator();
  const gain1 = ctx.createGain();
  drone1.type = 'sine';
  drone1.frequency.setValueAtTime(55, ctx.currentTime);
  gain1.gain.setValueAtTime(0.04, ctx.currentTime);
  drone1.connect(gain1);
  gain1.connect(ctx.destination);
  drone1.start();
  nodes.push(drone1, gain1);

  // Harmonic
  const drone2 = ctx.createOscillator();
  const gain2 = ctx.createGain();
  drone2.type = 'triangle';
  drone2.frequency.setValueAtTime(110, ctx.currentTime);
  gain2.gain.setValueAtTime(0.02, ctx.currentTime);
  drone2.connect(gain2);
  gain2.connect(ctx.destination);
  drone2.start();
  nodes.push(drone2, gain2);

  // Subtle shimmer
  const shimmer = ctx.createOscillator();
  const shimmerGain = ctx.createGain();
  shimmer.type = 'sine';
  shimmer.frequency.setValueAtTime(440, ctx.currentTime);
  shimmerGain.gain.setValueAtTime(0.005, ctx.currentTime);
  shimmer.connect(shimmerGain);
  shimmerGain.connect(ctx.destination);
  shimmer.start();
  nodes.push(shimmer, shimmerGain);

  return () => {
    nodes.forEach((n) => {
      try {
        if (n instanceof OscillatorNode) n.stop();
      } catch (_) {}
    });
  };
}

export default function SoundController() {
  const audioCtxRef = useRef<AudioContext | null>(null);
  const stopDroneRef = useRef<(() => void) | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const masterGainRef = useRef<GainNode | null>(null);

  const initAudio = useCallback(() => {
    if (audioCtxRef.current) return;
    try {
      const ctx = new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();
      audioCtxRef.current = ctx;

      // Master gain
      const masterGain = ctx.createGain();
      masterGain.gain.setValueAtTime(0.7, ctx.currentTime);
      masterGain.connect(ctx.destination);
      masterGainRef.current = masterGain;

      // Welcome chime
      setTimeout(() => {
        createTone(ctx, 523.25, 0.4, 'sine', 0.06); // C5
        setTimeout(() => createTone(ctx, 659.25, 0.4, 'sine', 0.05), 200); // E5
        setTimeout(() => createTone(ctx, 783.99, 0.6, 'sine', 0.04), 400); // G5
      }, 300);

      // Start ambient drone after chime
      setTimeout(() => {
        const stop = startAmbientDrone(ctx);
        stopDroneRef.current = stop;
        setIsPlaying(true);
      }, 1200);
    } catch (_) {
      // Audio not supported
    }
  }, []);

  const handleFirstInteraction = useCallback(() => {
    if (hasInteracted) return;
    setHasInteracted(true);
    initAudio();
  }, [hasInteracted, initAudio]);

  useEffect(() => {
    const events = ['click', 'touchstart', 'keydown', 'scroll'];
    events.forEach((e) => window.addEventListener(e, handleFirstInteraction, { once: true, passive: true }));
    return () => {
      events.forEach((e) => window.removeEventListener(e, handleFirstInteraction));
    };
  }, [handleFirstInteraction]);

  // Section scroll sound effects
  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && audioCtxRef.current && !isMuted) {
            const ctx = audioCtxRef.current;
            // Soft whoosh/transition sound
            createTone(ctx, 220, 0.3, 'triangle', 0.03);
          }
        });
      },
      { threshold: 0.3 }
    );
    sections.forEach((s) => sectionObserver.observe(s));
    return () => sectionObserver.disconnect();
  }, [hasInteracted, isMuted]);

  // CTA hover sound
  useEffect(() => {
    const handleCTAHover = () => {
      if (!audioCtxRef.current || isMuted) return;
      createTone(audioCtxRef.current, 880, 0.15, 'sine', 0.04);
    };
    const ctaLinks = document.querySelectorAll('a[href*="fillout"]');
    ctaLinks.forEach((el) => el.addEventListener('mouseenter', handleCTAHover));
    return () => ctaLinks.forEach((el) => el.removeEventListener('mouseenter', handleCTAHover));
  }, [hasInteracted, isMuted]);

  const toggleMute = () => {
    if (!audioCtxRef.current) return;
    const ctx = audioCtxRef.current;
    if (isMuted) {
      // Unmute
      if (masterGainRef.current) masterGainRef.current.gain.setValueAtTime(0.7, ctx.currentTime);
      setIsMuted(false);
      createTone(ctx, 440, 0.2, 'sine', 0.05);
    } else {
      // Mute
      if (masterGainRef.current) masterGainRef.current.gain.setValueAtTime(0, ctx.currentTime);
      setIsMuted(true);
    }
  };

  if (!hasInteracted && !isPlaying) {
    return (
      <div
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-3 py-2 rounded-sm border border-border bg-muted/80 backdrop-blur-sm cursor-pointer opacity-60 hover:opacity-100 transition-opacity"
        style={{ fontSize: '0.55rem', letterSpacing: '0.2em', color: '#c8a96e' }}
        onClick={handleFirstInteraction}
        role="button"
        aria-label="Enable ambient sound"
      >
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
          <path d="M2 4h2l3-3v10L4 8H2V4z" fill="#c8a96e" opacity="0.6"/>
          <path d="M8 3.5a3 3 0 010 5" stroke="#c8a96e" strokeWidth="1" strokeLinecap="round" opacity="0.4"/>
        </svg>
        <span className="uppercase tracking-widest">Sound</span>
      </div>
    );
  }

  return (
    <button
      onClick={toggleMute}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-3 py-2 rounded-sm border border-border bg-muted/80 backdrop-blur-sm hover:border-gold/30 transition-all duration-200"
      style={{ fontSize: '0.55rem', letterSpacing: '0.2em', color: isMuted ? '#7a7a7a' : '#c8a96e' }}
      aria-label={isMuted ? 'Unmute ambient sound' : 'Mute ambient sound'}
    >
      {isMuted ? (
        <>
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
            <path d="M2 4h2l3-3v10L4 8H2V4z" fill="#7a7a7a" opacity="0.6"/>
            <path d="M9 4l-3 4M6 4l3 4" stroke="#7a7a7a" strokeWidth="1" strokeLinecap="round"/>
          </svg>
          <span className="uppercase tracking-widest">Muted</span>
        </>
      ) : (
        <>
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
            <path d="M2 4h2l3-3v10L4 8H2V4z" fill="#c8a96e" opacity="0.8"/>
            <path d="M8 3.5a3 3 0 010 5" stroke="#c8a96e" strokeWidth="1" strokeLinecap="round"/>
            <path d="M9.5 2a5 5 0 010 8" stroke="#c8a96e" strokeWidth="0.8" strokeLinecap="round" opacity="0.5"/>
          </svg>
          <span className="uppercase tracking-widest">Sound On</span>
        </>
      )}
    </button>
  );
}
