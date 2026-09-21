import React from 'react';
import {
  Phone, Mail, MessageSquare, Clock, Bell, Zap, ArrowRight, Monitor, Smartphone, Check
} from 'lucide-react';

/* ------------------------------------------------------------------ *
 * Small product mock-ups shown beside each module's copy.
 * They are illustrative UI, not live data - kept light and schematic.
 * ------------------------------------------------------------------ */

const NAVY = '#0d2b45';
const TEAL = '#00b8a9';
const DEEP_TEAL = '#00796b';
const MUTED = '#7c8a9a';

/** Browser-style frame with a soft teal aura behind it. */
function MockFrame({ children, title, tilt = 0 }) {
  return (
    <div style={{ position: 'relative' }}>
      <div
        className="aura"
        style={{
          width: '62%',
          height: '58%',
          left: '18%',
          top: '16%',
          background: 'radial-gradient(circle, rgba(0,184,169,0.28), rgba(0,184,169,0))'
        }}
      />

      <div
        style={{
          position: 'relative',
          background: '#ffffff',
          borderRadius: '18px',
          border: '1px solid rgba(13, 43, 69, 0.09)',
          boxShadow: '0 26px 60px rgba(13, 43, 69, 0.14)',
          overflow: 'hidden',
          transform: `rotate(${tilt}deg)`
        }}
      >
        {/* Window chrome */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '7px',
            padding: '11px 16px',
            borderBottom: '1px solid rgba(13, 43, 69, 0.07)',
            background: 'linear-gradient(180deg, #fbfdfe, #f4f8fa)'
          }}
        >
          <span style={{ width: '9px', height: '9px', borderRadius: '50%', background: '#e2e8f0' }} />
          <span style={{ width: '9px', height: '9px', borderRadius: '50%', background: '#e2e8f0' }} />
          <span style={{ width: '9px', height: '9px', borderRadius: '50%', background: '#e2e8f0' }} />
          <span
            style={{
              marginLeft: '10px',
              fontSize: '0.72rem',
              fontWeight: 700,
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              color: MUTED
            }}
          >
            {title}
          </span>
        </div>

        <div style={{ padding: '18px' }}>{children}</div>
      </div>
    </div>
  );
}

function Avatar({ label, tone = 'teal' }) {
  const palette = tone === 'teal'
    ? { bg: 'rgba(0, 184, 169, 0.16)', fg: DEEP_TEAL }
    : { bg: 'rgba(13, 43, 69, 0.09)', fg: NAVY };

  return (
    <span
      style={{
        width: '28px',
        height: '28px',
        flexShrink: 0,
        borderRadius: '50%',
        background: palette.bg,
        color: palette.fg,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '0.68rem',
        fontWeight: 800,
        fontFamily: 'Outfit, sans-serif'
      }}
    >
      {label}
    </span>
  );
}

function Chip({ children, tone = 'teal' }) {
  const palette = {
    teal: { bg: 'rgba(0, 184, 169, 0.13)', fg: DEEP_TEAL },
    navy: { bg: 'rgba(13, 43, 69, 0.08)', fg: NAVY },
    warm: { bg: 'rgba(217, 119, 87, 0.13)', fg: '#b45c3d' },
    grey: { bg: '#f1f5f8', fg: MUTED }
  }[tone];

  return (
    <span
      style={{
        padding: '3px 9px',
        borderRadius: '7px',
        background: palette.bg,
        color: palette.fg,
        fontSize: '0.69rem',
        fontWeight: 700,
        whiteSpace: 'nowrap'
      }}
    >
      {children}
    </span>
  );
}

function Row({ children, last = false }) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '11px',
        padding: '11px 2px',
        borderBottom: last ? 'none' : '1px solid rgba(13, 43, 69, 0.06)'
      }}
    >
      {children}
    </div>
  );
}

