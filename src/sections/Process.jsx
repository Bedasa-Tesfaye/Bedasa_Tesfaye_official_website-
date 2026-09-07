import { Fragment } from "react";
import SectionHeading from "../components/SectionHeading";
import { useI18n } from "../i18n/LanguageContext";

const STEP_ICONS = ["fa-comments", "fa-compass-drafting", "fa-screwdriver-wrench", "fa-headset"];

export default function Process() {
  const { t, copy } = useI18n();

  return (
    <section className="process-section">
      <div className="container">
        <SectionHeading
          eyebrow={t("process.eyebrow")}
          title={
            <>
              <span>{t("process.titleBefore")}</span> <span>{t("process.titleHighlight")}</span>
            </>
          }
        />

        <div className="process-grid">
          {copy.process.steps.map((step, index) => (
            <Fragment key={step.title}>
              <div className="process-step reveal">
                <span>0{index + 1}</span>
                <i className={`fas ${STEP_ICONS[index]}`} />
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>

              {index < copy.process.steps.length - 1 && <div className="process-line" />}
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
