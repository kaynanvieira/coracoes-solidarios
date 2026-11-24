import { useEffect, useState } from "react";
import { editions, retrospectiva } from "../data/editions";
import VideoEmbed from "./VideoEmbed";
import "./Gallery.css";

const comFotos = editions.filter((e) => e.fotos && e.fotos.length > 0);

export default function Gallery() {
  const [ativaId, setAtivaId] = useState(comFotos[comFotos.length - 1].id);
  const [aberta, setAberta] = useState(null);
  const edicao = comFotos.find((e) => e.id === ativaId);

  useEffect(() => {
    if (!aberta) return;
    const fechar = (ev) => ev.key === "Escape" && setAberta(null);
    window.addEventListener("keydown", fechar);
    return () => window.removeEventListener("keydown", fechar);
  }, [aberta]);

  return (
    <section className="gallery" id="galeria">
      <div className="container">
        <h2>Galeria das edições</h2>
        <p className="gallery-intro">
          Alguns momentos de cada campanha. Preservamos sempre o rosto de quem
          atendemos.
        </p>

        {retrospectiva.video.id && (
          <div className="gallery-featured">
            <h3>{retrospectiva.titulo}</h3>
            <VideoEmbed
              id={retrospectiva.video.id}
              titulo={retrospectiva.titulo}
              vertical={retrospectiva.video.vertical}
            />
          </div>
        )}

        <div className="gallery-tabs" role="tablist">
          {comFotos.map((e) => (
            <button
              key={e.id}
              type="button"
              role="tab"
              aria-selected={e.id === ativaId}
              className={`gallery-tab ${e.id === ativaId ? "is-active" : ""}`}
              onClick={() => setAtivaId(e.id)}
            >
              {e.titulo}
            </button>
          ))}
        </div>

        {edicao.video && edicao.video.id && (
          <div className="gallery-video">
            <VideoEmbed
              id={edicao.video.id}
              titulo={`Resumo do ${edicao.titulo}`}
              vertical={edicao.video.vertical}
            />
          </div>
        )}

        <ul className="gallery-grid">
          {edicao.fotos.map((f, i) => {
            const src = `/images/edicoes/${edicao.id}/${f.arquivo}`;
            const alt = f.legenda || `${edicao.titulo}, foto ${i + 1}`;
            return (
              <li key={f.arquivo}>
                <button type="button" onClick={() => setAberta({ src, alt })}>
                  <img src={src} alt={alt} loading="lazy" />
                  {f.legenda && <span>{f.legenda}</span>}
                </button>
              </li>
            );
          })}
        </ul>
      </div>

      {aberta && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          onClick={() => setAberta(null)}
        >
          <img src={aberta.src} alt={aberta.alt} />
          <button type="button" className="lightbox-close" aria-label="Fechar">
            ×
          </button>
        </div>
      )}
    </section>
  );
}