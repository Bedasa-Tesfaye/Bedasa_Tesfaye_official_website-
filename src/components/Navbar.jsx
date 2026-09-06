import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { initTheme, toggleTheme as switchTheme } from "../utils/theme";
import BrandLogo from "./BrandLogo";

const links = [
  ["Home", "/home"],
  ["Services", "/services"],
  ["Products", "/products"],
  ["Solutions", "/home#solutions"],
  ["Projects", "/projects"],
  ["About", "/about"],
  ["Contact", "/contact"],
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState("dark");
  const location = useLocation();

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
        <Link className="brand" to="/home" onClick={() => setMenuOpen(false)} aria-label="Michu Technology Solutions home">
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
          <button className="icon-btn" onClick={toggleTheme} aria-label="Toggle theme">
            <i className={`fas fa-${theme === "dark" ? "sun" : "moon"}`} />
          </button>
          <Link className="nav-cta" to="/contact" onClick={() => setMenuOpen(false)}>
            Request a Service <i className="fas fa-arrow-right" />
          </Link>
          <button
            className={`hamburger ${menuOpen ? "active" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Open menu"
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
