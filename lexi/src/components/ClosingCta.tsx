import { closing } from "../content/portfolio-content";
import { assetPath } from "../utils/assetPath";

export default function ClosingCta() {
  return (
    <section className="closing" id="contact">
      <div className="container">
        <h2 className="closing__headline">{closing.headline}</h2>

        <div className="closing__actions">
          {closing.actions.map((action) => (
            <a
              key={action.label}
              className={`closing__action${action.kind === "asset" ? " closing__action--primary" : ""}`}
              href={action.kind === "asset" ? assetPath(action.href) : action.href}
              download={action.kind === "asset" ? true : undefined}
              target={action.kind === "external" && action.href.startsWith("http") ? "_blank" : undefined}
              rel={action.kind === "external" && action.href.startsWith("http") ? "noreferrer noopener" : undefined}
            >
              {action.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
