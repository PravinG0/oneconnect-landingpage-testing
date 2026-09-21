import React from 'react';
import { GROWTH_STAGE } from '../../src/data/siteContent';
import { D2Reveal } from './D2Reveal';

export function D2Audience() {
  return (
    <section id="d2-who" className="d2-sec">
      <div className="d2-wrap">
        <div className="d2-mast">
          <D2Reveal>
            <div className="d2-mast__tag">
              <span className="d2-tab">Plate 05</span>
              <span className="d2-mast__bar" />
            </div>
            <span className="d2-mono d2-mono--clay">{GROWTH_STAGE.eyebrow}</span>
          </D2Reveal>

          <D2Reveal delay={70}>
            <h2 className="d2-h2">{GROWTH_STAGE.heading}</h2>
          </D2Reveal>
        </div>

        <div className="d2-board">
          {GROWTH_STAGE.audiences.map((audience, idx) => (
            <D2Reveal key={audience.title} delay={idx * 60}>
              <div className="d2-card">
                <span className="d2-card__pin" />
                <span className="d2-mono">{String(idx + 1).padStart(2, '0')}</span>
                <h3 className="d2-h3" style={{ marginTop: 'auto' }}>{audience.title}</h3>
                <p className="d2-small">{audience.detail}</p>
              </div>
            </D2Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
