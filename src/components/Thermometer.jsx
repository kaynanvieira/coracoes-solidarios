import "./Thermometer.css";

export default function Thermometer({ reached, goal, itemLabel }) {
  const percent = Math.min(100, Math.round((reached / goal) * 100));

  return (
    <div className="thermo">
      <div className="thermo-info">
        <strong>
          {reached} de {goal} {itemLabel}
        </strong>
        <span>{percent}%</span>
      </div>
      <div
        className="thermo-bar"
        role="progressbar"
        aria-valuenow={reached}
        aria-valuemin={0}
        aria-valuemax={goal}
      >
        <div className="thermo-fill" style={{ width: `${percent}%` }} />
      </div>
    </div>
  );
}