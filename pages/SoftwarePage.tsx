import { Link } from "react-router-dom";
import AnimatedSection from "../components/AnimatedSection";
import DynamicsField from "../components/research/DynamicsField";

const repositories = [
  { name: "Propofol complexity–entropy analysis", description: "EEG analysis across two propofol cohorts, separating Type I and Type II complexity and mapping state trajectories on the complexity–entropy causal plane.", url: "https://github.com/BIAPT/eeg-complexity-propofol", role: "Analysis code written and maintained by Derek Newman. Public lab repository; my personal repository is a fork.", tags: "Python · EEG · Statistical analysis" },
  { name: "Pediatric ICU criticality & prognosis", description: "Preprocessing, criticality-related EEG features, statistical comparisons, and machine-learning outcome modelling for pediatric ICU research.", url: "https://github.com/BIAPT/PICU_Criticality_Prognosis", role: "Public lab analysis pipeline; my personal repository is a fork.", tags: "Python · Signal processing · Machine learning" },
  { name: "EEG Python tutorials", description: "Lab teaching resources for working with EEG in Python.", url: "https://github.com/BIAPT/EEG_Python_Tutorials", role: "BIAPT lab resource. My GitHub copy is a fork, not a claim of sole authorship.", tags: "Python · EEG · Education" },
  { name: "EEG & neuroimaging analysis", description: "Earlier analysis code collected in my personal repository.", url: "https://github.com/drknwmn/EEG-Neuroimaging-Analysis-", role: "Personal repository; see its contents for scope and reuse requirements.", tags: "Scientific computing · Neuroimaging" },
];

const SoftwarePage = () => (
  <div className="page-content software-page">
    <header className="page-intro page-intro--compact">
      <p className="eyebrow">Software</p>
      <h1 className="page-title">Code, models & experiments.</h1>
      <p className="section-description">Tools for exploring dynamics, analysing EEG, and making scientific methods easier to use.</p>
      <a className="inline-link section-link" href="https://github.com/drknwmn">My GitHub profile ↗</a>
    </header>

    <nav className="archive-index software-index" aria-label="Software sections">
      <Link to="/software#ising-morph">Interactive tools ↓</Link>
      <Link to="/software#oscillator-lab">Oscillator lab ↓</Link>
      <Link to="/software#neurocomplexity">NeuroComplexity ↓</Link>
      <Link to="/software#repositories">Research code ↓</Link>
    </nav>

    <AnimatedSection className="software-chapter" id="ising-morph" tabIndex={-1} aria-labelledby="ising-morph-title">
      <header className="chapter-heading"><p className="eyebrow">Interactive tools</p><p className="chapter-note">Made to explore</p></header>
      <div className="software-showcase">
        <figure className="ising-preview">
          <div className="ising-preview__stage">
            <video controls playsInline loop preload="none" poster={`${import.meta.env.BASE_URL}demos/ising-morph-poster.png`} width="360" height="360" aria-label="Recorded Ising Morph demo: neuron, brain, and person emerging from an Ising lattice" aria-describedby="ising-preview-caption">
              <source src={`${import.meta.env.BASE_URL}demos/ising-morph-preview.mp4`} type="video/mp4" />
              <a href="https://drknwmn.github.io/IsingMorph/">Open the Ising Morph studio</a>
            </video>
          </div>
          <figcaption id="ising-preview-caption"><span>Neuron → brain → person</span><span>Recorded preview · press play</span></figcaption>
        </figure>
        <div className="software-showcase__copy">
          <p className="software-status">Public · Browser-based studio</p>
          <h2 id="ising-morph-title">Ising Morph</h2>
          <p className="software-deck">From fluctuations to form.<br />And back again.</p>
          <p className="item-description">Make images emerge from an Ising lattice, dissolve into fluctuations, and transform into the next figure. Build your own sequence, adjust the dynamics, and export a GIF or a still image.</p>
          <div className="link-row"><a className="button button--primary" href="https://drknwmn.github.io/IsingMorph/">Open the studio <span aria-hidden="true">↗</span></a><a className="inline-link" href="https://github.com/drknwmn/IsingMorph">View on GitHub ↗</a></div>
          <ul className="software-facts" aria-label="Ising Morph features"><li>Seeded Metropolis dynamics</li><li>Runs on your device</li><li>GIF & PNG export</li></ul>
          <p className="supporting-text">Illustrative, image-guided dynamics—not neuroscience data or evidence of a thermodynamic phase transition.</p>
        </div>
      </div>
    </AnimatedSection>

    <section className="software-chapter oscillator-lab" id="oscillator-lab" tabIndex={-1} aria-labelledby="oscillator-title">
      <AnimatedSection as="div" className="chapter-heading"><p className="eyebrow">Interactive model</p><p className="chapter-note">Illustrative, not empirical data</p></AnimatedSection>
      <div className="oscillator-layout">
        <AnimatedSection as="div"><h2 className="section-title" id="oscillator-title">Oscillator lab</h2><p className="section-description">Explore how phase coupling changes collective behavior in a small Kuramoto model. Adjust the coupling, perturb the phases, or pause and advance the system in steps.</p><p className="supporting-text">This isolates a single mechanism. It is not EEG, a consciousness measure, or a reproduction of my delayed multiscale research model.</p><Link className="inline-link section-link" to="/research#multiscale-models">Read the research context ↗</Link></AnimatedSection>
        <DynamicsField />
      </div>
    </section>

    <AnimatedSection className="software-chapter" id="neurocomplexity" tabIndex={-1} aria-labelledby="neurocomplexity-title">
      <header className="chapter-heading"><p className="eyebrow">Analysis framework</p><p className="chapter-note">In active development</p></header>
      <div className="software-framework">
        <div><h2 className="section-title" id="neurocomplexity-title">NeuroComplexity</h2><p className="supporting-text">Python · Nonlinear EEG analysis</p></div>
        <div><p className="item-description">My framework for connecting shared signal representations, configurable feature extraction, quality reporting, and provenance.</p><p className="supporting-text">The current framework repository is private. Education resources are in development.</p><div className="link-row"><Link className="inline-link" to="/software/neurocomplexity">About the framework ↗</Link><Link className="inline-link" to="/software/neurocomplexity#education">Education & learning resources ↗</Link></div></div>
      </div>
    </AnimatedSection>

    <section className="software-chapter" id="repositories" tabIndex={-1} aria-labelledby="repositories-title">
      <AnimatedSection as="div" className="section-heading"><div><p className="eyebrow">Research code</p><h2 className="section-title" id="repositories-title">Behind the papers.</h2></div><p className="chapter-note">Public analysis & lab resources</p></AnimatedSection>
      <div className="software-repositories">{repositories.map((repository) => <AnimatedSection as="article" key={repository.url}><p className="eyebrow">{repository.tags}</p><h3 className="research-title"><a href={repository.url}>{repository.name} ↗</a></h3><p className="item-description">{repository.description}</p><p className="supporting-text">{repository.role}</p></AnimatedSection>)}</div>
    </section>
  </div>
);

export default SoftwarePage;
