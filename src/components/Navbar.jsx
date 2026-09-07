import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { initTheme, toggleTheme as switchTheme } from "../utils/theme";
import { useI18n } from "../i18n/LanguageContext";
import BrandLogo from "./BrandLogo";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState("dark");
  const location = useLocation();
  const { t } = useI18n();

  const links = [
    [t("nav.home"), "/home"],
    [t("nav.services"), "/services"],
    [t("nav.products"), "/products"],
    [t("nav.solutions"), "/home#solutions"],
    [t("nav.projects"), "/projects"],
    [t("nav.about"), "/about"],
    [t("nav.contact"), "/contact"],
  ];

  useEffect(() => {
    setTheme(initTheme());
  }, []);

  const toggleTheme = () => {
    setTheme(switchTheme(theme));
  };

  const isActive = (href) => {
    if (href.startsWith("/home#")) {
      return location.pathname === "/home" && location.hash === href.replace("/home", "");
    }
    if (href === "/products") {
      return (
        location.pathname === "/products" ||
        location.pathname.startsWith("/products/") ||
        location.pathname.startsWith("/product/")
      );
    }
    return location.pathname === href || location.pathname.startsWith(`${href}/`);
  };

  return (
    <header id="header">
      <nav className="navbar container">
        <Link className="brand" to="/home" onClick={() => setMenuOpen(false)} aria-label={t("nav.homeAria")}>
          <BrandLogo />
        </Link>

        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          {links.map(([label, href]) => (
            <li key={href}>
              {href.startsWith("/home#") ? (
                <a href={href} className={isActive(href) ? "active" : ""} onClick={() => setMenuOpen(false)}>
                  {label}
                </a>
              ) : (
                <Link to={href} className={isActive(href) ? "active" : ""} onClick={() => setMenuOpen(false)}>
                  {label}
                </Link>
              )}
            </li>
          ))}
        </ul>

        <div className="nav-actions">
          <LanguageSwitcher />
          <button className="icon-btn" onClick={toggleTheme} aria-label={t("nav.toggleTheme")}>
            <i className={`fas fa-${theme === "dark" ? "sun" : "moon"}`} />
          </button>
          <Link className="nav-cta" to="/contact" onClick={() => setMenuOpen(false)}>
            {t("nav.requestService")} <i className="fas fa-arrow-right" />
          </Link>
          <button
            className={`hamburger ${menuOpen ? "active" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={t("nav.openMenu")}
            aria-expanded={menuOpen}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>
    </header>
  );
}
