import React, { useEffect } from 'react';
import {
  X, Check, ArrowRight,
  Target, GitBranch, BellRing, Users, Workflow, LineChart, BarChart3, Cloud
} from 'lucide-react';

const ICONS = { Target, GitBranch, BellRing, Users, Workflow, LineChart, BarChart3, Cloud };

export function ModuleDetailModal({ moduleData, onClose, onOpenDemo }) {
  useEffect(() => {
    if (!moduleData) return;
    const onKey = (e) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [moduleData, onClose]);

  if (!moduleData) return null;

  const { label, heading, description, features, automations, kicker, icon } = moduleData;
  const Icon = ICONS[icon] || Target;

  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 200,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '24px',
        background: 'rgba(13, 43, 69, 0.45)',
        backdropFilter: 'blur(14px)',
        WebkitBackdropFilter: 'blur(14px)',
        overflowY: 'auto'
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label={heading}
        style={{
          width: '100%',
          maxWidth: '660px',
          padding: 'clamp(28px, 4vw, 40px)',
          borderRadius: '24px',
          background: '#ffffff',
          border: '1px solid rgba(0, 184, 169, 0.3)',
          boxShadow: '0 30px 80px rgba(13, 43, 69, 0.28)',
          position: 'relative',
          margin: 'auto'
        }}
      >
        <button
          onClick={onClose}
          aria-label="Close"
          style={{
            position: 'absolute',
            top: '18px',
            right: '18px',
            background: 'rgba(13, 43, 69, 0.06)',
            border: 'none',
            borderRadius: '50%',
            width: '36px',
            height: '36px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer'
          }}
        >
          <X size={18} color="#0d2b45" />
        </button>

        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px', marginBottom: '18px', paddingRight: '40px' }}>
          <span
            style={{
              width: '50px',
              height: '50px',
              flexShrink: 0,
              borderRadius: '15px',
              background: 'linear-gradient(140deg, rgba(0,184,169,0.18), rgba(13,43,69,0.08))',
              border: '1px solid rgba(0, 184, 169, 0.25)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <Icon size={23} color="#00796b" />
          </span>
          <div>
            <span
              style={{
                fontSize: '0.73rem',
                fontWeight: 700,
                letterSpacing: '0.13em',
                textTransform: 'uppercase',
                color: '#00796b'
              }}
            >
              {label}
            </span>
            <h3 style={{ fontSize: '1.42rem', fontWeight: 800, color: '#0d2b45', marginTop: '7px', lineHeight: 1.3 }}>
              {heading}
            </h3>
          </div>
        </div>

        <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: 1.75, marginBottom: '26px' }}>
          {description}
        </p>

        {/* Capabilities */}
        <h4
          style={{
            fontSize: '0.75rem',
            textTransform: 'uppercase',
            letterSpacing: '0.13em',
            color: '#00796b',
            marginBottom: '14px'
          }}
        >
          {automations ? 'What you can automate' : 'What you can do'}
        </h4>

        {automations ? (
          <div style={{ display: 'grid', gap: '12px', marginBottom: '26px' }}>
            {automations.map((auto) => (
              <div
                key={auto.title}
                style={{
                  background: 'rgba(0, 184, 169, 0.07)',
                  border: '1px solid rgba(0, 184, 169, 0.2)',
                  borderRadius: '13px',
                  padding: '14px 16px'
                }}
              >
                <div style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700, fontSize: '0.95rem', color: '#0d2b45' }}>
                  {auto.title}
                </div>
                <div style={{ fontSize: '0.88rem', color: '#546579', marginTop: '4px', lineHeight: 1.6 }}>
                  {auto.detail}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div style={{ display: 'grid', gap: '10px', marginBottom: '26px' }}>
            {features?.map((feature) => (
              <div
                key={feature}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '11px',
                  background: 'rgba(0, 184, 169, 0.07)',
                  padding: '11px 14px',
                  borderRadius: '11px',
                  border: '1px solid rgba(0, 184, 169, 0.18)'
                }}
              >
                <Check size={15} color="#00796b" strokeWidth={3} style={{ flexShrink: 0 }} />
                <span style={{ fontSize: '0.93rem', color: '#23364a', fontWeight: 600 }}>{feature}</span>
              </div>
            ))}
          </div>
        )}

        {kicker && (
          <p className="kicker-line" style={{ marginBottom: '26px' }}>
            {kicker}
          </p>
        )}

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', justifyContent: 'flex-end' }}>
          <button className="btn-secondary" onClick={onClose} style={{ padding: '12px 20px', fontSize: '0.9rem' }}>
            Close
          </button>
          <button
            className="btn-primary"
            onClick={() => {
              onClose();
              onOpenDemo();
            }}
            style={{ padding: '12px 24px', fontSize: '0.9rem' }}
          >
            <span>Book a Demo</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
