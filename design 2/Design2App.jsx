import React, { useState } from 'react';
import { D2Nav } from './components/D2Nav';
import { D2Hero } from './components/D2Hero';
import { D2Ticker } from './components/D2Ticker';
import { D2CoreValue } from './components/D2CoreValue';
import { D2Modules } from './components/D2Modules';
import { D2Why } from './components/D2Why';
import { D2Compare } from './components/D2Compare';
import { D2Audience } from './components/D2Audience';
import { D2Process } from './components/D2Process';
import { D2Positioning } from './components/D2Positioning';
import { D2Testimonials } from './components/D2Testimonials';
import { D2Faq } from './components/D2Faq';
import { D2Cta } from './components/D2Cta';
import { D2Footer } from './components/D2Footer';
import { D2Modal } from './components/D2Modal';

export default function Design2App() {
  // 'demo' | 'trial' | null - one form, two framings
  const [formVariant, setFormVariant] = useState(null);

  const openDemo = () => setFormVariant('demo');
  const openTrial = () => setFormVariant('trial');

  return (
    <div className="d2-root">
      {/* The 12-column guide set the layout is built on, left visible */}
      <div className="d2-guides" aria-hidden="true">
        {Array.from({ length: 12 }).map((_, i) => (
          <span key={i} />
        ))}
      </div>

      <D2Nav onOpenDemo={openDemo} onOpenTrial={openTrial} />

      <main className="d2-main">
        <D2Hero onOpenDemo={openDemo} onOpenTrial={openTrial} />
        <D2Ticker />
        <D2CoreValue />
        <D2Modules />
        <D2Why onOpenDemo={openDemo} />
        <D2Compare />
        <D2Audience />
        <D2Process />
        <D2Positioning />
        <D2Testimonials onOpenDemo={openDemo} />
        <D2Faq onOpenDemo={openDemo} />
        <D2Cta onOpenDemo={openDemo} onOpenTrial={openTrial} />
        <D2Footer onOpenDemo={openDemo} onOpenTrial={openTrial} />
      </main>

      <a className="d2-swap" href="/" aria-label="Switch to design 1">
        ← Design 01
      </a>

      <D2Modal
        isOpen={formVariant !== null}
        variant={formVariant || 'demo'}
        onClose={() => setFormVariant(null)}
      />
    </div>
  );
}
