/**
 * Lightweight responsive embed for a YouTube or Vimeo video.
 *
 * Keeps large video files OUT of the site's deployment entirely — YouTube/Vimeo
 * handle hosting, compression, and bandwidth. Just pass the video's id (and
 * which provider it's from).
 *
 * Usage:
 *   <VideoEmbed provider="youtube" id="dQw4w9WgXcQ" title="Ekho Music Platform Demo" />
 *   <VideoEmbed provider="vimeo" id="76979871" title="UPS Renewable Energy Model Walkthrough" />
 *
 * Where to find the id:
 *   YouTube: the part after "v=" in the URL, e.g. youtube.com/watch?v=dQw4w9WgXcQ -> dQw4w9WgXcQ
 *            (or after youtu.be/ in a share link)
 *   Vimeo:   the number in the URL, e.g. vimeo.com/76979871 -> 76979871
 */
type VideoEmbedProps = {
  provider: "youtube" | "vimeo";
  id: string;
  title: string;
  className?: string;
};

export default function VideoEmbed({ provider, id, title, className }: VideoEmbedProps) {
  const src =
    provider === "youtube"
      ? `https://www.youtube-nocookie.com/embed/${id}`
      : `https://player.vimeo.com/video/${id}`;

  return (
    <div
      className={`relative w-full overflow-hidden rounded-lg border border-border shadow-md ${className ?? ""}`}
      style={{ aspectRatio: "16 / 9" }}
      data-testid={`video-embed-${provider}-${id}`}
    >
      <iframe
        src={src}
        title={title}
        className="absolute inset-0 h-full w-full"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        loading="lazy"
      />
    </div>
  );
}
