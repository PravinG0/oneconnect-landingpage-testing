import React from 'react';
import { ArrowRight } from 'lucide-react';
import { COMPARISON } from '../../data/siteContent';
import { Reveal } from './Reveal';
import { SectionHeading } from './SectionHeading';

/**
 * One transformation read left to right: the old way, an arrow spine, and the
 * OneConnect outcome. The win column is built from the cells themselves, so
 * its teal band always lines up with the rows beside it.
 */
export function ComparisonSection() {
  const rows = COMPARISON.without.map((item, idx) => ({ before: item, after: COMPARISON.with[idx] }));
  const lastIdx = rows.length - 1;

  return (
    <section id="comparison" className="section-shell section-shell--narrow">
      <SectionHeading eyebrow={COMPARISON.eyebrow} title={COMPARISON.heading} />

      <Reveal>
        <div className="compare-grid">
          {/* Column labels */}
          <div className="compare-cell compare-cell--head">
            <span
              style={{
                fontFamily: 'Outfit, sans-serif',
                fontSize: '0.75rem',
                fontWeight: 700,
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: 'var(--text-muted)'
              }}
            >
              Without OneConnect
            </span>
          </div>
          <div className="compare-cell compare-cell--head compare-cell--spine" />
          <div className="compare-cell compare-cell--head" style={{ paddingLeft: '24px' }}>
            <span
              style={{
                fontFamily: 'Outfit, sans-serif',
                fontSize: '0.75rem',
                fontWeight: 700,
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: 'var(--teal-deep)'
              }}
            >
              With OneConnect
            </span>
          </div>

          {/* Rows */}
          {rows.map((row, idx) => (
            <React.Fragment key={row.after}>
              <div className="compare-cell">
                <span
                  style={{
                    fontSize: '0.95rem',
                    lineHeight: 1.6,
                    color: '#8795a5',
                    textDecoration: 'line-through',
                    textDecorationColor: 'rgba(217, 119, 87, 0.45)',
                    textDecorationThickness: '1px'
                  }}
                >
                  {row.before}
                </span>
              </div>

              <div className="compare-cell compare-cell--spine">
                <span
                  style={{
                    width: '28px',
                    height: '28px',
                    borderRadius: '50%',
                    background: 'rgba(0, 184, 169, 0.13)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <ArrowRight size={14} color="#00796b" strokeWidth={2.5} />
                </span>
              </div>

              <div
                className={[
                  'compare-cell',
                  'compare-cell--win',
                  idx === 0 ? 'compare-cell--win-first' : '',
                  idx === lastIdx ? 'compare-cell--win-last' : ''
                ].join(' ')}
              >
                <span
                  style={{
                    fontFamily: 'Outfit, sans-serif',
                    fontSize: '1.02rem',
                    lineHeight: 1.5,
                    fontWeight: 700,
                    color: 'var(--navy-primary)'
                  }}
                >
                  {row.after}
                </span>
              </div>
            </React.Fragment>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
