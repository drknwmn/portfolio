import { useEffect, useRef } from "react";
import useReducedMotion from "../hooks/useReducedMotion";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  depth: number;
  drift: number;
}

const ParticleBackground = ({ paused = false }: { paused?: boolean }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const reducedMotion = useReducedMotion();
  const pausedRef = useRef(paused);
  const syncRef = useRef<(() => void) | null>(null);

  useEffect(() => {
    pausedRef.current = paused;
    syncRef.current?.();
  }, [paused]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext("2d");
    if (!context) return;

    let particles: Particle[] = [];
    let pointer: { x: number; y: number } | null = null;
    let frame = 0;
    let previousTime = 0;
    let width = window.innerWidth;
    let height = window.innerHeight;
    const animate = !reducedMotion;

    const draw = (elapsed: number) => {
      context.clearRect(0, 0, width, height);
      particles.forEach((particle) => {
        particle.drift += 0.01 * (0.4 + particle.depth) * elapsed;
        particle.x += particle.vx * (0.6 + particle.depth) * elapsed;
        particle.y += (particle.vy * (0.6 + particle.depth) + Math.sin(particle.drift) * 0.08) * elapsed;
        if (pointer) {
          const distanceX = pointer.x - particle.x;
          const distanceY = pointer.y - particle.y;
          const distance = Math.hypot(distanceX, distanceY);
          if (distance < 170 && distance > 0) {
            const force = (1 - distance / 170) * 1.8 * elapsed;
            particle.x -= distanceX / distance * force;
            particle.y -= distanceY / distance * force;
          }
        }
        if (particle.x < -40) particle.x = width + 40;
        if (particle.x > width + 40) particle.x = -40;
        if (particle.y < -40) particle.y = height + 40;
        if (particle.y > height + 40) particle.y = -40;
        context.beginPath();
        context.arc(particle.x, particle.y, 1 + particle.depth * 1.4, 0, Math.PI * 2);
        context.fillStyle = `rgba(235, 239, 244, ${0.28 + particle.depth * 0.25})`;
        context.fill();
      });

      particles.forEach((particle, index) => {
        for (let otherIndex = index + 1; otherIndex < particles.length; otherIndex += 1) {
          const other = particles[otherIndex];
          const distance = Math.hypot(particle.x - other.x, particle.y - other.y);
          if (distance < 165) {
            context.beginPath();
            context.moveTo(particle.x, particle.y);
            context.lineTo(other.x, other.y);
            context.strokeStyle = `rgba(235, 239, 244, ${0.15 * (1 - distance / 165)})`;
            context.lineWidth = 0.75;
            context.stroke();
          }
        }
      });
    };

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(width * ratio);
      canvas.height = Math.floor(height * ratio);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
      const count = Math.min(130, Math.max(width < 720 ? 30 : 80, Math.floor(width * height / 15000)));
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.24,
        vy: (Math.random() - 0.5) * 0.24,
        depth: Math.random(),
        drift: Math.random() * Math.PI * 2,
      }));
      draw(0);
    };

    const render = (timestamp: number) => {
      const elapsed = previousTime ? Math.min((timestamp - previousTime) / (1000 / 60), 2) : 1;
      previousTime = timestamp;
      draw(elapsed);
      frame = window.requestAnimationFrame(render);
    };

    const clearPointer = () => { pointer = null; };
    const handlePointer = (event: PointerEvent) => {
      if (!pausedRef.current && event.pointerType === "mouse") pointer = { x: event.clientX, y: event.clientY };
    };
    const syncVisibility = () => {
      window.cancelAnimationFrame(frame);
      previousTime = 0;
      clearPointer();
      if (animate && !pausedRef.current && !document.hidden) frame = window.requestAnimationFrame(render);
    };

    syncRef.current = syncVisibility;
    resize();
    syncVisibility();
    window.addEventListener("resize", resize);
    if (animate) {
      window.addEventListener("pointermove", handlePointer, { passive: true });
      document.documentElement.addEventListener("pointerleave", clearPointer);
      window.addEventListener("blur", clearPointer);
      document.addEventListener("visibilitychange", syncVisibility);
    }
    return () => {
      syncRef.current = null;
      window.cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", handlePointer);
      document.documentElement.removeEventListener("pointerleave", clearPointer);
      window.removeEventListener("blur", clearPointer);
      document.removeEventListener("visibilitychange", syncVisibility);
    };
  }, [reducedMotion]);

  return <canvas ref={canvasRef} className="ambient-canvas" aria-hidden="true" />;
};

export default ParticleBackground;
