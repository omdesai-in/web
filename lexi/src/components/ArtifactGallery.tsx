import { useEffect, useRef, useState, type ReactNode } from "react";
import type { EvidenceItem } from "../content/portfolio-content";
import { assetPath } from "../utils/assetPath";
import EvidenceLightbox from "./EvidenceLightbox";

export type EvidenceExtra = {
  triggerLabel: string;
  panelTitle: string;
  content: ReactNode;
};

type ArtifactGalleryProps = {
  evidence: EvidenceItem[];
  extras?: (EvidenceExtra | null)[];
};

export default function ArtifactGallery({ evidence, extras }: ArtifactGalleryProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [activePanel, setActivePanel] = useState<number | null>(null);
  const imageTriggerRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const panelTriggerRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const lightboxTriggerRef = useRef<HTMLButtonElement | null>(null);
  const panelTriggerRef = useRef<HTMLButtonElement | null>(null);

  const closeLightbox = () => {
    setActiveIndex(null);
    lightboxTriggerRef.current?.focus();
  };

  const closePanel = () => {
    setActivePanel(null);
    panelTriggerRef.current?.focus();
  };

  return (
    <div className="evidence-gallery">
      {evidence.map((item, index) => {
        const extra = extras?.[index];

        return (
          <div className={`evidence-item evidence-item--${index + 1}`} key={item.title}>
            <button
              ref={(el) => {
                imageTriggerRefs.current[index] = el;
              }}
              type="button"
              className="evidence-item__trigger"
              onClick={() => {
                lightboxTriggerRef.current = imageTriggerRefs.current[index];
                setActiveIndex(index);
              }}
              aria-label={`Open full view: ${item.title}`}
            >
              <figure className="evidence-figure">
                <img
                  src={assetPath(item.image)}
                  alt={`${item.title}. ${item.caption}`}
                  loading="lazy"
                  width={1600}
                  height={index === 2 ? 900 : 1200}
                />
              </figure>
            </button>
            <figcaption className="evidence-caption">
              <span className="evidence-caption__title">{item.title}</span>
              <span className="evidence-caption__text">{item.caption}</span>
              {extra && (
                <button
                  ref={(el) => {
                    panelTriggerRefs.current[index] = el;
                  }}
                  type="button"
                  className="evidence-panel-trigger"
                  onClick={() => {
                    panelTriggerRef.current = panelTriggerRefs.current[index];
                    setActivePanel(index);
                  }}
                >
                  View {extra.triggerLabel}
                </button>
              )}
            </figcaption>
          </div>
        );
      })}

      {activeIndex !== null && (
        <EvidenceLightbox
          evidence={evidence}
          activeIndex={activeIndex}
          onClose={closeLightbox}
          onNavigate={setActiveIndex}
        />
      )}

      {activePanel !== null && extras?.[activePanel] && (
        <EvidencePanel extra={extras[activePanel]!} onClose={closePanel} />
      )}
    </div>
  );
}

function getFocusable(container: HTMLElement): HTMLElement[] {
  return Array.from(
    container.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
    ),
  );
}

function EvidencePanel({ extra, onClose }: { extra: EvidenceExtra; onClose: () => void }) {
  const sheetRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    closeButtonRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
        return;
      }

      if (event.key === "Tab" && sheetRef.current) {
        const focusable = getFocusable(sheetRef.current);
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
    <div className="panel__overlay" role="presentation" onClick={onClose}>
      <div
        ref={sheetRef}
        className="panel__sheet"
        role="dialog"
        aria-modal="true"
        aria-label={extra.panelTitle}
        onClick={(event) => event.stopPropagation()}
      >
        <button
          ref={closeButtonRef}
          type="button"
          className="panel__close"
          onClick={onClose}
          aria-label="Close panel"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
            <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
          </svg>
        </button>
        <h3 className="panel__title">{extra.panelTitle}</h3>
        {extra.content}
      </div>
    </div>
  );
}
