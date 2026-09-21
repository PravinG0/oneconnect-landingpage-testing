import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { PRODUCT_OVERVIEW, MODULES } from '../../src/data/siteContent';
import { D2Reveal } from './D2Reveal';
import { D2Schematic } from './D2Schematic';

/**
 * A catalogue spread: the module index on the left, the selected module
 * presented as a printed plate on the right. Design 1 scrolls through every
 * module; here you leaf through them.
 */
export function D2Modules() {
  const [activeIdx, setActiveIdx] = useState(0);
  const active = MODULES[activeIdx];
  const plateNo = String(activeIdx + 1).padStart(2, '0');

  return (
    <section id="d2-product" className="d2-sec">
      <div className="d2-wrap">
        <div className="d2-mast">
          <D2Reveal>
            <div className="d2-mast__tag">
              <span className="d2-tab">Plate 02</span>
              <span className="d2-mast__bar" />
            </div>
            <span className="d2-mono d2-mono--clay">{PRODUCT_OVERVIEW.eyebrow}</span>
          </D2Reveal>

          <D2Reveal delay={70}>
            <h2 className="d2-h2">{PRODUCT_OVERVIEW.heading}</h2>
            <p className="d2-body" style={{ marginTop: '20px', maxWidth: '560px' }}>
              {PRODUCT_OVERVIEW.lead}
            </p>
          </D2Reveal>
        </div>

        <div className="d2-cat">
          {/* ---------------- index ---------------- */}
          <D2Reveal>
            <div className="d2-cat__index">
              <div
                className="d2-mono"
                style={{ padding: '12px 10px', borderBottom: '1.5px solid var(--ink)' }}
              >
                Contents — {MODULES.length} modules
              </div>

              {MODULES.map((module, idx) => {
                const on = idx === activeIdx;
                return (
                  <button
                    key={module.id}
                    className={`d2-cat__item ${on ? 'd2-cat__item--on' : ''}`}
                    onClick={() => setActiveIdx(idx)}
                    aria-current={on ? 'true' : undefined}
                  >
                    <span
                      className="d2-mono"
                      style={{ color: on ? 'var(--sand)' : 'var(--ink-mute)' }}
                    >
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                    <span>{module.label}</span>
                    <span style={{ opacity: on ? 1 : 0.25 }}>
                      <ArrowRight size={14} />
                    </span>
                  </button>
                );
              })}
            </div>
          </D2Reveal>

          {/* ---------------- plate ---------------- */}
          <D2Reveal delay={90}>
            <div className="d2-cat__plate">
              <div className="d2-cat__head">
                <div>
                  <span className="d2-mono d2-mono--clay">
                    Module {plateNo} — {active.label}
                  </span>
                  <h3 className="d2-h3" style={{ marginTop: '12px', maxWidth: '520px', fontSize: 'clamp(1.3rem, 2.1vw, 1.75rem)' }}>
                    {active.heading}
                  </h3>
                </div>

                <span className="d2-numeral d2-numeral--clay" style={{ fontSize: 'clamp(2.6rem, 4vw, 3.6rem)' }}>
                  {plateNo}
                </span>
              </div>

              <div className="d2-cat__body">
                <div className="d2-cat__copy">
                  <p className="d2-body">{active.description}</p>

                  {active.automations ? (
                    <ul className="d2-ticks">
                      {active.automations.map((auto) => (
                        <li key={auto.title} className="d2-tick">
                          <span className="d2-tick__mark">+</span>
                          <span>
                            <strong style={{ fontWeight: 600, color: 'var(--ink)' }}>{auto.title}</strong>
                            {' — '}
                            {auto.detail}
                          </span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <ul className="d2-ticks">
                      {active.features.map((feature) => (
                        <li key={feature} className="d2-tick">
                          <span className="d2-tick__mark">+</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  <p
                    className="d2-quote-type"
                    style={{
                      marginTop: '26px',
                      paddingTop: '18px',
                      borderTop: '1px solid var(--rule)',
                      color: 'var(--teal)',
                      fontWeight: 500
                    }}
                  >
                    {active.kicker}
                  </p>
                </div>

                <div className="d2-cat__art">
                  <D2Schematic id={active.id} />
                </div>
              </div>
            </div>
          </D2Reveal>
        </div>
      </div>
    </section>
  );
}
