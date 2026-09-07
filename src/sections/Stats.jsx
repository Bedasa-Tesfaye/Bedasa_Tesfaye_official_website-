import { useI18n } from "../i18n/LanguageContext";

export default function Stats() {
  const { copy } = useI18n();
  const icons = ["fa-screwdriver-wrench", "fa-building-shield", "fa-code", "fa-headset"];

  return (
    <section className="stats-strip">
      <div className="container stats-grid">
        {copy.stats.map((stat, index) => (
          <div key={stat.title}>
            <i className={`fas ${icons[index]}`} />
            <div>
              <strong>{stat.title}</strong>
              <span>{stat.text}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
