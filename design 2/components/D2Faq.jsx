import React, { useState } from 'react';
import { Plus, Minus, ArrowRight } from 'lucide-react';
import { FAQ } from '../../src/data/siteContent';
import { D2Reveal } from './D2Reveal';

export function D2Faq({ onOpenDemo }) {
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <section id="d2-faq" className="d2-sec">
      <div className="d2-wrap d2-wrap--tight">
        <div className="d2-mast">
          <D2Reveal>
            <div className="d2-mast__tag">
              <span className="d2-tab">Plate 08</span>
              <span className="d2-mast__bar" />
            </div>
            <span className="d2-mono d2-mono--clay">{FAQ.eyebrow}</span>
          </D2Reveal>

          <D2Reveal delay={70}>
            <h2 className="d2-h2">{FAQ.heading}</h2>
          </D2Reveal>
        </div>

        <div className="d2-faq">
          {FAQ.items.map((item, idx) => {
            const on = openIdx === idx;

            return (
              <div key={item.q} className={`d2-faq__item ${on ? 'd2-faq__item--on' : ''}`}>
                <button className="d2-faq__q" aria-expanded={on} onClick={() => setOpenIdx(on ? null : idx)}>
                  <span className="d2-mono d2-mono--clay">{String(idx + 1).padStart(2, '0')}</span>

                  <span className="d2-h3">{item.q}</span>

                  <span
                    className="d2-faq__sign"
                    style={{
                      background: on ? 'var(--ink)' : 'transparent',
                      color: on ? 'var(--pp)' : 'var(--ink)'
                    }}
                  >
                    {on ? <Minus size={14} /> : <Plus size={14} />}
                  </span>
                </button>

                <div className="d2-faq__collapse">
                  <div>
                    <p className="d2-body" style={{ padding: '0 60px 26px 92px', maxWidth: '780px' }}>
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <D2Reveal delay={90}>
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '20px', marginTop: '34px' }}>
            <span className="d2-mono">Still deciding?</span>
            <button className="d2-underline" onClick={onOpenDemo}>
              Talk to our team <ArrowRight size={14} />
            </button>
          </div>
        </D2Reveal>
      </div>
    </section>
  );
}
