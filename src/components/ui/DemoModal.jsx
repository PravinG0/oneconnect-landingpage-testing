import React, { useEffect, useState } from 'react';
import { X, CheckCircle2, User, Mail, Phone, Building2, Send, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

const COPY = {
  demo: {
    badge: 'Book a Demo',
    title: 'See OneConnect on Your Sales Process',
    subtitle: 'A short walkthrough of leads, pipeline, follow-ups and reporting - mapped to how your team sells.',
    submit: 'Book My Demo',
    doneTitle: 'Your demo request is in.',
    doneBody: 'Our team will reach out shortly to schedule a walkthrough that fits your sales process.'
  },
  trial: {
    badge: 'Start Free Trial',
    title: 'Start Your OneConnect Free Trial',
    subtitle: 'Bring your leads, customers, follow-ups and opportunities into one connected sales process.',
    submit: 'Start My Free Trial',
    doneTitle: 'Your trial request is in.',
    doneBody: 'Our team will set up your workspace and send you access details shortly.'
  }
};

const ASSURANCES = ['No credit card required', 'Guided setup', 'Cancel anytime'];

const FIELD_STYLE = {
  width: '100%',
  padding: '12px 14px 12px 42px',
  borderRadius: '12px',
  background: '#f6f8fa',
  border: '1px solid rgba(13, 43, 69, 0.12)',
  color: '#0f172a',
  fontSize: '0.95rem',
  fontFamily: 'inherit',
  outlineColor: '#00b8a9'
};

const LABEL_STYLE = {
  display: 'block',
  fontSize: '0.82rem',
  color: '#0d2b45',
  fontWeight: 700,
  marginBottom: '6px'
};

const ICON_STYLE = { position: 'absolute', left: '15px', top: '50%', transform: 'translateY(-50%)' };

export function DemoModal({ isOpen, onClose, variant = 'demo' }) {
  const copy = COPY[variant] || COPY.demo;

  const [formData, setFormData] = useState({ name: '', email: '', phone: '', company: '', teamSize: '2-10' });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e) => e.key === 'Escape' && handleClose();
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    try {
      confetti({ particleCount: 90, spread: 70, origin: { y: 0.6 } });
    } catch (err) {
      /* confetti is decorative only */
    }
  };

  function handleClose() {
    setSubmitted(false);
    onClose();
  }

  const update = (key) => (e) => setFormData({ ...formData, [key]: e.target.value });

  return (
    <div
      onClick={handleClose}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 200,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '24px',
        background: 'rgba(13, 43, 69, 0.45)',
        backdropFilter: 'blur(14px)',
        WebkitBackdropFilter: 'blur(14px)',
        overflowY: 'auto'
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label={copy.title}
        style={{
          width: '100%',
          maxWidth: '560px',
          padding: 'clamp(28px, 4vw, 38px)',
          borderRadius: '24px',
          background: '#ffffff',
          border: '1px solid rgba(0, 184, 169, 0.3)',
          boxShadow: '0 30px 80px rgba(13, 43, 69, 0.28)',
          position: 'relative',
          margin: 'auto'
        }}
      >
        <button
          onClick={handleClose}
          aria-label="Close"
          style={{
            position: 'absolute',
            top: '18px',
            right: '18px',
            background: 'rgba(13, 43, 69, 0.06)',
            border: 'none',
            borderRadius: '50%',
            width: '36px',
            height: '36px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer'
          }}
        >
          <X size={18} color="#0d2b45" />
        </button>

        {!submitted ? (
          <div>
            <div style={{ marginBottom: '24px', paddingRight: '40px' }}>
              <span className="glass-pill" style={{ marginBottom: '14px' }}>
                <Sparkles size={13} /> {copy.badge}
              </span>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#0d2b45', marginTop: '14px' }}>{copy.title}</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.94rem', lineHeight: 1.7, marginTop: '8px' }}>
                {copy.subtitle}
              </p>
            </div>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              <div>
                <label style={LABEL_STYLE} htmlFor="oc-name">Full name *</label>
                <div style={{ position: 'relative' }}>
                  <User size={16} color="#00b8a9" style={ICON_STYLE} />
                  <input id="oc-name" type="text" required placeholder="Your name" value={formData.name} onChange={update('name')} style={FIELD_STYLE} />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))', gap: '15px' }}>
                <div>
                  <label style={LABEL_STYLE} htmlFor="oc-email">Work email *</label>
                  <div style={{ position: 'relative' }}>
                    <Mail size={16} color="#00b8a9" style={ICON_STYLE} />
                    <input id="oc-email" type="email" required placeholder="you@company.com" value={formData.email} onChange={update('email')} style={FIELD_STYLE} />
                  </div>
                </div>

                <div>
                  <label style={LABEL_STYLE} htmlFor="oc-phone">Phone *</label>
                  <div style={{ position: 'relative' }}>
                    <Phone size={16} color="#00b8a9" style={ICON_STYLE} />
                    <input id="oc-phone" type="tel" required placeholder="+91 00000 00000" value={formData.phone} onChange={update('phone')} style={FIELD_STYLE} />
                  </div>
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))', gap: '15px' }}>
                <div>
                  <label style={LABEL_STYLE} htmlFor="oc-company">Company</label>
                  <div style={{ position: 'relative' }}>
                    <Building2 size={16} color="#00b8a9" style={ICON_STYLE} />
                    <input id="oc-company" type="text" placeholder="Company name" value={formData.company} onChange={update('company')} style={FIELD_STYLE} />
                  </div>
                </div>

                <div>
                  <label style={LABEL_STYLE} htmlFor="oc-team">Sales team size</label>
                  <select
                    id="oc-team"
                    value={formData.teamSize}
                    onChange={update('teamSize')}
                    style={{ ...FIELD_STYLE, paddingLeft: '14px' }}
                  >
                    <option value="1">Just me</option>
                    <option value="2-10">2 - 10</option>
                    <option value="11-50">11 - 50</option>
                    <option value="50+">50+</option>
                  </select>
                </div>
              </div>

              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '14px',
                  justifyContent: 'space-between',
                  padding: '11px 15px',
                  borderRadius: '11px',
                  background: 'rgba(0, 184, 169, 0.07)',
                  border: '1px solid rgba(0, 184, 169, 0.2)',
                  fontSize: '0.79rem',
                  color: '#00796b',
                  fontWeight: 600
                }}
              >
                {ASSURANCES.map((item) => (
                  <span key={item}>✓ {item}</span>
                ))}
              </div>

              <button className="btn-primary" type="submit" style={{ width: '100%', padding: '14px', fontSize: '1rem' }}>
                <Send size={17} />
                <span>{copy.submit}</span>
              </button>
            </form>
          </div>
        ) : (
          <div style={{ textAlign: 'center', padding: '16px 0' }}>
            <div
              style={{
                display: 'inline-flex',
                background: 'rgba(0, 184, 169, 0.14)',
                border: '2px solid #00b8a9',
                borderRadius: '50%',
                padding: '16px',
                marginBottom: '18px'
              }}
            >
              <CheckCircle2 size={44} color="#00b8a9" />
            </div>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '10px', color: '#0d2b45' }}>{copy.doneTitle}</h3>
            <p
              style={{
                color: 'var(--text-secondary)',
                fontSize: '0.98rem',
                lineHeight: 1.75,
                maxWidth: '400px',
                margin: '0 auto 24px auto'
              }}
            >
              Thanks{formData.name ? `, ${formData.name.split(' ')[0]}` : ''}. {copy.doneBody}
            </p>
            <button className="btn-primary" onClick={handleClose} style={{ padding: '12px 30px' }}>
              Back to the site
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
