export interface PaperFigure {
  path: string;
  width: number;
  height: number;
  alt: string;
  label: string;
  source: string;
  original: string;
  credit: string;
  license: string;
  licenseUrl: string;
}

export const paperFigures: Record<"propofol" | "picu" | "cecpOverview", PaperFigure> = {
  propofol: {
    path: "figures/propofol-figure-4.jpg", width: 3126, height: 2616,
    alt: "Published Figure 4: baseline statistical complexity, responsive and drowsy group trajectories, and ReCCognition group and individual trajectories on the complexity–entropy causal plane.",
    label: "Figure 4 · Complexity–entropy trajectories", source: "https://doi.org/10.1016/j.bja.2026.03.082",
    original: "https://ars.els-cdn.com/content/image/1-s2.0-S0007091226003302-gr4_lrg.jpg",
    credit: "Newman, Maschke, Mashour & Blain-Moraes (2026), British Journal of Anaesthesia. Figure reproduced unchanged.",
    license: "CC BY-NC-ND 4.0", licenseUrl: "https://creativecommons.org/licenses/by-nc-nd/4.0/",
  },
  cecpOverview: {
    path: "figures/propofol-figure-3.jpg", width: 682, height: 530,
    alt: "Published Figure 3: simulated signal benchmarks and empirical EEG plotted on the complexity–entropy causal plane, with theoretical complexity bounds.",
    label: "Figure 3 · The full complexity–entropy plane", source: "https://doi.org/10.1016/j.bja.2026.03.082",
    original: "https://ars.els-cdn.com/content/image/1-s2.0-S0007091226003302-gr3.jpg",
    credit: "Newman, Maschke, Mashour & Blain-Moraes (2026), British Journal of Anaesthesia. Figure reproduced unchanged.",
    license: "CC BY-NC-ND 4.0", licenseUrl: "https://creativecommons.org/licenses/by-nc-nd/4.0/",
  },
  picu: {
    path: "figures/picu-figure-2.webp", width: 1772, height: 872,
    alt: "Published Figure 2: ROC curves comparing EEG plus demographic models with demographic-only models; the right panel shows bootstrap and demographic feature comparisons.",
    label: "Figure 2 · EEG and demographic model comparisons", source: "https://doi.org/10.3389/fncom.2026.1831476",
    original: "https://www.frontiersin.org/files/Articles/1831476/xml-images/fncom-20-1831476-g002.webp",
    credit: "Newman et al. (2026), Frontiers in Computational Neuroscience. Figure reproduced unchanged.",
    license: "CC BY 4.0", licenseUrl: "https://creativecommons.org/licenses/by/4.0/",
  },
};
