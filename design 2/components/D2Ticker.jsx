import React from 'react';
import { HERO, TRUSTED_BY } from '../../src/data/siteContent';
import { D2Reveal } from './D2Reveal';

export function D2Ticker() {
  // Doubled so the -50% translation loops seamlessly.
  const run = [...HERO.strip, ...HERO.strip];

  return (
    <>
      <div className="d2-bar" style={{ marginTop: '112px' }}>
        <div className="d2-bar__track">
          {run.map((word, idx) => (
            <span className="d2-bar__item" key={`${word}-${idx}`}>
              {word}
              <span className="d2-bar__star" aria-hidden="true">
                ✦
              </span>
            </span>
          ))}
        </div>
      </div>

      <section className="d2-sec d2-sec--tight">
        <div className="d2-wrap">
          <D2Reveal>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(min(280px, 100%), 1fr))',
                gap: '26px',
                alignItems: 'end',
                marginBottom: '30px'
              }}
            >
              <span className="d2-mono">{TRUSTED_BY.eyebrow}</span>
              <h2 className="d2-h3" style={{ maxWidth: '520px', justifySelf: 'end', textAlign: 'right' }}>
                {TRUSTED_BY.heading}
              </h2>
            </div>

            <div className="d2-logos">
              {Array.from({ length: TRUSTED_BY.logoSlots }).map((_, idx) => (
                <div key={idx} className="d2-logo">
                  Logo
                </div>
              ))}
            </div>
          </D2Reveal>
        </div>
      </section>
    </>
  );
}
