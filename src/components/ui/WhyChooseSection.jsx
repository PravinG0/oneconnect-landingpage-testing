import React from 'react';
import { TrendingUp, Zap, HeartHandshake, Eye, ShieldCheck, Sparkles, ArrowRight } from 'lucide-react';

const REASONS = [
  {
    title: 'Increase Lead Conversion Rates',
    icon: TrendingUp,
    color: '#00a896',
    description: 'Respond faster and engage prospects before competitors do with automated instant WhatsApp & email triggers.'
  },
  {
    title: 'Improve Sales Productivity',
    icon: Zap,
    color: '#00b8a9',
    description: 'Automate repetitive follow-ups, task assignment, and activity logging so reps focus purely on closing revenue.'
  },
  {
    title: 'Strengthen Customer Relationships',
    icon: HeartHandshake,
    color: '#10b981',
    description: 'Deliver personalized communication and structured engagement across every single stage of the customer journey.'
  },
  {
    title: 'Gain Complete Business Visibility',
    icon: Eye,
    color: '#d97706',
    description: 'Track sales performance, team productivity, customer engagement, and pipeline growth opportunities in real time.'
  },
  {
    title: 'Scale With Confidence',
    icon: ShieldCheck,
    color: '#0284c7',
    description: 'Support business expansion with a flexible, 99.9% uptime cloud CRM platform designed to grow alongside your org.'
  }
];

export function WhyChooseSection({ onOpenDemo }) {
  return (
    <section id="why-choose" style={{
      width: '100%',
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '80px 24px',
      position: 'relative'
    }}>
      <div style={{ textAlign: 'center', marginBottom: '60px' }}>
        <span className="glass-pill" style={{ marginBottom: '12px' }}>
          <Sparkles size={14} /> Proven Enterprise Impact
        </span>
        <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: '800', marginBottom: '16px', color: '#0d2b45' }}>
          Why Businesses Choose OneConnect CRM
        </h2>
        <p style={{ color: '#475569', maxWidth: '720px', margin: '0 auto', fontSize: '1.05rem', lineHeight: 1.6 }}>
          Designed specifically to eliminate revenue loss, increase lead velocity, and provide clear executive visibility.
        </p>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gap: '24px',
        marginBottom: '50px'
      }}>
        {REASONS.map((reason, idx) => {
          const IconComp = reason.icon;
          return (
            <div
              key={idx}
              className="glass-panel"
              style={{
                padding: '30px',
                borderRadius: '20px',
                background: 'rgba(255, 255, 255, 0.95)',
                border: `1px solid rgba(0, 184, 169, 0.28)`,
                display: 'flex',
                flexDirection: 'column',
                gap: '14px'
              }}
            >
              <div style={{
                width: '48px',
                height: '48px',
                borderRadius: '12px',
                background: `${reason.color}15`,
                border: `1px solid ${reason.color}`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <IconComp size={24} color={reason.color} />
              </div>

              <h3 style={{ fontSize: '1.2rem', fontWeight: '800', color: '#0d2b45' }}>
                {reason.title}
              </h3>

              <p style={{ fontSize: '0.9rem', color: '#475569', lineHeight: 1.6 }}>
                {reason.description}
              </p>
            </div>
          );
        })}
      </div>

      {/* Conversion Banner */}
      <div className="glass-panel" style={{
        padding: '40px',
        borderRadius: '24px',
        background: 'linear-gradient(135deg, rgba(0, 184, 169, 0.15) 0%, rgba(13, 43, 69, 0.92) 100%)',
        border: '1px solid #00b8a9',
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '20px'
      }}>
        <div style={{ maxWidth: '640px' }}>
          <h3 style={{ fontSize: '1.6rem', fontWeight: '800', marginBottom: '8px', color: '#ffffff' }}>
            Ready to Transform Your Sales Pipeline?
          </h3>
          <p style={{ color: '#e2e8f0', fontSize: '0.95rem' }}>
            Join 1,000+ businesses using OneConnect CRM to improve sales performance, strengthen customer relationships, and drive sustainable growth.
          </p>
        </div>

        <button className="btn-primary" onClick={onOpenDemo} style={{ padding: '14px 32px', fontSize: '1rem' }}>
          <span>Book Your Free Demo</span>
          <ArrowRight size={18} />
        </button>
      </div>
    </section>
  );
}
