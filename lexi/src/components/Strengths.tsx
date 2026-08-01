import { strengths } from "../content/portfolio-content";
import { assetPath } from "../utils/assetPath";
import { useReveal } from "../utils/useReveal";

export default function Strengths() {
  const headerReveal = useReveal<HTMLDivElement>();

  return (
    <section className="section" id="how-i-work">
      <div className="container">
        <div className="section__header" ref={headerReveal.ref} data-reveal={headerReveal.visible}>
          <div className="section__marker">
            <span className="section__dot" aria-hidden="true" />
            <span className="label">{strengths.marker}</span>
          </div>
          <h2 className="section__headline">{strengths.headline}</h2>
          <p className="section__supporting">{strengths.supporting}</p>
        </div>

        <div className="strengths__grid">
          {strengths.items.map((item) => (
            <div className="strengths__item" key={item.id}>
              <img
                className="strengths__vector"
                src={assetPath(item.vector)}
                alt=""
                aria-hidden="true"
                width={64}
                height={64}
                loading="lazy"
              />
              <h3 className="strengths__title">{item.title}</h3>
              <p className="strengths__copy">{item.copy}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
