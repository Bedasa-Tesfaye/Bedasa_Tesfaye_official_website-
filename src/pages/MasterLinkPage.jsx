import { Link } from "react-router-dom";
import BrandLogo from "../components/BrandLogo";
import LanguageSwitcher from "../components/LanguageSwitcher";
import { useI18n } from "../i18n/LanguageContext";
import "./master-link.css";

function MasterLinkPage() {
  const { t } = useI18n();
  const year = new Date().getFullYear();

  const quickLinks = [
    { label: t("links.website"), icon: "🏠", to: "/home" },
    { label: t("links.services"), icon: "⚙️", to: "/services" },
    { label: t("links.projects"), icon: "📁", to: "/projects" },
    { label: t("links.about"), icon: "👤", to: "/about" },
    { label: t("links.contact"), icon: "📩", to: "/contact" },
    { label: t("links.email"), icon: "✉️", href: "mailto:bahilutesfaye719@gmail.com" },
    { label: t("links.call"), icon: "📞", href: "tel:+251966764344" },
    { label: t("links.telegram"), icon: "💬", href: "https://t.me/bahilu_leo" },
    { label: t("links.linkedin"), icon: "💼", href: "https://www.linkedin.com/in/bedasa-tesfaye" },
  ];

  return (
    <div className="links-page">
      <div className="links-container">
        <div className="links-lang">
          <LanguageSwitcher />
        </div>

        <div className="profile logo-profile">
          <div className="brand-logo" aria-label="Michu Technology Solutions logo">
            <BrandLogo size="hero" showWordmark={false} />
            <div className="brand-wordmark">
              <span className="word-michu">MICHU</span>
              <span className="word-sub">TECHNOLOGY SOLUTIONS</span>
            </div>
          </div>
        </div>

        <div className="social-links">
          {quickLinks.map((link) => {
            const content = (
              <>
                <span>{link.icon}</span>
                <strong>{link.label}</strong>
              </>
            );

            if (link.to) {
              return (
                <Link key={link.to} to={link.to} className="link-button">
                  {content}
                </Link>
              );
            }

            return (
              <a
                key={link.href}
                href={link.href}
                className="link-button"
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noreferrer" : undefined}
              >
                {content}
              </a>
            );
          })}
        </div>

        <div className="business">
          <h2>Michu Technology Solutions</h2>
          <p>{t("links.tagline")}</p>
        </div>

        <p className="links-footer">
          © {year} Michu Technology Solutions. {t("links.rights")}
        </p>
      </div>
    </div>
  );
}

export default MasterLinkPage;
