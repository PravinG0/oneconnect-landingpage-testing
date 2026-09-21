import React from 'react';
import { Check, ArrowRight } from 'lucide-react';
import { PRODUCT_OVERVIEW, MODULES } from '../../data/siteContent';
import { Reveal } from './Reveal';
import { SectionHeading } from './SectionHeading';
import { ModuleVisual } from './ModuleVisuals';

/** One alternating showcase row: copy on one side, product mock-up on the other. */
function FeatureRow({ module, index, onSelect }) {
  const flip = index % 2 === 1;

  return (
    <div className={`feature-row ${flip ? 'feature-row--flip' : ''}`}>
      {/* ---- Copy ---- */}
      <Reveal className="feature-copy">
        <div style={{ display: 'flex', alignItems: 'center', gap: '13px', marginBottom: '18px' }}>
          <span
            style={{
              fontFamily: 'Outfit, sans-serif',
              fontSize: '0.8rem',
              fontWeight: 800,
              color: 'rgba(0, 184, 169, 0.75)',
              letterSpacing: '0.04em'
            }}
          >
            {String(index + 1).padStart(2, '0')}
          </span>
          <span style={{ width: '22px', height: '1px', background: 'rgba(0, 184, 169, 0.4)' }} />
          <span
            style={{
              fontFamily: 'Outfit, sans-serif',
              fontSize: '0.74rem',
              fontWeight: 700,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: 'var(--teal-deep)'
            }}
          >
            {module.label}
          </span>
        </div>

        <h3
          style={{
            fontSize: 'clamp(1.45rem, 2.4vw, 2rem)',
            fontWeight: 800,
            color: 'var(--navy-primary)',
            marginBottom: '16px',
            maxWidth: '520px'
          }}
        >
          {module.heading}
        </h3>

        <p
          style={{
            fontSize: '1rem',
            lineHeight: 1.8,
            color: 'var(--text-secondary)',
            marginBottom: '22px',
            maxWidth: '540px'
          }}
        >
          {module.description}
        </p>

        {/* Capabilities - inline chips, no card chrome */}
        {module.automations ? (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '13px', marginBottom: '24px', maxWidth: '540px' }}>
            {module.automations.map((auto) => (
              <div key={auto.title} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                <span
                  style={{
                    width: '6px',
                    height: '6px',
                    borderRadius: '50%',
                    background: 'var(--teal-primary)',
                    marginTop: '9px',
                    flexShrink: 0
                  }}
                />
                <p style={{ fontSize: '0.95rem', lineHeight: 1.65, color: 'var(--text-secondary)' }}>
                  <strong style={{ color: 'var(--navy-primary)', fontFamily: 'Outfit, sans-serif' }}>{auto.title}</strong>
                  {' — '}
                  {auto.detail}
                </p>
              </div>
            ))}
          </div>
        ) : (
          <ul
            style={{
              listStyle: 'none',
              display: 'flex',
              flexWrap: 'wrap',
              gap: '10px',
              marginBottom: '24px',
              maxWidth: '560px'
            }}
          >
            {module.features.map((feature) => (
              <li
                key={feature}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '8px 14px 8px 10px',
                  borderRadius: '9999px',
                  background: 'rgba(0, 184, 169, 0.07)',
                  border: '1px solid rgba(0, 184, 169, 0.18)'
                }}
              >
                <Check size={13} color="#00796b" strokeWidth={3} style={{ flexShrink: 0 }} />
                <span style={{ fontSize: '0.86rem', fontWeight: 600, color: '#2b3e52' }}>{feature}</span>
              </li>
            ))}
          </ul>
        )}

        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '18px' }}>
          <p className="kicker-line" style={{ fontSize: '1rem' }}>
            {module.kicker}
          </p>
          <button
            onClick={() => onSelect(module)}
            style={{
              background: 'none',
              border: 'none',
              padding: 0,
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              fontFamily: 'Outfit, sans-serif',
              fontWeight: 700,
              fontSize: '0.9rem',
              color: 'var(--navy-primary)'
            }}
          >
            Details <ArrowRight size={15} color="#00b8a9" />
          </button>
        </div>
      </Reveal>

      {/* ---- Visual ---- */}
      <Reveal delay={140}>
        <ModuleVisual id={module.id} />
      </Reveal>
    </div>
  );
}

export function ProductOverviewSection({ onSelectModule }) {
  return (
    <section id="features" className="section-shell section-shell--wide">
      <SectionHeading
        eyebrow={PRODUCT_OVERVIEW.eyebrow}
        title={PRODUCT_OVERVIEW.heading}
        lead={PRODUCT_OVERVIEW.lead}
      />

      <div>
        {MODULES.map((module, idx) => (
          <FeatureRow key={module.id} module={module} index={idx} onSelect={onSelectModule} />
        ))}
      </div>
    </section>
  );
}
