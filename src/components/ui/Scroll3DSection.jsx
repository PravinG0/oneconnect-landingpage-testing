import React, { useEffect, useRef, useState } from 'react';

export function Scroll3DSection({ children, id, className = '', style = {} }) {
  const sectionRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Calculate relative scroll progress for this section (-1 when below, 0 when centered, +1 when above)
      const progress = (rect.top + rect.height / 2 - windowHeight / 2) / windowHeight;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 3D Spatial Scroll Transforms (Rotation, Z-depth translation, and Opacity)
  const rotateX = Math.max(-12, Math.min(12, scrollProgress * 14));
  const translateZ = Math.max(-120, Math.min(40, -Math.abs(scrollProgress) * 100));
  const opacity = Math.max(0.2, 1 - Math.abs(scrollProgress) * 0.7);

  return (
    <div
      ref={sectionRef}
      id={id}
      className={`spatial-card-3d ${className}`}
      style={{
        transform: `perspective(1200px) rotateX(${rotateX}deg) translateZ(${translateZ}px)`,
        opacity: opacity,
        transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.4s ease',
        transformStyle: 'preserve-3d',
        ...style
      }}
    >
      {children}
    </div>
  );
}
