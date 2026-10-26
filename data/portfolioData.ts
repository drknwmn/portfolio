import type {
  AcademicItem, Award, ContactLink, HeroStatement, NavItem,
  Presentation, Publication, ResearchTopic,
} from "../types";
import { additionalPresentations } from "./presentationArchive";

export const navItems: NavItem[] = [
  { label: "Research", path: "/research" },
  { label: "Publications", path: "/publications" },
  { label: "Software", path: "/software" },
  { label: "About", path: "/", hash: "#about" },
  { label: "Contact", path: "/", hash: "#contact" },
];

export const heroStatement: HeroStatement = {
  eyebrow: "Computational neuroscience",
  title: "Derek Newman",
  subtitle: "Brain dynamics, consciousness, and recovery.",
  affiliation: "PhD candidate · McGill University",
  description:
    "I study how brain dynamics change across anesthesia and severe brain injury, and when those changes reveal information about consciousness and recovery. My work combines EEG, nonlinear dynamics, machine learning, and scientific software.",
};

export const contactLinks: ContactLink[] = [
  { label: "Email", value: "derek.newman@mail.mcgill.ca", href: "mailto:derek.newman@mail.mcgill.ca" },
  { label: "GitHub", value: "drknwmn", href: "https://github.com/drknwmn" },
  { label: "Google Scholar", value: "Publications & citations", href: "https://scholar.google.com/citations?user=jwdetgQAAAAJ&hl=en" },
];

export const researchTopics: ResearchTopic[] = [
  {
    id: "state-transitions",
    title: "How do brains change state?",
    description:
      "Different measures of complexity can tell different stories about the same brain state. I study how entropy and structured complexity change together during anesthesia, and how baseline dynamics relate to individual responses.",
    status: "Published research",
    details: [
      "Complementary measures of randomness and structured complexity.",
      "EEG trajectories during propofol sedation in two independent cohorts.",
      "Baseline dynamics and individual susceptibility to anesthesia.",
    ],
    tags: ["Anesthesia", "Complexity–entropy", "EEG"],
  },
  {
    id: "consciousness-recovery",
    title: "When do neural dynamics inform recovery?",
    description:
      "I investigate when spontaneous EEG carries information about functional outcome and the brain’s response to perturbation. Injury etiology, measurable responses, and recording conditions define important limits on generalization.",
    status: "Published research and preprint",
    details: [
      "Retrospective outcome modelling in sedated pediatric intensive care.",
      "Spontaneous EEG and TMS-derived perturbational complexity.",
      "Explicit assessment of where predictive relationships fail to generalize.",
    ],
    tags: ["Brain injury", "Perturbational complexity", "Prediction"],
  },
  {
    id: "multiscale-models",
    title: "How do local dynamics shape whole-brain organization?",
    description:
      "I develop computational models and analyse neuroimaging data to examine relationships between local neural dynamics, network organization, and synchronization. This ongoing work connects empirical observations with candidate mechanisms.",
    status: "Ongoing research",
    details: [
      "Local Ising-like dynamics coupled through delayed Kuramoto interactions.",
      "Multiscale modelling presented at Camillo Golgi and ICMNS.",
      "Exploratory work on regional temporal scaling and functional gradients.",
    ],
    tags: ["Dynamical systems", "Modelling", "Neuroimaging"],
  },
];

