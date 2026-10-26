import { Link } from "react-router-dom";
import ResearchStudies from "../components/research/ResearchStudies";
import { researchTopics } from "../data/portfolioData";
import AnimatedSection from "../components/AnimatedSection";

const ResearchPage = () => (
  <div className="page-content research-page">
    <header className="page-intro research-intro">
      <p className="eyebrow">Research</p>
      <h1 className="page-title">Brain dynamics across changing states.</h1>
      <p className="research-lead">I study how brain dynamics reorganize during anesthesia and after severe brain injury—and when measurements from EEG remain informative across these changing conditions.</p>
      <p className="section-description">My work combines clinical EEG, nonlinear signal analysis, and computational modelling.</p>
    </header>
    <nav className="research-index" aria-label="Research studies">
      <Link to="/research#state-transitions">Brain-state transitions ↓</Link>
      <Link to="/research#consciousness-recovery">Brain injury & recovery ↓</Link>
      <Link to="/research#multiscale-models">Models & methods ↓</Link>
    </nav>
    <ResearchStudies />
    <section className="study-chapter" id="multiscale-models" aria-labelledby="modelling-title" tabIndex={-1}>
      <AnimatedSection as="div" className="study-heading"><p className="eyebrow">Ongoing research</p><h2 id="modelling-title">Computational models & methods</h2></AnimatedSection>
      <div className="research-methods">
        <AnimatedSection as="div"><h3 className="research-subtitle">From local dynamics to collective behavior</h3><p className="item-description">{researchTopics[2].description}</p><p className="item-description">My ongoing work combines local Ising-like dynamics with delayed Kuramoto interactions to investigate candidate mechanisms behind collective neural behavior.</p><Link className="inline-link section-link" to="/software#oscillator-lab">Explore a simplified oscillator model ↗</Link><p className="supporting-text">An illustrative teaching model, separate from the delayed multiscale research implementation.</p></AnimatedSection>
        <AnimatedSection as="div"><h3 className="research-subtitle">Making analysis choices inspectable</h3><p className="item-description">Alongside these studies, I develop NeuroComplexity: a Python framework for nonlinear EEG analysis, with shared signal representations, configurable feature extraction, quality reporting, and provenance.</p><p className="supporting-text">The framework is in active development and its repository is private. Project-specific analysis code is publicly available.</p><div className="link-row"><Link className="inline-link" to="/software">Public analysis code ↗</Link><Link className="inline-link" to="/software/neurocomplexity">NeuroComplexity & education ↗</Link></div></AnimatedSection>
      </div>
    </section>
    <nav className="research-next" aria-label="More about the work"><Link to="/publications">Full list of papers & presentations ↗</Link><Link id="software" to="/software">Methods & code ↗</Link><Link id="mentorship" to="/software/neurocomplexity#education">NeuroComplexity & education ↗</Link></nav>
  </div>
);

export default ResearchPage;
