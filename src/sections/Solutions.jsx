import { useState } from "react";
import SectionHeading from "../components/SectionHeading";
import solutions from "../data/solutions";
import { useI18n } from "../i18n/LanguageContext";

export default function Solutions() {
  const [selected, setSelected] = useState("security");
  const current = solutions[selected];
  const { t, copy } = useI18n();
  const panel = copy.solutionPanels[selected];

  return (
    <section id="solutions" className="section dark-section">
      <div className="container">
        <SectionHeading
          light
          eyebrow={t("solutions.eyebrow")}
          title={
            <>
              {t("solutions.titleBefore")} <span>{t("solutions.titleHighlight")}</span>
            </>
          }
          text={t("solutions.text")}
        />
        <div className="solution-layout">
          <div className="solution-tabs reveal">
            {Object.entries(solutions).map(([key], index) => (
              <button className={`solution-tab ${selected === key ? "active" : ""}`} onClick={() => setSelected(key)} key={key}>
                <span>0{index + 1}</span>
                <div>
                  <strong>{t(`solutions.tabs.${key}.title`)}</strong>
                  <small>{t(`solutions.tabs.${key}.small`)}</small>
                </div>
                <i className="fas fa-arrow-right" />
              </button>
            ))}
          </div>
          <div className="solution-panel reveal">
            <div className="solution-icon">
              <i className={`fas ${current.icon}`} />
            </div>
            <span>{panel.label}</span>
            <h3>{panel.title}</h3>
            <p>{panel.text}</p>
            <div className="point-list">
              {panel.points.map((point) => (
                <span key={point}>
                  <i className="fas fa-check" />
                  {point}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
