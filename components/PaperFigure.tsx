import { paperFigures } from "../data/paperFigures";

const PaperFigure = ({ figureId, compact = false }: { figureId: keyof typeof paperFigures; compact?: boolean }) => {
  const figure = paperFigures[figureId];
  const imageUrl = `${import.meta.env.BASE_URL}${figure.path}`;
  return (
    <figure className={`paper-figure${compact ? " paper-figure--compact" : ""}`}>
      <a href={imageUrl} target="_blank" rel="noopener noreferrer" aria-label={`${figure.label} — open full-size figure in a new tab`}>
        <img src={imageUrl} alt={figure.alt} width={figure.width} height={figure.height} loading="lazy" decoding="async" />
      </a>
      <figcaption><a href={figure.source}>{figure.label} ↗</a>
        <span>{figure.credit} <a href={figure.licenseUrl}>{figure.license}</a>.</span>
      </figcaption>
    </figure>
  );
};

export default PaperFigure;
