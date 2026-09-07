import SectionHeading from "../components/SectionHeading";
import services from "../data/services";
import { useI18n } from "../i18n/LanguageContext";

export default function Services() {
  const { t, copy } = useI18n();

  return (
    <section id="services" className="section">
      <div className="container">
        <SectionHeading
          eyebrow={t("services.eyebrow")}
          title={
            <>
              {t("services.titleBefore")} <span>{t("services.titleHighlight")}</span>
            </>
          }
          text={t("services.text")}
        />
        <div className="services-grid">
          {services.map((service, index) => {
            const card = copy.serviceCards[service.id];
            return (
              <article className={`service-card reveal ${service.featured ? "featured" : ""}`} key={service.id}>
                <div className="service-number">{String(index + 1).padStart(2, "0")}</div>
                <div className="service-icon">
                  <i className={`fas ${service.icon}`} />
                </div>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
                <ul>
                  {card.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <a href="/contact">
                  {card.link} <i className="fas fa-arrow-right" />
                </a>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
