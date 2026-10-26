import { useEffect, useRef, useState } from "react";
import useReducedMotion from "../../hooks/useReducedMotion";
import { createOscillators, orderParameter, perturbOscillators, stepOscillators } from "../../utils/oscillators";

const DynamicsField = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const oscillators = useRef(createOscillators());
  const drawRef = useRef<(() => void) | null>(null);
  const [coupling, setCoupling] = useState(0.4);
  const couplingRef = useRef(coupling);
  const reducedMotion = useReducedMotion();
  const [playing, setPlaying] = useState(true);
  const [synchrony, setSynchrony] = useState(() => orderParameter(oscillators.current).magnitude);

  useEffect(() => { couplingRef.current = coupling; }, [coupling]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext("2d");
    if (!context) return;
    let width = 0;
    let height = 0;
    let frame = 0;
    let previousTime = 0;
    let lastReadout = 0;
    let visible = false;

    const draw = () => {
      context.clearRect(0, 0, width, height);
      const centerX = width / 2;
      const centerY = height / 2;
      const radius = Math.min(width * 0.43, height * 0.43);
      [0.45, 0.7, 1].forEach((fraction) => {
        context.beginPath();
        context.ellipse(centerX, centerY, radius * fraction, radius * fraction * 0.76, 0, 0, Math.PI * 2);
        context.strokeStyle = "rgba(239, 244, 250, 0.08)";
        context.lineWidth = 1;
        context.stroke();
      });
      oscillators.current.forEach((oscillator, index) => {
        const orbit = radius * (0.4 + index / oscillators.current.length * 0.6);
        context.beginPath();
        context.ellipse(centerX, centerY, orbit, orbit * 0.76, 0, oscillator.phase - 0.45, oscillator.phase);
        context.strokeStyle = `rgba(230, 169, 140, ${0.2 + index / 160})`;
        context.lineWidth = 1.1;
        context.stroke();
        context.beginPath();
        context.arc(centerX + Math.cos(oscillator.phase) * orbit, centerY + Math.sin(oscillator.phase) * orbit * 0.76, 2, 0, Math.PI * 2);
        context.fillStyle = "#edf0f3";
        context.fill();
      });
    };
    drawRef.current = draw;

    const resize = () => {
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(width * ratio);
      canvas.height = Math.round(height * ratio);
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
      draw();
    };
    const render = (timestamp: number) => {
      const timeStep = previousTime ? Math.min((timestamp - previousTime) / 1000, 0.04) : 1 / 60;
      previousTime = timestamp;
      stepOscillators(oscillators.current, couplingRef.current, timeStep);
      draw();
      if (timestamp - lastReadout > 500) {
        setSynchrony(orderParameter(oscillators.current).magnitude);
        lastReadout = timestamp;
      }
      frame = requestAnimationFrame(render);
    };
    const sync = () => {
      cancelAnimationFrame(frame);
      previousTime = 0;
      if (playing && !reducedMotion && visible && !document.hidden) frame = requestAnimationFrame(render);
    };
    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      sync();
    });
    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(canvas);
    observer.observe(canvas);
    document.addEventListener("visibilitychange", sync);
    resize();
    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      resizeObserver.disconnect();
      document.removeEventListener("visibilitychange", sync);
      drawRef.current = null;
    };
  }, [playing, reducedMotion]);

  const refresh = () => {
    setSynchrony(orderParameter(oscillators.current).magnitude);
    drawRef.current?.();
  };

  return (
    <figure className="dynamics-experiment" aria-labelledby="dynamics-caption">
      <div className="dynamics-stage">
        <canvas ref={canvasRef} aria-hidden="true" onPointerDown={() => { perturbOscillators(oscillators.current); refresh(); }} />
        <div className="dynamics-readout"><span>Simulated synchrony</span><strong>{synchrony.toFixed(2)}</strong><span>R · 0 to 1</span></div>
      </div>
      <div className="experiment-controls">
        <label className="coupling-control" htmlFor="coupling">Coupling <output htmlFor="coupling">{coupling.toFixed(1)}</output>
          <input id="coupling" type="range" min="0" max="2.5" step="0.1" value={coupling} onChange={(event) => setCoupling(Number(event.target.value))} />
        </label>
        <div className="experiment-buttons">
          <button type="button" onClick={() => { perturbOscillators(oscillators.current); refresh(); }}>Perturb ↗</button>
          {!reducedMotion && <button type="button" aria-pressed={playing} onClick={() => setPlaying((value) => !value)}>{playing ? "Pause" : "Play"}</button>}
          {(!playing || reducedMotion) && <button type="button" onClick={() => { for (let step = 0; step < 120; step += 1) stepOscillators(oscillators.current, coupling, 1 / 60); refresh(); }}>Step forward</button>}
          <button type="button" onClick={() => { oscillators.current = createOscillators(); refresh(); }}>Reset</button>
        </div>
      </div>
      <figcaption id="dynamics-caption">
        <strong>Conceptual model, not EEG.</strong> Change coupling, then click the field or press Perturb to shift one third of the oscillators by π. R measures their phase alignment, not consciousness or criticality. Positions are schematic; coupling is all-to-all.
      </figcaption>
      <details className="model-details"><summary>What is running?</summary>
        <p>64 phase oscillators with fixed, heterogeneous frequencies. Time and coupling use arbitrary model units. The standard Kuramoto interaction is integrated with explicit Euler steps; Step forward advances two model-time units. This is a simplified teaching model, not my delayed, multiscale research implementation.</p>
        <p className="model-equation">dθᵢ/dt = ωᵢ + (K/N) Σⱼ sin(θⱼ − θᵢ)</p>
      </details>
    </figure>
  );
};

export default DynamicsField;
