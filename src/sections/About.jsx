import Button from "../components/Button";
import { useI18n } from "../i18n/LanguageContext";

const VALUE_ICONS = ["fa-bullseye", "fa-handshake", "fa-arrow-trend-up"];
const DETAIL_ICONS = ["fa-building", "fa-puzzle-piece", "fa-shield-heart"];

export default function About() {
  const { t, copy } = useI18n();

  return (
    <>
      <section id="about" className="section about-section">
        <div className="container about-grid">
          <div className="about-panel reveal">
            <div className="eyebrow dark">
              <span />
              {t("about.eyebrow")}
            </div>
            <h2>
              {t("about.titleBefore")} <span>{t("about.titleHighlight")}</span>
            </h2>
            <p>{t("about.p1")}</p>
            <p>{t("about.p2")}</p>
            <div className="values">
              {copy.about.values.map((value, index) => (
                <div key={value.title}>
                  <i className={`fas ${VALUE_ICONS[index]}`} />
                  <strong>{value.title}</strong>
                  <span>{value.text}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="founder-card reveal">
            <div className="founder-top">
              <span className="mini-label">{t("about.founderRole")}</span>
              <span className="founder-badge">
                <i className="fas fa-check" /> {t("about.founderBadge")}
              </span>
            </div>
            <div className="founder-avatar">BT</div>
            <h3>Bedasa Tesfaye</h3>
            <p>{t("about.founderLine")}</p>
            <div className="founder-skills">
              {copy.about.skills.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
            <blockquote>“{t("about.quote")}”</blockquote>
          </div>
        </div>
      </section>
      <section className="company-section">
        <div className="container company-grid">
          <div className="company-copy reveal">
            <div className="eyebrow dark">
              <span />
              {t("about.companyEyebrow")}
            </div>
            <h2>
              {t("about.companyTitleBefore")} <span>{t("about.companyTitleHighlight")}</span>
            </h2>
            <p>{t("about.companyP1")}</p>
            <p>{t("about.companyP2")}</p>
            <Button href="/contact">
              {t("about.discuss")} <i className="fas fa-arrow-right" />
            </Button>
          </div>
          <div className="company-details reveal">
            {copy.about.details.map((detail, index) => (
              <div className="detail-card" key={detail.label}>
                <i className={`fas ${DETAIL_ICONS[index]}`} />
                <div>
                  <span>{detail.label}</span>
                  <strong>{detail.text}</strong>
                </div>
              </div>
            ))}
            <div className="company-callout">
              <span>{t("about.missionLabel")}</span>
              <p>{t("about.missionText")}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
