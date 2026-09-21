import React from 'react';

/* ------------------------------------------------------------------ *
 * Line-art schematics, one per module. These are drawings of the idea,
 * not screenshots of the product - design 1 already shows UI mockups.
 * Everything is ink strokes on paper with a single clay highlight.
 * ------------------------------------------------------------------ */

const INK = '#15211d';
const CLAY = '#d0522a';
const TEAL = '#0b5c50';
const SAND = '#e8d6ae';

function Frame({ children, label }) {
  return (
    <figure style={{ width: '100%', maxWidth: '360px' }}>
      <svg viewBox="0 0 300 220" width="100%" role="img" aria-label={label} style={{ display: 'block' }}>
        {children}
      </svg>
      <figcaption
        style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: '0.6rem',
          letterSpacing: '0.18em',
          textTransform: 'uppercase',
          color: '#6d7a74',
          marginTop: '14px',
          textAlign: 'center'
        }}
      >
        Fig. {label}
      </figcaption>
    </figure>
  );
}

const stroke = { stroke: INK, strokeWidth: 1.4, fill: 'none' };

/* 01 - scattered leads funnelled into one column */
function LeadsArt() {
  return (
    <Frame label="01 / lead intake">
      {[18, 58, 98].map((y, i) => (
        <g key={y}>
          <rect x="12" y={y} width="72" height="26" {...stroke} transform={`rotate(${i === 1 ? -2 : 1.5} 48 ${y + 13})`} />
          <line x1="22" y1={y + 13} x2="62" y2={y + 13} stroke={INK} strokeWidth="1" strokeDasharray="3 3" />
        </g>
      ))}
      <path d="M92 31 C130 31 130 110 168 110" {...stroke} />
      <path d="M92 71 C130 71 130 110 168 110" {...stroke} />
      <path d="M92 111 H168" {...stroke} />
      <path d="M92 151 C130 151 130 110 168 110" {...stroke} />
      <rect x="12" y="138" width="72" height="26" {...stroke} transform="rotate(-1.5 48 151)" />
      <line x1="22" y1="151" x2="62" y2="151" stroke={INK} strokeWidth="1" strokeDasharray="3 3" />
      <rect x="168" y="62" width="112" height="96" fill={SAND} stroke={INK} strokeWidth="1.4" />
      {[80, 102, 124, 146].map((y) => (
        <line key={y} x1="182" y1={y} x2="266" y2={y} stroke={INK} strokeWidth="1" />
      ))}
      <circle cx="176" cy="110" r="4" fill={CLAY} />
    </Frame>
  );
}

/* 02 - pipeline columns, stage by stage */
function PipelineArt() {
  const cols = [
    { x: 16, h: 130 },
    { x: 86, h: 104 },
    { x: 156, h: 74 },
    { x: 226, h: 44 }
  ];
  return (
    <Frame label="02 / pipeline stages">
      {cols.map((c, i) => (
        <g key={c.x}>
          <rect x={c.x} y={180 - c.h} width="58" height={c.h} {...stroke} fill={i === 3 ? TEAL : 'none'} />
          {Array.from({ length: Math.floor(c.h / 26) }).map((_, r) => (
            <line
              key={r}
              x1={c.x}
              y1={180 - c.h + 26 * (r + 1)}
              x2={c.x + 58}
              y2={180 - c.h + 26 * (r + 1)}
              stroke={i === 3 ? SAND : INK}
              strokeWidth="1"
            />
          ))}
          <line x1={c.x} y1="192" x2={c.x + 58} y2="192" stroke={INK} strokeWidth="1.4" />
          <circle cx={c.x + 29} cy="204" r="3" fill={i === 3 ? CLAY : INK} />
        </g>
      ))}
      <path d="M74 36 H86" {...stroke} markerEnd="" />
      <path d="M144 62 H156" {...stroke} />
      <path d="M214 92 H226" {...stroke} />
    </Frame>
  );
}

