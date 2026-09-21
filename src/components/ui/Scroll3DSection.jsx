import React, { useEffect, useRef, useState } from 'react';

/**
 * Gives each section a light spatial tilt as it moves through the viewport.
 * The transform is deliberately subtle - text stays upright and fully opaque
 * near the centre of the screen so body copy is always readable.
 */
export function Scroll3DSection({ children, id, className = '', style = {} }) {
  const sectionRef = useRef(null);
  const frame = useRef(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const reduceMotion =
      typeof window.matchMedia === 'function' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) return;

    const measure = () => {
      frame.current = 0;
      const el = sectionRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const viewport = window.innerHeight;
      setProgress((rect.top + rect.height / 2 - viewport / 2) / viewport);
    };

    const onScroll = () => {
      if (frame.current) return;
      frame.current = window.requestAnimationFrame(measure);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    measure();

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (frame.current) window.cancelAnimationFrame(frame.current);
    };
  }, []);

  const clamped = Math.max(-1.6, Math.min(1.6, progress));
  const rotateX = clamped * 2.6;
  const translateZ = -Math.abs(clamped) * 26;
  const opacity = Math.max(0.78, 1 - Math.abs(clamped) * 0.16);

  return (
    <div
      ref={sectionRef}
      id={id}
      className={`spatial-card-3d ${className}`}
      style={{
        transform: `perspective(1600px) rotateX(${rotateX}deg) translateZ(${translateZ}px)`,
        opacity,
        transition: 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.5s ease',
        ...style
      }}
    >
      {children}
    </div>
  );
}
