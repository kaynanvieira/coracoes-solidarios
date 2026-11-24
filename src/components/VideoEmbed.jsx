import { useState } from "react";
import "./VideoEmbed.css";

export default function VideoEmbed({ id, titulo, vertical = false }) {
  const [ativo, setAtivo] = useState(false);
  const classe = `video ${vertical ? "video-vertical" : ""}`;

  if (ativo) {
    return (
      <div className={classe}>
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`}
          title={titulo}
          allow="autoplay; encrypted-media; picture-in-picture"
          allowFullScreen
        />
      </div>
    );
  }

  return (
    <button
      type="button"
      className={`${classe} video-poster`}
      onClick={() => setAtivo(true)}
      aria-label={`Assistir: ${titulo}`}
    >
      <img
        src={`https://i.ytimg.com/vi/${id}/hqdefault.jpg`}
        alt=""
        loading="lazy"
      />
      <span className="video-play">▶</span>
    </button>
  );
}