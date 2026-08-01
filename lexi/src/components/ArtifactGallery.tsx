import { useEffect, useRef, useState, type ReactNode } from "react";
import type { EvidenceItem } from "../content/portfolio-content";
import { assetPath } from "../utils/assetPath";
import EvidenceLightbox from "./EvidenceLightbox";

export type EvidenceDetailContent = {
  panelTitle: string;
  content: ReactNode;
};

type EvidenceStageProps = {
  experienceId: string;
  items: readonly [EvidenceItem, EvidenceItem, EvidenceItem];
  detailContent?: Partial<Record<string, EvidenceDetailContent>>;
};

function getFocusable(container: HTMLElement): HTMLElement[] {
  return Array.from(
    container.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
    ),
  );
}

export default function EvidenceStage({ experienceId, items, detailContent }: EvidenceStageProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [panelOpen, setPanelOpen] = useState(false);
  const [failedIds, setFailedIds] = useState<Record<string, boolean>>({});
  const lastTriggerRef = useRef<HTMLButtonElement | null>(null);

  const activeItem = items[activeIndex];
  const activeDetail = detailContent?.[activeItem.id];

  const selectProof = (index: number) => {
    if (index === activeIndex) return;
    setActiveIndex(index);
  };

  const openDetail = (trigger: HTMLButtonElement | null) => {
    lastTriggerRef.current = trigger;

    if (activeItem.detailType === "lightbox") {
      setLightboxOpen(true);
    } else if (activeDetail) {
      setPanelOpen(true);
    }
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    lastTriggerRef.current?.focus();
  };

  const closePanel = () => {
    setPanelOpen(false);
    lastTriggerRef.current?.focus();
  };

  return (
    <div className="proof-stage" id={`${experienceId}-proof-stage`}>
      <span className="visually-hidden" role="status" aria-live="polite">
        {activeItem.title}
      </span>

      <div className="proof-stage__media">
        <div className="proof-stage__media-frame">
          {items.map((item, index) => (
            <div
              key={item.id}
              className="proof-stage__media-item"
              data-fit={item.fit}
              style={{ opacity: index === activeIndex ? 1 : 0, zIndex: index === activeIndex ? 1 : 0 }}
              aria-hidden={index === activeIndex ? undefined : true}
            >
              {failedIds[item.id] ? (
                <span className="proof-stage__media-fallback">{item.title}</span>
              ) : (
                <img
                  src={assetPath(item.image)}
                  alt={item.alt}
                  loading={index === 0 ? "eager" : "lazy"}
                  style={{
                    objectFit: item.fit,
                    objectPosition: item.fit === "cover" ? item.focalPosition ?? "center" : "center",
                  }}
                  onError={() => setFailedIds((current) => ({ ...current, [item.id]: true }))}
                />
              )}
            </div>
          ))}

          <button
            type="button"
            className="proof-stage__media-trigger"
            onClick={(event) => openDetail(event.currentTarget)}
            aria-label={`${activeItem.actionLabel ?? "Open"}: ${activeItem.title}`}
          />
        </div>
      </div>

      <div className="proof-stage__content">
        <div className="proof-stage__copy">
          <span className="proof-stage__title">{activeItem.title}</span>
          <p className="proof-stage__description">{activeItem.description}</p>
          {(activeItem.detailType !== "lightbox" ? !!activeDetail : true) && (
            <button
              type="button"
              className="proof-stage__action"
              onClick={(event) => openDetail(event.currentTarget)}
            >
              {activeItem.actionLabel ?? "View"}
            </button>
          )}
        </div>

        <div className="proof-stage__index" role="group" aria-label="Proof selection">
          {items.map((item, index) => {
            const isActive = index === activeIndex;
            return (
              <button
                key={item.id}
                type="button"
                className={`proof-stage__selector${isActive ? " proof-stage__selector--active" : ""}`}
                aria-current={isActive || undefined}
                onClick={() => selectProof(index)}
              >
                <span className="proof-stage__selector-ordinal">{String(index + 1).padStart(2, "0")}</span>
                <span className="proof-stage__selector-title">{item.title}</span>
              </button>
            );
          })}
        </div>
      </div>

      {lightboxOpen && <EvidenceLightbox item={activeItem} onClose={closeLightbox} />}

      {panelOpen && activeDetail && <EvidencePanel detail={activeDetail} onClose={closePanel} />}
    </div>
  );
}

function EvidencePanel({ detail, onClose }: { detail: EvidenceDetailContent; onClose: () => void }) {
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
        aria-label={detail.panelTitle}
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
        <h3 className="panel__title">{detail.panelTitle}</h3>
        {detail.content}
      </div>
    </div>
  );
}
