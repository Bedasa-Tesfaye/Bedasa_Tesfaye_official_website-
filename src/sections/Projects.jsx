import { useState } from "react";
import SectionHeading from "../components/SectionHeading";
import projects from "../data/projects";
import { useI18n } from "../i18n/LanguageContext";

export default function Projects() {
  const [filter, setFilter] = useState("all");
  const { t, copy } = useI18n();
  const filters = ["all", "software", "web", "systems"];

  return (
    <section id="projects" className="section">
      <div className="container">
        <SectionHeading
          eyebrow={t("projects.eyebrow")}
          title={
            <>
              {t("projects.titleBefore")} <span>{t("projects.titleHighlight")}</span>
            </>
          }
          text={t("projects.text")}
        />
        <div className="project-filters reveal">
          {filters.map((key) => (
            <button className={`project-filter ${filter === key ? "active" : ""}`} onClick={() => setFilter(key)} key={key}>
              {t(`projects.filters.${key}`)}
            </button>
          ))}
        </div>
        <div className="projects-grid">
          {projects
            .filter((project) => filter === "all" || project.category.includes(filter))
            .map((project) => {
              const content = copy.projectCards[projects.findIndex((item) => item.id === project.id)];
              return (
                <article className="project-card reveal" key={project.id}>
                  <div className={`project-visual ${project.style}`}>
                    <i className={`fas ${project.icon}`} />
                    <span>{content.label}</span>
                  </div>
                  <div className="project-body">
                    <div className="project-meta">{content.meta}</div>
                    <h3>{content.title}</h3>
                    <p>{content.text}</p>
                    <div className="tags">
                      {project.tags.map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>
                  </div>
                </article>
              );
            })}
        </div>
      </div>
    </section>
  );
}
