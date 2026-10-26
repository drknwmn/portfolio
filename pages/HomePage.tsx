import { Link } from "react-router-dom";
import AnimatedSection from "../components/AnimatedSection";
import BrainCanvas from "../components/BrainCanvas";
import PublicationCard from "../components/PublicationCard";
import PresentationCitation from "../components/PresentationCitation";
import { academicBackground, awards, contactLinks, heroStatement, presentations, publications } from "../data/portfolioData";

const selectedTalkIds = ["assc-2026-doc-pci", "integrate-fire-2026", "brain-2026-propofol"];

interface HomePageProps {
  backgroundPaused: boolean;
  reducedMotion: boolean;
  onToggleBackground: () => void;
}

const HomePage = ({ backgroundPaused, reducedMotion, onToggleBackground }: HomePageProps) => (
  <>
    <section className="hero-section" aria-labelledby="hero-title">
      <div className="hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">{heroStatement.eyebrow}</p>
          <h1 className="hero-title" id="hero-title">{heroStatement.title}</h1>
          <p className="hero-affiliation">{heroStatement.affiliation}</p>
          <div className="hero-visual" role="img" aria-label="Animated brain made of connected white particles, tracing the brain’s outline and internal folds">
            <BrainCanvas paused={backgroundPaused} />
          </div>
          <p className="hero-subtitle">{heroStatement.subtitle}</p>
          <p className="hero-description">{heroStatement.description}</p>
          <div className="hero-actions">
            <Link className="hero-link" to="/research">Research <span aria-hidden="true">↗</span></Link>
            <Link className="hero-link" to="/publications">Publications <span aria-hidden="true">↗</span></Link>
            <Link className="hero-link" to={{ pathname: "/", hash: "#about" }}>About <span aria-hidden="true">↓</span></Link>
          </div>
        </div>
      </div>
      <div className="hero-footnote">
        <span>Montreal, Quebec</span>
        {!reducedMotion && (
          <button className="motion-toggle" type="button" aria-label="Background motion" aria-pressed={!backgroundPaused} onClick={onToggleBackground}>
            <span aria-hidden="true">{backgroundPaused ? "▷" : "Ⅱ"}</span>
            {backgroundPaused ? "Resume background" : "Pause background"}
          </button>
        )}
      </div>
    </section>

    <section className="section-shell" aria-labelledby="selected-work-title">
      <AnimatedSection as="div" className="section-heading">
        <div>
          <p className="eyebrow">Selected work</p>
          <h2 className="section-title" id="selected-work-title">Papers & preprints</h2>
        </div>
        <Link className="inline-link" to="/publications">Full list of papers <span aria-hidden="true">→</span></Link>
      </AnimatedSection>
      <div className="publication-list">
        {publications.filter((publication) => publication.featured).map((publication) => (
          <PublicationCard key={publication.id} publication={publication} compact />
        ))}
      </div>
    </section>

    <section className="section-shell section-shell--raised" aria-labelledby="selected-talks-title">
      <AnimatedSection as="div" className="section-heading"><div><p className="eyebrow">Scientific exchange</p><h2 className="section-title" id="selected-talks-title">Selected talks</h2></div><Link className="inline-link" to={{ pathname: "/publications", hash: "#talks" }}>Full list of presentations →</Link></AnimatedSection>
      <div className="selected-talks">{selectedTalkIds.map((id) => presentations.find((item) => item.id === id)).filter((item) => item !== undefined).map((item) => <PresentationCitation key={item.id} presentation={item} compact />)}</div>
    </section>

    <AnimatedSection className="section-shell" id="recognition" tabIndex={-1} aria-labelledby="recognition-title">
      <div className="section-heading"><div><p className="eyebrow">Recognition</p><h2 className="section-title" id="recognition-title">Awards & support</h2></div></div>
      <ul className="recognition-list">{awards.slice(0, 4).map((award) => <li key={`${award.year}-${award.name}`}><span className="item-meta">{award.year}</span><div><h3 className="item-title">{award.name}</h3><p className="supporting-text">{award.awardedBy}</p></div></li>)}</ul>
      <details className="citation-details"><summary>Earlier recognition</summary><ul className="recognition-list">{awards.slice(4).map((award) => <li key={`${award.year}-${award.name}`}><span className="item-meta">{award.year}</span><div><h3 className="item-title">{award.name}</h3><p className="supporting-text">{award.awardedBy}</p></div></li>)}</ul></details>
    </AnimatedSection>

    <AnimatedSection className="section-shell section-shell--raised" aria-labelledby="software-title">
      <div className="software-feature">
        <div>
          <p className="eyebrow">Scientific software</p>
          <h2 className="section-title" id="software-title">Methods & code</h2>
        </div>
        <div>
          <p className="feature-name">NeuroComplexity</p>
          <p className="item-description">
            I develop a Python framework for nonlinear EEG analysis, with reusable signal
            representations, configurable workflows, quality reporting, and provenance.
            It supports my work across anesthesia and brain injury.
          </p>
          <p className="supporting-text">In active development. The current framework repository is private.</p>
          <div className="link-row"><Link className="inline-link" to="/software">Public analysis code →</Link><Link className="inline-link" to="/software/neurocomplexity">NeuroComplexity & education →</Link></div>
        </div>
      </div>
    </AnimatedSection>

    <AnimatedSection className="section-shell" id="about" aria-labelledby="about-title" tabIndex={-1}>
      <div className="section-heading">
        <div>
          <p className="eyebrow">About</p>
          <h2 className="section-title" id="about-title">A little background</h2>
        </div>
      </div>
      <div className="about-grid">
        <div>
          <p className="section-description">
            I’m a computational neuroscientist and PhD candidate in McGill’s Integrated
            Program in Neuroscience. I investigate how brain dynamics reorganize across
            anesthesia and severe brain injury, combining electrophysiology with
            nonlinear dynamics, machine learning, and computational modelling.
          </p>
          <p className="item-description">
            My training began in multimodal neuroimaging at Concordia. At McGill, I moved
            into clinical EEG and scientific software, developing analyses that connect
            measured neural dynamics with state transitions and later functional outcome.
          </p>
          <p className="item-description">
            Alongside research, I mentor undergraduate and graduate trainees in EEG
            analysis and scientific communication, organise a journal club on neural
            dynamics, and contribute to the Montreal Initiative for Consciousness.
          </p>
          <Link className="inline-link section-link" to="/research">Explore the research <span aria-hidden="true">→</span></Link>
        </div>
        <ol className="timeline" aria-label="Education">
          {academicBackground.map((item) => (
            <li key={item.title}>
              <p className="item-meta">{item.tenure}</p>
              <h3 className="item-title">{item.title}</h3>
              <p className="timeline-institution">{item.institution}</p>
              <p className="item-description">{item.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </AnimatedSection>

    <AnimatedSection className="section-shell section-shell--raised contact-section" id="contact" aria-labelledby="contact-title" tabIndex={-1}>
      <div className="contact-panel">
        <div>
          <p className="eyebrow">Contact</p>
          <h2 className="section-title" id="contact-title">Let’s connect.</h2>
          <p className="section-description">
            Get in touch about computational neuroscience, EEG methods, scientific
            software, or research collaborations.
          </p>
          <p className="supporting-text">Based in Montreal, Quebec.</p>
        </div>
        <div className="contact-list">
          {contactLinks.map((item) => (
            <a key={item.label} className="contact-item" href={item.href}>
              <span className="contact-item__label">{item.label}</span>
              <span className="contact-item__value">{item.value} <span aria-hidden="true">↗</span></span>
            </a>
          ))}
        </div>
      </div>
    </AnimatedSection>
  </>
);

export default HomePage;