/* 03 - a week of follow-ups, one flagged */
function FollowUpArt() {
  return (
    <Frame label="03 / follow-up calendar">
      <rect x="14" y="16" width="272" height="188" {...stroke} />
      <line x1="14" y1="48" x2="286" y2="48" {...stroke} />
      {[82, 150, 218].map((x) => (
        <line key={x} x1={x} y1="16" x2={x} y2="204" stroke={INK} strokeWidth="1" />
      ))}
      {[87, 126, 165].map((y) => (
        <line key={y} x1="14" y1={y} x2="286" y2={y} stroke={INK} strokeWidth="1" />
      ))}
      <rect x="84" y="89" width="64" height="35" fill={CLAY} />
      <line x1="94" y1="101" x2="138" y2="101" stroke="#f7f3ea" strokeWidth="1.4" />
      <line x1="94" y1="111" x2="122" y2="111" stroke="#f7f3ea" strokeWidth="1.4" />
      {[[22, 60], [90, 60], [158, 60], [226, 60], [22, 138], [158, 138], [226, 138], [22, 177], [90, 177]].map(([x, y]) => (
        <g key={`${x}-${y}`}>
          <line x1={x} y1={y} x2={x + 46} y2={y} stroke={INK} strokeWidth="1" />
          <line x1={x} y1={y + 9} x2={x + 28} y2={y + 9} stroke={INK} strokeWidth="1" opacity="0.5" />
        </g>
      ))}
      <circle cx="152" cy="89" r="5" fill="none" stroke={INK} strokeWidth="1.4" />
    </Frame>
  );
}

/* 04 - one customer record, everything attached */
function RecordArt() {
  return (
    <Frame label="04 / customer record">
      <circle cx="150" cy="110" r="34" fill={SAND} stroke={INK} strokeWidth="1.4" />
      <circle cx="150" cy="100" r="10" {...stroke} />
      <path d="M134 126 Q150 112 166 126" {...stroke} />
      {[
        [150, 26, 'M150 76 V26'],
        [58, 62, 'M120 92 L58 62'],
        [242, 62, 'M180 92 L242 62'],
        [58, 168, 'M120 130 L58 168'],
        [242, 168, 'M180 130 L242 168'],
        [150, 196, 'M150 144 V196']
      ].map(([cx, cy, d]) => (
        <g key={`${cx}-${cy}`}>
          <path d={d} stroke={INK} strokeWidth="1" strokeDasharray="4 4" fill="none" />
          <rect x={cx - 30} y={cy - 13} width="60" height="26" {...stroke} fill="#f7f3ea" />
          <line x1={cx - 20} y1={cy} x2={cx + 20} y2={cy} stroke={INK} strokeWidth="1" />
        </g>
      ))}
      <circle cx="150" cy="26" r="3" fill={CLAY} />
    </Frame>
  );
}

/* 05 - trigger fans out into automated actions */
function AutomationArt() {
  return (
    <Frame label="05 / automation flow">
      <rect x="14" y="88" width="76" height="44" fill={TEAL} stroke={INK} strokeWidth="1.4" />
      <path d="M34 100 l10 10 l-10 10" stroke={SAND} strokeWidth="1.6" fill="none" />
      <line x1="54" y1="110" x2="70" y2="110" stroke={SAND} strokeWidth="1.6" />
      {[38, 110, 182].map((y, i) => (
        <g key={y}>
          <path d={`M90 110 C126 110 126 ${y + 16} 162 ${y + 16}`} {...stroke} />
          <rect x="162" y={y} width="122" height="32" {...stroke} fill={i === 0 ? '#f7f3ea' : 'none'} />
          <line x1="176" y1={y + 12} x2="252" y2={y + 12} stroke={INK} strokeWidth="1" />
          <line x1="176" y1={y + 21} x2="222" y2={y + 21} stroke={INK} strokeWidth="1" opacity="0.5" />
          <circle cx="156" cy={y + 16} r="3.5" fill={CLAY} />
        </g>
      ))}
    </Frame>
  );
}

