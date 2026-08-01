import { provenResults } from "../content/portfolio-content";

export default function ProvenResults() {
  return (
    <section className="section" id="proven-results">
      <div className="container">
        <div className="section__header">
          <div className="section__marker">
            <span className="section__dot" aria-hidden="true" />
            <span className="label">{provenResults.marker}</span>
          </div>
          <h2 className="section__headline">{provenResults.headline}</h2>
          <p className="section__supporting">{provenResults.supporting}</p>
        </div>

        <div className="metrics">
          {provenResults.metrics.map((metric) => (
            <a className="metric" key={metric.descriptor} href={metric.linkTarget}>
              <span className="metric__value">{metric.value}</span>
              <span className="metric__descriptor">{metric.descriptor}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
