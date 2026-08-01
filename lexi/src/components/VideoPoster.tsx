import { useRef } from "react";
import { videos } from "../content/videos";
import { assetPath } from "../utils/assetPath";
import { isPlaceholderVideoUrl } from "../utils/youtube";

type VideoPosterProps = {
  videoKey: string;
  onOpen: (videoKey: string, trigger: HTMLElement | null) => void;
};

export default function VideoPoster({ videoKey, onOpen }: VideoPosterProps) {
  const video = videos[videoKey];
  const triggerRef = useRef<HTMLButtonElement>(null);
  const placeholder = isPlaceholderVideoUrl(video.youtubeUrl);

  const playIcon = (
    <svg viewBox="0 0 12 14" fill="currentColor" aria-hidden="true">
      <path d="M0 0l12 7-12 7z" />
    </svg>
  );

  if (placeholder) {
    return (
      <div className="video-poster video-poster--disabled" aria-label={`${video.title}. Video link to be added.`}>
        <img
          className="video-poster__image"
          src={assetPath(video.poster)}
          alt={`Poster for ${video.title}`}
          loading="lazy"
          width={1600}
          height={900}
        />
        <div className="video-poster__scrim" aria-hidden="true" />
        <div className="video-poster__controls">
          <span className="video-poster__play video-poster__play--disabled" aria-hidden="true">
            {playIcon}
          </span>
          <span className="video-poster__meta">
            <span className="video-poster__duration">{video.title}</span>
            <span className="video-poster__status">VIDEO LINK TO BE ADDED</span>
          </span>
        </div>
      </div>
    );
  }

  return (
    <button
      ref={triggerRef}
      type="button"
      className="video-poster"
      onClick={() => onOpen(videoKey, triggerRef.current)}
      aria-label={`Play video: ${video.title}`}
    >
      <img
        className="video-poster__image"
        src={assetPath(video.poster)}
        alt={`Poster for ${video.title}`}
        loading="lazy"
        width={1600}
        height={900}
      />
      <div className="video-poster__scrim" aria-hidden="true" />
      <div className="video-poster__controls">
        <span className="video-poster__play" aria-hidden="true">
          {playIcon}
        </span>
        <span className="video-poster__meta">
          <span className="video-poster__duration">{video.title}</span>
          <span className="video-poster__status">{video.durationLabel}</span>
        </span>
      </div>
    </button>
  );
}
