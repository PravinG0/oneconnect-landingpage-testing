import React from 'react';
import { Search, UserPlus, Cpu, BarChart3, CheckSquare, Repeat } from 'lucide-react';

const STEPS = [
  { id: 'waypoint-1', label: '1. Discover', icon: Search, subtitle: 'Find & Ingest Leads' },
  { id: 'waypoint-2', label: '2. Capture Leads', icon: UserPlus, subtitle: 'Multi-Channel Ingestion' },
  { id: 'waypoint-3', label: '3. Automate', icon: Cpu, subtitle: 'WhatsApp & Email Drip' },
  { id: 'waypoint-4', label: '4. Track', icon: BarChart3, subtitle: 'Calls & Smart Tasks' },
  { id: 'waypoint-5', label: '5. Convert', icon: CheckSquare, subtitle: '98% Conversion Rate' },
  { id: 'waypoint-6', label: '6. Retain', icon: Repeat, subtitle: 'Long-Term Growth' }
];

export function JourneyWaypoints({ activeWaypoint, onSelectWaypoint }) {
  return (
    <section style={{
      width: '100%',
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '40px 24px 80px 24px',
      position: 'relative',
      zIndex: 20
    }}>
      <div style={{ textAlign: 'center', marginBottom: '36px' }}>
        <span className="glass-pill" style={{ marginBottom: '10px' }}>
          Interactive Guided Journey
        </span>
        <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: '800' }}>
          The 6-Step Antigravity Conversion Path
        </h2>
        <p style={{ color: '#94a3b8', fontSize: '0.95rem', marginTop: '6px' }}>
          Click any waypoint to drift through 3D spatial zones and explore each stage of the OneConnect journey.
        </p>
      </div>

      {/* Stepper Buttons Bar */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
        gap: '12px',
        padding: '14px',
        borderRadius: '20px',
        background: 'rgba(8, 21, 38, 0.85)',
        backdropFilter: 'blur(16px)',
        border: '1px solid rgba(0, 184, 169, 0.3)'
      }}>
        {STEPS.map((step) => {
          const IconComp = step.icon;
          const isActive = activeWaypoint === step.id;

          return (
            <button
              key={step.id}
              onClick={() => onSelectWaypoint(step.id)}
              style={{
                background: isActive ? 'linear-gradient(135deg, rgba(0, 184, 169, 0.3) 0%, rgba(0, 242, 254, 0.2) 100%)' : 'rgba(13, 43, 69, 0.3)',
                border: `1px solid ${isActive ? '#00f2fe' : 'rgba(0, 184, 169, 0.15)'}`,
                borderRadius: '14px',
                padding: '12px 14px',
                textAlign: 'left',
                cursor: 'pointer',
                transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
                display: 'flex',
                flexDirection: 'column',
                gap: '4px'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: isActive ? '#00f2fe' : '#ffffff', fontWeight: '700', fontSize: '0.85rem' }}>
                <IconComp size={16} color={isActive ? '#00f2fe' : '#00b8a9'} />
                <span>{step.label}</span>
              </div>
              <span style={{ fontSize: '0.72rem', color: '#94a3b8' }}>{step.subtitle}</span>
            </button>
          );
        })}
      </div>
    </section>
  );
}
