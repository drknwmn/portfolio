import type { Presentation } from "../types";
import AnimatedSection from "./AnimatedSection";

const PresentationCitation = ({ presentation, compact = false }: { presentation: Presentation; compact?: boolean }) => (
  <AnimatedSection as="article" className="presentation-citation">
    {compact ? <><p className="item-meta">{presentation.format} · {presentation.date}</p><h3 className="item-title">{presentation.title}</h3><p className="supporting-text">{presentation.event} · {presentation.location}</p></> :
      <p>{presentation.authors} ({presentation.date}). <em>{presentation.title}</em> [{presentation.format}]. {presentation.event}, {presentation.location}.</p>}
    {presentation.citationNote && <p className="supporting-text">{presentation.citationNote}</p>}
  </AnimatedSection>
);

export default PresentationCitation;
