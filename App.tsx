import { useEffect, useRef, useState } from "react";
import { HashRouter, Link, Navigate, Route, Routes, useLocation } from "react-router-dom";
import Header from "./components/Header";
import ParticleBackground from "./components/ParticleBackground";
import useReducedMotion from "./hooks/useReducedMotion";
import HomePage from "./pages/HomePage";
import PublicationsPage from "./pages/PublicationsPage";
import ResearchPage from "./pages/ResearchPage";
import SoftwarePage from "./pages/SoftwarePage";
import NeuroComplexityPage from "./pages/NeuroComplexityPage";

const pageMetadata: Record<string, { title: string; description: string }> = {
  "/": {
    title: "Derek Newman | Computational Neuroscience",
    description: "Derek Newman is a neuroscience PhD candidate at McGill University studying neural dynamics, consciousness, and recovery through EEG, modelling, and scientific software.",
  },
  "/research": {
    title: "Research | Derek Newman",
    description: "Research on neural state transitions, EEG and functional outcome, perturbational complexity, and multiscale modelling.",
  },
  "/publications": {
    title: "Publications | Derek Newman",
    description: "Peer-reviewed articles and public preprints by Derek Newman, with publication records, contribution statements, and analysis code.",
  },
  "/software": { title: "Software | Derek Newman", description: "Scientific computing, EEG analysis, machine learning, and public research code by Derek Newman." },
  "/software/neurocomplexity": { title: "NeuroComplexity | Derek Newman", description: "NeuroComplexity: nonlinear EEG methods, inspectable workflows, and educational resources in development." },
};

const PageNavigation = () => {
  const location = useLocation();
  const previousPath = useRef(location.pathname);

  useEffect(() => {
    const metadata = pageMetadata[location.pathname] ?? {
      title: "Page not found | Derek Newman",
      description: "Return to Derek Newman's research and publications.",
    };
    document.title = metadata.title;
    document.querySelector('meta[name="description"]')?.setAttribute("content", metadata.description);
    const frame = window.requestAnimationFrame(() => {
      const target = location.hash ? document.getElementById(location.hash.slice(1)) : null;
      if (target) {
        target.focus({ preventScroll: true });
        target.scrollIntoView();
      } else {
        if (previousPath.current !== location.pathname) {
          document.getElementById("main-content")?.focus({ preventScroll: true });
        }
        window.scrollTo({ top: 0, behavior: "instant" });
      }
      previousPath.current = location.pathname;
    });
    return () => window.cancelAnimationFrame(frame);
  }, [location.pathname, location.hash, location.key]);

  return null;
};

const NotFoundPage = () => (
  <div className="page-content">
    <header className="page-intro">
      <p className="eyebrow">Page not found</p>
      <h1 className="page-title">Let’s get you back to the research.</h1>
      <p className="section-description">This address doesn’t match a page on the site.</p>
      <Link className="button button--primary section-link" to="/">Return home</Link>
    </header>
  </div>
);

const AppFrame = () => {
  const location = useLocation();
  const [backgroundPaused, setBackgroundPaused] = useState(false);
  const reducedMotion = useReducedMotion();

  return (
    <div className="app-shell">
      <ParticleBackground paused={backgroundPaused || location.pathname !== "/"} />
      <PageNavigation />
      <Link className="skip-link" to={{ pathname: location.pathname, hash: "#main-content" }}>Skip to content</Link>
      <Header />
      <main className="page-main" id="main-content" tabIndex={-1}>
        <Routes>
          <Route path="/" element={<HomePage backgroundPaused={backgroundPaused} reducedMotion={reducedMotion} onToggleBackground={() => setBackgroundPaused((paused) => !paused)} />} />
          <Route path="/research" element={<ResearchPage />} />
          <Route path="/publications" element={<PublicationsPage />} />
          <Route path="/software" element={<SoftwarePage />} />
          <Route path="/software/neurocomplexity" element={<NeuroComplexityPage />} />
          <Route path="/about" element={<Navigate to={{ pathname: "/", hash: "#about" }} replace />} />
          <Route path="/contact" element={<Navigate to={{ pathname: "/", hash: "#contact" }} replace />} />
          <Route path="/courses" element={<Navigate to={{ pathname: "/software/neurocomplexity", hash: "#education" }} replace />} />
          <Route path="/demos" element={<Navigate to="/software" replace />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <footer className="site-footer">
        <p>Derek Newman · Computational neuroscience</p>
        <div>
          <Link to="/publications">Publications</Link>
          <Link to="/software">Software</Link>
          <a href="mailto:derek.newman@mail.mcgill.ca">Email</a>
          <a href="https://github.com/drknwmn">GitHub</a>
        </div>
      </footer>
    </div>
  );
};

const App = () => <HashRouter><AppFrame /></HashRouter>;

export default App;
