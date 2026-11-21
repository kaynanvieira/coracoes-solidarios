import PixCopy from "./PixCopy";
import { site } from "../data/site";
import "./HowToHelp.css";

export default function HowToHelp() {
  return (
    <section className="help" id="como-ajudar">
      <div className="container">
        <h2>Como ajudar</h2>
        <p className="help-intro">
          Qualquer valor ajuda. Tudo o que arrecadamos vira doces, festa e carinho
          para quem mais precisa.
        </p>

        <div className="help-card">
          <img
            className="help-qr"
            src="/images/qr-pix.png"
            alt="QR Code para doar via Pix"
            width="200"
            height="200"
          />

          <div className="help-info">
            <span className="help-label">Chave Pix</span>
            <strong className="help-key">{site.pix.keyDisplay}</strong>
            <span className="help-holder">
              {site.pix.holder} · {site.pix.bank}
            </span>
            <PixCopy pixKey={site.pix.key} />
          </div>
        </div>

        <p className="help-note">
          Também aceitamos doações físicas de panetones, ovos de Páscoa e caixas de
          bombom. <a href={site.whatsapp}>Fale com a gente pelo WhatsApp</a> para
          combinar a entrega.
        </p>
      </div>
    </section>
  );
}