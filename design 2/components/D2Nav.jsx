import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { D2_SECTIONS } from '../sections';

export function D2Nav({ onOpenDemo, onOpenTrial }) {
  const [open, setOpen] = useState(false);

  const goTo = (id) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="d2-nav">
      <div className="d2-wrap">
        <div className="d2-nav__inner">
          <div
            className="d2-nav__mark"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            OneConnect<span style={{ color: 'var(--clay)' }}>.</span>
          </div>

          <nav className="d2-nav__links">
            {D2_SECTIONS.map((section) => (
              <button key={section.id} className="d2-nav__link" onClick={() => goTo(section.id)}>
                <span style={{ opacity: 0.55 }}>{section.index}</span>
                {section.label}
              </button>
            ))}
          </nav>

          <div className="d2-nav__actions">
            <button className="d2-btn d2-btn--paper d2-btn--sm" onClick={onOpenTrial}>
              Free trial
            </button>
            <button className="d2-btn d2-btn--sm" onClick={onOpenDemo}>
              Book a demo
            </button>
            <button
              className="d2-nav__burger"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? 'Close menu' : 'Open menu'}
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        {open && (
          <nav className="d2-nav__drawer">
            {D2_SECTIONS.map((section) => (
              <button key={section.id} className="d2-nav__link" onClick={() => goTo(section.id)}>
                <span style={{ opacity: 0.55 }}>{section.index}</span>
                {section.label}
              </button>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
