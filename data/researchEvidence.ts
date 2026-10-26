export const propofolResponses = [
  {
    id: "responsive",
    label: "Remained responsive",
    lzc: "Increased",
    statisticalComplexity: "Decreased",
    direction: 1,
    explanation: "At moderate sedation, the responsive group showed more Lempel–Ziv complexity but less statistical complexity. These measures describe different properties of the signal.",
  },
  {
    id: "unresponsive",
    label: "Became unresponsive",
    lzc: "Decreased",
    statisticalComplexity: "Increased",
    direction: -1,
    explanation: "At moderate sedation, the unresponsive group showed the opposite pattern. A single ‘complexity’ score would obscure this distinction.",
  },
] as const;

export const picuModels = [
  { id: "demographics", name: "Demographics only", classifier: "Logistic regression", auc: 0.63, eeg: false },
  { id: "logistic", name: "EEG + demographics", classifier: "Logistic regression", auc: 0.85, eeg: true },
  { id: "lda", name: "EEG + demographics", classifier: "Linear discriminant analysis", auc: 0.82, eeg: true },
  { id: "svm", name: "EEG + demographics", classifier: "Support vector machine", auc: 0.92, eeg: true },
] as const;

export const docCohorts = [
  {
    id: "full",
    label: "Full cohort",
    result: "Prediction did not generalize",
    explanation: "In 26 patients with heterogeneous injuries, spontaneous EEG features did not generalize PCImax prediction across the full cohort.",
    supported: false,
  },
  {
    id: "non-anoxic",
    label: "Non-anoxic patients",
    result: "Relationship in a restricted analysis",
    explanation: "Prediction was reported when the analysis excluded anoxic injuries. This restricted-cohort result does not establish a general bedside predictor.",
    supported: true,
  },
  {
    id: "nonzero",
    label: "Non-zero PCImax",
    result: "Relationship in a restricted analysis",
    explanation: "Prediction was also reported in patients with non-zero PCImax. This restriction uses the measured target and is not an EEG-only screening rule for new patients.",
    supported: true,
  },
] as const;

export const researchSources = {
  propofol: {
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC13494104/",
    label: "Newman, Maschke et al. · British Journal of Anaesthesia · 2026",
    location: "Abstract, Results; Chennu n = 20 and ReCCognition n = 8.",
  },
  picu: {
    url: "https://www.frontiersin.org/journals/computational-neuroscience/articles/10.3389/fncom.2026.1831476/full",
    label: "Newman et al. · Frontiers in Computational Neuroscience · 2026",
    location: "Section 3.3 and Figure 2, left panel. Reported AUCs, not reconstructed ROC curves.",
  },
  doc: {
    url: "https://doi.org/10.64898/2026.06.04.730221",
    label: "Newman et al. · bioRxiv preprint · June 2026 · Not peer reviewed",
    location: "Public abstract; qualitative findings only. No patient values or subgroup effect sizes reproduced.",
  },
} as const;
