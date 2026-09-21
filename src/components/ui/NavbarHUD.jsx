import React, { useEffect, useState } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';

const NAV_LINKS = [
  { id: 'features', label: 'Product' },
  { id: 'why-oneconnect', label: 'Why OneConnect' },
  { id: 'how-it-works', label: 'How It Works' },
  { id: 'who-its-for', label: 'Who It Is For' },
  { id: 'faq', label: 'FAQ' }
];

export function NavbarHUD({ onOpenDemo, onOpenTrial }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const goTo = (id) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      style={{
        position: 'fixed',
        top: scrolled ? '10px' : '18px',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '94%',
        maxWidth: '1240px',
        zIndex: 100,
        borderRadius: '18px',
        background: scrolled ? 'rgba(255, 255, 255, 0.95)' : 'rgba(255, 255, 255, 0.86)',
        backdropFilter: 'blur(18px)',
        WebkitBackdropFilter: 'blur(18px)',
        border: '1px solid rgba(13, 43, 69, 0.09)',
        boxShadow: scrolled ? '0 14px 36px rgba(13, 43, 69, 0.12)' : '0 6px 22px rgba(13, 43, 69, 0.07)',
        transition: 'top 0.35s ease, background 0.35s ease, box-shadow 0.35s ease'
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '18px',
          padding: '11px 18px'
        }}
      >
        {/* Brand */}
        <div
          style={{ display: 'flex', alignItems: 'center', gap: '11px', cursor: 'pointer' }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <img
            src="/OneConnect_Horizontal.jpg"
            alt="OneConnect"
            style={{
              height: '34px',
              borderRadius: '7px',
              background: '#ffffff',
              padding: '3px 6px',
              boxShadow: '0 2px 10px rgba(0, 184, 169, 0.18)'
            }}
            onError={(e) => {
              e.target.style.display = 'none';
            }}
          />
          <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.15 }}>
            <span
              style={{
                fontFamily: 'Outfit, sans-serif',
                fontWeight: 800,
                fontSize: '1.14rem',
                color: '#0d2b45',
                letterSpacing: '-0.02em'
              }}
            >
              One<span style={{ color: '#00b8a9' }}>Connect</span>
            </span>
            <span
              style={{
                fontSize: '0.62rem',
                color: '#00796b',
                fontWeight: 700,
                letterSpacing: '0.09em',
                textTransform: 'uppercase'
              }}
            >
              Sales CRM
            </span>
          </div>
        </div>

        {/* Desktop navigation */}
        <nav className="desktop-nav" style={{ alignItems: 'center', gap: '4px' }}>
          {NAV_LINKS.map((link) => (
            <button key={link.id} className="btn-ghost" onClick={() => goTo(link.id)}>
              {link.label}
            </button>
          ))}
        </nav>

        {/* Actions */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <button
            className="btn-secondary desktop-nav"
            onClick={onOpenTrial}
            style={{ padding: '10px 18px', fontSize: '0.88rem' }}
          >
            Start Free Trial
          </button>

          <button className="btn-primary" onClick={onOpenDemo} style={{ padding: '10px 20px', fontSize: '0.88rem' }}>
            Book a Demo
            <ArrowRight size={15} />
          </button>

          <button
            className="mobile-only"
            aria-label="Toggle menu"
            onClick={() => setMenuOpen((open) => !open)}
            style={{
              background: 'rgba(13, 43, 69, 0.06)',
              border: 'none',
              borderRadius: '10px',
              width: '38px',
              height: '38px',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer'
            }}
          >
            {menuOpen ? <X size={18} color="#0d2b45" /> : <Menu size={18} color="#0d2b45" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {menuOpen && (
        <nav
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '2px',
            padding: '6px 12px 14px 12px',
            borderTop: '1px solid rgba(13, 43, 69, 0.08)'
          }}
        >
          {NAV_LINKS.map((link) => (
            <button
              key={link.id}
              className="btn-ghost"
              onClick={() => goTo(link.id)}
              style={{ textAlign: 'left', padding: '12px 10px', fontSize: '0.95rem' }}
            >
              {link.label}
            </button>
          ))}
          <button
            className="btn-secondary"
            onClick={() => {
              setMenuOpen(false);
              onOpenTrial();
            }}
            style={{ marginTop: '8px' }}
          >
            Start Free Trial
          </button>
        </nav>
      )}
    </header>
  );
}
