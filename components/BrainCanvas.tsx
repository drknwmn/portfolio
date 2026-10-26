import { useRef, useEffect } from "react";
import useReducedMotion from "../hooks/useReducedMotion";

const brainPathsData = {
  viewBox: [0, 0, 390, 280],
  outer:
    "M83,37 L58,64 L46,93 L51,133 L81,155 L105,160 L115,182 L138,199 L175,200 L221,255 L218,232 L183,198 L200,196 L209,213 L207,198 L239,254 L235,230 L288,230 L336,183 L344,130 L335,100 L304,51 L275,27 L235,10 L180,4 L112,19 Z",
  inner: [
    "M309,202 L307,203 L308,206 L300,211 L302,215 L294,217 L297,219 L295,222 L282,223 L273,220 L268,221 L289,225 L277,227 L275,230 L253,225 L230,208 L245,222 L266,229 L266,231 L257,231 L239,223 L229,214 L234,221 L246,228 L238,227 L226,217 L224,219 L216,209 L212,200 L214,199 L221,203 L225,202 L228,206 L229,202 L235,204 L265,198 L280,202 L274,199 L276,197 L303,197 Z",
    "M240,209 L240,210 L243,213 L244,213 L245,214 L246,214 L248,216 L249,216 L250,217 L252,217 L253,218 L254,218 L255,219 L256,219 L256,218 L255,218 L254,217 L253,217 L252,216 L251,216 L250,215 L249,215 L248,214 L247,214 L245,212 L244,212 L241,209 Z",
    "M249,208 L249,209 L250,210 L251,210 L253,212 L254,212 L255,213 L256,213 L257,214 L258,214 L259,215 L260,215 L261,216 L262,216 L263,217 L264,217 L265,218 L266,218 L267,219 L268,219 L268,218 L267,218 L266,217 L265,217 L264,216 L263,216 L262,215 L261,215 L260,214 L259,214 L258,213 L257,213 L255,211 L254,211 L253,210 L252,210 L250,208 Z",
    "M340,149 L341,150 L341,153 L342,154 L342,155 L341,156 L341,159 L340,160 L339,159 L339,158 L338,157 L338,155 L336,153 L337,152 L338,152 L338,151 Z",
    "M79,147 L80,146 L85,146 L86,147 L88,147 L89,146 L94,146 L95,147 L96,147 L97,148 L101,148 L102,149 L102,150 L106,150 L107,151 L107,152 L108,152 L109,151 L111,151 L112,152 L112,155 L110,157 L101,157 L100,156 L98,156 L97,155 L91,155 L90,154 L88,154 L87,153 L86,153 L85,152 L84,152 Z",
    "M53,127 L54,126 L56,126 L57,127 L60,127 L61,128 L62,128 L64,130 L65,130 L66,131 L67,131 L68,132 L69,132 L70,133 L72,133 L73,134 L82,134 L84,136 L84,137 L85,138 L85,139 L86,139 L87,140 L87,141 L86,142 L73,142 L72,141 L69,141 L68,140 L67,140 L66,139 L65,139 L64,138 L63,138 L61,136 L60,136 L56,132 L56,131 L54,129 L54,128 Z",
    "M332,121 L334,121 L338,125 L338,126 L339,127 L339,128 L340,129 L340,131 L341,132 L341,139 L340,140 L340,142 L337,145 L337,146 L336,147 L336,148 L334,150 L332,150 L331,149 L331,148 L330,147 L331,146 L331,145 L330,144 L330,142 L329,141 L329,140 L328,139 L328,137 L326,137 L325,136 L325,135 L326,134 L326,133 L329,130 L329,128 L330,127 L330,126 L331,125 L331,122 Z",
    "M55,90 L56,91 L56,92 L61,97 L61,98 L63,100 L62,101 L61,101 L60,102 L59,102 L59,104 L58,105 L58,106 L57,107 L57,108 L56,109 L56,119 L55,120 L53,118 L53,117 L52,116 L52,115 L51,114 L51,112 L50,111 L50,99 L51,98 L51,95 L52,94 L52,93 Z",
    "M71,60 L75,64 L76,64 L79,66 L74,71 L74,72 L72,75 L72,78 L71,79 L70,79 L69,78 L69,77 L67,74 L67,72 L66,72 L66,76 L67,77 L67,78 L68,79 L68,80 L67,81 L65,81 L65,82 L61,86 L61,88 L60,89 L59,89 L58,88 L58,78 L59,77 L59,75 L60,74 L60,73 L61,72 L61,71 L62,70 L62,69 L64,67 L64,66 L69,61 L70,61 Z",
    "M108,41 L108,42 L107,43 L102,43 L101,44 L100,44 L99,45 L97,45 L95,47 L94,47 L90,51 L90,52 L87,55 L87,56 L86,57 L86,60 L84,62 L79,62 L78,61 L78,60 L77,60 L76,59 L76,54 L77,53 L77,52 L79,50 L79,49 L86,42 L87,42 L89,40 L90,40 L91,39 L92,39 L93,38 L94,38 L97,36 L100,36 L101,35 L103,37 L104,37 Z",
    "M137,25 L137,27 L135,29 L134,28 L133,28 L132,29 L131,28 L130,28 L129,29 L127,29 L126,30 L122,30 L121,31 L120,31 L119,32 L118,32 L117,33 L116,33 L112,37 L109,37 L105,33 L105,31 L107,29 L108,29 L110,27 L111,27 L112,26 L113,26 L115,24 L117,24 L118,23 L120,23 L121,22 L124,22 L125,21 L134,21 L136,23 L136,24 Z",
    "M169,11 L169,12 L168,13 L168,14 L167,15 L167,16 L168,17 L166,19 L165,19 L164,20 L162,20 L161,21 L159,21 L158,20 L154,20 L153,21 L149,21 L148,22 L146,22 L145,23 L144,23 L142,25 L141,25 L140,24 L140,22 L139,21 L139,19 L140,18 L141,18 L143,16 L144,16 L145,15 L147,15 L148,14 L149,14 L150,13 L152,13 L153,12 L156,12 L157,11 L163,11 L164,10 L168,10 Z",
    "M63,90 L82,94 L77,73 L95,75 L90,58 L118,51 L119,36 L144,41 L145,27 L196,9 L212,21 L194,17 L205,35 L190,51 L177,43 L187,54 L177,74 L147,64 L137,89 L86,83 L98,100 L72,114 L94,111 L106,128 L104,98 L128,88 L141,108 L155,77 L172,79 L181,102 L185,70 L210,61 L195,49 L219,39 L209,31 L247,29 L216,21 L235,15 L255,27 L252,43 L268,45 L260,26 L283,40 L273,58 L287,79 L280,56 L303,57 L311,114 L312,73 L334,117 L326,108 L313,138 L303,114 L304,153 L323,139 L336,176 L312,193 L261,163 L245,181 L270,174 L292,195 L146,198 L155,191 L116,174 L121,144 L147,126 L174,137 L204,120 L240,140 L231,124 L271,106 L250,98 L261,80 L237,78 L246,102 L230,118 L206,114 L197,90 L197,116 L168,121 L158,91 L158,119 L135,126 L119,100 L128,130 L114,147 L61,122 L61,107 L79,103 Z",
    "M164,183 L164,184 L174,184 L175,183 L182,182 L186,180 L191,180 L192,179 L201,179 L202,180 L209,181 L212,183 L215,183 L219,185 L232,185 L232,183 L230,182 L224,182 L223,181 L219,181 L211,177 L209,177 L208,176 L205,176 L204,175 L190,175 L189,176 L187,175 L186,176 L184,176 L183,177 L178,178 L175,180 L173,180 L172,181 L170,181 L169,182 L166,182 Z",
    "M285,143 L287,147 L287,151 L286,152 L286,159 L288,164 L291,168 L298,172 L307,172 L312,170 L314,168 L319,172 L321,172 L322,173 L327,173 L329,174 L329,171 L321,169 L318,166 L317,164 L317,153 L315,153 L315,159 L313,161 L313,163 L311,165 L308,166 L307,168 L303,169 L299,167 L296,167 L291,161 L290,154 L291,153 L291,150 L294,145 L299,141 L300,138 L298,138 L294,141 L292,141 L290,145 L287,143 Z",
    "M301,69 L293,61 L299,73 L300,87 L292,99 L289,99 L284,90 L268,86 L284,98 L287,116 L283,124 L268,135 L264,134 L260,123 L259,143 L246,156 L224,159 L215,155 L210,148 L215,137 L202,150 L176,156 L156,154 L140,143 L149,156 L138,163 L137,175 L144,165 L154,158 L175,161 L198,155 L207,155 L236,170 L235,163 L245,161 L266,149 L263,144 L287,127 L294,127 L288,123 L291,104 L299,98 L303,90 L304,76 Z",
    "M229,32 L228,34 L236,46 L236,54 L226,61 L221,54 L217,53 L223,64 L217,77 L214,79 L201,76 L202,78 L211,83 L225,100 L227,99 L221,89 L220,80 L224,71 L235,60 L242,57 L254,58 L262,62 L274,75 L274,72 L270,65 L261,57 L248,53 L241,54 L239,42 Z",
    "M185,28 L173,27 L162,31 L155,38 L153,44 L154,48 L152,50 L141,52 L135,57 L133,56 L130,48 L132,41 L131,40 L127,45 L129,60 L124,64 L112,65 L109,60 L103,56 L103,58 L109,67 L103,73 L102,79 L112,70 L121,67 L125,67 L129,69 L132,73 L134,73 L134,65 L136,61 L142,56 L147,54 L157,54 L165,58 L168,58 L160,50 L158,46 L159,40 L166,33 L177,29 L185,29 Z",
  ],
};

