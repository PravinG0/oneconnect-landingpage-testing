import React from 'react';
import { ArrowRight, Cloud, ShieldCheck } from 'lucide-react';
import { FOOTER, MODULES } from '../../data/siteContent';

const COMPANY_LINKS = [
  { id: 'why-oneconnect', label: 'Why OneConnect' },
  { id: 'how-it-works', label: 'How It Works' },
  { id: 'who-its-for', label: 'Who It Is For' },
  { id: 'comparison', label: 'Comparison' },
  { id: 'faq', label: 'FAQ' }
];

export function Footer({ onOpenDemo, onOpenTrial }) {
  const goTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <footer
      style={{
        width: '100%',
        background: '#ffffff',
        borderTop: '1px solid rgba(13, 43, 69, 0.09)',
        position: 'relative',
        zIndex: 20,
        padding: '68px 24px 30px 24px'
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '44px',
          marginBottom: '44px'
        }}
      >
        {/* Brand */}
        <div style={{ maxWidth: '320px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
            <img
              src="/OneConnect_Horizontal.jpg"
              alt="OneConnect"
              style={{
                height: '32px',
                borderRadius: '6px',
                background: '#ffffff',
                padding: '3px 6px',
                boxShadow: '0 2px 8px rgba(0, 184, 169, 0.18)'
              }}
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            />
            <span style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 800, fontSize: '1.16rem', color: '#0d2b45' }}>
              One<span style={{ color: '#00b8a9' }}>Connect</span>
            </span>
          </div>

          <p style={{ color: 'var(--text-secondary)', fontSize: '0.93rem', lineHeight: 1.7, marginBottom: '18px' }}>
            {FOOTER.tagline}
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '9px' }}>
            <span className="glass-pill" style={{ fontSize: '0.75rem' }}>
              <Cloud size={12} color="#00796b" /> Cloud-based
            </span>
            <span className="glass-pill" style={{ fontSize: '0.75rem' }}>
              <ShieldCheck size={12} color="#00796b" /> Secure access
            </span>
          </div>
        </div>

        {/* Product */}
        <div>
          <h4
            style={{
              fontSize: '0.78rem',
              color: '#0d2b45',
              textTransform: 'uppercase',
              letterSpacing: '0.12em',
              marginBottom: '16px'
            }}
          >
            Product
          </h4>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '11px' }}>
            {MODULES.map((module) => (
              <li key={module.id}>
                <button
                  onClick={() => goTo('features')}
                  style={{
                    background: 'none',
                    border: 'none',
                    padding: 0,
                    cursor: 'pointer',
                    color: 'var(--text-secondary)',
                    fontSize: '0.9rem',
                    fontFamily: 'inherit'
                  }}
                >
                  {module.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Explore */}
        <div>
          <h4
            style={{
              fontSize: '0.78rem',
              color: '#0d2b45',
              textTransform: 'uppercase',
              letterSpacing: '0.12em',
              marginBottom: '16px'
            }}
          >
            Explore
          </h4>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '11px' }}>
            {COMPANY_LINKS.map((link) => (
              <li key={link.id}>
                <button
                  onClick={() => goTo(link.id)}
                  style={{
                    background: 'none',
                    border: 'none',
                    padding: 0,
                    cursor: 'pointer',
                    color: 'var(--text-secondary)',
                    fontSize: '0.9rem',
                    fontFamily: 'inherit'
                  }}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Get started */}
        <div>
          <h4
            style={{
              fontSize: '0.78rem',
              color: '#0d2b45',
              textTransform: 'uppercase',
              letterSpacing: '0.12em',
              marginBottom: '16px'
            }}
          >
            Get Started
          </h4>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.7, marginBottom: '16px' }}>
            See how OneConnect fits your sales process.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <button className="btn-primary" onClick={onOpenDemo} style={{ padding: '11px 18px', fontSize: '0.88rem' }}>
              Book a Demo <ArrowRight size={14} />
            </button>
            <button className="btn-secondary" onClick={onOpenTrial} style={{ padding: '11px 18px', fontSize: '0.88rem' }}>
              Start Free Trial
            </button>
          </div>
        </div>
      </div>

      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          paddingTop: '22px',
          borderTop: '1px solid rgba(13, 43, 69, 0.08)',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '12px',
          fontSize: '0.82rem',
          color: '#7c8a9a'
        }}
      >
        <span>© {new Date().getFullYear()} {FOOTER.brand}. All rights reserved.</span>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
          <span>Privacy Policy</span>
          <span>Terms of Service</span>
          <span>Security</span>
        </div>
      </div>
    </footer>
  );
}
