import React from 'react';
import { ArrowRight } from 'lucide-react';
import { TESTIMONIALS } from '../../src/data/siteContent';
import { D2Reveal } from './D2Reveal';

/**
 * The copy deck has no approved quotes, so these are pinned blank notes -
 * deliberately unfilled rather than invented.
 */
export function D2Testimonials({ onOpenDemo }) {
  const slots = Array.from({ length: TESTIMONIALS.placeholderCount });

  return (
    <section className="d2-sec">
      <div className="d2-wrap">
        <div className="d2-mast">
          <D2Reveal>
            <div className="d2-mast__tag">
              <span className="d2-tab">Plate 07</span>
              <span className="d2-mast__bar" />
            </div>
            <span className="d2-mono d2-mono--clay">{TESTIMONIALS.eyebrow}</span>
          </D2Reveal>

          <D2Reveal delay={70}>
            <h2 className="d2-h2">{TESTIMONIALS.heading}</h2>
          </D2Reveal>
        </div>

        <div className="d2-notes">
          {slots.map((_, idx) => (
            <D2Reveal key={idx} delay={idx * 70}>
              <div className="d2-note">
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span className="d2-mono">Slot {String(idx + 1).padStart(2, '0')}</span>
                  <span
                    style={{
                      fontFamily: 'var(--disp)',
                      fontWeight: 800,
                      fontSize: '2rem',
                      lineHeight: 0.6,
                      color: 'var(--rule)'
                    }}
                    aria-hidden="true"
                  >
                    &rdquo;
                  </span>
                </div>

                <p className="d2-quote-type" style={{ color: 'var(--ink-mute)', fontSize: '1.02rem' }}>
                  Reserved for an approved customer quote.
                </p>

                <div style={{ marginTop: 'auto', display: 'grid', gap: '8px' }}>
                  <span style={{ height: '10px', width: '58%', background: 'rgba(21,33,29,0.1)' }} />
                  <span style={{ height: '8px', width: '38%', background: 'rgba(21,33,29,0.07)' }} />
                </div>
              </div>
            </D2Reveal>
          ))}
        </div>

        <D2Reveal delay={120}>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '20px',
              marginTop: '34px',
              paddingTop: '20px',
              borderTop: '1.5px solid var(--ink)'
            }}
          >
            <p className="d2-small" style={{ maxWidth: '480px' }}>
              {TESTIMONIALS.note}
            </p>

            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <span className="d2-mono">{TESTIMONIALS.ctaLine}</span>
              <button className="d2-btn d2-btn--paper d2-btn--sm" onClick={onOpenDemo}>
                {TESTIMONIALS.ctaButton} <ArrowRight size={13} />
              </button>
            </div>
          </div>
        </D2Reveal>
      </div>
    </section>
  );
}