/* ---------------------------- 1. Leads ---------------------------- */
function LeadListVisual() {
  const leads = [
    { initials: 'NL', name: 'Northline Logistics', owner: 'Asha', status: 'Qualified', tone: 'teal' },
    { initials: 'MH', name: 'Meridian Health', owner: 'Ravi', status: 'Contacted', tone: 'navy' },
    { initials: 'VM', name: 'Vertex Manufacturing', owner: 'Divya', status: 'New', tone: 'grey' },
    { initials: 'CP', name: 'Coastal Packaging', owner: 'Asha', status: 'Qualified', tone: 'teal' }
  ];

  return (
    <MockFrame title="Leads">
      {leads.map((lead, idx) => (
        <Row key={lead.name} last={idx === leads.length - 1}>
          <Avatar label={lead.initials} tone={idx % 2 === 0 ? 'teal' : 'navy'} />
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ fontSize: '0.86rem', fontWeight: 700, color: NAVY, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
              {lead.name}
            </div>
            <div style={{ fontSize: '0.75rem', color: MUTED }}>Owner · {lead.owner}</div>
          </div>
          <Chip tone={lead.tone}>{lead.status}</Chip>
        </Row>
      ))}
    </MockFrame>
  );
}

/* --------------------------- 2. Pipeline -------------------------- */
function PipelineVisual() {
  const columns = [
    { name: 'Discover', deals: 2, tone: '#cbd5e1' },
    { name: 'Qualified', deals: 3, tone: '#7dd3c6' },
    { name: 'Proposal', deals: 2, tone: '#34c9b8' },
    { name: 'Closed', deals: 1, tone: '#00a896' }
  ];

  return (
    <MockFrame title="Pipeline">
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '10px' }}>
        {columns.map((col) => (
          <div key={col.name}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '9px' }}>
              <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: col.tone }} />
              <span style={{ fontSize: '0.7rem', fontWeight: 700, color: NAVY }}>{col.name}</span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '7px' }}>
              {Array.from({ length: col.deals }).map((_, i) => (
                <div
                  key={i}
                  style={{
                    background: '#f7fafb',
                    border: '1px solid rgba(13, 43, 69, 0.07)',
                    borderLeft: `3px solid ${col.tone}`,
                    borderRadius: '8px',
                    padding: '9px 8px'
                  }}
                >
                  <div style={{ height: '5px', width: '78%', borderRadius: '3px', background: 'rgba(13,43,69,0.13)' }} />
                  <div style={{ height: '5px', width: '48%', borderRadius: '3px', background: 'rgba(13,43,69,0.07)', marginTop: '6px' }} />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div
        style={{
          marginTop: '16px',
          paddingTop: '12px',
          borderTop: '1px solid rgba(13, 43, 69, 0.06)',
          display: 'flex',
          justifyContent: 'space-between',
          fontSize: '0.72rem',
          color: MUTED,
          fontWeight: 600
        }}
      >
        <span>8 open opportunities</span>
        <span style={{ color: DEEP_TEAL }}>2 need attention</span>
      </div>
    </MockFrame>
  );
}

/* -------------------------- 3. Follow-ups ------------------------- */
function FollowUpVisual() {
  const items = [
    { time: '09:30', text: 'Call Northline Logistics', icon: Phone, due: true },
    { time: '11:00', text: 'Send proposal · Meridian', icon: Mail, due: false },
    { time: '14:15', text: 'WhatsApp follow-up · Vertex', icon: MessageSquare, due: false },
    { time: '16:00', text: 'Check in · Coastal Packaging', icon: Clock, due: false }
  ];

  return (
    <MockFrame title="Today">
      {items.map((item, idx) => {
        const Icon = item.icon;
        return (
          <div
            key={item.text}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              padding: '11px 12px',
              marginBottom: idx === items.length - 1 ? 0 : '8px',
              borderRadius: '11px',
              background: item.due ? 'rgba(0, 184, 169, 0.09)' : '#f9fbfc',
              border: `1px solid ${item.due ? 'rgba(0, 184, 169, 0.28)' : 'rgba(13, 43, 69, 0.05)'}`
            }}
          >
            <span style={{ fontSize: '0.74rem', fontWeight: 700, color: item.due ? DEEP_TEAL : MUTED, width: '40px' }}>
              {item.time}
            </span>
            <Icon size={15} color={item.due ? TEAL : MUTED} style={{ flexShrink: 0 }} />
            <span style={{ fontSize: '0.83rem', fontWeight: 600, color: NAVY, flex: 1, minWidth: 0 }}>{item.text}</span>
            {item.due && <Bell size={14} color={TEAL} />}
          </div>
        );
      })}
    </MockFrame>
  );
}

