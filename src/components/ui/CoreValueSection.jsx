import React from 'react';
import {
  Zap, Clock, LayoutGrid, Trophy, FileSpreadsheet, Mail, StickyNote, MessageSquare, ArrowRight
} from 'lucide-react';
import { CORE_VALUE } from '../../data/siteContent';
import { Reveal } from './Reveal';

const PILLAR_ICONS = { Zap, Clock, LayoutGrid, Trophy };

const SCATTERED = [
  { label: 'Spreadsheets', icon: FileSpreadsheet, tilt: -6, offset: 0 },
  { label: 'Inbox threads', icon: Mail, tilt: 4, offset: 22 },
  { label: 'Sticky notes', icon: StickyNote, tilt: -3, offset: 8 },
  { label: 'Chat messages', icon: MessageSquare, tilt: 6, offset: 30 }
];

const CONNECTED = ['Every lead', 'Every conversation', 'Every next step', 'Every opportunity'];

/** Scattered tools on the left converging into one connected record on the right. */
function ConvergenceVisual() {
  return (
    <div style={{ position: 'relative', display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) 46px minmax(0, 1fr)', gap: '0', alignItems: 'center' }}>
      <div
        className="aura"
        style={{
          width: '55%',
          height: '70%',
          right: '-6%',
          top: '15%',
          background: 'radial-gradient(circle, rgba(0,184,169,0.3), rgba(0,184,169,0))'
        }}
      />

      {/* Scattered */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', position: 'relative' }}>
        {SCATTERED.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.label}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '9px',
                alignSelf: 'flex-start',
                marginLeft: `${item.offset}px`,
                transform: `rotate(${item.tilt}deg)`,
                background: '#ffffff',
                border: '1px dashed rgba(13, 43, 69, 0.2)',
                borderRadius: '10px',
                padding: '9px 14px',
                boxShadow: '0 6px 16px rgba(13, 43, 69, 0.06)'
              }}
            >
              <Icon size={15} color="#96a3b2" />
              <span style={{ fontSize: '0.82rem', fontWeight: 600, color: '#7c8a9a', whiteSpace: 'nowrap' }}>
                {item.label}
              </span>
            </div>
          );
        })}
      </div>

      {/* Converging arrows */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '5px', position: 'relative', zIndex: 1 }}>
        {[0, 1, 2].map((i) => (
          <ArrowRight key={i} size={14} color="rgba(0, 184, 169, 0.65)" />
        ))}
      </div>

      {/* Connected */}
      <div
        style={{
          position: 'relative',
          background: '#ffffff',
          border: '1px solid rgba(0, 184, 169, 0.32)',
          borderRadius: '18px',
          padding: '20px 18px',
          boxShadow: '0 22px 50px rgba(0, 184, 169, 0.18)'
        }}
      >
        <div
          style={{
            fontSize: '0.7rem',
            fontWeight: 800,
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            color: 'var(--teal-deep)',
            marginBottom: '14px'
          }}
        >
          One place
        </div>

        {CONNECTED.map((line, idx) => (
          <div
            key={line}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              padding: '9px 0',
              borderTop: idx === 0 ? 'none' : '1px solid rgba(13, 43, 69, 0.06)'
            }}
          >
            <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#00b8a9', flexShrink: 0 }} />
            <span style={{ fontSize: '0.88rem', fontWeight: 600, color: 'var(--navy-primary)' }}>{line}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function CoreValueSection() {
  return (
    <section id="core-value" className="section-shell">
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(400px, 100%), 1fr))',
          gap: '64px',
          alignItems: 'center',
          marginBottom: '74px'
        }}
      >
        {/* Copy */}
        <Reveal>
          <span className="eyebrow">{CORE_VALUE.eyebrow}</span>

          <h2 className="section-title" style={{ maxWidth: '520px' }}>
            {CORE_VALUE.heading}
          </h2>

          <p
            style={{
              fontSize: '1.02rem',
              lineHeight: 1.8,
              color: 'var(--text-muted)',
              maxWidth: '520px',
              marginBottom: '22px'
            }}
          >
            {CORE_VALUE.problem}
          </p>

          <p
            style={{
              fontSize: '1.05rem',
              lineHeight: 1.8,
              color: 'var(--navy-primary)',
              maxWidth: '520px',
              paddingLeft: '20px',
              borderLeft: '3px solid var(--teal-primary)',
              fontWeight: 500
            }}
          >
            {CORE_VALUE.solution}
          </p>
        </Reveal>

        {/* Visual */}
        <Reveal delay={140}>
          <ConvergenceVisual />
        </Reveal>
      </div>

      {/* Capture faster -> Close with confidence, as a connected progression */}
      <Reveal delay={120}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(190px, 1fr))',
            gap: '10px',
            position: 'relative'
          }}
        >
          {CORE_VALUE.pillars.map((pillar, idx) => {
            const Icon = PILLAR_ICONS[pillar.icon];
            const isLast = idx === CORE_VALUE.pillars.length - 1;

            return (
              <div key={pillar.label} style={{ position: 'relative', textAlign: 'center', padding: '0 8px' }}>
                {/* connector */}
                {!isLast && (
                  <span
                    className="desktop-only"
                    style={{
                      position: 'absolute',
                      top: '25px',
                      left: 'calc(50% + 30px)',
                      right: 'calc(-50% + 30px)',
                      height: '2px',
                      background: 'linear-gradient(90deg, rgba(0,184,169,0.5), rgba(0,184,169,0.15))'
                    }}
                  />
                )}

                <span
                  style={{
                    width: '50px',
                    height: '50px',
                    margin: '0 auto 14px auto',
                    borderRadius: '50%',
                    background: '#ffffff',
                    border: '2px solid rgba(0, 184, 169, 0.38)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 8px 20px rgba(0, 184, 169, 0.16)',
                    position: 'relative',
                    zIndex: 1
                  }}
                >
                  <Icon size={21} color="#00796b" />
                </span>

                <span
                  style={{
                    fontFamily: 'Outfit, sans-serif',
                    fontWeight: 700,
                    fontSize: '1rem',
                    color: 'var(--navy-primary)'
                  }}
                >
                  {pillar.label}
                </span>
              </div>
            );
          })}
        </div>
      </Reveal>
    </section>
  );
}
