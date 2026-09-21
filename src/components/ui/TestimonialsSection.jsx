import React from 'react';
import { Quote, Clock3, ArrowRight } from 'lucide-react';
import { TESTIMONIALS } from '../../data/siteContent';
import { Reveal } from './Reveal';
import { SectionHeading } from './SectionHeading';

/**
 * The copy deck lists a Testimonials section but carries no approved quotes.
 * Rather than invent any, this composes one featured slot and two compact
 * slots as clearly-labelled placeholders - drop real quotes straight in.
 */
function QuoteSlot({ featured = false }) {
  return (
    <div
      style={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: featured ? 'center' : 'flex-start',
        gap: featured ? '22px' : '14px',
        padding: featured ? '38px 36px' : '24px 26px',
        borderRadius: '22px',
        background: featured
          ? 'linear-gradient(155deg, rgba(255,255,255,0.97), rgba(236, 248, 246, 0.9))'
          : 'rgba(255, 255, 255, 0.8)',
        border: featured ? '1px solid rgba(0, 184, 169, 0.28)' : '1px dashed rgba(13, 43, 69, 0.16)',
        boxShadow: featured ? '0 24px 54px rgba(0, 184, 169, 0.14)' : 'var(--shadow-sm)'
      }}
    >
      <Quote size={featured ? 34 : 22} color={featured ? 'rgba(0,184,169,0.5)' : 'rgba(0,184,169,0.35)'} />

      <p
        style={{
          fontFamily: 'Outfit, sans-serif',
          fontSize: featured ? '1.42rem' : '0.98rem',
          lineHeight: 1.55,
          fontWeight: featured ? 600 : 500,
          color: featured ? '#8fa0af' : '#a3b0bd'
        }}
      >
        {featured
          ? 'A customer story will sit here - in their words, about their pipeline.'
          : 'Customer quote pending approval.'}
      </p>

      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginTop: featured ? '6px' : 'auto' }}>
        <span
          style={{
            width: featured ? '46px' : '34px',
            height: featured ? '46px' : '34px',
            borderRadius: '50%',
            border: '1px dashed rgba(13, 43, 69, 0.22)',
            flexShrink: 0
          }}
        />
        <div>
          <div
            style={{
              height: featured ? '11px' : '9px',
              width: featured ? '132px' : '96px',
              borderRadius: '4px',
              background: 'rgba(13, 43, 69, 0.1)'
            }}
          />
          <div
            style={{
              height: featured ? '9px' : '8px',
              width: featured ? '92px' : '66px',
              borderRadius: '4px',
              background: 'rgba(13, 43, 69, 0.06)',
              marginTop: '8px'
            }}
          />
        </div>
      </div>
    </div>
  );
}

export function TestimonialsSection({ onOpenDemo }) {
  return (
    <section id="testimonials" className="section-shell">
      <SectionHeading eyebrow={TESTIMONIALS.eyebrow} title={TESTIMONIALS.heading} />

      <div className="quote-wall">
        <Reveal style={{ display: 'flex' }}>
          <div style={{ width: '100%' }}>
            <QuoteSlot featured />
          </div>
        </Reveal>

        <div className="quote-stack">
          <Reveal delay={90} style={{ display: 'flex' }}>
            <div style={{ width: '100%' }}>
              <QuoteSlot />
            </div>
          </Reveal>
          <Reveal delay={170} style={{ display: 'flex' }}>
            <div style={{ width: '100%' }}>
              <QuoteSlot />
            </div>
          </Reveal>
        </div>
      </div>

      {/* Honest status line + a way in for customers who want to be quoted */}
      <Reveal delay={220}>
        <div
          style={{
            marginTop: '26px',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '16px',
            paddingTop: '20px',
            borderTop: '1px solid var(--hairline)'
          }}
        >
          <span
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '9px',
              fontSize: '0.9rem',
              color: 'var(--text-muted)'
            }}
          >
            <Clock3 size={15} color="#00b8a9" />
            {TESTIMONIALS.note}
          </span>

          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '14px' }}>
            <span style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--navy-primary)' }}>
              {TESTIMONIALS.ctaLine}
            </span>
            <button className="btn-secondary" onClick={onOpenDemo} style={{ padding: '10px 20px', fontSize: '0.88rem' }}>
              {TESTIMONIALS.ctaButton}
              <ArrowRight size={15} color="#00b8a9" />
            </button>
          </span>
        </div>
      </Reveal>
    </section>
  );
}
