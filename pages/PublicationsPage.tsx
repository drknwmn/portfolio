import { Link } from "react-router-dom";
import PresentationCitation from "../components/PresentationCitation";
import { presentations, publications } from "../data/portfolioData";
import { isPoster, presentationSortKey } from "../utils/presentations";
import AnimatedSection from "../components/AnimatedSection";

const paperGroups = [
  { status: "Published", title: "Published papers", id: "papers" },
  { status: "In press", title: "In press", id: "in-press" },
  { status: "Preprint", title: "Preprints", id: "preprints" },
] as const;

const presentationGroups = [
  { title: "Talks", id: "talks", poster: false },
  { title: "Posters", id: "posters", poster: true },
];

const activePaperGroups = paperGroups.filter((group) => publications.some((publication) => publication.status === group.status));

const PublicationsPage = () => (
  <div className="page-content bibliography-page">
    <header className="page-intro page-intro--compact"><p className="eyebrow">Publications</p><h1 className="page-title">Papers & presentations.</h1><p className="section-description">Published papers, public preprints, and conference contributions. Coauthored presentations are included; authorship does not imply that I was the presenter.</p></header>
    <nav className="archive-index" aria-label="Publication categories"><Link to={{ pathname: "/publications", hash: "#papers" }}>Papers ({publications.filter((item) => item.status !== "Preprint").length})</Link><Link to={{ pathname: "/publications", hash: "#preprints" }}>Preprints ({publications.filter((item) => item.status === "Preprint").length})</Link><Link to={{ pathname: "/publications", hash: "#talks" }}>Talks ({presentations.filter((item) => !isPoster(item)).length})</Link><Link to={{ pathname: "/publications", hash: "#posters" }}>Posters ({presentations.filter(isPoster).length})</Link></nav>
    {activePaperGroups.map((group) => {
      const records = publications.filter((publication) => publication.status === group.status).sort((first, second) => second.publishedAt.localeCompare(first.publishedAt));
      if (!records.length) return null;
      return <section className="bibliography-section" id={group.id} tabIndex={-1} key={group.id} aria-labelledby={`${group.id}-title`}><AnimatedSection as="div" className="bibliography-heading"><p className="eyebrow">{group.status === "Preprint" ? "Not peer reviewed" : group.status === "In press" ? "Accepted" : "Peer reviewed"}</p><h2 className="subsection-title" id={`${group.id}-title`}>{group.title} <span className="category-count">{records.length}</span></h2></AnimatedSection><div className="bibliography-list">{records.map((publication) => <AnimatedSection as="article" className="paper-citation" key={publication.id}><p>{publication.authors} ({publication.year}). <a className="citation-title" href={`https://doi.org/${publication.doi}`}>{publication.title}</a>. <em>{publication.journal}</em>{publication.citation ? `, ${publication.citation}` : ""}. <a className="citation-doi" href={`https://doi.org/${publication.doi}`}>doi:{publication.doi}</a>{publication.status === "Preprint" && " [Preprint; not peer reviewed]."}</p>{publication.authorshipNote && <p className="supporting-text">{publication.authorshipNote}</p>}<details className="citation-details"><summary>Summary & links</summary><p className="item-description">{publication.summary}</p><div className="link-row">{publication.links.map((link) => <a className="inline-link" href={link.url} key={link.url}>{link.name} ↗</a>)}</div></details></AnimatedSection>)}</div></section>;
    })}
    <section className="bibliography-section" id="presentations" aria-labelledby="presentations-title" tabIndex={-1}>
      <AnimatedSection as="div" className="bibliography-heading"><p className="eyebrow">Scientific exchange</p><h2 className="section-title" id="presentations-title">Presentations</h2></AnimatedSection>
      {presentationGroups.map((group) => <section className="presentation-category" id={group.id} key={group.id} tabIndex={-1} aria-labelledby={`${group.id}-title`}><AnimatedSection as="div"><h3 className="subsection-title" id={`${group.id}-title`}>{group.title}<span className="category-count">{presentations.filter((item) => isPoster(item) === group.poster).length} contributions</span></h3></AnimatedSection><div className="bibliography-list">{presentations.filter((item) => isPoster(item) === group.poster).sort((first, second) => presentationSortKey(second) - presentationSortKey(first)).map((item) => <PresentationCitation key={item.id} presentation={item} />)}</div></section>)}
    </section>
  </div>
);

export default PublicationsPage;
