import { editions, stats } from "../data/editions";
import "./Impact.css";

export default function Impact() {
  return (
    <section className="impact" id="historia">
      <div className="container">
        <h2>Nossa história</h2>
        <p className="impact-intro">
          Tudo começou no Natal de 2024, com um grupo de amigos de Nova Friburgo e
          um propósito simples: levar carinho, presença e alegria em datas
          especiais para quem vive em abrigos da nossa cidade.
        </p>

        <ul className="impact-stats">
          {stats.map((s) => (
            <li key={s.rotulo}>
              <strong>{s.valor}</strong>
              <span>{s.rotulo}</span>
            </li>
          ))}
        </ul>

        <ol className="timeline">
          {editions.map((e) => (
            <li key={e.id} className="edition">
              <div className="edition-head">
                <span className={`badge badge-${e.tipo}`}>{e.titulo}</span>
                {e.andamento && (
                  <span className="edition-status">Em andamento</span>
                )}
              </div>
              <p className="edition-meta">
                <strong>{e.instituicao}</strong> · Meta: {e.meta}
              </p>
              <p>{e.resumo}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}