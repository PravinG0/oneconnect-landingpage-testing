import React, { useState } from 'react';
import { Plus, Minus, ArrowRight } from 'lucide-react';
import { FAQ } from '../../data/siteContent';
import { Reveal } from './Reveal';

/** Open list with hairline rules - the answer slides down in place. */
export function FaqSection({ onOpenDemo }) {
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <section id="faq" className="section-shell">
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(330px, 100%), 1fr))',
          gap: '56px',
          alignItems: 'start'
        }}
      >
        {/* Left: heading + escape hatch */}
        <Reveal>
          <span className="eyebrow">{FAQ.eyebrow}</span>
          <h2 className="section-title" style={{ maxWidth: '420px' }}>
            {FAQ.heading}
          </h2>
          <p className="section-lead" style={{ maxWidth: '400px', marginBottom: '24px' }}>
            Still have a question about your sales process? Our team is happy to walk through it with you.
          </p>
          <button className="btn-secondary" onClick={onOpenDemo}>
            Talk to our team <ArrowRight size={16} color="#00b8a9" />
          </button>
        </Reveal>

        {/* Right: the questions */}
        <div>
          {FAQ.items.map((item, idx) => {
            const isOpen = openIdx === idx;

            return (
              <Reveal key={item.q} className={`faq-item ${isOpen ? 'faq-item--open' : ''}`} delay={idx * 50}>
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  aria-expanded={isOpen}
                  style={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '18px',
                    padding: '20px 14px',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    textAlign: 'left'
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'Outfit, sans-serif',
                      fontWeight: 700,
                      fontSize: '1.03rem',
                      color: isOpen ? 'var(--teal-deep)' : 'var(--navy-primary)',
                      lineHeight: 1.45,
                      transition: 'color 0.3s ease'
                    }}
                  >
                    {item.q}
                  </span>

                  <span
                    style={{
                      width: '26px',
                      height: '26px',
                      flexShrink: 0,
                      borderRadius: '50%',
                      background: isOpen ? '#00b8a9' : 'rgba(13, 43, 69, 0.06)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      transition: 'background 0.3s ease'
                    }}
                  >
                    {isOpen ? <Minus size={14} color="#ffffff" /> : <Plus size={14} color="#0d2b45" />}
                  </span>
                </button>

                <div
                  style={{
                    display: 'grid',
                    gridTemplateRows: isOpen ? '1fr' : '0fr',
                    transition: 'grid-template-rows 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
                  }}
                >
                  <div style={{ overflow: 'hidden' }}>
                    <p
                      style={{
                        padding: '0 14px 22px 14px',
                        fontSize: '0.96rem',
                        lineHeight: 1.8,
                        color: 'var(--text-secondary)'
                      }}
                    >
                      {item.a}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
