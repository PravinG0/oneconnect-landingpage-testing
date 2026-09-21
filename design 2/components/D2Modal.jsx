import React, { useEffect, useState } from 'react';
import { X, ArrowRight } from 'lucide-react';

const COPY = {
  demo: {
    badge: 'Book a demo',
    title: 'See OneConnect on your sales process',
    subtitle: 'A short walkthrough of leads, pipeline, follow-ups and reporting, mapped to how your team sells.',
    submit: 'Request demo',
    doneTitle: 'Your demo request is in.',
    doneBody: 'Our team will be in touch to arrange a walkthrough that fits your sales process.'
  },
  trial: {
    badge: 'Free trial',
    title: 'Start your OneConnect trial',
    subtitle: 'Bring your leads, customers, follow-ups and opportunities into one connected sales process.',
    submit: 'Request access',
    doneTitle: 'Your trial request is in.',
    doneBody: 'Our team will set up your workspace and send access details shortly.'
  }
};

const FIELD_ROW = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(min(200px, 100%), 1fr))',
  gap: '16px'
};

export function D2Modal({ isOpen, onClose, variant = 'demo' }) {
  const copy = COPY[variant] || COPY.demo;

  const [form, setForm] = useState({ name: '', email: '', phone: '', company: '', teamSize: '2-10' });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      setSubmitted(false);
      return undefined;
    }

    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
    };

    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const update = (key) => (e) => setForm({ ...form, [key]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="d2-modal" onClick={onClose}>
      <div
        className="d2-modal__panel"
        role="dialog"
        aria-modal="true"
        aria-label={copy.title}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="d2-modal__close" onClick={onClose} aria-label="Close">
          <X size={16} />
        </button>

        {!submitted ? (
          <div>
            <span className="d2-mono d2-accent">{copy.badge}</span>

            <h3 className="d2-h2" style={{ fontSize: 'clamp(1.5rem, 2.6vw, 2rem)', margin: '16px 0 12px', paddingRight: '30px' }}>
              {copy.title}
            </h3>

            <p className="d2-body" style={{ marginBottom: '28px' }}>
              {copy.subtitle}
            </p>

            <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '16px' }}>
              <div className="d2-field">
                <label className="d2-mono" htmlFor="d2-name">Full name *</label>
                <input
                  id="d2-name"
                  className="d2-input"
                  type="text"
                  required
                  value={form.name}
                  onChange={update('name')}
                  placeholder="Your name"
                />
              </div>

              <div style={FIELD_ROW}>
                <div className="d2-field">
                  <label className="d2-mono" htmlFor="d2-email">Work email *</label>
                  <input
                    id="d2-email"
                    className="d2-input"
                    type="email"
                    required
                    value={form.email}
                    onChange={update('email')}
                    placeholder="you@company.com"
                  />
                </div>

                <div className="d2-field">
                  <label className="d2-mono" htmlFor="d2-phone">Phone *</label>
                  <input
                    id="d2-phone"
                    className="d2-input"
                    type="tel"
                    required
                    value={form.phone}
                    onChange={update('phone')}
                    placeholder="+91 00000 00000"
                  />
                </div>
              </div>

              <div style={FIELD_ROW}>
                <div className="d2-field">
                  <label className="d2-mono" htmlFor="d2-company">Company</label>
                  <input
                    id="d2-company"
                    className="d2-input"
                    type="text"
                    value={form.company}
                    onChange={update('company')}
                    placeholder="Company name"
                  />
                </div>

                <div className="d2-field">
                  <label className="d2-mono" htmlFor="d2-team">Sales team size</label>
                  <select id="d2-team" className="d2-input" value={form.teamSize} onChange={update('teamSize')}>
                    <option value="1">Just me</option>
                    <option value="2-10">2-10</option>
                    <option value="11-50">11-50</option>
                    <option value="50+">50+</option>
                  </select>
                </div>
              </div>

              <button className="d2-btn" type="submit" style={{ width: '100%', marginTop: '6px' }}>
                {copy.submit} <ArrowRight size={15} />
              </button>
            </form>
          </div>
        ) : (
          <div>
            <span className="d2-mono d2-accent">Request received</span>

            <h3 className="d2-h2" style={{ fontSize: 'clamp(1.5rem, 2.6vw, 2rem)', margin: '16px 0 12px' }}>
              {copy.doneTitle}
            </h3>

            <p className="d2-body" style={{ maxWidth: '420px', marginBottom: '30px' }}>
              {form.name ? `Thanks, ${form.name.split(' ')[0]}. ` : ''}
              {copy.doneBody}
            </p>

            <button className="d2-btn d2-btn--ghost" onClick={onClose}>
              Back to the site
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
