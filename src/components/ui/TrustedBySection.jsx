import React from 'react';
import { TRUSTED_BY } from '../../data/siteContent';
import { Reveal } from './Reveal';

/**
 * Continuous logo rail. The copy deck marks this as [Customer Logos], so each
 * slot renders as a neutral wordmark placeholder - swap in <img> tags when the
 * real logos are approved.
 */
const SLOT_LABELS = ['LOGO', 'LOGO', 'LOGO', 'LOGO', 'LOGO', 'LOGO'];

function LogoSlot({ index }) {
  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '10px',
        opacity: 0.55,
        flexShrink: 0
      }}
    >
      <span
        style={{
          width: '26px',
          height: '26px',
          borderRadius: '8px',
          background: 'linear-gradient(140deg, rgba(13,43,69,0.18), rgba(0,184,169,0.22))'
        }}
      />
      <span
        style={{
          fontFamily: 'Outfit, sans-serif',
          fontWeight: 800,
          fontSize: '1.05rem',
          letterSpacing: '0.16em',
          color: '#8595a6'
        }}
      >
        {SLOT_LABELS[index % SLOT_LABELS.length]}
      </span>
    </span>
  );
}

export function TrustedBySection() {
  // Duplicated once so the -50% marquee translation loops seamlessly.
  const track = Array.from({ length: TRUSTED_BY.logoSlots * 2 });

  return (
    <section id="trusted" className="section-shell" style={{ paddingTop: '30px', paddingBottom: '46px' }}>
      <Reveal>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '26px',
            flexWrap: 'wrap',
            justifyContent: 'center',
            marginBottom: '26px'
          }}
        >
          <span style={{ height: '1px', flex: 1, minWidth: '40px', background: 'var(--hairline)' }} />
          <p
            style={{
              fontFamily: 'Outfit, sans-serif',
              fontSize: 'clamp(0.95rem, 1.5vw, 1.15rem)',
              fontWeight: 600,
              color: 'var(--text-muted)',
              textAlign: 'center'
            }}
          >
            {TRUSTED_BY.heading}
          </p>
          <span style={{ height: '1px', flex: 1, minWidth: '40px', background: 'var(--hairline)' }} />
        </div>
      </Reveal>

      <Reveal delay={100}>
        <div className="marquee-mask">
          <div className="marquee-track">
            {track.map((_, idx) => (
              <LogoSlot key={idx} index={idx} />
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
