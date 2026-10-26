import { researchSources } from "../../data/researchEvidence";
import ComplexityEntropyPlane from "./ComplexityEntropyPlane";
import PaperFigure from "../PaperFigure";
import AnimatedSection from "../AnimatedSection";

const SourceNote = ({ source }: { source: typeof researchSources[keyof typeof researchSources] }) => (
  <p className="study-source"><a href={source.url}>{source.label} ↗</a><span>{source.location}</span></p>
);

const ResearchStudies = () => (
    <div className="research-studies">
      <section className="study-chapter" id="state-transitions" aria-labelledby="propofol-title" tabIndex={-1}>
        <AnimatedSection as="div" className="study-heading"><p className="eyebrow">Anesthesia · Published research</p><h2 id="propofol-title">Brain-state transitions</h2></AnimatedSection>
        <div className="research-feature">
          <AnimatedSection as="div"><PaperFigure figureId="propofol" /></AnimatedSection>
          <AnimatedSection as="div" className="research-copy">
            <h3 className="research-subtitle">Separating randomness from structured complexity</h3>
            <p className="item-description">“Complexity” measures do not all describe the same property of a signal. Across two propofol cohorts, I examined how randomness and structured complexity change during sedation.</p>
            <p className="item-description">Separating these properties revealed divergent responses to sedation and relationships between baseline dynamics and propofol susceptibility. A single complexity score can obscure those distinctions.</p>
            <p className="research-takeaway">More randomness does not necessarily mean more structure.</p>
            <a className="inline-link section-link" href="https://github.com/BIAPT/eeg-complexity-propofol">Analysis code ↗</a>
            <SourceNote source={researchSources.propofol} />
          </AnimatedSection>
        </div>
        <details className="research-explorer">
          <summary>Explore the complexity–entropy plane <span>Optional interactive view</span></summary>
          <p className="supporting-text">Inspect the ReCCognition group-average trajectory shown in Figure 4c above. The values are approximately digitized from the published image, not the original analysis tables.</p>
          <ComplexityEntropyPlane />
        </details>
      </section>

      <section className="study-chapter" id="consciousness-recovery" aria-labelledby="picu-title" tabIndex={-1}>
        <AnimatedSection as="div" className="study-heading"><p className="eyebrow">Clinical EEG</p><h2 id="picu-title">Brain injury & recovery</h2></AnimatedSection>
        <div className="research-feature">
          <AnimatedSection as="div"><PaperFigure figureId="picu" /></AnimatedSection>
          <AnimatedSection as="div" className="research-copy">
            <p className="eyebrow">Pediatric intensive care · Published</p>
            <h3 className="research-subtitle">EEG and later functional outcome</h3>
            <p className="item-description">In a retrospective study of 32 sedated children, I tested criticality-related EEG features alongside demographic information. Models combining EEG and demographics showed better discrimination of later functional outcome than demographics alone in the reported evaluation.</p>
            <p className="study-caveat">These were internally cross-validated comparisons, not independent prospective validation. Some participants contributed multiple EEG periods; the findings do not establish an individual clinical prognosis.</p>
            <a className="inline-link section-link" href="https://github.com/BIAPT/PICU_Criticality_Prognosis">Analysis code ↗</a>
            <SourceNote source={researchSources.picu} />
          </AnimatedSection>
        </div>
        <article className="research-note" id="perturbational-complexity" aria-labelledby="doc-title" tabIndex={-1}>
          <AnimatedSection as="div"><p className="eyebrow">Disorders of consciousness · Preprint</p><h3 className="research-subtitle" id="doc-title">Spontaneous EEG and perturbational complexity</h3></AnimatedSection>
          <AnimatedSection as="div">
            <p className="item-description">Can spontaneous EEG predict the complexity of a TMS-evoked response? Across the full heterogeneous cohort of 26 patients, prediction did not generalize.</p>
            <p className="item-description">Relationships reported in restricted analyses highlight the importance of biological context, but do not establish a general bedside predictor. Restricting to non-zero PCImax also uses the measured target—it is not an EEG-only rule for new patients.</p>
            <p className="study-caveat">Preprint, not peer reviewed. Restricted groups can overlap; these results do not establish causality, consciousness diagnosis, or an individual prognosis.</p>
            <SourceNote source={researchSources.doc} />
          </AnimatedSection>
        </article>
      </section>
    </div>
);

export default ResearchStudies;
