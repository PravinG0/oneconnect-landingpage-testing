import React, { useEffect, useRef, useState } from 'react';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';
import { HERO } from '../../data/siteContent';

/**
 * The brand reel in a phone mock. It is a 9:16 clip, so the phone frame is the
 * natural container. Autoplay is muted (browsers block sound-on autoplay) and
 * is skipped entirely when the viewer prefers reduced motion - they get the
 * poster and a play button instead.
 */
export function BannerVideo() {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(true);
  const [muted, setMuted] = useState(true);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const reduceMotion =
      typeof window.matchMedia === 'function' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reduceMotion) {
      video.pause();
      setPlaying(false);
      return;
    }

    // Some browsers reject the autoplay promise; fall back to the play button.
    const attempt = video.play();
    if (attempt && typeof attempt.catch === 'function') {
      attempt.catch(() => setPlaying(false));
    }
  }, []);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play().then(() => setPlaying(true)).catch(() => setPlaying(false));
    } else {
      video.pause();
      setPlaying(false);
    }
  };

  const toggleSound = () => {
    const video = videoRef.current;
    if (!video) return;
    const next = !video.muted;
    video.muted = next;
    setMuted(next);
    if (!next && video.paused) togglePlay();
  };

  return (
    <div className="banner-phone">
      {/* Phone shell */}
      <div className="banner-phone__shell">
        <span className="banner-phone__notch" />

        <video
          ref={videoRef}
          className="banner-phone__screen"
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

        {/* Tap-anywhere play affordance while paused */}
        {!playing && (
          <button className="banner-phone__big-play" onClick={togglePlay} aria-label="Play video">
            <Play size={24} fill="#0d2b45" color="#0d2b45" />
          </button>
        )}
      </div>

      {/* Controls */}
      <div className="banner-phone__controls">
        <button onClick={togglePlay} aria-label={playing ? 'Pause video' : 'Play video'} className="banner-phone__btn">
          {playing ? <Pause size={15} /> : <Play size={15} />}
        </button>

        <button
          onClick={toggleSound}
          aria-label={muted ? 'Unmute video' : 'Mute video'}
          className="banner-phone__btn banner-phone__btn--wide"
        >
          {muted ? <VolumeX size={15} /> : <Volume2 size={15} />}
          <span>{muted ? 'Play with sound' : 'Sound on'}</span>
        </button>
      </div>
    </div>
  );
}
