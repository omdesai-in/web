import { useRef } from "react";
import { hero } from "../content/portfolio-content";
import { videos } from "../content/videos";
import { assetPath } from "../utils/assetPath";
import { isPlaceholderVideoUrl } from "../utils/youtube";
import { useReveal } from "../utils/useReveal";

type HeroProps = {
  onOpenVideo: (videoKey: string, trigger: HTMLElement | null) => void;
};

export default function Hero({ onOpenVideo }: HeroProps) {
  const triggerRef = useRef<HTMLButtonElement>(null);
  const introVideo = videos[hero.secondaryAction.videoKey];
  const introIsPlaceholder = isPlaceholderVideoUrl(introVideo.youtubeUrl);
  const copyReveal = useReveal<HTMLDivElement>();

  return (
    <section className="hero" id="top">
      <img
        className="hero__background"
        src={assetPath(hero.image)}
        alt="Om Desai"
        fetchPriority="high"
        loading="eager"
        decoding="async"
      />
      <div className="hero__scrim" aria-hidden="true" />

      <div className="container hero__content">
        <div className="hero__copy" ref={copyReveal.ref} data-reveal={copyReveal.visible}>
          <span className="hero__eyebrow">{hero.eyebrow}</span>
          <h1 className="hero__headline">{hero.headline}</h1>
          <p className="hero__supporting">{hero.supporting}</p>

          <div className="hero__actions">
            <a className="button-primary" href={hero.primaryAction.href}>
              {hero.primaryAction.label}
            </a>

            <button
              ref={triggerRef}
              type="button"
              className={`hero__video-trigger${introIsPlaceholder ? " hero__video-trigger--disabled" : ""}`}
              onClick={
                introIsPlaceholder
                  ? undefined
                  : () => onOpenVideo(hero.secondaryAction.videoKey, triggerRef.current)
              }
              aria-disabled={introIsPlaceholder || undefined}
            >
              <span className="hero__video-trigger-icon" aria-hidden="true">
                <svg viewBox="0 0 12 14" fill="currentColor">
                  <path d="M0 0l12 7-12 7z" />
                </svg>
              </span>
              {introIsPlaceholder ? "VIDEO LINK TO BE ADDED" : hero.secondaryAction.label}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
