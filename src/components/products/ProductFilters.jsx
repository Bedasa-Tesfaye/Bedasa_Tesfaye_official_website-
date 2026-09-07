import { useI18n } from "../../i18n/LanguageContext";

export default function ProductFilters({ filters, activeFilter, onChange }) {
  const { t } = useI18n();

  return (
    <div className="catalog-filters reveal">
      {filters.map((filter) => (
        <button
          key={filter.id}
          type="button"
          className={`catalog-filter ${activeFilter === filter.id ? "active" : ""}`}
          onClick={() => onChange(filter.id)}
        >
          {t(`filters.${filter.id}`)}
        </button>
      ))}
    </div>
  );
}