/* ------------------------- 4. Customer record --------------------- */
function CustomerRecordVisual() {
  const timeline = [
    { icon: Phone, text: 'Call · 6 min · outcome logged', when: 'Today' },
    { icon: Mail, text: 'Quote v2 emailed', when: 'Mon' },
    { icon: MessageSquare, text: 'WhatsApp: pricing question', when: 'Last week' }
  ];

  return (
    <MockFrame title="Customer">
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', paddingBottom: '14px', borderBottom: '1px solid rgba(13,43,69,0.07)' }}>
        <span
          style={{
            width: '42px',
            height: '42px',
            borderRadius: '13px',
            background: 'linear-gradient(140deg, rgba(0,184,169,0.2), rgba(13,43,69,0.08))',
            color: DEEP_TEAL,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontFamily: 'Outfit, sans-serif',
            fontWeight: 800,
            fontSize: '0.9rem'
          }}
        >
          NL
        </span>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ fontSize: '0.94rem', fontWeight: 800, color: NAVY }}>Northline Logistics</div>
          <div style={{ fontSize: '0.75rem', color: MUTED }}>Customer since 2023 · 3 open items</div>
        </div>
        <Chip>Active</Chip>
      </div>

      <div style={{ display: 'flex', gap: '16px', padding: '12px 0', borderBottom: '1px solid rgba(13,43,69,0.07)' }}>
        {['Activity', 'Opportunities', 'Notes'].map((tab, idx) => (
          <span
            key={tab}
            style={{
              fontSize: '0.78rem',
              fontWeight: 700,
              color: idx === 0 ? DEEP_TEAL : MUTED,
              borderBottom: idx === 0 ? `2px solid ${TEAL}` : '2px solid transparent',
              paddingBottom: '9px',
              marginBottom: '-13px'
            }}
          >
            {tab}
          </span>
        ))}
      </div>

      <div style={{ paddingTop: '14px' }}>
        {timeline.map((entry, idx) => {
          const Icon = entry.icon;
          return (
            <div key={entry.text} style={{ display: 'flex', gap: '12px', paddingBottom: idx === timeline.length - 1 ? 0 : '14px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <span
                  style={{
                    width: '26px',
                    height: '26px',
                    borderRadius: '50%',
                    background: 'rgba(0, 184, 169, 0.12)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}
                >
                  <Icon size={12} color={DEEP_TEAL} />
                </span>
                {idx < timeline.length - 1 && <span style={{ width: '1px', flex: 1, background: 'rgba(13,43,69,0.1)', marginTop: '4px' }} />}
              </div>
              <div style={{ paddingTop: '3px' }}>
                <div style={{ fontSize: '0.82rem', fontWeight: 600, color: NAVY }}>{entry.text}</div>
                <div style={{ fontSize: '0.72rem', color: MUTED }}>{entry.when}</div>
              </div>
            </div>
          );
        })}
      </div>
    </MockFrame>
  );
}

/* --------------------------- 5. Automation ------------------------ */
function AutomationVisual() {
  const actions = ['Assign owner', 'Schedule follow-up', 'Notify manager'];

  return (
    <MockFrame title="Workflow">
      <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
        {/* Trigger */}
        <div
          style={{
            flex: '0 0 auto',
            width: '112px',
            borderRadius: '13px',
            padding: '14px 12px',
            textAlign: 'center',
            background: 'linear-gradient(150deg, rgba(0,184,169,0.16), rgba(0,184,169,0.05))',
            border: '1px solid rgba(0, 184, 169, 0.32)'
          }}
        >
          <Zap size={17} color={DEEP_TEAL} />
          <div style={{ fontSize: '0.7rem', fontWeight: 800, color: DEEP_TEAL, marginTop: '7px', letterSpacing: '0.06em' }}>
            TRIGGER
          </div>
          <div style={{ fontSize: '0.78rem', fontWeight: 600, color: NAVY, marginTop: '3px' }}>New lead</div>
        </div>

        {/* Connector */}
        <div style={{ flex: '0 0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2px' }}>
          {[0, 1, 2].map((i) => (
            <span key={i} style={{ width: '5px', height: '5px', borderRadius: '50%', background: 'rgba(0,184,169,0.5)' }} />
          ))}
        </div>

        {/* Actions */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '9px', minWidth: 0 }}>
          {actions.map((action) => (
            <div
              key={action}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '9px',
                background: '#f8fbfc',
                border: '1px solid rgba(13, 43, 69, 0.07)',
                borderRadius: '10px',
                padding: '10px 12px'
              }}
            >
              <ArrowRight size={13} color={TEAL} style={{ flexShrink: 0 }} />
              <span style={{ fontSize: '0.81rem', fontWeight: 600, color: NAVY, flex: 1, minWidth: 0 }}>{action}</span>
              <Check size={13} color={DEEP_TEAL} strokeWidth={3} />
            </div>
          ))}
        </div>
      </div>

      <div
        style={{
          marginTop: '15px',
          paddingTop: '12px',
          borderTop: '1px solid rgba(13,43,69,0.06)',
          fontSize: '0.73rem',
          fontWeight: 600,
          color: DEEP_TEAL
        }}
      >
        Runs automatically · no manual admin
      </div>
    </MockFrame>
  );
}

