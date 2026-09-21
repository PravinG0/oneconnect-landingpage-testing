import React from 'react';
import { POSITIONING } from '../../src/data/siteContent';
import { D2Reveal } from './D2Reveal';

/**
 * Full-bleed teal block. The claim is on the left; on the right the CRM's
 * ranked next actions are printed as a receipt - the claim, demonstrated.
 */
export function D2Positioning() {
  return (
    <section className="d2-block">
      <div className="d2-wrap">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(360px, 100%), 1fr))',
            gap: '62px',
            alignItems: 'center'
          }}
        >
          <D2Reveal>
            <span className="d2-mono">{POSITIONING.eyebrow}</span>

            <h2 className="d2-h2" style={{ color: 'var(--pp)', margin: '22px 0 26px', maxWidth: '520px' }}>
              Your CRM Should Tell Your Team{' '}
              <span style={{ color: 'var(--sand)' }}>What to Do Next</span>
            </h2>

            {POSITIONING.lines.map((line) => (
              <p key={line} className="d2-body" style={{ maxWidth: '480px', marginBottom: '10px' }}>
                {line}
              </p>
            ))}

            <p
              style={{
                marginTop: '30px',
                display: 'inline-block',
                fontFamily: 'var(--disp)',
                fontWeight: 700,
                fontSize: 'clamp(1.15rem, 2vw, 1.6rem)',
                letterSpacing: '-0.03em',
                color: 'var(--pp)',
                borderBottom: '3px solid var(--clay)',
                paddingBottom: '6px'
              }}
            >
              {POSITIONING.kicker}
            </p>
          </D2Reveal>

          <D2Reveal delay={110}>
            <div className="d2-receipt">
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingBottom: '14px',
                  borderBottom: '1.5px solid var(--ink)'
                }}
              >
                <span className="d2-mono d2-mono--ink">{POSITIONING.actionsLabel}</span>
                <span className="d2-mono">Today</span>
              </div>

              {POSITIONING.actions.map((action) => (
                <div key={action.title} className="d2-receipt__row">
                  <span
                    className="d2-mono"
                    style={{ color: action.rank === '1' ? 'var(--clay)' : 'var(--ink-mute)', paddingTop: '3px' }}
                  >
                    {String(action.rank).padStart(2, '0')}
                  </span>

                  <span>
                    <span style={{ fontFamily: 'var(--disp)', fontWeight: 700, fontSize: '1.02rem', letterSpacing: '-0.02em' }}>
                      {action.title}
                    </span>
                    <span className="d2-small" style={{ display: 'block', marginTop: '3px' }}>
                      {action.reason}
                    </span>
                  </span>
                </div>
              ))}

              <p className="d2-small" style={{ marginTop: '18px', paddingTop: '14px', borderTop: '1.5px dashed var(--rule)' }}>
                {POSITIONING.actionsFootnote}
              </p>

              <div className="d2-receipt__perf" aria-hidden="true" />
            </div>
          </D2Reveal>
        </div>
      </div>
    </section>
  );
}
