import React from 'react';
import type { Metadata } from 'next';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import PrizeSection from './components/PrizeSection';
import FormatSection from './components/FormatSection';
import RulesSection from './components/RulesSection';
import CTASection from './components/CTASection';
import TimelineSection from './components/TimelineSection';
import HorizontalScrollSection from './components/HorizontalScrollSection';
import SpritesOverlay from './components/SpritesOverlay';
import SoundController from './components/SoundController';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'IDWC — International Debate World Cup 2026',
  description:
    'The International Debate World Cup is a free, elite online debate championship for high school students. Sept 5–15. $2,500 prize pool. Apply now.',
  openGraph: {
    title: 'IDWC — International Debate World Cup',
    description: 'Free elite online debate championship. Sept 5–15. $2,500 prize pool. High school teams only.',
    images: [{ url: '/assets/images/app_logo.png', width: 1200, height: 630 }],
  },
};

export default function IDWCLandingPage() {
  return (
    <main>
      <SpritesOverlay />
      <SoundController />
      <HeroSection />
      <AboutSection />
      <HorizontalScrollSection />
      <PrizeSection />
      <TimelineSection />
      <FormatSection />
      <RulesSection />
      <CTASection />
      <Footer />
    </main>
  );
}