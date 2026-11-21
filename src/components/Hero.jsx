import Thermometer from "./Thermometer";
import { campaign } from "../data/campaign";
import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="container hero-content">
        <p className="hero-eyebrow">{campaign.name}</p>
        <h1>
          {campaign.headline} <em>{campaign.headlineDestaque}</em>
        </h1>
        <p className="hero-sub">
          Nossa meta é levar <strong>{campaign.goal} {campaign.itemLabel}</strong> para
          a {campaign.institution}.
        </p>

        <Thermometer
          reached={campaign.reached}
          goal={campaign.goal}
          itemLabel={campaign.itemLabel}
        />

        <a className="btn btn-dourado" href="#como-ajudar">
          Quero ajudar
        </a>
      </div>
    </section>
  );
}