const allPathStrings = [brainPathsData.outer, ...brainPathsData.inner];

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  anchorX: number;
  anchorY: number;
  phase: number;
}

const BrainCanvas = ({ paused = false }: { paused?: boolean }) => {
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

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let particles: Particle[] = [];
    let animationFrameId = 0;
    let width = 0;
    let height = 0;

    const pathElements = allPathStrings.map((pathString) => {
      const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
      path.setAttribute("d", pathString);
      return path;
    });

    const pathLengths = pathElements.map((path) => path.getTotalLength());
    const totalLength = pathLengths.reduce((total, length) => total + length, 0);

    const resizeCanvas = () => {
      const parent = canvas.parentElement;
      if (!parent) return;

      width = parent.clientWidth;
      height = parent.clientHeight;
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(width * ratio);
      canvas.height = Math.floor(height * ratio);
      ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
      initParticles();
    };

    const initParticles = () => {
      particles = [];
      const numParticles = width < 480 ? 480 : 760;
      const viewBox = brainPathsData.viewBox;
      const scale =
        Math.min(width / viewBox[2], height / viewBox[3]) * 0.9;

      pathElements.forEach((pathElement, index) => {
        const pathLength = pathLengths[index];
        const numParticlesForPath = Math.ceil((pathLength / totalLength) * numParticles);

        for (let particleIndex = 0; particleIndex < numParticlesForPath; particleIndex += 1) {
          const point = pathElement.getPointAtLength((particleIndex / numParticlesForPath) * pathLength);
          const anchorX = (point.x - viewBox[2] / 2) * scale + width / 2;
          const anchorY = (point.y - viewBox[3] / 2) * scale + height / 2;

          particles.push({
            x: anchorX,
            y: anchorY,
            vx: (Math.random() - 0.5) * 0.14,
            vy: (Math.random() - 0.5) * 0.14,
            radius: Math.random() * 1.5 + 0.95,
            anchorX,
            anchorY,
            phase: Math.random() * Math.PI * 2,
          });
        }
      });
    };

    const draw = (advance: boolean) => {
      ctx.clearRect(0, 0, width, height);
      const accentColor = "255, 255, 255";
      const time = performance.now() * 0.001;
      const SPRING_CONSTANT = 0.00335;
      const DAMPING = 0.953;
      const NOISE = 0.048;
      const pulse = advance ? 1 + Math.sin(time * 1.45) * 0.02 : 1;

      particles.forEach((particle) => {
        if (advance) {
          const targetX =
            width / 2 + (particle.anchorX - width / 2) * pulse;
          const targetY =
            height / 2 + (particle.anchorY - height / 2) * pulse;
          const dx = targetX - particle.x;
          const dy = targetY - particle.y;
          const ax = dx * SPRING_CONSTANT;
          const ay = dy * SPRING_CONSTANT;

          particle.vx += ax;
          particle.vy += ay;
          particle.phase += 0.018;
          particle.vx += Math.cos(time * 1.7 + particle.phase) * 0.006;
          particle.vy += Math.sin(time * 1.35 + particle.phase) * 0.006;
          particle.vx += (Math.random() - 0.5) * NOISE;
          particle.vy += (Math.random() - 0.5) * NOISE;

          particle.vx *= DAMPING;
          particle.vy *= DAMPING;

          particle.x += particle.vx;
          particle.y += particle.vy;
        }

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${accentColor}, 0.94)`;
        ctx.fill();
      });

      for (let particleIndex = 0; particleIndex < particles.length; particleIndex += 1) {
        const searchLimit = Math.min(particleIndex + 42, particles.length);
        for (let otherIndex = particleIndex + 1; otherIndex < searchLimit; otherIndex += 1) {
          const dist = Math.hypot(
            particles[particleIndex].x - particles[otherIndex].x,
            particles[particleIndex].y - particles[otherIndex].y,
          );
          const MAX_DIST = 36;

          if (dist < MAX_DIST) {
            ctx.beginPath();
            ctx.moveTo(particles[particleIndex].x, particles[particleIndex].y);
            ctx.lineTo(particles[otherIndex].x, particles[otherIndex].y);
            ctx.strokeStyle = `rgba(${accentColor}, ${0.56 - dist / (MAX_DIST * 1.08)})`;
            ctx.lineWidth = 0.9;
            ctx.stroke();
          }
        }
      }

    };

    const animate = () => {
      draw(true);
      animationFrameId = requestAnimationFrame(animate);
    };

    resizeCanvas();
    let isVisible = false;
    const syncAnimation = () => {
      cancelAnimationFrame(animationFrameId);
      draw(false);
      if (!reducedMotion && !pausedRef.current && isVisible && !document.hidden) {
        animationFrameId = requestAnimationFrame(animate);
      }
    };
    syncRef.current = syncAnimation;
    const observer = new IntersectionObserver(([entry]) => {
      isVisible = entry.isIntersecting;
      syncAnimation();
    });
    observer.observe(canvas);
    draw(false);

    const handleResize = () => {
      resizeCanvas();
      syncAnimation();
    };
    window.addEventListener("resize", handleResize);
    document.addEventListener("visibilitychange", syncAnimation);

    return () => {
      syncRef.current = null;
      observer.disconnect();
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("visibilitychange", syncAnimation);
      cancelAnimationFrame(animationFrameId);
    };
  }, [reducedMotion]);

  return <canvas ref={canvasRef} className="brain-canvas" aria-hidden="true" />;
};

export default BrainCanvas;
