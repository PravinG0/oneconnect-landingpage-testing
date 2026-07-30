import React from 'react';
import { XCircle, CheckCircle2, AlertTriangle, Database, Cpu, Users, BarChart3 } from 'lucide-react';

const CHALLENGES = [
  'Leads are not followed up on quickly.',
  'Customer information is scattered across multiple systems.',
  'Sales teams spend too much time on manual tasks.',
  'Marketing-generated leads are not properly tracked.',
  'Important follow-ups and customer interactions are missed.',
  'Business growth is limited by inefficient processes.'
];

const PILLARS = [
  {
    title: 'Centralize Customer Data',
    icon: Database,
    description: 'Access customer information, communication history, activities, and opportunities from one secure platform.'
  },
  {
    title: 'Automate Sales Processes',
    icon: Cpu,
    description: 'Reduce manual work with automated lead assignment, reminders, follow-ups, and customer engagement workflows.'
  },
  {
    title: 'Improve Team Productivity',
    icon: Users,
    description: 'Enable sales and marketing teams to collaborate efficiently with real-time visibility into customer interactions.'
  },
  {
    title: 'Make Data-Driven Decisions',
    icon: BarChart3,
    description: 'Gain actionable insights into sales performance, lead conversion, customer engagement, and pipeline growth.'
  }
];

export function PainSolutionSection() {
  return (
    <section id="solutions" style={{
      width: '100%',
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '80px 24px',
      position: 'relative'
    }}>
      {/* Section 1: Stop Losing Opportunities */}
      <div style={{ textAlign: 'center', marginBottom: '50px' }}>
        <span className="glass-pill" style={{ marginBottom: '12px' }}>
          <AlertTriangle size={14} /> Eliminating Friction
        </span>
        <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: '800', marginBottom: '16px', color: '#0d2b45' }}>
          Stop Losing Valuable Business Opportunities
        </h2>
        <p style={{ color: '#475569', maxWidth: '780px', margin: '0 auto', fontSize: '1.05rem', lineHeight: 1.6 }}>
          Businesses today face recurring challenges that hold back revenue growth. OneConnect CRM brings everything together in a single platform, helping your teams stay organized, productive, and focused on closing more deals.
        </p>
      </div>

      {/* Challenges Grid */}
      <div className="glass-panel" style={{
        padding: '36px',
        borderColor: 'rgba(239, 68, 68, 0.3)',
        background: 'rgba(254, 242, 242, 0.9)',
        marginBottom: '70px',
        boxShadow: '0 10px 30px rgba(239, 68, 68, 0.08)'
      }}>
        <h3 style={{ fontSize: '1.25rem', color: '#dc2626', fontWeight: '800', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <XCircle size={24} color="#dc2626" /> Common Industry Bottlenecks:
        </h3>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '16px'
        }}>
          {CHALLENGES.map((challenge, idx) => (
            <div key={idx} style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: '12px',
              background: '#ffffff',
              padding: '12px 16px',
              borderRadius: '12px',
              border: '1px solid #fca5a5'
            }}>
              <XCircle size={18} color="#dc2626" style={{ flexShrink: 0, marginTop: '2px' }} />
              <span style={{ fontSize: '0.92rem', color: '#991b1b', fontWeight: '600' }}>{challenge}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Section 2: Four Core Platform Pillars */}
      <div style={{ textAlign: 'center', marginBottom: '44px' }}>
        <span className="glass-pill" style={{ marginBottom: '12px' }}>
          <CheckCircle2 size={14} /> Unified Growth Platform
        </span>
        <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', fontWeight: '800', marginBottom: '14px', color: '#0d2b45' }}>
          Built for the Complete Customer Lifecycle
        </h2>
        <p style={{ color: '#475569', maxWidth: '720px', margin: '0 auto', fontSize: '0.98rem' }}>
          From first contact to long-term customer relationships, OneConnect equips your enterprise with 4 foundational pillars.
        </p>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
        gap: '24px'
      }}>
        {PILLARS.map((pillar, idx) => {
          const IconComp = pillar.icon;
          return (
            <div key={idx} className="glass-panel" style={{
              padding: '28px',
              borderRadius: '20px',
              background: 'rgba(255, 255, 255, 0.95)',
              border: '1px solid rgba(0, 184, 169, 0.28)',
              display: 'flex',
              flexDirection: 'column',
              gap: '12px'
            }}>
              <div style={{
                width: '48px',
                height: '48px',
                borderRadius: '14px',
                background: 'rgba(0, 184, 169, 0.12)',
                border: '1px solid #00b8a9',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <IconComp size={24} color="#008f83" />
              </div>
              <h4 style={{ fontSize: '1.15rem', fontWeight: '800', color: '#0d2b45' }}>
                {pillar.title}
              </h4>
              <p style={{ fontSize: '0.88rem', color: '#475569', lineHeight: 1.6 }}>
                {pillar.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
