import { footer } from "../content/portfolio-content";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p className="footer__text">{footer.text}</p>
      </div>
    </footer>
  );
}
