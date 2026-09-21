import React from 'react';
import { ArrowRight } from 'lucide-react';
import { COMPARISON } from '../../src/data/siteContent';
import { D2Reveal } from './D2Reveal';

export function D2Compare() {
  const rows = COMPARISON.without.map((before, idx) => ({ before, after: COMPARISON.with[idx] }));

  return (
    <section id="d2-compare" className="d2-sec">
      <div className="d2-wrap d2-wrap--tight">
        <div className="d2-mast">
          <D2Reveal>
            <div className="d2-mast__tag">
              <span className="d2-tab">Plate 04</span>
              <span className="d2-mast__bar" />
            </div>
            <span className="d2-mono d2-mono--clay">{COMPARISON.eyebrow}</span>
          </D2Reveal>

          <D2Reveal delay={70}>
            <h2 className="d2-h2">{COMPARISON.heading}</h2>
          </D2Reveal>
        </div>

        <D2Reveal>
          <div className="d2-ledger">
            <div className="d2-ledger__head">
              <div className="d2-mono" style={{ color: 'rgba(247,243,234,0.7)' }}>Without OneConnect</div>
              <div />
              <div className="d2-mono" style={{ color: 'var(--sand)' }}>With OneConnect</div>
            </div>

            {rows.map((row) => (
              <div className="d2-ledger__row" key={row.after}>
                <div className="d2-ledger__was">{row.before}</div>
                <div className="d2-ledger__mid">
                  <ArrowRight size={14} color="var(--clay)" />
                </div>
                <div className="d2-ledger__win">
                  <span style={{ fontFamily: 'var(--disp)', fontWeight: 700, letterSpacing: '-0.02em', fontSize: '1.04rem' }}>
                    {row.after}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </D2Reveal>
      </div>
    </section>
  );
}
