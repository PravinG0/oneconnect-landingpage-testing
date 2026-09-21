import React from 'react';
import { ArrowRight } from 'lucide-react';
import { WHY_ONECONNECT } from '../../src/data/siteContent';
import { D2Reveal } from './D2Reveal';

export function D2Why({ onOpenDemo }) {
  return (
    <section id="d2-why" className="d2-sec">
      <div className="d2-wrap">
        <div className="d2-mast">
          <D2Reveal>
            <div className="d2-mast__tag">
              <span className="d2-tab">Plate 03</span>
              <span className="d2-mast__bar" />
            </div>
            <span className="d2-mono d2-mono--clay">{WHY_ONECONNECT.eyebrow}</span>
          </D2Reveal>

          <D2Reveal delay={70}>
            <h2 className="d2-h2">{WHY_ONECONNECT.heading}</h2>
            <p className="d2-body" style={{ marginTop: '20px', maxWidth: '560px' }}>
              {WHY_ONECONNECT.lead}
            </p>
            <button className="d2-underline" style={{ marginTop: '24px' }} onClick={onOpenDemo}>
              See it on your pipeline <ArrowRight size={14} />
            </button>
          </D2Reveal>
        </div>

        <div>
          {WHY_ONECONNECT.reasons.map((reason, idx) => (
            <D2Reveal key={reason.title} className="d2-reason" delay={idx * 50}>
              <span className="d2-numeral">{String(idx + 1).padStart(2, '0')}</span>
              <h3 className="d2-h3" style={{ paddingTop: '6px' }}>{reason.title}</h3>
              <p className="d2-body">{reason.detail}</p>
            </D2Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
