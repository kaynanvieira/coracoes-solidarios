import { site, whatsappLink } from "../data/site";
import "./Contact.css";

export default function Contact() {
  return (
    <footer className="contact" id="contato">
      <div className="container">
        <h2>Acompanhe o projeto</h2>
        <div className="contact-links">
          <a
            className="btn btn-dourado"
            href={whatsappLink("Olá! Vim pelo site do Corações Solidários.")}
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
        <hr className="contact-divider" />

        <div className="contact-bottom">
          <p className="contact-copy">
            © {new Date().getFullYear()} Corações Solidários. Todos os direitos
            reservados. · Nova Friburgo, RJ
          </p>
          <p className="contact-dev">
            Desenvolvido por{" "}
            <a
              href={site.developer.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {site.developer.name}
            </a>{" "}
            {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
}