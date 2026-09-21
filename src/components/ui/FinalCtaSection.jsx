import React from 'react';
import { ArrowRight, PlayCircle, Check } from 'lucide-react';
import { FINAL_CTA } from '../../data/siteContent';
import { Reveal } from './Reveal';

const ASSURANCES = ['Guided onboarding', 'Cloud-based access', 'Works on desktop and mobile'];

/** Full-width closing band - light, wide, no card edges. */
export function FinalCtaSection({ onOpenDemo, onOpenTrial }) {
  return (
    <section
      id="get-started"
      style={{
        width: '100%',
        position: 'relative',
        overflow: 'hidden',
        padding: 'clamp(70px, 8vw, 110px) 24px',
        background: 'linear-gradient(180deg, #f4f8fa 0%, #e6f6f3 45%, #ffffff 100%)',
        borderTop: '1px solid rgba(0, 184, 169, 0.18)'
      }}
    >
      <span
        className="aura"
        style={{
          width: '620px',
          height: '380px',
          top: '-140px',
          left: '50%',
          transform: 'translateX(-50%)',
          background: 'radial-gradient(circle, rgba(0,184,169,0.3), rgba(0,184,169,0))'
        }}
      />

      <Reveal style={{ position: 'relative', maxWidth: '860px', margin: '0 auto', textAlign: 'center' }}>
        <h2
          style={{
            fontSize: 'clamp(2rem, 4.4vw, 3.4rem)',
            fontWeight: 800,
            color: 'var(--navy-primary)',
            marginBottom: '22px',
            lineHeight: 1.1
          }}
        >
          One CRM. <span className="gradient-text-teal">Your Entire Sales Pipeline.</span>
        </h2>

        {FINAL_CTA.lines.map((line) => (
          <p
            key={line}
            style={{
              fontSize: 'clamp(1rem, 1.35vw, 1.13rem)',
              lineHeight: 1.8,
              color: 'var(--text-secondary)',
              maxWidth: '700px',
              margin: '0 auto 12px auto'
            }}
          >
            {line}
          </p>
        ))}

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px', justifyContent: 'center', margin: '36px 0 30px 0' }}>
          <button className="btn-primary" onClick={onOpenDemo} style={{ padding: '17px 38px', fontSize: '1.04rem' }}>
            <span>Book a Demo</span>
            <ArrowRight size={18} />
          </button>
          <button className="btn-secondary" onClick={onOpenTrial} style={{ padding: '17px 34px', fontSize: '1.04rem' }}>
            <PlayCircle size={18} color="#00b8a9" />
            <span>Start Free Trial</span>
          </button>
        </div>

        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '10px',
            justifyContent: 'center'
          }}
        >
          {ASSURANCES.map((item) => (
            <span
              key={item}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '7px',
                padding: '7px 15px',
                borderRadius: '9999px',
                background: 'rgba(255, 255, 255, 0.8)',
                border: '1px solid rgba(0, 184, 169, 0.22)',
                color: 'var(--teal-deep)',
                fontSize: '0.85rem',
                fontWeight: 600
              }}
            >
              <Check size={14} strokeWidth={3} />
              {item}
            </span>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
