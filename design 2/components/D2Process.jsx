import React from 'react';
import { HOW_IT_WORKS } from '../../src/data/siteContent';
import { D2Reveal } from './D2Reveal';

/** The journey drawn as a surveyed track on graph paper: stations, not nodes. */
export function D2Process() {
  return (
    <section id="d2-process" className="d2-sec">
      <div className="d2-wrap">
        <div className="d2-mast">
          <D2Reveal>
            <div className="d2-mast__tag">
              <span className="d2-tab">Plate 06</span>
              <span className="d2-mast__bar" />
            </div>
            <span className="d2-mono d2-mono--clay">{HOW_IT_WORKS.eyebrow}</span>
          </D2Reveal>

          <D2Reveal delay={70}>
            <h2 className="d2-h2">{HOW_IT_WORKS.heading}</h2>
          </D2Reveal>
        </div>

        <D2Reveal>
          <div className="d2-track__ends">
            <span className="d2-tab d2-tab--clay">New lead</span>
            <span style={{ flex: 1, height: '1px', background: 'var(--rule)', margin: '0 18px' }} />
            <span className="d2-tab d2-tab--teal">Customer</span>
          </div>

          <div className="d2-track">
            <div className="d2-track__row">
              {HOW_IT_WORKS.steps.map((step, idx) => {
                const last = idx === HOW_IT_WORKS.steps.length - 1;

                return (
                  <div key={step.no} className={`d2-track__stop ${last ? 'd2-track__stop--end' : ''}`}>
                    <span className="d2-track__dot" style={{ display: 'block' }} />

                    <span className="d2-numeral d2-numeral--fill" style={{ fontSize: 'clamp(1.7rem, 2.6vw, 2.3rem)' }}>
                      {step.no}
                    </span>

                    <h3 className="d2-h3" style={{ margin: '12px 0 10px' }}>
                      {step.title}
                    </h3>

                    <p className="d2-small">{step.detail}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </D2Reveal>
      </div>
    </section>
  );
}
