import React from 'react';
import { ArrowRight, PlayCircle, TrendingUp, PhoneCall } from 'lucide-react';
import { HERO } from '../../data/siteContent';
import { Reveal } from './Reveal';
import { BannerVideo } from './BannerVideo';

const STAGE_TONES = {
  muted: { bar: 'linear-gradient(90deg, #cbd5e1, #e2e8f0)', width: '100%', text: '#64748b' },
  soft: { bar: 'linear-gradient(90deg, #7dd3c6, #a7e8de)', width: '74%', text: '#0f766e' },
  mid: { bar: 'linear-gradient(90deg, #34c9b8, #6fdccd)', width: '52%', text: '#0f766e' },
  strong: { bar: 'linear-gradient(90deg, #00b8a9, #0dbeaa)', width: '36%', text: '#00695f' },
  win: { bar: 'linear-gradient(90deg, #0d2b45, #00a896)', width: '22%', text: '#0d2b45' }
};

/** Compact pipeline card that floats beside the phone on wide screens. */
function PipelineFloat() {
  return (
    <div
      className="banner-float banner-float--left animate-float"
      style={{
        width: '236px',
        background: '#ffffff',
        border: '1px solid rgba(13, 43, 69, 0.08)',
        borderRadius: '18px',
        padding: '18px',
        boxShadow: '0 26px 56px rgba(13, 43, 69, 0.16)'
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
        <span
          style={{
            fontFamily: 'Outfit, sans-serif',
            fontSize: '0.68rem',
            fontWeight: 700,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: '#7c8a9a'
          }}
        >
          {HERO.pipelinePreview.label}
        </span>
        <span
          style={{
            width: '7px',
            height: '7px',
            borderRadius: '50%',
            background: '#00b8a9',
            animation: 'pulse-ring 2.4s ease-out infinite'
          }}
        />
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {HERO.pipelinePreview.stages.map((stage) => {
          const tone = STAGE_TONES[stage.tone];
          return (
            <div key={stage.name} style={{ display: 'flex', alignItems: 'center', gap: '9px' }}>
              <span style={{ width: '62px', flexShrink: 0, fontSize: '0.72rem', fontWeight: 600, color: tone.text }}>
                {stage.name}
              </span>
              <div style={{ flex: 1, height: '7px', background: '#eef2f6', borderRadius: '4px', overflow: 'hidden' }}>
                <div style={{ width: tone.width, height: '100%', background: tone.bar, borderRadius: '4px' }} />
              </div>
              <span
                style={{
                  width: '24px',
                  textAlign: 'right',
                  fontFamily: 'Outfit, sans-serif',
                  fontWeight: 700,
                  fontSize: '0.76rem',
                  color: '#0d2b45'
                }}
              >
                {stage.count}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

/** Next-action nudge that floats on the other side of the phone. */
function NextActionFloat() {
  const action = HERO.pipelinePreview.nextActions[0];

  return (
    <div
      className="banner-float banner-float--right animate-float"
      style={{
        width: '224px',
        background: '#ffffff',
        border: '1px solid rgba(0, 184, 169, 0.28)',
        borderRadius: '16px',
        padding: '15px 16px',
        boxShadow: '0 22px 48px rgba(13, 43, 69, 0.16)',
        animationDelay: '1.2s'
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '7px',
          fontSize: '0.67rem',
          fontWeight: 800,
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          color: 'var(--teal-deep)',
          marginBottom: '10px'
        }}
      >
        <PhoneCall size={12} />
        Next action
      </div>

      <div style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700, fontSize: '0.9rem', color: '#0d2b45' }}>
        {action.who}
      </div>
      <div style={{ fontSize: '0.78rem', color: '#7c8a9a', marginTop: '2px' }}>{action.what}</div>

      <div
        style={{
          marginTop: '12px',
          paddingTop: '11px',
          borderTop: '1px solid rgba(13, 43, 69, 0.07)',
          display: 'flex',
          alignItems: 'center',
          gap: '7px',
          fontSize: '0.78rem',
          fontWeight: 700,
          color: '#00695f'
        }}
      >
        <TrendingUp size={13} />
        +18 leads this week
      </div>
    </div>
  );
}

export function HeroSection({ onOpenDemo, onOpenTrial }) {
  return (
    <section
      id="hero"
      style={{
        width: '100%',
        maxWidth: '1260px',
        margin: '0 auto',
        padding: '150px 24px 72px 24px',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(min(420px, 100%), 1fr))',
        gap: '56px',
        alignItems: 'center',
        position: 'relative'
      }}
    >
      {/* Ambient glow behind the headline */}
      <span
        className="aura"
        style={{
          width: '540px',
          height: '440px',
          top: '80px',
          left: '-130px',
          background: 'radial-gradient(circle, rgba(0,184,169,0.24), rgba(0,184,169,0))'
        }}
      />

      {/* ---------- Copy ---------- */}
      <div style={{ position: 'relative' }}>
        <Reveal>
          <span className="eyebrow">{HERO.eyebrow}</span>
        </Reveal>

        <Reveal delay={70}>
          <h1
            style={{
              fontSize: 'clamp(2.5rem, 5vw, 4.1rem)',
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: '-0.035em',
              color: '#0d2b45',
              margin: '22px 0 22px 0'
            }}
          >
            {HERO.heading}{' '}
            <span className="gradient-text" style={{ display: 'inline-block' }}>
              {HERO.headingAccent}
            </span>
          </h1>
        </Reveal>

        <Reveal delay={140}>
          <p
            style={{
              fontSize: 'clamp(1.04rem, 1.4vw, 1.18rem)',
              lineHeight: 1.78,
              color: 'var(--text-secondary)',
              maxWidth: '560px',
              marginBottom: '34px'
            }}
          >
            {HERO.subheading}
          </p>
        </Reveal>

        <Reveal delay={210}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px', marginBottom: '38px' }}>
            <button className="btn-primary" onClick={onOpenDemo} style={{ padding: '16px 34px', fontSize: '1.02rem' }}>
              <span>Book a Demo</span>
              <ArrowRight size={18} />
            </button>
            <button className="btn-secondary" onClick={onOpenTrial} style={{ padding: '16px 30px', fontSize: '1.02rem' }}>
              <PlayCircle size={18} color="#00b8a9" />
              <span>Start Free Trial</span>
            </button>
          </div>
        </Reveal>

        {/* Leads. Customers. Follow-ups. Pipeline. One place. */}
        <Reveal delay={280}>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              gap: '11px',
              paddingTop: '26px',
              borderTop: '1px solid var(--hairline)'
            }}
          >
            {HERO.strip.map((item, idx) => (
              <React.Fragment key={item}>
                <span
                  style={{
                    fontFamily: 'Outfit, sans-serif',
                    fontWeight: 700,
                    fontSize: '0.94rem',
                    color: idx === HERO.strip.length - 1 ? 'var(--teal-deep)' : '#0d2b45'
                  }}
                >
                  {item}.
                </span>
                {idx < HERO.strip.length - 1 && (
                  <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: 'rgba(0,184,169,0.5)' }} />
                )}
              </React.Fragment>
            ))}
          </div>
        </Reveal>
      </div>

      {/* ---------- Brand reel ---------- */}
      <Reveal delay={180}>
        <div style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
          <span
            className="aura"
            style={{
              width: '78%',
              height: '68%',
              left: '11%',
              top: '16%',
              background: 'radial-gradient(circle, rgba(0,184,169,0.34), rgba(0,184,169,0))'
            }}
          />

          <PipelineFloat />
          <BannerVideo />
          <NextActionFloat />
        </div>
      </Reveal>
    </section>
  );
}
