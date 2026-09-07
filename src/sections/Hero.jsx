import Button from "../components/Button";
import { useI18n } from "../i18n/LanguageContext";

export default function Hero() {
  const { t, copy } = useI18n();
  const nodes = [
    ["node-router", "fa-wifi", copy.hero.nodes.network],
    ["node-cctv", "fa-video", copy.hero.nodes.cctv],
    ["node-server", "fa-server", copy.hero.nodes.server],
    ["node-users", "fa-users", copy.hero.nodes.users],
  ];

  return (
    <section id="home" className="hero">
      <div className="hero-grid" />
      <div className="hero-glow glow-one" />
      <div className="hero-glow glow-two" />
      <div className="container hero-inner">
        <div className="hero-copy reveal">
          <div className="eyebrow">
            <span />
            {t("hero.eyebrow")}
          </div>
          <h1>
            {t("hero.titleLine1")}
            <br />
            <span>{t("hero.titleHighlight")}</span>
          </h1>
          <p className="hero-text">{t("hero.text")}</p>
          <div className="hero-actions">
            <Button href="#services">
              {t("hero.explore")} <i className="fas fa-arrow-right" />
            </Button>
            <Button href="#contact" variant="ghost">
              <i className="fas fa-phone" /> {t("hero.talk")}
            </Button>
          </div>
          <div className="trust-row">
            {copy.hero.trust.map(([a, b]) => (
              <div key={a}>
                <strong>{a}</strong>
                <span>{b}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="hero-visual reveal">
          <div className="tech-card main-card">
            <div className="card-top">
              <img className="card-logo" src="/images/brand/michu-logo.png" alt="" />
              <span>MICHU TECHNOLOGY</span>
              <span className="live-pill">{t("hero.online")}</span>
            </div>
            <div className="network-map">
              {nodes.map(([cls, icon, label]) => (
                <div className={`node ${cls}`} key={cls}>
                  <i className={`fas ${icon}`} />
                  <small>{label}</small>
                </div>
              ))}
              <div className="connection c1" />
              <div className="connection c2" />
              <div className="connection c3" />
              <div className="connection c4" />
            </div>
            <div className="monitor-footer">
              <div>
                <span>{t("hero.systems")}</span>
                <strong>{t("hero.operational")}</strong>
              </div>
              <div>
                <span>{t("hero.security")}</span>
                <strong>{t("hero.protected")}</strong>
              </div>
            </div>
          </div>
          <div className="floating-card fc-one">
            <i className="fas fa-shield-halved" />
            <div>
              <strong>{t("hero.securityCard")}</strong>
              <small>{t("hero.visibility")}</small>
            </div>
          </div>
          <div className="floating-card fc-two">
            <i className="fas fa-network-wired" />
            <div>
              <strong>{t("hero.connectivity")}</strong>
              <small>{t("hero.reliable")}</small>
            </div>
          </div>
        </div>
      </div>
      <a href="#services" className="scroll-hint">
        <span /> {t("hero.scroll")}
      </a>
    </section>
  );
}
