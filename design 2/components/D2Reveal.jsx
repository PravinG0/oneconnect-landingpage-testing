import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';

/**
 * Entrance wrapper. It fails safe: anything already on screen at mount is
 * shown immediately without waiting for an IntersectionObserver callback, so
 * content can never be left stuck at opacity 0 if the observer never fires
 * (headless renderers, prerenderers, odd clipping ancestors).
 */
export function D2Reveal({ children, as: Tag = 'div', delay = 0, className = '', style = {}, ...rest }) {
  const ref = useRef(null);
  const [on, setOn] = useState(false);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const inView = rect.top < window.innerHeight * 1.05 && rect.bottom > 0;

    if (inView || typeof IntersectionObserver === 'undefined') setOn(true);
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el || on || typeof IntersectionObserver === 'undefined') return undefined;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setOn(true);
          io.disconnect();
        }
      },
      { threshold: 0.08, rootMargin: '0px 0px -50px 0px' }
    );

    io.observe(el);

    // Backstop: if no callback has arrived, reveal anyway rather than leave
    // the section blank.
    const timer = window.setTimeout(() => setOn(true), 1600);

    return () => {
      io.disconnect();
      window.clearTimeout(timer);
    };
  }, [on]);

  return (
    <Tag
      ref={ref}
      className={`d2-in ${on ? 'd2-in--on' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms`, ...style }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
