# Derek Newman — Personal Website & Research Portfolio

**Website: [drknwmn.github.io/portfolio](https://drknwmn.github.io/portfolio/)**

This repository contains the source for Derek Newman's personal website and
academic research portfolio—not a standalone neuroscience analysis package.
It presents research, publications, scientific software, interactive demos,
education, and professional contact information.

Built with React, TypeScript, Vite, and React Router. The site includes a research
overview, a bibliography separating published articles from preprints, education,
selected presentations and recognition, and direct email contact.

## Local development

Requires Node.js 20+.

```bash
npm ci
npm run dev
```

The development server defaults to port 3000. To restrict it to your computer:

```bash
npm run dev -- --host 127.0.0.1
```

## Validation and local production preview

```bash
npm run typecheck
npm run build
npm run preview -- --host 127.0.0.1
```

The production preview uses the GitHub Pages base path:
http://localhost:4173/portfolio/

Building and previewing locally do not deploy the website.

## Public content

Public-facing records live in `data/portfolioData.ts`. Each publication has a stable
ID, publication date, status, DOI, authors, contribution statement, and real links.
Homepage selections and the full bibliography share the same records.

Only include verified information suitable for public presentation. Do not store
grant applications, private CV drafts, unpublished manuscripts, private source
paths, credentials, patient data, or planning/audit notes in this repository.
Keep uncertain manuscript statuses and unreconciled conference citations off the
public site until confirmed. Do not describe a private repository as a public release.

The current routes are Home, Research, Publications, Software, and the
NeuroComplexity overview. Home contains selected papers, selected talks,
recognition, About, and Contact. Publications holds the bibliography, separated
into published papers, in-press papers when applicable, preprints, talks, and
posters. Presentation records are shared with `data/presentationArchive.ts`.
Legacy Courses leads to NeuroComplexity education; Demos leads to Software.
Hash routing is retained for compatibility with GitHub Pages.

The homepage retains the original particle-brain centrepiece, its halo, and a
monochrome, pointer-responsive background network. The motion control pauses both
canvases. Both respect reduced-motion preferences and stop while the browser tab
is hidden; the brain also stops when offscreen. Section bands, entrance effects,
and subtle hover treatments separate the content. The brain floats without a
rectangular panel. Reading pages use a static background.

Sections and individual publication/presentation entries fade in after a visible
portion enters the viewport. Reveals rearm only after content leaves the viewport,
so they also work when scrolling back. Long paper/talk lists reveal their entries
independently rather than fading a page-sized wrapper before it can be read.
Reduced-motion preferences and keyboard access keep content visible. The homepage
background control pauses the canvases independently, without disabling text reveals.
Software is separated into interactive tools, the NeuroComplexity framework, and
public research code, with clear headings and direct section links. The oscillator
lab is an explicitly illustrative Kuramoto teaching model, separate from research.

The Ising Morph showcase links to the public repository and standalone studio at
https://github.com/drknwmn/IsingMorph and
https://drknwmn.github.io/IsingMorph/. Its user-controlled MP4 preview and poster
in `public/demos/` were encoded from the public
`docs/assets/original-sequence.gif` (source SHA-256:
`d07149f711a11c02cabf1745ea659e41114051bfa9125ca582ff3b508b0bc38c`).
The preview does not autoplay or load its video until requested. The neuron,
brain, and person are illustrative examples, not neuroscience data; the
standalone studio runs the interactive simulation. The portfolio imports no
private project sources or additional runtime dependencies.

The Research page is a figure-led overview of brain-state transitions, brain
injury and recovery, and computational models and methods. Published figures lead
the propofol and pediatric ICU studies; the DOC–PCI preprint remains clearly labelled
with its negative full-cohort generalization result and restricted-analysis limits.
The complexity–entropy explorer is optional and collapsed by default. The oscillator
experiment lives on Software instead of competing with the research narrative.
`data/researchEvidence.ts` contains public-paper summaries and reported PICU AUCs,
with source locations. It contains no patient records. The oscillator display is
explicitly illustrative, uses arbitrary model units, and is not the delayed
multiscale research model or a fitted clinical model. Empirical findings,
preprint findings, and ongoing modelling work remain separately labelled.

`public/figures/` contains unchanged, published figure images only. Attribution,
source URLs, and licenses live in `data/paperFigures.ts`. The interactive CECP
uses approximate ReCCognition group means digitized from published Figure 4c;
`data/cecpData.ts` records its source, calibration, and limitations. These are not
the original analysis tables, patient records, or reconstructed uncertainty
intervals. Lines indicate condition order, not measured time. The original
figures remain available alongside the explorer for comparison.

NeuroComplexity education is in development, not a released course. Its overview
links to existing lab tutorials and can later link to the standalone education
site. Public GitHub forks retain attribution to their lab repositories.

## GitHub Pages

Pull requests and pushes run build checks only. Deployment is manual.

After a reviewed change has been merged into `main`, an authorized release can be
published by running **Deploy GitHub Pages** from the GitHub Actions page, selecting
`main`. If the deployment workflow is paused, enable it only as part of that
authorized release. The deployment workflow builds the site and publishes only `dist/`.
The workflow will not deploy a feature branch.

The repository base path is `/portfolio/`, configured in `vite.config.ts`.
If the repository is renamed, update this path before deploying.
