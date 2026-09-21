import React from 'react';
import { ArrowRight } from 'lucide-react';
import { FINAL_CTA } from '../../src/data/siteContent';
import { D2Reveal } from './D2Reveal';

// Plain facts about the product, not promises about commercial terms.
const ASSURANCES = ['Cloud-based access', 'Desktop and mobile', 'Guided onboarding'];

export function D2Cta({ onOpenDemo, onOpenTrial }) {
  return (
    <section id="d2-start" className="d2-block d2-block--clay">
      <div className="d2-wrap">
        <D2Reveal>
          <span className="d2-mono" style={{ color: 'var(--pp)' }}>
            Get started
          </span>

          <h2 className="d2-disp" style={{ color: 'var(--pp)', margin: '26px 0 30px', maxWidth: '1000px' }}>
            One CRM. Your Entire Sales Pipeline.
          </h2>
        </D2Reveal>

        <D2Reveal delay={80}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(300px, 100%), 1fr))',
              gap: '48px',
              alignItems: 'end'
            }}
          >
            <div>
              {FINAL_CTA.lines.map((line) => (
                <p
                  key={line}
                  className="d2-lead"
                  style={{ color: 'rgba(247, 243, 234, 0.92)', maxWidth: '600px', marginBottom: '10px' }}
                >
                  {line}
                </p>
              ))}

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', marginTop: '34px' }}>
                <button className="d2-btn d2-btn--paper" onClick={onOpenDemo}>
                  Book a demo <ArrowRight size={15} />
                </button>

                <button
                  className="d2-btn"
                  onClick={onOpenTrial}
                  style={{
                    background: 'transparent',
                    color: 'var(--pp)',
                    borderColor: 'var(--pp)',
                    boxShadow: '4px 4px 0 var(--ink)'
                  }}
                >
                  Start free trial
                </button>
              </div>
            </div>

            <ul style={{ listStyle: 'none', display: 'grid', justifySelf: 'start' }}>
              {ASSURANCES.map((item) => (
                <li
                  key={item}
                  className="d2-mono"
                  style={{ color: 'var(--pp)', padding: '14px 0', borderTop: '1px solid rgba(247, 243, 234, 0.35)' }}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </D2Reveal>
      </div>
    </section>
  );
}
