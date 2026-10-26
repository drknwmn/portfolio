import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { navItems } from "../data/portfolioData";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.key]);

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 981px)");
    const closeOnDesktop = () => {
      if (desktop.matches) setIsMenuOpen(false);
    };
    desktop.addEventListener("change", closeOnDesktop);
    return () => desktop.removeEventListener("change", closeOnDesktop);
  }, []);

  const renderLinks = (mobile = false) => navItems.map((item) => {
    const active = item.hash
      ? location.pathname === item.path && location.hash === item.hash
      : location.pathname === item.path || location.pathname.startsWith(`${item.path}/`);
    return (
      <Link
        key={item.label}
        to={{ pathname: item.path, hash: item.hash }}
        className={`${mobile ? "mobile-nav__link" : "header-nav__link"}${active ? " is-active" : ""}`}
        aria-current={active ? (item.hash ? "location" : "page") : undefined}
        onClick={() => setIsMenuOpen(false)}
      >
        {item.label}
      </Link>
    );
  });

  return (
    <header
      className={`site-header${isScrolled ? " is-scrolled" : ""}`}
      onKeyDown={(event) => {
        if (event.key === "Escape" && isMenuOpen) {
          setIsMenuOpen(false);
          toggleRef.current?.focus();
        }
      }}
    >
      <div className="site-header__inner">
        <Link to="/" className="brand-mark" aria-label="Derek Newman home" onClick={() => setIsMenuOpen(false)}>
          <span className="brand-mark__name">Derek Newman</span>
        </Link>
        <nav className="header-nav" aria-label="Primary">{renderLinks()}</nav>
        <button
          ref={toggleRef}
          type="button"
          className="header-toggle"
          aria-expanded={isMenuOpen}
          aria-controls={isMenuOpen ? "mobile-navigation" : undefined}
          aria-label={isMenuOpen ? "Close navigation" : "Open navigation"}
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <span>{isMenuOpen ? "Close" : "Menu"}</span>
          <span aria-hidden="true">{isMenuOpen ? "×" : "+"}</span>
        </button>
      </div>
      {isMenuOpen && (
        <nav className="mobile-nav" id="mobile-navigation" aria-label="Mobile">
          {renderLinks(true)}
        </nav>
      )}
    </header>
  );
};

export default Header;
