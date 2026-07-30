import React from 'react';
import { X, CheckCircle2, Sparkles, ArrowRight } from 'lucide-react';

export function ModuleDetailModal({ moduleData, onClose, onOpenDemo }) {
  if (!moduleData) return null;

  const { title, badge, icon, description, features } = moduleData;

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      zIndex: 200,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '24px',
      background: 'rgba(13, 43, 69, 0.5)',
      backdropFilter: 'blur(16px)',
      WebkitBackdropFilter: 'blur(16px)'
    }}>
      <div
        className="glass-panel"
        style={{
          width: '100%',
          maxWidth: '620px',
          padding: '36px',
          borderRadius: '24px',
          background: 'rgba(255, 255, 255, 0.98)',
          border: `1px solid rgba(0, 184, 169, 0.4)`,
          boxShadow: '0 20px 60px rgba(13, 43, 69, 0.2)',
          position: 'relative'
        }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            background: 'rgba(13, 43, 69, 0.08)',
            border: 'none',
            color: '#0d2b45',
            borderRadius: '50%',
            width: '36px',
            height: '36px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer'
          }}
        >
          <X size={18} />
        </button>

        {/* Modal Header */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '16px' }}>
          <span style={{ fontSize: '2.4rem' }}>{icon}</span>
          <div>
            <h3 style={{ fontSize: '1.6rem', fontWeight: '800', color: '#0d2b45' }}>
              {title}
            </h3>
            {badge && (
              <span className="glass-pill" style={{ marginTop: '4px', fontSize: '0.78rem' }}>
                <Sparkles size={12} /> {badge}
              </span>
            )}
          </div>
        </div>

        {/* Description */}
        <p style={{ color: '#475569', fontSize: '1rem', lineHeight: 1.6, marginBottom: '24px' }}>
          {description}
        </p>

        {/* Features List */}
        <div style={{ marginBottom: '32px' }}>
          <h4 style={{ fontSize: '0.95rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#008f83', marginBottom: '14px' }}>
            Core Capabilities & Key Benefits
          </h4>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '10px' }}>
            {features?.map((feat, idx) => (
              <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '10px', background: 'rgba(0, 184, 169, 0.08)', padding: '10px 14px', borderRadius: '10px', border: '1px solid rgba(0, 184, 169, 0.2)' }}>
                <CheckCircle2 size={16} color="#00b8a9" style={{ flexShrink: 0 }} />
                <span style={{ fontSize: '0.92rem', color: '#0d2b45', fontWeight: '600' }}>{feat}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div style={{ display: 'flex', gap: '14px', justifyContent: 'flex-end' }}>
          <button className="btn-secondary" onClick={onClose} style={{ padding: '12px 20px', fontSize: '0.9rem' }}>
            Close
          </button>
          <button className="btn-primary" onClick={() => { onClose(); onOpenDemo(); }} style={{ padding: '12px 24px', fontSize: '0.9rem' }}>
            <span>Book Demo for {title}</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
