import React from "react";
import AnimatedSection from "../components/AnimatedSection";
import KaTeXRenderer from "../components/KaTeXRenderer";
import { demos } from "../data/portfolioData";
import { Demo } from "../types";

const DemoCard: React.FC<{ demo: Demo }> = ({ demo }) => (
  <article className="glass-card glass-card--hover">
    <p className="section-kicker">{demo.tags.join(" • ")}</p>
    <h3 className="item-title">{demo.title}</h3>
    <p className="item-description">{demo.description}</p>
    {demo.latexEquation && <KaTeXRenderer latex={demo.latexEquation} />}
    {demo.codeSnippet && (
      <div className="code-block">
        <pre>
          <code>{demo.codeSnippet.trim()}</code>
        </pre>
      </div>
    )}
  </article>
);

const DemosPage: React.FC = () => (
  <AnimatedSection className="section-shell">
    <div className="section-card">
      <div className="section-intro">
        <p className="eyebrow">Demos</p>
        <h1 className="section-title">A place for technical explainers, computational experiments, and theory-driven visual modules.</h1>
        <p className="section-description">
          This page stays lightweight and page-based, but the layout is now
          ready for future interactive demos, embedded canvases, and conceptual
          explainers instead of only static text cards.
        </p>
      </div>

      <div className="list-stack">
        <article className="glass-card">
          <p className="section-kicker">Interactive tool · Runs in your browser</p>
          <h2 className="item-title">Ising Morph</h2>
          <p className="item-description">Make images emerge from an Ising lattice, dissolve into fluctuations, and transform into the next figure. Arrange your own sequence, explore transition styles, and export a GIF or a still PNG. Your images stay on your device.</p>
          <div className="link-row">
            <a className="button button--primary" href="https://drknwmn.github.io/IsingMorph/">Try Ising Morph ↗</a>
            <a className="button button--ghost" href="https://github.com/drknwmn/IsingMorph">Source & documentation ↗</a>
          </div>
          <picture>
            <source media="(prefers-reduced-motion: reduce)" srcSet={`${import.meta.env.BASE_URL}demos/ising-morph.png`} />
            <img src={`${import.meta.env.BASE_URL}demos/ising-morph.gif`} alt="A circle, star, and heart forming and dissolving in an Ising lattice" width="256" height="256" loading="lazy" style={{ display: "block", maxWidth: "100%", marginTop: "24px", imageRendering: "pixelated" }} />
          </picture>
        </article>
        {demos.map((demo) => (
          <DemoCard key={demo.title} demo={demo} />
        ))}
      </div>
    </div>
  </AnimatedSection>
);

export default DemosPage;
