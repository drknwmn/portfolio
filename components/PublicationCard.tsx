import type { Publication } from "../types";
import PaperFigure from "./PaperFigure";
import AnimatedSection from "./AnimatedSection";

interface PublicationCardProps {
  publication: Publication;
  compact?: boolean;
}

const PublicationCard = ({ publication, compact = false }: PublicationCardProps) => (
  <AnimatedSection as="article" className={`publication${compact ? " publication--compact" : ""}${compact && publication.figureId ? " publication--illustrated" : ""}`}>
    <div className="publication-copy">
    <div className="publication-meta">
      <span className={`status-label${publication.status === "Preprint" ? " status-label--preprint" : ""}`}>
        {publication.status === "Published" ? "Peer-reviewed article" : publication.status === "In press" ? "In press" : "Preprint · Not peer reviewed"}
      </span>
      <span>{publication.journal} · {publication.year}</span>
    </div>
    <h3 className="publication-title">
      <a href={`https://doi.org/${publication.doi}`}>{publication.title}</a>
    </h3>
    {!compact && <p className="publication-authors">{publication.authors}</p>}
    {!compact && publication.citation && <p className="publication-citation">{publication.citation}</p>}
    {publication.authorshipNote && <p className="authorship-note">{publication.authorshipNote}</p>}
    <p className="item-description">{publication.summary}</p>
    {!compact && <p className="publication-contribution"><strong>My contribution:</strong> {publication.contribution}</p>}
    <div className="link-row" role="group" aria-label={`Links for ${publication.title}`}>
      {publication.links.map((link) => (
        <a key={link.url} href={link.url} className="inline-link">
          {link.name}<span aria-hidden="true"> ↗</span>
        </a>
      ))}
    </div>
    </div>
    {compact && publication.figureId && <PaperFigure figureId={publication.figureId} compact />}
  </AnimatedSection>
);

export default PublicationCard;
