import React from 'react';
import { ArrowRight } from 'lucide-react';
import { FOOTER, MODULES } from '../../src/data/siteContent';
import { D2_SECTIONS } from '../sections';

const LEGAL = ['Privacy Policy', 'Terms of Service', 'Security'];

export function D2Footer({ onOpenDemo, onOpenTrial }) {
  const goTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <footer className="d2-foot">
      <div className="d2-wrap">
        <div className="d2-foot__grid">
          <div>
            <div
              style={{
                fontFamily: 'var(--disp)',
                fontWeight: 800,
                fontSize: '1.4rem',
                letterSpacing: '-0.04em',
                marginBottom: '16px'
              }}
            >
              OneConnect<span style={{ color: 'var(--clay)' }}>.</span>
            </div>
            <p className="d2-small" style={{ maxWidth: '260px' }}>
              {FOOTER.tagline}
            </p>
          </div>

          <div>
            <span className="d2-mono">Product</span>
            <ul className="d2-foot__list" style={{ marginTop: '20px' }}>
              {MODULES.map((module) => (
                <li key={module.id}>
                  <button className="d2-foot__link" onClick={() => goTo('d2-product')}>
                    {module.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <span className="d2-mono">Explore</span>
            <ul className="d2-foot__list" style={{ marginTop: '20px' }}>
              {D2_SECTIONS.map((section) => (
                <li key={section.id}>
                  <button className="d2-foot__link" onClick={() => goTo(section.id)}>
                    {section.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <span className="d2-mono">Get started</span>
            <p className="d2-small" style={{ margin: '20px 0 22px', maxWidth: '240px' }}>
              See how OneConnect fits your sales process.
            </p>
            <div style={{ display: 'grid', gap: '12px', justifyItems: 'start' }}>
              <button className="d2-btn d2-btn--paper d2-btn--sm" onClick={onOpenDemo}>
                Book a demo <ArrowRight size={13} />
              </button>
              <button
                className="d2-btn d2-btn--sm"
                onClick={onOpenTrial}
                style={{ background: 'transparent', color: 'var(--pp)', borderColor: 'var(--pp)', boxShadow: 'none' }}
              >
                Free trial
              </button>
            </div>
          </div>
        </div>

        {/* Oversized wordmark bleeding off the baseline */}
        <div className="d2-foot__word" aria-hidden="true">
          OneConnect
        </div>

        <div className="d2-foot__bottom">
          <span className="d2-mono">
            © {new Date().getFullYear()} {FOOTER.brand}. All rights reserved.
          </span>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '24px' }}>
            {LEGAL.map((item) => (
              <span key={item} className="d2-mono">
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
