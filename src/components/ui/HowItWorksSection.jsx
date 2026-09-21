import React from 'react';
import { Inbox, UserCheck, MessagesSquare, BellRing, GitBranch, Trophy, Flag, CheckCircle2 } from 'lucide-react';
import { HOW_IT_WORKS } from '../../data/siteContent';
import { Reveal } from './Reveal';
import { SectionHeading } from './SectionHeading';

const ICONS = { Inbox, UserCheck, MessagesSquare, BellRing, GitBranch, Trophy };

/** Small pill that caps each end of the spine. */
function RailMarker({ icon: Icon, label, tone = 'start' }) {
  const isEnd = tone === 'end';

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <span
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          padding: '8px 18px',
          borderRadius: '9999px',
          background: isEnd ? 'linear-gradient(135deg, #00b8a9, #00897b)' : '#ffffff',
          border: isEnd ? 'none' : '1px solid rgba(0, 184, 169, 0.3)',
          boxShadow: isEnd ? '0 12px 26px rgba(0, 184, 169, 0.3)' : '0 8px 20px rgba(13, 43, 69, 0.07)',
          color: isEnd ? '#ffffff' : 'var(--teal-deep)',
          fontFamily: 'Outfit, sans-serif',
          fontWeight: 700,
          fontSize: '0.78rem',
          letterSpacing: '0.1em',
          textTransform: 'uppercase'
        }}
      >
        <Icon size={14} />
        {label}
      </span>
    </div>
  );
}

/**
 * The journey reads down a centre spine, steps alternating side to side.
 * On narrow screens the spine moves left and every step stacks under it.
 */
export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="section-shell section-shell--narrow">
      <SectionHeading eyebrow={HOW_IT_WORKS.eyebrow} title={HOW_IT_WORKS.heading} />

      <Reveal>
        <RailMarker icon={Flag} label="New lead" />
      </Reveal>

      <div className="timeline" style={{ margin: '14px 0' }}>
        {HOW_IT_WORKS.steps.map((step, idx) => {
          const Icon = ICONS[step.icon] || Inbox;
          const onLeft = idx % 2 === 0;

          return (
            <Reveal key={step.no} className="timeline-step" delay={idx * 80}>
              <div className={onLeft ? 'timeline-copy--left' : 'timeline-copy--right'}>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'baseline',
                    gap: '10px',
                    justifyContent: onLeft ? 'flex-end' : 'flex-start',
                    marginBottom: '6px'
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'Outfit, sans-serif',
                      fontSize: '0.78rem',
                      fontWeight: 800,
                      letterSpacing: '0.1em',
                      color: 'rgba(0, 184, 169, 0.8)'
                    }}
                  >
                    {step.no}
                  </span>
                  <h3 style={{ fontSize: '1.16rem', fontWeight: 800, color: 'var(--navy-primary)' }}>
                    {step.title}
                  </h3>
                </div>

                <p
                  style={{
                    fontSize: '0.93rem',
                    lineHeight: 1.7,
                    color: 'var(--text-secondary)',
                    maxWidth: '330px',
                    marginLeft: onLeft ? 'auto' : 0
                  }}
                >
                  {step.detail}
                </p>
              </div>

              <div className="timeline-node">
                <span
                  style={{
                    width: '54px',
                    height: '54px',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: '#ffffff',
                    border: '2px solid rgba(0, 184, 169, 0.38)',
                    boxShadow: '0 10px 24px rgba(13, 43, 69, 0.09)',
                    position: 'relative',
                    zIndex: 1
                  }}
                >
                  <Icon size={21} color="#00796b" strokeWidth={1.8} />
                </span>
              </div>
            </Reveal>
          );
        })}
      </div>

      <Reveal>
        <RailMarker icon={CheckCircle2} label="Customer" tone="end" />
      </Reveal>
    </section>
  );
}
