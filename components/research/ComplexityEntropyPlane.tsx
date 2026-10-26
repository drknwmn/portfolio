import { useState } from "react";
import { cecpConditions, cecpProvenance } from "../../data/cecpData";
import PaperFigure from "../PaperFigure";

const ComplexityEntropyPlane = () => {
  const [selected, setSelected] = useState(0);
  const [zoomed, setZoomed] = useState(true);
  const condition = cecpConditions[selected];
  const entropyMin = zoomed ? 0.8 : 0;
  const entropyMax = zoomed ? 1.025 : 1;
  const complexityMin = zoomed ? 0.05 : 0;
  const complexityMax = zoomed ? 0.41 : 0.5;
  const positionX = (value: number) => 82 + (value - entropyMin) / (entropyMax - entropyMin) * 520;
  const positionY = (value: number) => 350 - (value - complexityMin) / (complexityMax - complexityMin) * 310;
  const entropyTicks = zoomed ? [0.8, 0.85, 0.9, 0.95, 1] : [0, 0.25, 0.5, 0.75, 1];
  const complexityTicks = zoomed ? [0.1, 0.2, 0.3, 0.4] : [0, 0.1, 0.2, 0.3, 0.4, 0.5];

  return (
    <div className="cecp-explorer">
      <div className="cecp-toolbar"><span>ReCCognition · group means · n = 8</span><button type="button" aria-pressed={zoomed} onClick={() => setZoomed((value) => !value)}>{zoomed ? "Show full scale" : "Zoom to study"}</button></div>
      <svg className="cecp-plot" viewBox="0 0 650 420" role="group" aria-label="Interactive complexity–entropy causal plane: group means digitized from published Figure 4c">
        {complexityTicks.map((tick) => <g key={tick}><line className="cecp-grid" x1="82" x2="602" y1={positionY(tick)} y2={positionY(tick)} /><text x="68" y={positionY(tick) + 5} textAnchor="end">{tick.toFixed(1)}</text></g>)}
        {entropyTicks.map((tick) => <g key={tick}><line className="cecp-grid" x1={positionX(tick)} x2={positionX(tick)} y1="40" y2="350" /><text x={positionX(tick)} y="375" textAnchor="middle">{tick.toFixed(2)}</text></g>)}
        <line className="cecp-axis" x1="82" x2="602" y1="350" y2="350" /><line className="cecp-axis" x1="82" x2="82" y1="40" y2="350" />
        <polyline className="cecp-trajectory" points={cecpConditions.map((point) => `${positionX(point.entropy)},${positionY(point.complexity)}`).join(" ")} />
        {cecpConditions.map((point, index) => <circle key={point.label} cx={positionX(point.entropy)} cy={positionY(point.complexity)} r={selected === index ? 10 : 7} fill={point.color} stroke={selected === index ? "#fff" : "#101418"} strokeWidth={selected === index ? 3 : 2} tabIndex={0} role="button" aria-pressed={selected === index} aria-label={`${point.label}, approximate permutation entropy ${point.entropy}, statistical complexity ${point.complexity}`} onMouseEnter={() => setSelected(index)} onFocus={() => setSelected(index)} onClick={() => setSelected(index)} onKeyDown={(event) => { if (event.key === "Enter" || event.key === " ") { event.preventDefault(); setSelected(index); } }} />)}
        <text x="342" y="408" textAnchor="middle">Permutation entropy</text><text transform="translate(22 195) rotate(-90)" textAnchor="middle">Statistical complexity</text>
      </svg>
      <div className="cecp-conditions" role="group" aria-label="Sedation condition">{cecpConditions.map((point, index) => <button type="button" key={point.label} aria-pressed={selected === index} onClick={() => setSelected(index)}><span style={{ background: point.color }} aria-hidden="true" />{point.label}</button>)}</div>
      <p className="cecp-readout" aria-live="polite"><strong>{condition.label}</strong><span>Entropy ≈ {condition.entropy.toFixed(3)}</span><span>Statistical complexity ≈ {condition.complexity.toFixed(3)}</span></p>
      <p className="study-caveat">Select or focus a point to inspect a condition. Lines show condition order, not elapsed time. {cecpProvenance.method}</p>
      <details className="figure-disclosure"><summary>See the full plane in the published paper</summary><PaperFigure figureId="cecpOverview" /></details>
    </div>
  );
};

export default ComplexityEntropyPlane;
