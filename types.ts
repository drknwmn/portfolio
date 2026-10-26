export interface NavItem {
  label: string;
  path: string;
  hash?: string;
}

export interface HeroStatement {
  eyebrow: string;
  title: string;
  subtitle: string;
  affiliation: string;
  description: string;
}

export interface ResearchTopic {
  id: string;
  title: string;
  description: string;
  status: string;
  details: string[];
  tags: string[];
}

export interface PublicationLink {
  name: string;
  url: string;
}

export interface Publication {
  id: string;
  title: string;
  authors: string;
  journal: string;
  citation?: string;
  year: number;
  publishedAt: string;
  status: "Published" | "In press" | "Preprint";
  authorshipNote?: string;
  contribution: string;
  summary: string;
  doi: string;
  featured: boolean;
  links: PublicationLink[];
  figureId?: "propofol" | "picu";
}

export interface AcademicItem {
  tenure: string;
  title: string;
  institution: string;
  description: string;
}

export interface Presentation {
  id: string;
  title: string;
  authors: string;
  event: string;
  date: string;
  location: string;
  format: string;
  presenter?: string;
  citationNote?: string;
}

export interface Award {
  year: string;
  name: string;
  awardedBy: string;
}

export interface ContactLink {
  label: string;
  value: string;
  href: string;
}
