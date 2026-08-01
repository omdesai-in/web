import { useEffect, useState } from "react";
import { navigation, identity } from "../content/portfolio-content";
import { assetPath } from "../utils/assetPath";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  return (
    <header className={`nav${scrolled ? " nav--scrolled" : ""}`}>
      <nav className="container nav__inner" aria-label="Primary">
        <a className="nav__home" href="#top">
          {navigation.home}
        </a>

        <div className="nav__links">
          {navigation.links.map((link) => (
            <a
              key={link.label}
              className="nav__link"
              href={link.kind === "asset" ? assetPath(link.href) : link.href}
              download={link.kind === "asset" ? true : undefined}
              aria-label={link.kind === "asset" ? `Download ${identity.name}'s resume` : undefined}
            >
              {link.label}
            </a>
          ))}
        </div>

        <button
          type="button"
          className="nav__menu-button"
          aria-expanded={menuOpen}
          aria-controls="mobile-nav-panel"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
              <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
            </svg>
          )}
        </button>
      </nav>

      {menuOpen && (
        <div id="mobile-nav-panel" className="nav__mobile-panel">
          {navigation.links.map((link) => (
            <a
              key={link.label}
              className="nav__link"
              href={link.kind === "asset" ? assetPath(link.href) : link.href}
              download={link.kind === "asset" ? true : undefined}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
