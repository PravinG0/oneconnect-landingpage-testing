import React from 'react';
import { Users, ClipboardCheck, MapPin, TrendingUp, Briefcase } from 'lucide-react';
import { GROWTH_STAGE } from '../../data/siteContent';
import { Reveal } from './Reveal';
import { SectionHeading } from './SectionHeading';

const ICONS = { Users, ClipboardCheck, MapPin, TrendingUp, Briefcase };

/** Staggered persona rail - circular icons, no card chrome. */
export function GrowthStageSection() {
  return (
    <section id="who-its-for" className="section-shell">
      <SectionHeading eyebrow={GROWTH_STAGE.eyebrow} title={GROWTH_STAGE.heading} />

      <div className="persona-rail">
        {GROWTH_STAGE.audiences.map((audience, idx) => {
          const Icon = ICONS[audience.icon] || Users;
          return (
            <Reveal key={audience.title} delay={idx * 80}>
              <div style={{ textAlign: 'center', padding: '0 4px' }}>
                <span
                  style={{
                    width: '82px',
                    height: '82px',
                    margin: '0 auto 20px auto',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: 'linear-gradient(150deg, #ffffff, #eef7f6)',
                    border: '1px solid rgba(0, 184, 169, 0.28)',
                    boxShadow: '0 16px 34px rgba(0, 184, 169, 0.16)'
                  }}
                >
                  <Icon size={30} color="#00796b" strokeWidth={1.7} />
                </span>

                <h3 style={{ fontSize: '1.06rem', fontWeight: 800, color: 'var(--navy-primary)', marginBottom: '10px' }}>
                  {audience.title}
                </h3>

                <p style={{ fontSize: '0.92rem', lineHeight: 1.7, color: 'var(--text-secondary)' }}>
                  {audience.detail}
                </p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
