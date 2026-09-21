import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, Play, Pause, Volume2, VolumeX } from 'lucide-react';
import { HERO } from '../../src/data/siteContent';
import { D2Reveal } from './D2Reveal';

/** Circular stamp with text set around the ring - the hero's signature mark. */
function Stamp() {
  return (
    <div className="d2-stamp d2-hero__stamp">
      <svg className="d2-stamp__ring" viewBox="0 0 128 128" aria-hidden="true">
        <defs>
          <path id="d2-stamp-path" d="M64,64 m-46,0 a46,46 0 1,1 92,0 a46,46 0 1,1 -92,0" />
        </defs>
        <text>
          <textPath href="#d2-stamp-path" startOffset="0%">
            One place · Leads · Customers · Follow-ups · Pipeline ·
          </textPath>
        </text>
      </svg>

      <span
        style={{
          fontFamily: 'var(--disp)',
          fontWeight: 800,
          fontSize: '1.5rem',
          lineHeight: 0.9,
          textAlign: 'center',
          letterSpacing: '-0.04em'
        }}
      >
        38
        <br />
        <span style={{ fontFamily: 'var(--mono)', fontSize: '0.5rem', letterSpacing: '0.18em', fontWeight: 500 }}>
          SEC
        </span>
      </span>
    </div>
  );
}

export function D2Hero({ onOpenDemo, onOpenTrial }) {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(true);
  const [muted, setMuted] = useState(true);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const reduced =
      typeof window.matchMedia === 'function' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reduced) {
      video.pause();
      setPlaying(false);
      return;
    }

    const attempt = video.play();
    if (attempt && typeof attempt.catch === 'function') attempt.catch(() => setPlaying(false));
  }, []);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) video.play().then(() => setPlaying(true)).catch(() => setPlaying(false));
    else {
      video.pause();
      setPlaying(false);
    }
  };

  const toggleSound = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setMuted(video.muted);
  };

  return (
    <section className="d2-hero">
      <div className="d2-wrap">
        <div className="d2-hero__grid">
          {/* ---------------- copy ---------------- */}
          <div>
            <D2Reveal>
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '30px' }}>
                <span className="d2-tab d2-tab--ink">{HERO.eyebrow}</span>
                <span style={{ flex: 1, height: '1.5px', background: 'var(--ink)' }} />
              </div>
            </D2Reveal>

            <D2Reveal delay={60}>
              <h1 className="d2-disp">
                {HERO.heading}
                <br />
                <span style={{ color: 'var(--clay)' }}>{HERO.headingAccent}</span>
              </h1>
            </D2Reveal>

            <D2Reveal delay={120}>
              <p className="d2-lead" style={{ maxWidth: '520px', marginTop: '30px' }}>
                {HERO.subheading}
              </p>
            </D2Reveal>

            <D2Reveal delay={180}>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', marginTop: '38px' }}>
                <button className="d2-btn" onClick={onOpenDemo}>
                  Book a demo <ArrowRight size={15} />
                </button>
                <button className="d2-btn d2-btn--paper" onClick={onOpenTrial}>
                  Start free trial
                </button>
              </div>
            </D2Reveal>
          </div>

          {/* ---------------- reel ---------------- */}
          <D2Reveal delay={140} className="d2-hero__reel">
            <div className="d2-reelframe">
              <video
                ref={videoRef}
                className="d2-reelvid"
                src={HERO.video.src}
                poster={HERO.video.poster}
                aria-label={HERO.video.label}
                muted
                loop
                playsInline
                preload="metadata"
                onPlay={() => setPlaying(true)}
                onPause={() => setPlaying(false)}
              />

              <div className="d2-reelbar">
                <span className="d2-mono d2-mono--ink" style={{ fontSize: '0.6rem' }}>
                  Reel / 00:38
                </span>

                <span style={{ display: 'flex', gap: '7px' }}>
                  <button className="d2-reelbtn" onClick={togglePlay} aria-label={playing ? 'Pause video' : 'Play video'}>
                    {playing ? <Pause size={12} /> : <Play size={12} />}
                  </button>
                  <button className="d2-reelbtn" onClick={toggleSound} aria-label={muted ? 'Unmute video' : 'Mute video'}>
                    {muted ? <VolumeX size={12} /> : <Volume2 size={12} />}
                    {muted ? 'Sound off' : 'Sound on'}
                  </button>
                </span>
              </div>
            </div>

            <Stamp />
          </D2Reveal>
        </div>

        {/* ---------------- pipeline figures as a printed ledger ---------------- */}
        <D2Reveal delay={200}>
          <div className="d2-strip">
            {HERO.pipelinePreview.stages.map((stage) => (
              <div key={stage.name} className="d2-strip__cell">
                <div className="d2-strip__fig">{stage.count}</div>
                <div className="d2-mono" style={{ marginTop: '8px', color: 'inherit', opacity: 0.72 }}>
                  {stage.name}
                </div>
              </div>
            ))}
          </div>

          <p className="d2-mono" style={{ marginTop: '14px' }}>
            {HERO.pipelinePreview.label} — illustrative figures
          </p>
        </D2Reveal>
      </div>
    </section>
  );
}
