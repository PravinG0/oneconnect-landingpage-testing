import React from 'react';
import { ShieldCheck, Lock, Sparkles } from 'lucide-react';

export function Footer({ onOpenDemo, onOpenRoi }) {
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer style={{
      width: '100%',
      background: '#ffffff',
      borderTop: '1px solid rgba(0, 184, 169, 0.25)',
      position: 'relative',
      zIndex: 20,
      padding: '70px 24px 36px 24px'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
        gap: '40px',
        marginBottom: '40px'
      }}>
        {/* Brand Column */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
            <img
              src="/OneConnect_Horizontal.jpg"
              alt="OneConnect Logo"
              style={{ height: '32px', borderRadius: '4px', background: '#ffffff', padding: '3px 6px', boxShadow: '0 2px 8px rgba(0, 184, 169, 0.2)' }}
              onError={(e) => { e.target.style.display = 'none'; }}
            />
            <span style={{ fontFamily: 'Outfit, sans-serif', fontWeight: '800', fontSize: '1.2rem', color: '#0d2b45' }}>
              One<span style={{ color: '#00b8a9' }}>Connect</span>
            </span>
          </div>
          <p style={{ color: '#475569', fontSize: '0.88rem', lineHeight: 1.6, marginBottom: '16px' }}>
            The 3D Spatial CRM platform helping businesses capture, manage, automate, and convert leads faster.
          </p>
          <div style={{ display: 'flex', gap: '10px' }}>
            <span className="glass-pill" style={{ fontSize: '0.75rem' }}>
              <ShieldCheck size={12} color="#008f83" /> 99.9% SLA Uptime
            </span>
            <span className="glass-pill" style={{ fontSize: '0.75rem' }}>
              <Lock size={12} color="#008f83" /> SSL/TLS Encrypted
            </span>
          </div>
        </div>

        {/* Feature Modules Navigation */}
        <div>
          <h4 style={{ fontSize: '0.95rem', color: '#0d2b45', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '16px' }}>
            Platform Modules
          </h4>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.9rem', color: '#475569' }}>
            <li style={{ cursor: 'pointer' }} onClick={() => scrollToSection('features')}>🎯 Lead Management</li>
            <li style={{ cursor: 'pointer' }} onClick={() => scrollToSection('features')}>💬 WhatsApp & Email Campaigns</li>
            <li style={{ cursor: 'pointer' }} onClick={() => scrollToSection('features')}>📞 Integrated Calling</li>
            <li style={{ cursor: 'pointer' }} onClick={() => scrollToSection('features')}>⏰ Smart Reminders & Tasks</li>
            <li style={{ cursor: 'pointer' }} onClick={() => scrollToSection('features')}>🔗 Marketing Lead Integrations</li>
            <li style={{ cursor: 'pointer' }} onClick={() => scrollToSection('features')}>🛡️ Cloud CRM Security</li>
          </ul>
        </div>

        {/* Vertical Solutions */}
        <div>
          <h4 style={{ fontSize: '0.95rem', color: '#0d2b45', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '16px' }}>
            Industries Supported
          </h4>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.9rem', color: '#475569' }}>
            <li style={{ cursor: 'pointer' }} onClick={() => scrollToSection('industries')}>🏭 Manufacturing</li>
            <li style={{ cursor: 'pointer' }} onClick={() => scrollToSection('industries')}>🩺 Healthcare</li>
            <li style={{ cursor: 'pointer' }} onClick={() => scrollToSection('industries')}>🛒 Retail & E-Commerce</li>
            <li style={{ cursor: 'pointer' }} onClick={() => scrollToSection('industries')}>🚚 Logistics</li>
            <li style={{ cursor: 'pointer' }} onClick={() => scrollToSection('industries')}>🎓 Education & Real Estate</li>
          </ul>
        </div>

        {/* Growth CTAs */}
        <div>
          <h4 style={{ fontSize: '0.95rem', color: '#0d2b45', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '16px' }}>
            Get Started
          </h4>
          <p style={{ color: '#475569', fontSize: '0.85rem', marginBottom: '16px' }}>
            Ready to convert leads 3× faster? Claim your 14-day free trial now.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <button className="btn-primary" onClick={onOpenDemo} style={{ padding: '10px 18px', fontSize: '0.88rem' }}>
              <Sparkles size={14} /> Book Free Demo
            </button>
            <button className="btn-secondary" onClick={onOpenRoi} style={{ padding: '10px 18px', fontSize: '0.88rem' }}>
              Calculate CRM ROI
            </button>
          </div>
        </div>
      </div>

      <hr style={{ borderColor: 'rgba(0, 184, 169, 0.15)', margin: '20px 0' }} />

      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '12px', fontSize: '0.8rem', color: '#64748b' }}>
        <div>
          © {new Date().getFullYear()} OneConnect CRM Inc. All rights reserved. 3D Spatial Web Experience.
        </div>
        <div style={{ display: 'flex', gap: '20px' }}>
          <span>Privacy Policy</span>
          <span>Terms of Service</span>
          <span>Security & Compliance</span>
        </div>
      </div>
    </footer>
  );
}
