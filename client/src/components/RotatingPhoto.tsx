import { useEffect, useState } from "react";

type Photo = {
  src: string;
  alt: string;
};

type RotatingPhotoProps = {
  photos: Photo[];
  className?: string;
  intervalMs?: number;
};

/**
 * Cycles through a set of photos with a smooth crossfade blend — the same
 * fading-transition feel used for the real-photo -> AI-persona reveal on the
 * Creative pages (see index.css: animate-real-fade / animate-ai-reveal),
 * generalized here to any number of plain photos (no glitch overlay).
 *
 * Usage:
 *   <RotatingPhoto
 *     photos={[{ src: "/a.jpg", alt: "..." }, { src: "/b.jpg", alt: "..." }]}
 *     className="w-48 h-48 rounded-full border-4 border-border shadow-lg"
 *   />
 */
export default function RotatingPhoto({ photos, className, intervalMs = 4500 }: RotatingPhotoProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (photos.length <= 1) return;
    const id = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % photos.length);
    }, intervalMs);
    return () => clearInterval(id);
  }, [photos.length, intervalMs]);

  return (
    <div className={`relative overflow-hidden ${className ?? ""}`} data-testid="rotating-photo">
      {photos.map((photo, index) => (
        <img
          key={photo.src}
          src={photo.src}
          alt={photo.alt}
          className="absolute inset-0 w-full h-full object-cover transition-opacity ease-in-out"
          style={{ opacity: index === activeIndex ? 1 : 0, transitionDuration: "1500ms" }}
        />
      ))}
    </div>
  );
}
