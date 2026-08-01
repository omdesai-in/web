import { useEffect, useRef } from "react";
import { videos } from "../content/videos";
import { extractYouTubeId, buildPrivacyEmbedUrl } from "../utils/youtube";

type VideoModalProps = {
  videoKey: string;
  onClose: () => void;
};

function getFocusable(container: HTMLElement): HTMLElement[] {
  return Array.from(
    container.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
    ),
  );
}

export default function VideoModal({ videoKey, onClose }: VideoModalProps) {
  const video = videos[videoKey];
  const panelRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const videoId = extractYouTubeId(video.youtubeUrl);

  useEffect(() => {
    closeButtonRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.stopPropagation();
        onClose();
        return;
      }

      if (event.key === "Tab" && panelRef.current) {
        const focusable = getFocusable(panelRef.current);
        if (focusable.length === 0) return;

        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div className="video-modal__overlay" role="presentation" onClick={onClose}>
      <div
        className="video-modal__panel"
        role="dialog"
        aria-modal="true"
        aria-label={video.title}
        ref={panelRef}
        onClick={(event) => event.stopPropagation()}
      >
        <button
          ref={closeButtonRef}
          type="button"
          className="video-modal__close"
          onClick={onClose}
          aria-label="Close video"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
            <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
          </svg>
        </button>

        <div className="video-modal__frame-wrap">
          {videoId && (
            <iframe
              src={buildPrivacyEmbedUrl(videoId)}
              title={video.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          )}
        </div>

        <div className="video-modal__footer">
          <span className="video-modal__title">{video.title}</span>
          {videoId && (
            <a
              className="video-modal__youtube-link"
              href={video.youtubeUrl}
              target="_blank"
              rel="noreferrer noopener"
            >
              Watch on YouTube
            </a>
          )}
        </div>

        {video.transcript && <p className="video-modal__transcript">{video.transcript}</p>}
      </div>
    </div>
  );
}