/* ------------------------ 6. Manager overview --------------------- */
function ManagerVisual() {
  const bars = [46, 62, 38, 74, 55, 88, 70];
  const kpis = [
    { label: 'New leads', value: '128' },
    { label: 'In progress', value: '46' },
    { label: 'Need attention', value: '07' }
  ];

  return (
    <MockFrame title="Team overview">
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px', marginBottom: '18px' }}>
        {kpis.map((kpi, idx) => (
          <div
            key={kpi.label}
            style={{
              padding: '12px',
              borderRadius: '11px',
              background: idx === 2 ? 'rgba(0, 184, 169, 0.09)' : '#f8fafb',
              border: `1px solid ${idx === 2 ? 'rgba(0,184,169,0.25)' : 'rgba(13,43,69,0.06)'}`
            }}
          >
            <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '1.3rem', fontWeight: 800, color: idx === 2 ? DEEP_TEAL : NAVY }}>
              {kpi.value}
            </div>
            <div style={{ fontSize: '0.69rem', color: MUTED, fontWeight: 600, marginTop: '2px' }}>{kpi.label}</div>
          </div>
        ))}
      </div>

      <div style={{ display: 'flex', alignItems: 'flex-end', gap: '9px', height: '92px' }}>
        {bars.map((height, idx) => (
          <div key={idx} style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', height: '100%' }}>
            <div
              style={{
                height: `${height}%`,
                borderRadius: '6px 6px 3px 3px',
                background: idx === bars.length - 2
                  ? `linear-gradient(180deg, ${TEAL}, #0dbeaa)`
                  : 'linear-gradient(180deg, rgba(0,184,169,0.32), rgba(0,184,169,0.14))'
              }}
            />
          </div>
        ))}
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '9px', fontSize: '0.68rem', color: MUTED }}>
        <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
      </div>
    </MockFrame>
  );
}

/* --------------------------- 7. Reporting ------------------------- */
function ReportingVisual() {
  return (
    <MockFrame title="Reports">
      <svg viewBox="0 0 320 150" style={{ width: '100%', height: 'auto', display: 'block' }} role="img" aria-label="Pipeline trend chart">
        <defs>
          <linearGradient id="oc-area" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#00b8a9" stopOpacity="0.34" />
            <stop offset="100%" stopColor="#00b8a9" stopOpacity="0.02" />
          </linearGradient>
        </defs>

        {[0, 1, 2, 3].map((i) => (
          <line key={i} x1="0" y1={20 + i * 34} x2="320" y2={20 + i * 34} stroke="rgba(13,43,69,0.07)" strokeWidth="1" />
        ))}

        <path
          d="M0,118 C34,104 50,74 82,80 C112,86 128,48 160,52 C196,57 206,34 240,30 C272,26 292,42 320,24 L320,150 L0,150 Z"
          fill="url(#oc-area)"
        />
        <path
          d="M0,118 C34,104 50,74 82,80 C112,86 128,48 160,52 C196,57 206,34 240,30 C272,26 292,42 320,24"
          fill="none"
          stroke="#00b8a9"
          strokeWidth="2.5"
          strokeLinecap="round"
        />

        <circle cx="240" cy="30" r="5" fill="#ffffff" stroke="#00b8a9" strokeWidth="2.5" />
      </svg>

      <div style={{ display: 'flex', gap: '18px', marginTop: '14px', paddingTop: '13px', borderTop: '1px solid rgba(13,43,69,0.06)' }}>
        {[
          { label: 'Conversion', value: '32%' },
          { label: 'Avg. cycle', value: '18 days' },
          { label: 'Stalled', value: '4 deals' }
        ].map((stat) => (
          <div key={stat.label}>
            <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '0.98rem', fontWeight: 800, color: NAVY }}>{stat.value}</div>
            <div style={{ fontSize: '0.68rem', color: MUTED, fontWeight: 600 }}>{stat.label}</div>
          </div>
        ))}
      </div>
    </MockFrame>
  );
}

