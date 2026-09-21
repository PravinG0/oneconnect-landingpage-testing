import React from 'react';
import { CORE_VALUE } from '../../src/data/siteContent';
import { D2Reveal } from './D2Reveal';

export function D2CoreValue() {
  return (
    <section className="d2-sec">
      <div className="d2-wrap">
        <div className="d2-mast">
          <D2Reveal>
            <div className="d2-mast__tag">
              <span className="d2-tab">Plate 01</span>
              <span className="d2-mast__bar" />
            </div>
            <span className="d2-mono d2-mono--clay">{CORE_VALUE.eyebrow}</span>
          </D2Reveal>

          <D2Reveal delay={70}>
            <h2 className="d2-h2">{CORE_VALUE.heading}</h2>
          </D2Reveal>
        </div>

        {/* Two blocks that physically overlap: the problem sits behind, the
            OneConnect answer sits on top of it. */}
        <D2Reveal>
          <div className="d2-versus">
            <div className="d2-versus__a">
              <span className="d2-mono d2-mono--clay">Today</span>
              <p className="d2-body" style={{ marginTop: '18px' }}>
                {CORE_VALUE.problem}
              </p>
            </div>

            <div className="d2-versus__b">
              <span className="d2-mono" style={{ color: 'var(--sand)' }}>
                With OneConnect
              </span>
              <p
                className="d2-lead"
                style={{ marginTop: '18px', color: 'var(--pp)', fontWeight: 500 }}
              >
                {CORE_VALUE.solution}
              </p>
            </div>
          </div>
        </D2Reveal>

        <D2Reveal delay={90}>
          <div className="d2-steps-tabs">
            {CORE_VALUE.pillars.map((pillar, idx) => (
              <div key={pillar.label}>
                <span className="d2-mono d2-mono--clay">{String(idx + 1).padStart(2, '0')}</span>
                <span className="d2-h3" style={{ fontSize: 'clamp(1rem, 1.4vw, 1.2rem)' }}>
                  {pillar.label}
                </span>
              </div>
            ))}
          </div>
        </D2Reveal>
      </div>
    </section>
  );
}