export const publications: Publication[] = [
  {
    id: "newman-2026-propofol",
    figureId: "propofol",
    title: "Reframing ‘paradoxical’ excitation: disentangling electroencephalogram complexity and entropy reveals resting-state dynamics associated with propofol susceptibility in healthy adults",
    authors: "Newman, D., Maschke, C., Mashour, G. A., & Blain-Moraes, S.",
    journal: "British Journal of Anaesthesia",
    citation: "137(2), 525–534",
    year: 2026,
    publishedAt: "2026-06-01",
    status: "Published",
    authorshipNote: "Derek Newman and Charlotte Maschke contributed equally.",
    contribution: "Co-conception, computational analysis, and manuscript drafting and revision.",
    summary: "Across two propofol cohorts, we distinguished changes in randomness from changes in structured complexity. The resulting trajectories characterized divergent neural responses to sedation and related baseline dynamics to propofol susceptibility.",
    doi: "10.1016/j.bja.2026.03.082",
    featured: true,
    links: [
      { name: "Article / DOI", url: "https://doi.org/10.1016/j.bja.2026.03.082" },
      { name: "PubMed", url: "https://pubmed.ncbi.nlm.nih.gov/42225443/" },
      { name: "Analysis code", url: "https://github.com/drknwmn/eeg-complexity-propofol" },
    ],
  },
  {
    id: "newman-2026-picu",
    figureId: "picu",
    title: "EEG criticality as a prognostic tool for functional outcomes in sedated pediatric intensive care patients",
    authors: "Newman, D., Grinberg, M., Jones, K., Woodward, K., Esser, M. J., & Blain-Moraes, S.",
    journal: "Frontiers in Computational Neuroscience",
    citation: "20, 1831476",
    year: 2026,
    publishedAt: "2026-07-08",
    status: "Published",
    contribution: "Study design, analysis pipeline, modelling, and writing; first author.",
    summary: "In a retrospective study of 32 sedated pediatric intensive-care patients, EEG features carried information about later functional outcome beyond demographics. Larger independent studies are needed to establish generalizability.",
    doi: "10.3389/fncom.2026.1831476",
    featured: true,
    links: [
      { name: "Article / DOI", url: "https://doi.org/10.3389/fncom.2026.1831476" },
      { name: "Full text", url: "https://www.frontiersin.org/journals/computational-neuroscience/articles/10.3389/fncom.2026.1831476/full" },
      { name: "Analysis code", url: "https://github.com/drknwmn/PICU-Criticality-Prognosis" },
    ],
  },
  {
    id: "newman-2026-doc-pci",
    title: "Critical dynamics in spontaneous EEG predict perturbational complexity in disorders of consciousness with measurable evoked responses",
    authors: "Newman, D., Maschke, C., O’Byrne, J., Colombo, M. A., Comanducci, A., Casarotto, S., Citerio, G., Rosanova, M., Massimini, M., Jerbi, K., & Blain-Moraes, S.",
    journal: "bioRxiv",
    year: 2026,
    publishedAt: "2026-06-09",
    status: "Preprint",
    contribution: "Feature extraction, modelling, interpretation, and writing; first author.",
    summary: "Spontaneous EEG features did not generalize prediction across the full heterogeneous cohort. Associations emerged in restricted response and etiology groups, identifying boundary conditions linking spontaneous and evoked complexity.",
    doi: "10.64898/2026.06.04.730221",
    featured: true,
    links: [
      { name: "Preprint / DOI", url: "https://doi.org/10.64898/2026.06.04.730221" },
      { name: "Version record", url: "https://sciety.org/articles/activity/10.64898/2026.06.04.730221" },
    ],
  },
  {
    id: "naish-2025-epilepsy",
    title: "Neural Complexity and Prognosis: Predicting Recovery in Pediatric Epilepsy Using EEG Markers",
    authors: "Naish, M., Newman, D., & Blain-Moraes, S.",
    journal: "McGill Science Undergraduate Research Journal",
    citation: "20(1), 1–8",
    year: 2025,
    publishedAt: "2025-03-31",
    status: "Published",
    contribution: "Student mentorship, research guidance, and coauthorship.",
    summary: "A student-led study examined EEG complexity during sedation and recovery in 12 pediatric epilepsy patients. The small retrospective sample motivates further validation in larger cohorts.",
    doi: "10.26443/msurj.v1i1.288",
    featured: false,
    links: [
      { name: "Article / DOI", url: "https://doi.org/10.26443/msurj.v1i1.288" },
      { name: "Full text", url: "https://msurjonline.mcgill.ca/article/view/288" },
    ],
  },
];

export const academicBackground: AcademicItem[] = [
  {
    tenure: "2025 – Present",
    title: "PhD candidate in Neuroscience",
    institution: "McGill University",
    description: "Integrated Program in Neuroscience. Transferred directly from the MSc track in September 2025; research on neural dynamics, consciousness, and brain-state transitions.",
  },
  {
    tenure: "2023 – 2025",
    title: "Graduate research, MSc track",
    institution: "McGill University",
    description: "Entered the Integrated Program in Neuroscience in September 2023 and continued into the PhD without a separate MSc degree.",
  },
  {
    tenure: "2020 – 2023",
    title: "BSc, Honours Behavioural Neuroscience",
    institution: "Concordia University",
    description: "Research training in multimodal neuroimaging, functional connectivity, and nonlinear time-series analysis, including simultaneous fMRI and FDG-fPET.",
  },
];

export const awards: Award[] = [
  { year: "2026–2027", name: "Internal Studentship", awardedBy: "McGill Faculty of Medicine and Health Sciences" },
  { year: "2026", name: "Millénium Québecor Award · Best poster presentation", awardedBy: "UNIQUE Student Symposium" },
  { year: "2026", name: "Oral presentation competition · Third place", awardedBy: "BRaIN Symposium" },
  { year: "2025–2026", name: "UNIQUE Excellence Scholarship", awardedBy: "UNIQUE NeuroAI Research Center" },
  { year: "2025", name: "Camillo Golgi Presentation Award", awardedBy: "School of Brain Cells & Circuits, Erice" },
  { year: "2025", name: "IEEE Brain Travel Grant", awardedBy: "IEEE Brain Discovery & Neurotechnology Workshop" },
  { year: "2025", name: "Conference Travel Award", awardedBy: "UNIQUE · ASSC 2025" },
];

