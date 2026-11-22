import { sponsors } from "../data/sponsors";
import { site } from "../data/site";
import "./Sponsors.css";

const mensagem = encodeURIComponent(
  "Olá! Tenho interesse em apoiar o projeto Corações Solidários."
);

export default function Sponsors() {
  return (
    <section className="sponsors" id="patrocinadores">
      <div className="container">
        <h2>Quem apoia o projeto</h2>
        <p className="sponsors-intro">
          Empresas de Nova Friburgo que acreditam no que fazemos e ajudam a levar
          mais carinho aos abrigos da cidade.
        </p>

        {sponsors.length > 0 && (
          <ul className="sponsors-grid">
            {sponsors.map((s) => (
              <li key={s.name}>
                <a href={s.url} target="_blank" rel="noopener noreferrer">
                  <img src={s.logo} alt={s.name} loading="lazy" />
                </a>
              </li>
            ))}
          </ul>
        )}

        <p className="sponsors-cta-text">
          Quer ver a marca da sua empresa aqui? Fale com a gente.
        </p>
        <a
          className="btn btn-dourado"
          href={`${site.whatsapp}?text=${mensagem}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Quero apoiar o projeto
        </a>
      </div>
    </section>
  );
}