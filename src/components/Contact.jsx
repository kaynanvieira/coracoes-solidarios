import { site } from "../data/site";
import "./Contact.css";

export default function Contact() {
  return (
    <footer className="contact" id="contato">
      <div className="container">
        <h2>Fale com a gente</h2>
        <div className="contact-links">
          <a
            className="btn btn-dourado"
            href={site.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp
          </a>
          <a
            className="btn contact-outline"
            href={site.instagram}
            target="_blank"
            rel="noopener noreferrer"
          >
            @coracoesssolidarios
          </a>
        </div>
        <p className="contact-copy">
          © {new Date().getFullYear()} Corações Solidários · Nova Friburgo, RJ
        </p>
      </div>
    </footer>
  );
}