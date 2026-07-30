import React from 'react';
import { Factory, Stethoscope, ShoppingBag, ShoppingCart, Truck, GraduationCap, Building2, Landmark, Laptop, Briefcase, Sparkles } from 'lucide-react';

const INDUSTRIES = [
  { name: 'Manufacturing', icon: Factory, color: '#0284c7' },
  { name: 'Healthcare', icon: Stethoscope, color: '#10b981' },
  { name: 'Retail', icon: ShoppingBag, color: '#d97706' },
  { name: 'E-Commerce', icon: ShoppingCart, color: '#00b8a9' },
  { name: 'Logistics', icon: Truck, color: '#00a896' },
  { name: 'Education', icon: GraduationCap, color: '#9333ea' },
  { name: 'Real Estate', icon: Building2, color: '#e11d48' },
  { name: 'Financial Services', icon: Landmark, color: '#059669' },
  { name: 'Technology', icon: Laptop, color: '#2563eb' },
  { name: 'Professional Services', icon: Briefcase, color: '#db2777' }
];

export function IndustriesSection() {
  return (
    <section id="industries" style={{
      width: '100%',
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '80px 24px',
      position: 'relative'
    }}>
      <div style={{ textAlign: 'center', marginBottom: '50px' }}>
        <span className="glass-pill" style={{ marginBottom: '12px' }}>
          <Sparkles size={14} /> Vertical Expertise
        </span>
        <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: '800', marginBottom: '16px', color: '#0d2b45' }}>
          Industries We Support
        </h2>
        <p style={{ color: '#475569', maxWidth: '680px', margin: '0 auto', fontSize: '1.05rem', lineHeight: 1.6 }}>
          Tailored CRM workflows and multi-channel lead integrations pre-configured for diverse market verticals.
        </p>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '18px'
      }}>
        {INDUSTRIES.map((ind, idx) => {
          const IconComp = ind.icon;
          return (
            <div
              key={idx}
              className="glass-panel"
              style={{
                padding: '24px 18px',
                borderRadius: '16px',
                background: 'rgba(255, 255, 255, 0.92)',
                border: `1px solid rgba(0, 184, 169, 0.25)`,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                gap: '10px',
                boxShadow: '0 4px 16px rgba(13, 43, 69, 0.05)',
                transition: 'all 0.3s ease'
              }}
            >
              <div style={{
                width: '52px',
                height: '52px',
                borderRadius: '14px',
                background: `${ind.color}12`,
                border: `1px solid ${ind.color}`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <IconComp size={24} color={ind.color} />
              </div>
              <span style={{ fontSize: '0.98rem', fontWeight: '700', color: '#0d2b45' }}>
                {ind.name}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
