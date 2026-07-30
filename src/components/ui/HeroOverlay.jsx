import React from 'react';
import { ArrowRight, Sparkles, CheckCircle2, Shield, TrendingUp, Zap, Clock } from 'lucide-react';

const CORE_CAPABILITIES = [
  'Lead Management & Tracking',
  'Sales Pipeline Management',
  'WhatsApp & Email Campaigns',
  'Call Management & Activity Tracking',
  'Automated Reminders & Follow-Ups',
  'Meta & Third-Party Lead Integrations'
];

export function HeroOverlay({ onOpenDemo, onOpenRoi }) {
  return (
    <section style={{
      width: '100%',
      minHeight: '94vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      padding: '130px 24px 70px 24px',
      position: 'relative'
    }}>
      {/* Badge */}
      <div className="glass-pill animate-float" style={{ marginBottom: '22px' }}>
        <Sparkles size={14} />
        <span>Enterprise CRM Platform for Modern Growth</span>
      </div>

      {/* Headline */}
      <h1 style={{
        fontSize: 'clamp(2.5rem, 5.5vw, 4.6rem)',
        fontWeight: '900',
        lineHeight: 1.1,
        maxWidth: '1050px',
        marginBottom: '24px',
        color: '#0d2b45',
        letterSpacing: '-0.03em'
      }}>
        Turn More Leads into Customers with <br className="desktop-only" />
        <span className="gradient-text">OneConnect CRM</span>
      </h1>

      {/* Subtitle */}
      <p style={{
        fontSize: 'clamp(1.05rem, 1.8vw, 1.28rem)',
        color: '#475569',
        maxWidth: '840px',
        lineHeight: 1.6,
        marginBottom: '36px',
        fontWeight: '400'
      }}>
        OneConnect CRM helps businesses capture, manage, nurture, and convert leads faster with intelligent automation, customer engagement tools, and powerful sales management capabilities.
      </p>

      {/* 6 Core Platform Capabilities */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
        gap: '14px',
        maxWidth: '960px',
        width: '100%',
        marginBottom: '40px',
        textAlign: 'left'
      }}>
        {CORE_CAPABILITIES.map((cap, idx) => (
          <div key={idx} className="glass-panel" style={{
            padding: '12px 18px',
            borderRadius: '14px',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            background: 'rgba(255, 255, 255, 0.95)',
            border: '1px solid rgba(0, 184, 169, 0.3)'
          }}>
            <CheckCircle2 size={18} color="#00b8a9" style={{ flexShrink: 0 }} />
            <span style={{ fontSize: '0.9rem', fontWeight: '600', color: '#0d2b45' }}>{cap}</span>
          </div>
        ))}
      </div>

      {/* Action CTAs */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', justifyContent: 'center', marginBottom: '36px' }}>
        <button className="btn-primary" onClick={onOpenDemo} style={{ padding: '16px 36px', fontSize: '1.08rem' }}>
          <span>Book a Free Demo</span>
          <ArrowRight size={18} />
        </button>

        <button className="btn-secondary" onClick={onOpenRoi} style={{ padding: '16px 30px', fontSize: '1.08rem' }}>
          <TrendingUp size={18} color="#00b8a9" />
          <span>Calculate Sales ROI</span>
        </button>
      </div>

      {/* Frictionless Trust Indicators */}
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '24px',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#64748b',
        fontSize: '0.88rem',
        fontWeight: '600'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <CheckCircle2 size={16} color="#00b8a9" />
          <span>Centralize Customer Data</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <Zap size={16} color="#00b8a9" />
          <span>Automate Sales Workflows</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <Clock size={16} color="#00b8a9" />
          <span>3× Faster Response Times</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <Shield size={16} color="#00b8a9" />
          <span>99.9% Uptime Guarantee</span>
        </div>
      </div>
    </section>
  );
}
