import { sponsors } from "../data/sponsors";
import { site } from "../data/site";
import "./Sponsors.css";

import { whatsappLink } from "../data/site";

export default function Sponsors() {
  const ativos = sponsors.filter((s) => s.ativo);

  return (
    <section className="sponsors" id="patrocinadores">
      <div className="container">
        <h2>Quem apoia o projeto</h2>
        <p className="sponsors-intro">
          Empresas de Nova Friburgo que acreditam no que fazemos e ajudam a levar
          mais carinho aos abrigos da cidade.
        </p>

                {ativos.length > 0 && (
          <ul className="sponsors-grid">
            {ativos.map((s) => (
              <li key={s.name}>
                                <a
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={s.name}
                >
                  <img src={s.logo} alt={s.name} loading="lazy" />
                  <svg
                    className="sponsor-link-icon"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M7 17 17 7" />
                    <path d="M8 7h9v9" />
                  </svg>
                  <span className="sr-only">(abre em nova aba)</span>
                </a>
              </li>
            ))}
          </ul>
        )}

        <p className="sponsors-cta-text">
          Quer apoiar o projeto e ver a marca da sua empresa aqui?
        </p>
        <a
          className="btn btn-dourado"
          href={whatsappLink(
            "Olá! Vim pelo site do Corações Solidários e tenho interesse em apoiar o projeto."
          )}
          target="_blank"
          rel="noopener noreferrer"
        >
          Fale com a gente
        </a>
      </div>
    </section>
  );
}