import React from 'react';
import { MODULES_LIST } from '../../data/modulesData';
import { CheckCircle2, Sparkles, ArrowRight } from 'lucide-react';

export function FeatureGridSection({ onSelectModule }) {
  return (
    <section id="features" style={{
      width: '100%',
      maxWidth: '1280px',
      margin: '0 auto',
      padding: '80px 24px',
      position: 'relative'
    }}>
      <div style={{ textAlign: 'center', marginBottom: '60px' }}>
        <span className="glass-pill" style={{ marginBottom: '12px' }}>
          <Sparkles size={14} /> Full Suite Features
        </span>
        <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: '800', marginBottom: '16px', color: '#0d2b45' }}>
          Everything Your Business Needs to Grow
        </h2>
        <p style={{ color: '#475569', maxWidth: '760px', margin: '0 auto', fontSize: '1.05rem', lineHeight: 1.6 }}>
          Six core interconnected modules engineered to automate campaigns, log communications, enforce follow-ups, and convert leads into lifelong customers.
        </p>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
        gap: '28px'
      }}>
        {MODULES_LIST.map((mod) => (
          <div
            key={mod.id}
            className="glass-panel"
            style={{
              padding: '32px',
              borderRadius: '24px',
              background: 'rgba(255, 255, 255, 0.95)',
              border: `1px solid rgba(0, 184, 169, 0.3)`,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                <span style={{ fontSize: '2.2rem' }}>{mod.icon}</span>
                <span className="glass-pill" style={{ fontSize: '0.75rem', borderColor: '#00b8a9', color: '#00796b' }}>
                  {mod.badge}
                </span>
              </div>

              <h3 style={{ fontSize: '1.3rem', fontWeight: '800', color: '#0d2b45', marginBottom: '10px' }}>
                {mod.title}
              </h3>

              <p style={{ color: '#475569', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '20px' }}>
                {mod.description}
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '24px' }}>
                {mod.features.map((feat, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <CheckCircle2 size={16} color="#00b8a9" style={{ flexShrink: 0 }} />
                    <span style={{ fontSize: '0.85rem', color: '#334155', fontWeight: '600' }}>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <button
              className="btn-secondary"
              onClick={() => onSelectModule(mod)}
              style={{
                width: '100%',
                padding: '12px',
                fontSize: '0.9rem',
                justifyContent: 'center'
              }}
            >
              <span>View Module Deep-Dive</span>
              <ArrowRight size={16} />
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
