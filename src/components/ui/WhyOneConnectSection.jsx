import React from 'react';
import { History, Filter, PhoneCall, Compass, Handshake, ArrowRight } from 'lucide-react';
import { WHY_ONECONNECT } from '../../data/siteContent';
import { Reveal } from './Reveal';

const ICONS = { History, Filter, PhoneCall, Compass, Handshake };

export function WhyOneConnectSection({ onOpenDemo }) {
  return (
    <section id="why-oneconnect" className="section-shell">
      {/* Intro: headline left, supporting paragraph right */}
      <Reveal>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(340px, 100%), 1fr))',
            gap: '44px',
            alignItems: 'end',
            paddingBottom: '46px'
          }}
        >
          <div>
            <span className="eyebrow">{WHY_ONECONNECT.eyebrow}</span>
            <h2 className="section-title" style={{ maxWidth: '560px' }}>
              {WHY_ONECONNECT.heading}
            </h2>
          </div>

          <div>
            <p className="section-lead" style={{ maxWidth: '520px', marginBottom: '22px' }}>
              {WHY_ONECONNECT.lead}
            </p>
            <button className="btn-primary" onClick={onOpenDemo}>
              <span>See it on your pipeline</span>
              <ArrowRight size={17} />
            </button>
          </div>
        </div>
      </Reveal>

      {/* Reasons as an open list - outlined numeral, icon, copy */}
      <div>
        {WHY_ONECONNECT.reasons.map((reason, idx) => {
          const Icon = ICONS[reason.icon] || Compass;
          return (
            <Reveal key={reason.title} delay={idx * 70}>
              <div className="reason-row">
                <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', alignItems: 'flex-start' }}>
                  <span className="reason-numeral">{String(idx + 1).padStart(2, '0')}</span>
                  <Icon size={20} color="#00796b" />
                </div>

                <div style={{ paddingTop: '4px' }}>
                  <h3
                    style={{
                      fontSize: 'clamp(1.1rem, 1.7vw, 1.35rem)',
                      fontWeight: 800,
                      color: 'var(--navy-primary)',
                      marginBottom: '10px'
                    }}
                  >
                    {reason.title}
                  </h3>
                  <p
                    style={{
                      fontSize: '1rem',
                      lineHeight: 1.8,
                      color: 'var(--text-secondary)',
                      maxWidth: '760px'
                    }}
                  >
                    {reason.detail}
                  </p>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
