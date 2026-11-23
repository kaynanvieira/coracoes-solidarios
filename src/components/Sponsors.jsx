import { sponsors } from "../data/sponsors";
import { site } from "../data/site";
import "./Sponsors.css";

const mensagem = encodeURIComponent(
  "Olá! Tenho interesse em apoiar o projeto Corações Solidários."
);

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
                  <img
                    src={s.logo}
                    alt={s.name}
                    loading="lazy"
                    style={s.zoom ? { transform: `scale(${s.zoom})` } : undefined}
                  />
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
          href={`${site.whatsapp}?text=${mensagem}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Fale com a gente
        </a>
      </div>
    </section>
  );
}