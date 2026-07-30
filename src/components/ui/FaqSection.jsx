import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

const FAQS = [
  {
    q: '1. What is CRM software and why does my business need it?',
    a: 'CRM (Customer Relationship Management) software helps businesses manage leads, customer interactions, sales opportunities, and communication from a single platform. It improves team productivity, streamlines sales processes, and helps businesses build stronger customer relationships while increasing conversion rates.'
  },
  {
    q: '2. How can OneConnect CRM help increase lead conversion rates?',
    a: 'OneConnect CRM helps businesses capture leads, automate follow-ups, track customer interactions, and manage opportunities efficiently. By ensuring timely engagement and organized lead management, businesses can respond faster and convert more prospects into customers.'
  },
  {
    q: '3. Can OneConnect CRM automate sales and customer follow-ups?',
    a: 'Yes. OneConnect CRM includes automation features for reminders, follow-ups, lead assignment, customer communication, and sales activities. This helps teams save time, reduce manual work, and focus on closing deals.'
  },
  {
    q: '4. Is OneConnect CRM suitable for small businesses and enterprises?',
    a: 'Absolutely. OneConnect CRM is designed to support businesses of all sizes, including startups, small businesses, growing organizations, and enterprises. Its scalability adapts to your business needs as you grow.'
  },
  {
    q: '5. Can OneConnect CRM integrate with marketing and lead generation platforms?',
    a: 'Yes. OneConnect CRM supports integrations with Meta Lead Ads, IndiaMART, calling solutions, email communication tools, and other business platforms, helping businesses centralize lead management and streamline customer engagement.'
  }
];

export function FaqSection() {
  const [openIdx, setOpenIdx] = useState(0);

  const toggleFaq = (idx) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" style={{
      width: '100%',
      maxWidth: '1000px',
      margin: '0 auto',
      padding: '80px 24px',
      position: 'relative'
    }}>
      <div style={{ textAlign: 'center', marginBottom: '50px' }}>
        <span className="glass-pill" style={{ marginBottom: '12px' }}>
          <HelpCircle size={14} /> Clear Answers
        </span>
        <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', fontWeight: '800', marginBottom: '14px', color: '#0d2b45' }}>
          Frequently Asked Questions
        </h2>
        <p style={{ color: '#475569', fontSize: '1rem' }}>
          Everything you need to know about OneConnect CRM platform and capabilities.
        </p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {FAQS.map((faq, idx) => {
          const isOpen = openIdx === idx;
          return (
            <div
              key={idx}
              className="glass-panel"
              style={{
                borderRadius: '16px',
                background: isOpen ? 'rgba(255, 255, 255, 0.98)' : 'rgba(255, 255, 255, 0.88)',
                border: `1px solid ${isOpen ? '#00b8a9' : 'rgba(0, 184, 169, 0.22)'}`,
                boxShadow: isOpen ? '0 8px 24px rgba(0, 184, 169, 0.12)' : '0 4px 14px rgba(13, 43, 69, 0.04)',
                overflow: 'hidden',
                transition: 'all 0.3s ease'
              }}
            >
              <button
                onClick={() => toggleFaq(idx)}
                style={{
                  width: '100%',
                  padding: '20px 24px',
                  background: 'none',
                  border: 'none',
                  color: '#0d2b45',
                  fontFamily: 'Outfit, sans-serif',
                  fontWeight: '700',
                  fontSize: '1.05rem',
                  textAlign: 'left',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '16px'
                }}
              >
                <span>{faq.q}</span>
                <ChevronDown
                  size={20}
                  color={isOpen ? '#00b8a9' : '#64748b'}
                  style={{
                    transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                    transition: 'transform 0.3s ease',
                    flexShrink: 0
                  }}
                />
              </button>

              {isOpen && (
                <div style={{ padding: '0 24px 22px 24px', color: '#475569', fontSize: '0.95rem', lineHeight: 1.65 }}>
                  {faq.a}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
