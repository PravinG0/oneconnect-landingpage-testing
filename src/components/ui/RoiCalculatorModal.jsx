import React, { useState } from 'react';
import { X, Calculator, TrendingUp, ArrowRight } from 'lucide-react';

export function RoiCalculatorModal({ isOpen, onClose, onOpenDemo }) {
  const [monthlyLeads, setMonthlyLeads] = useState(250);
  const [dealValue, setDealValue] = useState(1500);

  if (!isOpen) return null;

  const baselineDeals = Math.floor(monthlyLeads * 0.05);
  const oneConnectDeals = Math.floor(monthlyLeads * 0.16);
  const additionalDeals = Math.max(1, oneConnectDeals - baselineDeals);
  const monthlyRevenueBoost = additionalDeals * dealValue;
  const annualRevenueBoost = monthlyRevenueBoost * 12;
  const hoursSavedPerMonth = Math.floor(monthlyLeads * 0.4);

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
          maxWidth: '720px',
          padding: '36px',
          borderRadius: '24px',
          background: 'rgba(255, 255, 255, 0.98)',
          border: '1px solid rgba(0, 184, 169, 0.4)',
          boxShadow: '0 24px 64px rgba(13, 43, 69, 0.2)',
          position: 'relative'
        }}
      >
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

        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
          <div style={{ background: 'rgba(0, 184, 169, 0.15)', padding: '10px', borderRadius: '12px' }}>
            <Calculator size={24} color="#008f83" />
          </div>
          <div>
            <h3 style={{ fontSize: '1.6rem', fontWeight: '800', color: '#0d2b45' }}>Instant OneConnect Sales ROI Calculator</h3>
            <p style={{ color: '#475569', fontSize: '0.88rem' }}>Estimate revenue growth & time saved by automating lead capture and WhatsApp follow-ups.</p>
          </div>
        </div>

        <hr style={{ borderColor: 'rgba(0, 184, 169, 0.2)', margin: '20px 0' }} />

        {/* Sliders Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px', marginBottom: '28px' }}>
          <div style={{ background: 'rgba(241, 245, 249, 0.9)', padding: '20px', borderRadius: '16px', border: '1px solid rgba(0, 184, 169, 0.25)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
              <label style={{ fontSize: '0.9rem', color: '#0d2b45', fontWeight: '700' }}>Monthly Inbound Leads</label>
              <span style={{ fontSize: '1.1rem', color: '#008f83', fontWeight: '800' }}>{monthlyLeads.toLocaleString()}</span>
            </div>
            <input
              type="range"
              min="20"
              max="2000"
              step="10"
              value={monthlyLeads}
              onChange={(e) => setMonthlyLeads(Number(e.target.value))}
              style={{ width: '100%', accentColor: '#00b8a9', cursor: 'pointer' }}
            />
          </div>

          <div style={{ background: 'rgba(241, 245, 249, 0.9)', padding: '20px', borderRadius: '16px', border: '1px solid rgba(0, 184, 169, 0.25)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
              <label style={{ fontSize: '0.9rem', color: '#0d2b45', fontWeight: '700' }}>Avg. Deal / Lead Value ($)</label>
              <span style={{ fontSize: '1.1rem', color: '#059669', fontWeight: '800' }}>${dealValue.toLocaleString()}</span>
            </div>
            <input
              type="range"
              min="100"
              max="10000"
              step="100"
              value={dealValue}
              onChange={(e) => setDealValue(Number(e.target.value))}
              style={{ width: '100%', accentColor: '#059669', cursor: 'pointer' }}
            />
          </div>
        </div>

        {/* Projected ROI Results Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '16px', marginBottom: '32px' }}>
          <div style={{ background: 'linear-gradient(135deg, rgba(0, 184, 169, 0.12) 0%, rgba(13, 43, 69, 0.04) 100%)', padding: '18px', borderRadius: '16px', border: '1px solid #00b8a9', textAlign: 'center' }}>
            <div style={{ fontSize: '0.8rem', color: '#64748b', textTransform: 'uppercase', fontWeight: '700' }}>Est. Monthly Revenue Boost</div>
            <div style={{ fontSize: '1.8rem', fontWeight: '900', color: '#00796b', margin: '4px 0' }}>+${monthlyRevenueBoost.toLocaleString()}</div>
            <div style={{ fontSize: '0.75rem', color: '#059669', fontWeight: '700' }}>+${annualRevenueBoost.toLocaleString()} / year</div>
          </div>

          <div style={{ background: 'rgba(241, 245, 249, 0.9)', padding: '18px', borderRadius: '16px', border: '1px solid rgba(0, 184, 169, 0.3)', textAlign: 'center' }}>
            <div style={{ fontSize: '0.8rem', color: '#64748b', textTransform: 'uppercase', fontWeight: '700' }}>Additional Deals Closed</div>
            <div style={{ fontSize: '1.8rem', fontWeight: '900', color: '#0d2b45', margin: '4px 0' }}>+{additionalDeals} deals</div>
            <div style={{ fontSize: '0.75rem', color: '#00796b', fontWeight: '700' }}>From 13% → 98% follow-up speed</div>
          </div>

          <div style={{ background: 'rgba(241, 245, 249, 0.9)', padding: '18px', borderRadius: '16px', border: '1px solid rgba(0, 184, 169, 0.3)', textAlign: 'center' }}>
            <div style={{ fontSize: '0.8rem', color: '#64748b', textTransform: 'uppercase', fontWeight: '700' }}>Team Hours Saved</div>
            <div style={{ fontSize: '1.8rem', fontWeight: '900', color: '#059669', margin: '4px 0' }}>{hoursSavedPerMonth} hrs/mo</div>
            <div style={{ fontSize: '0.75rem', color: '#475569', fontWeight: '600' }}>Automated task & campaign workflows</div>
          </div>
        </div>

        {/* Action Button */}
        <div style={{ display: 'flex', gap: '14px', justifyContent: 'flex-end' }}>
          <button className="btn-secondary" onClick={onClose} style={{ padding: '12px 20px' }}>
            Close
          </button>
          <button className="btn-primary" onClick={() => { onClose(); onOpenDemo(); }} style={{ padding: '12px 28px' }}>
            <span>Lock In Your Growth — Book Free Demo</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
