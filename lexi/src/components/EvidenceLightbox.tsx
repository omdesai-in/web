import { useEffect, useRef } from "react";
import type { EvidenceItem } from "../content/portfolio-content";
import { assetPath } from "../utils/assetPath";

type EvidenceLightboxProps = {
  evidence: EvidenceItem[];
  activeIndex: number;
  onClose: () => void;
  onNavigate: (index: number) => void;
};

function getFocusable(container: HTMLElement): HTMLElement[] {
  return Array.from(
    container.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
    ),
  );
}

export default function EvidenceLightbox({
  evidence,
  activeIndex,
  onClose,
  onNavigate,
}: EvidenceLightboxProps) {
  const panelRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const item = evidence[activeIndex];

  useEffect(() => {
    closeButtonRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
        return;
      }

      if (event.key === "ArrowRight") {
        onNavigate((activeIndex + 1) % evidence.length);
        return;
      }

      if (event.key === "ArrowLeft") {
        onNavigate((activeIndex - 1 + evidence.length) % evidence.length);
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
  }, [activeIndex, evidence.length, onClose, onNavigate]);

  return (
    <div className="lightbox__overlay" role="presentation" onClick={onClose}>
      <div
        className="lightbox__panel"
        role="dialog"
        aria-modal="true"
        aria-label={item.title}
        ref={panelRef}
        onClick={(event) => event.stopPropagation()}
      >
        <button
          ref={closeButtonRef}
          type="button"
          className="lightbox__close"
          onClick={onClose}
          aria-label="Close evidence viewer"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
            <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
          </svg>
        </button>

        {evidence.length > 1 && (
          <button
            type="button"
            className="lightbox__nav lightbox__nav--prev"
            onClick={() => onNavigate((activeIndex - 1 + evidence.length) % evidence.length)}
            aria-label="Previous evidence item"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
              <path d="M15 6l-6 6 6 6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        )}

        <div className="lightbox__image-wrap">
          <img src={assetPath(item.image)} alt={`${item.title}. ${item.caption}`} />
        </div>

        {evidence.length > 1 && (
          <button
            type="button"
            className="lightbox__nav lightbox__nav--next"
            onClick={() => onNavigate((activeIndex + 1) % evidence.length)}
            aria-label="Next evidence item"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
              <path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        )}

        <figcaption className="lightbox__caption">
          <span className="lightbox__caption-title">{item.title}</span>
          <span className="lightbox__caption-text">{item.caption}</span>
        </figcaption>
      </div>
    </div>
  );
}
