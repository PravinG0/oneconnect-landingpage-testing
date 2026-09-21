import React from 'react';
import { PhoneCall, Flame, FileSignature, Sparkles } from 'lucide-react';
import { POSITIONING } from '../../data/siteContent';
import { Reveal } from './Reveal';

const ACTION_ICONS = [PhoneCall, Flame, FileSignature];

/**
 * Dark band that demonstrates the claim instead of only stating it: the
 * statement sits on the left, a ranked "next actions" queue on the right.
 */
export function PositioningSection() {
  return (
    <section
      id="positioning"
      style={{
        width: '100%',
        position: 'relative',
        overflow: 'hidden',
        background: 'linear-gradient(120deg, #0b2439 0%, #08192d 48%, #0c2b3f 100%)',
        padding: 'clamp(68px, 8vw, 106px) 24px'
      }}
    >
      {/* Ambient glow + dot texture */}
      <span
        className="aura"
        style={{
          width: '620px',
          height: '520px',
          top: '-200px',
          right: '-120px',
          background: 'radial-gradient(circle, rgba(0,184,169,0.32), rgba(0,184,169,0))'
        }}
      />
      <span
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'radial-gradient(rgba(255,255,255,0.09) 1px, transparent 1px)',
          backgroundSize: '26px 26px',
          maskImage: 'linear-gradient(160deg, #000 5%, transparent 60%)',
          WebkitMaskImage: 'linear-gradient(160deg, #000 5%, transparent 60%)',
          pointerEvents: 'none'
        }}
      />

      <div
        style={{
          position: 'relative',
          maxWidth: '1160px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(400px, 100%), 1fr))',
          gap: '58px',
          alignItems: 'center'
        }}
      >
        {/* ---- Statement ---- */}
        <Reveal>
          <span
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              fontFamily: 'Outfit, sans-serif',
              fontSize: '0.74rem',
              fontWeight: 700,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: '#5fd8c8'
            }}
          >
            <span style={{ width: '26px', height: '2px', background: '#0dbeaa', borderRadius: '2px' }} />
            {POSITIONING.eyebrow}
          </span>

          <h2
            style={{
              fontSize: 'clamp(1.9rem, 3.6vw, 2.9rem)',
              fontWeight: 800,
              color: '#ffffff',
              margin: '20px 0 22px 0',
              lineHeight: 1.12,
              maxWidth: '520px'
            }}
          >
            {POSITIONING.heading}
          </h2>

          {POSITIONING.lines.map((line) => (
            <p
              key={line}
              style={{
                fontSize: '1.03rem',
                lineHeight: 1.8,
                color: 'rgba(214, 231, 238, 0.78)',
                maxWidth: '480px',
                marginBottom: '10px'
              }}
            >
              {line}
            </p>
          ))}

          <p
            style={{
              marginTop: '26px',
              display: 'inline-block',
              fontFamily: 'Outfit, sans-serif',
              fontWeight: 800,
              fontSize: 'clamp(1.08rem, 1.8vw, 1.38rem)',
              color: '#0dbeaa',
              paddingBottom: '9px',
              borderBottom: '2px solid rgba(13, 190, 170, 0.35)'
            }}
          >
            {POSITIONING.kicker}
          </p>
        </Reveal>

        {/* ---- Ranked action queue ---- */}
        <Reveal delay={140}>
          <div
            style={{
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(125, 211, 198, 0.24)',
              borderRadius: '22px',
              padding: '26px',
              backdropFilter: 'blur(14px)',
              WebkitBackdropFilter: 'blur(14px)',
              boxShadow: '0 30px 70px rgba(0, 0, 0, 0.32)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '9px', marginBottom: '20px' }}>
              <Sparkles size={15} color="#0dbeaa" />
              <span
                style={{
                  fontFamily: 'Outfit, sans-serif',
                  fontSize: '0.76rem',
                  fontWeight: 700,
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  color: '#7fe8dc'
                }}
              >
                {POSITIONING.actionsLabel}
              </span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {POSITIONING.actions.map((action, idx) => {
                const Icon = ACTION_ICONS[idx % ACTION_ICONS.length];
                return (
                  <div
                    key={action.title}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '14px',
                      padding: '15px 16px',
                      borderRadius: '14px',
                      background: idx === 0 ? 'rgba(0, 184, 169, 0.16)' : 'rgba(255, 255, 255, 0.045)',
                      border: `1px solid ${idx === 0 ? 'rgba(13, 190, 170, 0.45)' : 'rgba(255, 255, 255, 0.08)'}`
                    }}
                  >
                    <span
                      style={{
                        width: '30px',
                        height: '30px',
                        flexShrink: 0,
                        borderRadius: '9px',
                        background: idx === 0 ? '#0dbeaa' : 'rgba(255, 255, 255, 0.09)',
                        color: idx === 0 ? '#08192d' : '#9fc0cc',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontFamily: 'Outfit, sans-serif',
                        fontWeight: 800,
                        fontSize: '0.85rem'
                      }}
                    >
                      {action.rank}
                    </span>

                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div
                        style={{
                          fontFamily: 'Outfit, sans-serif',
                          fontSize: '0.98rem',
                          fontWeight: 700,
                          color: '#ffffff',
                          marginBottom: '3px'
                        }}
                      >
                        {action.title}
                      </div>
                      <div style={{ fontSize: '0.83rem', color: 'rgba(197, 219, 228, 0.7)' }}>{action.reason}</div>
                    </div>

                    <Icon size={17} color={idx === 0 ? '#0dbeaa' : 'rgba(159, 192, 204, 0.75)'} style={{ flexShrink: 0 }} />
                  </div>
                );
              })}
            </div>

            <p
              style={{
                marginTop: '18px',
                paddingTop: '15px',
                borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                fontSize: '0.82rem',
                lineHeight: 1.6,
                color: 'rgba(180, 205, 215, 0.66)'
              }}
            >
              {POSITIONING.actionsFootnote}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