/* --------------------------- 8. Cloud CRM ------------------------- */
function CloudVisual() {
  return (
    <MockFrame title="Anywhere access">
      <div style={{ display: 'flex', alignItems: 'flex-end', gap: '16px' }}>
        {/* Desktop */}
        <div style={{ flex: 1 }}>
          <div
            style={{
              borderRadius: '11px',
              border: '1px solid rgba(13,43,69,0.09)',
              background: '#f8fbfc',
              padding: '11px',
              height: '116px',
              display: 'flex',
              flexDirection: 'column',
              gap: '7px'
            }}
          >
            <div style={{ height: '6px', width: '54%', borderRadius: '3px', background: 'rgba(0,184,169,0.45)' }} />
            {[82, 66, 74, 48].map((w, i) => (
              <div key={i} style={{ height: '5px', width: `${w}%`, borderRadius: '3px', background: 'rgba(13,43,69,0.1)' }} />
            ))}
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px', marginTop: '10px', fontSize: '0.72rem', color: MUTED, fontWeight: 600 }}>
            <Monitor size={13} /> Office
          </div>
        </div>

        {/* Sync indicator */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px', paddingBottom: '34px' }}>
          <span
            style={{
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              background: 'rgba(0, 184, 169, 0.14)',
              border: '1px solid rgba(0,184,169,0.32)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              animation: 'pulse-ring 2.6s ease-out infinite'
            }}
          >
            <Check size={16} color={DEEP_TEAL} strokeWidth={3} />
          </span>
          <span style={{ fontSize: '0.66rem', fontWeight: 700, color: DEEP_TEAL, letterSpacing: '0.05em' }}>IN SYNC</span>
        </div>

        {/* Mobile */}
        <div style={{ width: '104px' }}>
          <div
            style={{
              borderRadius: '13px',
              border: '1px solid rgba(13,43,69,0.09)',
              background: '#f8fbfc',
              padding: '9px',
              height: '116px',
              display: 'flex',
              flexDirection: 'column',
              gap: '6px'
            }}
          >
            <div style={{ height: '5px', width: '62%', borderRadius: '3px', background: 'rgba(0,184,169,0.45)' }} />
            {[88, 70, 80].map((w, i) => (
              <div key={i} style={{ height: '4px', width: `${w}%`, borderRadius: '3px', background: 'rgba(13,43,69,0.1)' }} />
            ))}
            <div style={{ marginTop: 'auto', height: '22px', borderRadius: '7px', background: 'rgba(0,184,169,0.16)' }} />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px', marginTop: '10px', fontSize: '0.72rem', color: MUTED, fontWeight: 600 }}>
            <Smartphone size={13} /> Anywhere
          </div>
        </div>
      </div>
    </MockFrame>
  );
}

const VISUALS = {
  'lead-management': LeadListVisual,
  'sales-pipeline': PipelineVisual,
  'follow-up-management': FollowUpVisual,
  'customer-management': CustomerRecordVisual,
  automation: AutomationVisual,
  'sales-management': ManagerVisual,
  reporting: ReportingVisual,
  'cloud-crm': CloudVisual
};

export function ModuleVisual({ id }) {
  const Visual = VISUALS[id];
  return Visual ? <Visual /> : null;
}
