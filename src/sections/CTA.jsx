import Button from "../components/Button";
import { useI18n } from "../i18n/LanguageContext";

export default function CTA() {
  const { t } = useI18n();

  return (
    <section className="cta-section">
      <div className="container cta-inner reveal">
        <div>
          <span className="eyebrow">{t("cta.eyebrow")}</span>
          <h2>{t("cta.title")}</h2>
        </div>
        <Button variant="light">
          {t("cta.button")} <i className="fas fa-arrow-right" />
        </Button>
      </div>
    </section>
  );
}