const selectedPresentationRecords: Presentation[] = [
  {
    id: "ipn-2026-propofol",
    title: "Reframing ‘paradoxical’ excitation: disentangling electroencephalogram complexity and entropy reveals resting-state dynamics associated with propofol susceptibility in healthy adults",
    authors: "Newman, D., Maschke, C., Mashour, G. A., & Blain-Moraes, S.",
    event: "McGill IPN Retreat", date: "September 10, 2026",
    location: "Montreal Science Centre, Montreal, Canada", format: "Poster", presenter: "Derek Newman",
  },
  {
    id: "integrate-fire-2026",
    title: "Detecting Consciousness in Brain Injured Patients Using Anaesthesia as a Perturbation",
    authors: "Newman, D.", event: "Integrate and Fire Seminar Series", date: "March 23, 2026",
    location: "Montreal, Canada", format: "Invited talk", presenter: "Derek Newman",
  },
  {
    id: "brain-2026-propofol",
    title: "Disentangling EEG Complexity and Entropy Reveals Resting-State Dynamics Associated with Propofol Susceptibility",
    authors: "Newman, D., Maschke, C., Mashour, G., & Blain-Moraes, S.",
    event: "BRaIN Symposium", date: "March 3, 2026",
    location: "Montreal, Canada", format: "Oral presentation", presenter: "Derek Newman",
  },
  {
    id: "wcicc-2025-picu",
    title: "EEG criticality as a prognostic tool for functional outcomes in sedated pediatric intensive care patients",
    authors: "Newman, D., Grinberg, M., Jones, K., Woodward, K., Esser, M. J., & Blain-Moraes, S.",
    event: "WCICC 2025", date: "September 16–19, 2025",
    location: "Vancouver, Canada", format: "Poster", presenter: "Derek Newman",
  },
  {
    id: "ieee-2025-complexity",
    title: "Tracking Neural State Transitions under Anesthesia Using the Complexity-Entropy Causal Plane (CECP)",
    authors: "Newman, D., & Blain-Moraes, S.",
    event: "3rd IEEE Brain Discovery & Neurotechnology Workshop", date: "September 12–13, 2025",
    location: "Vancouver, Canada", format: "Poster", presenter: "Derek Newman",
  },
  {
    id: "assc-2025-lifespan",
    title: "Brain criticality under GABAergic sedation outperforms drug-free state in predicting recovery of consciousness after severe brain injury across the lifespan",
    authors: "Newman, D., Maschke, C., Norton, L., Duclos, C., Laforge, G., Wang, X., Al-Hayawi, H., Lavoie, R., Jones, K., Grinberg, M., Woodward, K., Sekhon, M., Edlow, B., Esser, M., Owen, A. M., & Blain-Moraes, S.",
    event: "ASSC 28", date: "July 6–9, 2025",
    location: "Crete, Greece", format: "Oral presentation", presenter: "Derek Newman",
  },
  {
    id: "ibia-2025-picu",
    title: "Prognostic Value of EEG Criticality Features for Assessing Recovery in Sedated Pediatric Intensive Care Patients",
    authors: "Newman, D., Grinberg, M., Woodward, K., Esser, M., Jones, K., & Blain-Moraes, S.",
    event: "IBIA 15th World Congress on Brain Injury", date: "March 19–22, 2025",
    location: "Montreal, Canada", format: "Oral presentation", presenter: "Derek Newman",
  },
  {
    id: "ccrs-2024-microstates",
    title: "Changes in EEG Microstate Complexity During Cognitive Recovery Following Anesthesia in Healthy Participants",
    authors: "Banerji, A., Newman, D., Blain-Moraes, S., & Sleigh, J.",
    event: "Canadian Consciousness Research Symposium", date: "November 14–15, 2024",
    location: "Montreal, Canada", format: "Coauthored oral presentation",
  },
  {
    id: "perform-2023-fpet",
    title: "Self-Similar Properties of Simultaneous fPET and fMRI",
    authors: "Newman, D., Paul, J., & Steele, C. J.",
    event: "PERFORM Student Health Research Event", date: "2023",
    location: "Montreal, Canada", format: "Poster", presenter: "Derek Newman",
  },
];

export const presentations: Presentation[] = [...selectedPresentationRecords, ...additionalPresentations];
