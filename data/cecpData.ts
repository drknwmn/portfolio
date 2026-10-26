export const cecpProvenance = {
  source: "https://doi.org/10.1016/j.bja.2026.03.082",
  figure: "Figure 4c, ReCCognition group means (n = 8)",
  method: "Approximate group means digitized from the published figure, rounded to three decimals. These are not the original analysis tables. No individual observations or uncertainty intervals are reconstructed.",
  imageSource: "https://ars.els-cdn.com/content/image/1-s2.0-S0007091226003302-gr4_lrg.jpg",
  calibration: { entropy: { leftPixel: 531, rightPixel: 2155, leftValue: 0.8, rightValue: 1.025 }, complexity: { topPixel: 1630.5, bottomPixel: 2439, topValue: 0.4, bottomValue: 0.05 } },
};

export const cecpConditions = [
  { label: "Baseline", entropy: 0.927, complexity: 0.167, color: "#58b9f5", pixel: [1449.5, 2167.98] },
  { label: "Mild sedation", entropy: 0.934, complexity: 0.152, color: "#f4dd7c", pixel: [1498.05, 2203.8] },
  { label: "Moderate sedation", entropy: 0.940, complexity: 0.142, color: "#69bfb3", pixel: [1543.21, 2227.34] },
  { label: "Deep sedation", entropy: 0.889, complexity: 0.238, color: "#f28c86", pixel: [1170.1, 2003.97] },
] as const;
