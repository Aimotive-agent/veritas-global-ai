"use client";

import { useCallback, useEffect, useRef, useState, useSyncExternalStore } from "react";

const reducedMotionQuery = "(prefers-reduced-motion: reduce)";

function subscribeReducedMotion(onChange: () => void) {
  const mq = window.matchMedia(reducedMotionQuery);
  mq.addEventListener("change", onChange);
  return () => mq.removeEventListener("change", onChange);
}

function getReducedMotion() {
  return window.matchMedia(reducedMotionQuery).matches;
}

/**
 * The Veritas Global AI brand film.
 *
 * Autoplays muted (browsers block audible autoplay), loops, and exposes
 * play/pause + mute controls so a visitor can turn the voiceover on.
 * Honours `prefers-reduced-motion`: if the visitor asked for less motion we
 * pause on the poster and let them start it themselves.
 */
export default function PromoFilm() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);
  const [playing, setPlaying] = useState(true);

  const reducedMotion = useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotion,
    () => false
  );

  // Track the element's real state rather than guessing — autoplay can be
  // refused (low power mode, data saver) and the button must stay honest.
  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;
    const onPlay = () => setPlaying(true);
    const onPause = () => setPlaying(false);
    el.addEventListener("play", onPlay);
    el.addEventListener("pause", onPause);
    return () => {
      el.removeEventListener("play", onPlay);
      el.removeEventListener("pause", onPause);
    };
  }, []);

  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;
    if (reducedMotion) {
      el.pause();
    } else {
      el.play().catch(() => {});
    }
  }, [reducedMotion]);

  const togglePlay = useCallback(() => {
    const el = videoRef.current;
    if (!el) return;
    if (el.paused) {
      el.play().catch(() => {});
    } else {
      el.pause();
    }
  }, []);

  const toggleMute = useCallback(() => {
    const el = videoRef.current;
    if (!el) return;
    el.muted = !el.muted;
    setMuted(el.muted);
  }, []);

  return (
    // The top padding clears the fixed navbar, which is transparent until you
    // scroll — so that strip has to stay light or the nav links vanish.
    <section className="relative bg-paper pt-16 md:pt-20" aria-label="Veritas Global AI brand film">
      <div className="relative bg-navy-deep">
        <video
          ref={videoRef}
          className="block w-full max-h-[76vh] object-contain mx-auto bg-navy-deep"
          src="/veritas-promo.mp4"
          poster="/veritas-promo-poster.jpg"
          autoPlay={!reducedMotion}
          muted={muted}
          loop
          playsInline
          preload="metadata"
        />

        <div className="absolute bottom-4 right-4 flex items-center gap-2">
          <button
            type="button"
            onClick={toggleMute}
            className="flex items-center gap-2 bg-navy/85 hover:bg-navy text-paper text-xs tracking-wide px-3 py-2 rounded-sm border border-white/15 transition-colors"
            aria-label={muted ? "Unmute the film" : "Mute the film"}
          >
            {muted ? (
              <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.6" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M11 5L6 9H2v6h4l5 4V5z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M22 9l-6 6M16 9l6 6" />
              </svg>
            ) : (
              <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.6" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M11 5L6 9H2v6h4l5 4V5z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.5 8.5a5 5 0 010 7M18.5 5.5a9 9 0 010 13" />
              </svg>
            )}
            {muted ? "Watch with sound" : "Sound on"}
          </button>

          <button
            type="button"
            onClick={togglePlay}
            className="flex items-center justify-center w-8 h-8 bg-navy/85 hover:bg-navy text-paper rounded-sm border border-white/15 transition-colors"
            aria-label={playing ? "Pause the film" : "Play the film"}
          >
            {playing ? (
              <svg width="12" height="12" fill="currentColor" viewBox="0 0 24 24">
                <path d="M7 5h4v14H7zM13 5h4v14h-4z" />
              </svg>
            ) : (
              <svg width="12" height="12" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5l11 7-11 7V5z" />
              </svg>
            )}
          </button>
        </div>
      </div>
    </section>
  );
}
