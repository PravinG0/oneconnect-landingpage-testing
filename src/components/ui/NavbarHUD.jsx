import React from 'react';
import { Sparkles, Calculator, Layers, HelpCircle, Building } from 'lucide-react';

export function NavbarHUD({ onOpenDemo, onOpenRoi }) {
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header style={{
      position: 'fixed',
      top: '16px',
      left: '50%',
      transform: 'translateX(-50%)',
      width: '94%',
      maxWidth: '1280px',
      zIndex: 100,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '12px 24px',
      borderRadius: '20px',
      background: 'rgba(255, 255, 255, 0.9)',
      backdropFilter: 'blur(16px)',
      WebkitBackdropFilter: 'blur(16px)',
      border: '1px solid rgba(0, 184, 169, 0.28)',
      boxShadow: '0 10px 30px rgba(13, 43, 69, 0.08)'
    }}>
      {/* Brand Logo */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer' }} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
        <img
          src="/OneConnect_Horizontal.jpg"
          alt="OneConnect Logo"
          style={{ height: '36px', borderRadius: '6px', background: '#ffffff', padding: '3px 6px', boxShadow: '0 2px 10px rgba(0, 184, 169, 0.2)' }}
          onError={(e) => { e.target.style.display = 'none'; }}
        />
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <span style={{ fontFamily: 'Outfit, sans-serif', fontWeight: '800', fontSize: '1.2rem', color: '#0d2b45', letterSpacing: '-0.02em' }}>
            One<span style={{ color: '#00b8a9' }}>Connect</span>
          </span>
          <span style={{ fontSize: '0.65rem', color: '#008f83', fontWeight: '700', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
            Enterprise CRM
          </span>
        </div>
      </div>

      {/* Navigation Links */}
      <nav className="desktop-nav" style={{ display: 'flex', alignItems: 'center', gap: '22px' }}>
        <button
          onClick={() => scrollToSection('features')}
          style={{ background: 'none', border: 'none', color: '#334155', fontWeight: '600', fontSize: '0.9rem', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px' }}
        >
          <Layers size={16} color="#00b8a9" /> Features
        </button>

        <button
          onClick={() => scrollToSection('why-choose')}
          style={{ background: 'none', border: 'none', color: '#334155', fontWeight: '600', fontSize: '0.9rem', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px' }}
        >
          <Sparkles size={16} color="#00b8a9" /> Why Choose Us
        </button>

        <button
          onClick={() => scrollToSection('industries')}
          style={{ background: 'none', border: 'none', color: '#334155', fontWeight: '600', fontSize: '0.9rem', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px' }}
        >
          <Building size={16} color="#00b8a9" /> Industries
        </button>

        <button
          onClick={() => scrollToSection('faq')}
          style={{ background: 'none', border: 'none', color: '#334155', fontWeight: '600', fontSize: '0.9rem', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px' }}
        >
          <HelpCircle size={16} color="#00b8a9" /> FAQs
        </button>

        <button
          onClick={onOpenRoi}
          style={{ background: 'none', border: 'none', color: '#334155', fontWeight: '600', fontSize: '0.9rem', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px' }}
        >
          <Calculator size={16} color="#00b8a9" /> ROI Calculator
        </button>
      </nav>

      {/* CTA Button */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <button className="btn-primary" onClick={onOpenDemo} style={{ padding: '10px 20px', fontSize: '0.9rem' }}>
          <Sparkles size={16} /> Book Free Demo
        </button>
      </div>
    </header>
  );
}
