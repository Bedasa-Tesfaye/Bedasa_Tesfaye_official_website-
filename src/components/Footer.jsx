import { Link } from "react-router-dom";
import BrandLogo from "./BrandLogo";
import { useI18n } from "../i18n/LanguageContext";

export default function Footer() {
  const { t } = useI18n();
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-main">
        <div className="footer-brand">
          <Link className="brand" to="/home" aria-label={t("nav.homeAria")}>
            <BrandLogo />
          </Link>
          <p>{t("footer.tagline")}</p>
        </div>
        <div className="footer-links">
          <h4>{t("footer.company")}</h4>
          <Link to="/about">{t("nav.about")}</Link>
          <Link to="/services">{t("nav.services")}</Link>
          <Link to="/products">{t("nav.products")}</Link>
          <Link to="/projects">{t("nav.projects")}</Link>
          <Link to="/contact">{t("nav.contact")}</Link>
        </div>
        <div className="footer-links">
          <h4>{t("footer.products")}</h4>
          <Link to="/products/cctv">{t("categories.cctv.name")}</Link>
          <Link to="/products/access-attendance">{t("categories.access-attendance.name")}</Link>
          <Link to="/products/networking">{t("categories.networking.name")}</Link>
          <Link to="/products/computers">{t("categories.computers.name")}</Link>
        </div>
        <div className="footer-links">
          <h4>{t("footer.connect")}</h4>
          <a href="mailto:bahilutesfaye719@gmail.com">{t("footer.emailUs")}</a>
          <a href="tel:+251966764344">{t("footer.callUs")}</a>
          <a href="https://t.me/bahilu_leo" target="_blank" rel="noreferrer">
            Telegram
          </a>
          <a href="https://www.linkedin.com/in/bedasa-tesfaye" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>
          © {year} Michu Technology Solutions. {t("footer.rights")}
        </span>
        <span>{t("footer.pillars")}</span>
      </div>
    </footer>
  );
}
