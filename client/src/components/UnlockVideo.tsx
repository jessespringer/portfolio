import { useEffect, useRef, useState } from "react";

/**
 * Short, muted, looping demo clip for an "Unlock" card.
 *
 * - Lazy: nothing is downloaded until the card scrolls near the viewport
 *   (preload="none" + IntersectionObserver), and the loop pauses off-screen.
 * - Respects prefers-reduced-motion: the clip never autoplays, the poster stays
 *   up, and native controls let the visitor play it on purpose.
 * - Keep files small: 3–8 s, no audio track, MP4 (H.264, +faststart) ≤ 2 MB,
 *   WebM (VP9) ≤ 1.5 MB, poster JPG ≤ 150 KB, in client/public/assets/unlocks/.
 */
type UnlockVideoProps = {
  mp4: string;
  webm?: string;
  poster: string;
  alt: string;
  testId?: string;
};

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(() =>
    typeof window !== "undefined" && typeof window.matchMedia === "function"
      ? window.matchMedia("(prefers-reduced-motion: reduce)").matches
      : false
  );
  useEffect(() => {
    if (typeof window.matchMedia !== "function") return;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = () => setReduced(mq.matches);
    mq.addEventListener?.("change", onChange);
    return () => mq.removeEventListener?.("change", onChange);
  }, []);
  return reduced;
}

export default function UnlockVideo({ mp4, webm, poster, alt, testId }: UnlockVideoProps) {
  const ref = useRef<HTMLVideoElement>(null);
  const reducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    if (reducedMotion) {
      video.pause();
      return;
    }
    if (typeof IntersectionObserver === "undefined") {
      video.play().catch(() => {});
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { rootMargin: "200px 0px", threshold: 0.25 }
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, [reducedMotion]);

  return (
    <video
      ref={ref}
      loop
      muted
      playsInline
      preload="none"
      poster={poster}
      controls={reducedMotion}
      aria-label={alt}
      title={alt}
      className="w-full aspect-video rounded-lg border border-border shadow-md bg-muted object-cover"
      data-testid={testId}
    >
      {webm && <source src={webm} type="video/webm" />}
      <source src={mp4} type="video/mp4" />
    </video>
  );
}