/* 06 - manager's view over the team */
function ManagerArt() {
  return (
    <Frame label="06 / team overview">
      <rect x="14" y="16" width="272" height="60" {...stroke} />
      {[105, 196].map((x) => (
        <line key={x} x1={x} y1="16" x2={x} y2="76" stroke={INK} strokeWidth="1" />
      ))}
      {[50, 141, 232].map((x, i) => (
        <text
          key={x}
          x={x}
          y="54"
          textAnchor="middle"
          fontFamily="'Bricolage Grotesque', sans-serif"
          fontSize="22"
          fontWeight="800"
          fill={i === 2 ? CLAY : INK}
        >
          {['128', '46', '07'][i]}
        </text>
      ))}
      {[
        [30, 44], [70, 66], [110, 30], [150, 82], [190, 58], [230, 96], [262, 72]
      ].map(([x, h], i) => (
        <rect key={x} x={x} y={196 - h} width="24" height={h} {...stroke} fill={i === 5 ? TEAL : 'none'} />
      ))}
      <line x1="14" y1="196" x2="286" y2="196" stroke={INK} strokeWidth="1.4" />
    </Frame>
  );
}

/* 07 - trend line with a plotted reading */
function ReportArt() {
  return (
    <Frame label="07 / performance trend">
      <line x1="30" y1="20" x2="30" y2="184" stroke={INK} strokeWidth="1.4" />
      <line x1="30" y1="184" x2="284" y2="184" stroke={INK} strokeWidth="1.4" />
      {[60, 105, 150].map((y) => (
        <line key={y} x1="30" y1={y} x2="284" y2={y} stroke={INK} strokeWidth="1" strokeDasharray="3 5" opacity="0.5" />
      ))}
      <path d="M30 160 C70 150 82 118 116 112 C152 106 160 74 196 66 C232 58 246 44 284 34" stroke={CLAY} strokeWidth="2" fill="none" />
      {[[30, 160], [116, 112], [196, 66], [284, 34]].map(([cx, cy]) => (
        <circle key={cx} cx={cx} cy={cy} r="4" fill="#f7f3ea" stroke={INK} strokeWidth="1.4" />
      ))}
      <rect x="196" y="36" width="58" height="22" fill={SAND} stroke={INK} strokeWidth="1.2" />
      <line x1="206" y1="47" x2="244" y2="47" stroke={INK} strokeWidth="1" />
    </Frame>
  );
}

/* 08 - the same record, reachable from anywhere */
function CloudArt() {
  return (
    <Frame label="08 / anywhere access">
      <path
        d="M96 78 a30 30 0 0 1 58-10 a26 26 0 0 1 44 20 a24 24 0 0 1 -6 47 H104 a26 26 0 0 1 -8 -57 Z"
        fill={SAND}
        stroke={INK}
        strokeWidth="1.4"
      />
      <line x1="150" y1="135" x2="150" y2="150" stroke={INK} strokeWidth="1" strokeDasharray="4 4" />
      <path d="M60 150 H240" stroke={INK} strokeWidth="1" strokeDasharray="4 4" />
      <path d="M60 150 V162 M150 150 V162 M240 150 V162" stroke={INK} strokeWidth="1" strokeDasharray="4 4" />
      <rect x="28" y="162" width="64" height="42" {...stroke} />
      <line x1="40" y1="176" x2="80" y2="176" stroke={INK} strokeWidth="1" />
      <line x1="40" y1="186" x2="68" y2="186" stroke={INK} strokeWidth="1" opacity="0.5" />
      <rect x="134" y="162" width="32" height="48" {...stroke} />
      <line x1="142" y1="174" x2="158" y2="174" stroke={INK} strokeWidth="1" />
      <rect x="208" y="162" width="64" height="42" {...stroke} />
      <line x1="220" y1="176" x2="260" y2="176" stroke={INK} strokeWidth="1" />
      <circle cx="150" cy="96" r="5" fill={CLAY} />
    </Frame>
  );
}

const ART = {
  'lead-management': LeadsArt,
  'sales-pipeline': PipelineArt,
  'follow-up-management': FollowUpArt,
  'customer-management': RecordArt,
  automation: AutomationArt,
  'sales-management': ManagerArt,
  reporting: ReportArt,
  'cloud-crm': CloudArt
};

export function D2Schematic({ id }) {
  const Art = ART[id];
  return Art ? <Art /> : null;
}
