import React from 'react';
import { Reveal } from './Reveal';

/** Shared eyebrow + title + lead block so every section reads consistently. */
export function SectionHeading({ eyebrow, title, lead, align = 'center', maxWidth = '820px' }) {
  const isLeft = align === 'left';

  return (
    <Reveal
      className="section-head"
      style={{
        textAlign: isLeft ? 'left' : 'center',
        marginLeft: isLeft ? 0 : 'auto',
        marginRight: isLeft ? 0 : 'auto',
        maxWidth
      }}
    >
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2 className="section-title">{title}</h2>
      {lead && <p className="section-lead">{lead}</p>}
    </Reveal>
  );
}
