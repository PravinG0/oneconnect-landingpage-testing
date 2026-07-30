import React, { useState } from 'react';
import { X, Sparkles, CheckCircle2, User, Mail, Phone, Send } from 'lucide-react';
import confetti from 'canvas-confetti';

export function DemoModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    companySize: '10-50',
    industry: 'Manufacturing'
  });

  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    try {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch (err) {
      console.log('Confetti triggered');
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

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
          maxWidth: '560px',
          padding: '36px',
          borderRadius: '24px',
          background: 'rgba(255, 255, 255, 0.98)',
          border: '1px solid rgba(0, 184, 169, 0.4)',
          boxShadow: '0 24px 64px rgba(13, 43, 69, 0.2)',
          position: 'relative'
        }}
      >
        <button
          onClick={handleReset}
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

        {!submitted ? (
          <div>
            <div style={{ textAlign: 'center', marginBottom: '24px' }}>
              <div className="glass-pill" style={{ marginBottom: '10px' }}>
                <Sparkles size={14} /> 14-Day Free Trial • Instant Setup
              </div>
              <h3 style={{ fontSize: '1.8rem', fontWeight: '800', color: '#0d2b45' }}>Book Your OneConnect CRM Demo</h3>
              <p style={{ color: '#475569', fontSize: '0.9rem', marginTop: '4px' }}>
                Experience 3D Spatial lead automation customized for your sales team.
              </p>
            </div>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', color: '#0d2b45', fontWeight: '700', marginBottom: '6px' }}>
                  Full Name *
                </label>
                <div style={{ position: 'relative' }}>
                  <User size={16} color="#00b8a9" style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)' }} />
                  <input
                    type="text"
                    required
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '12px 14px 12px 40px',
                      borderRadius: '12px',
                      background: 'rgba(241, 245, 249, 0.9)',
                      border: '1px solid rgba(0, 184, 169, 0.3)',
                      color: '#0f172a',
                      fontSize: '0.95rem'
                    }}
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', color: '#0d2b45', fontWeight: '700', marginBottom: '6px' }}>
                    Work Email *
                  </label>
                  <div style={{ position: 'relative' }}>
                    <Mail size={16} color="#00b8a9" style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)' }} />
                    <input
                      type="email"
                      required
                      placeholder="john@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '12px 14px 12px 40px',
                        borderRadius: '12px',
                        background: 'rgba(241, 245, 249, 0.9)',
                        border: '1px solid rgba(0, 184, 169, 0.3)',
                        color: '#0f172a',
                        fontSize: '0.95rem'
                      }}
                    />
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', color: '#0d2b45', fontWeight: '700', marginBottom: '6px' }}>
                    WhatsApp / Phone *
                  </label>
                  <div style={{ position: 'relative' }}>
                    <Phone size={16} color="#00b8a9" style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)' }} />
                    <input
                      type="tel"
                      required
                      placeholder="+1 (555) 000-0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '12px 14px 12px 40px',
                        borderRadius: '12px',
                        background: 'rgba(241, 245, 249, 0.9)',
                        border: '1px solid rgba(0, 184, 169, 0.3)',
                        color: '#0f172a',
                        fontSize: '0.95rem'
                      }}
                    />
                  </div>
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', color: '#0d2b45', fontWeight: '700', marginBottom: '6px' }}>
                    Industry
                  </label>
                  <select
                    value={formData.industry}
                    onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '12px 14px',
                      borderRadius: '12px',
                      background: 'rgba(241, 245, 249, 0.9)',
                      border: '1px solid rgba(0, 184, 169, 0.3)',
                      color: '#0f172a',
                      fontSize: '0.95rem'
                    }}
                  >
                    <option value="Manufacturing">Manufacturing</option>
                    <option value="E-Commerce">E-Commerce</option>
                    <option value="Real Estate">Real Estate</option>
                    <option value="Healthcare">Healthcare & Services</option>
                    <option value="Enterprise">Other Vertical</option>
                  </select>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', color: '#0d2b45', fontWeight: '700', marginBottom: '6px' }}>
                    Team Size
                  </label>
                  <select
                    value={formData.companySize}
                    onChange={(e) => setFormData({ ...formData, companySize: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '12px 14px',
                      borderRadius: '12px',
                      background: 'rgba(241, 245, 249, 0.9)',
                      border: '1px solid rgba(0, 184, 169, 0.3)',
                      color: '#0f172a',
                      fontSize: '0.95rem'
                    }}
                  >
                    <option value="1-10">1 - 10 Users</option>
                    <option value="10-50">10 - 50 Users</option>
                    <option value="50-250">50 - 250 Users</option>
                    <option value="250+">250+ Enterprise</option>
                  </select>
                </div>
              </div>

              {/* Guarantees Callout */}
              <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 14px', borderRadius: '10px', background: 'rgba(0, 184, 169, 0.08)', border: '1px dashed rgba(0, 184, 169, 0.3)', fontSize: '0.8rem', color: '#00796b', fontWeight: '600' }}>
                <span>✓ No Credit Card Needed</span>
                <span>✓ Free Setup Assistance</span>
                <span>✓ Full SSL Data Security</span>
              </div>

              <button className="btn-primary" type="submit" style={{ width: '100%', padding: '14px', fontSize: '1rem', marginTop: '6px' }}>
                <Send size={18} />
                <span>Confirm & Reserve My Free Demo</span>
              </button>
            </form>
          </div>
        ) : (
          <div style={{ textAlign: 'center', padding: '20px 0' }}>
            <div style={{ display: 'inline-flex', background: 'rgba(0, 184, 169, 0.15)', border: '2px solid #00b8a9', borderRadius: '50%', padding: '16px', marginBottom: '16px' }}>
              <CheckCircle2 size={48} color="#00b8a9" />
            </div>
            <h3 style={{ fontSize: '1.8rem', fontWeight: '800', marginBottom: '8px', color: '#0d2b45' }}>Demo Reserved Successfully!</h3>
            <p style={{ color: '#475569', fontSize: '1rem', lineHeight: 1.6, maxWidth: '420px', margin: '0 auto 24px auto' }}>
              Thank you, <strong style={{ color: '#00b8a9' }}>{formData.name || 'Sales Leader'}</strong>. Our CRM solutions architect will contact you within 15 minutes to schedule your live walkthrough.
            </p>
            <button className="btn-primary" onClick={handleReset} style={{ padding: '12px 30px' }}>
              Back to Experience
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
