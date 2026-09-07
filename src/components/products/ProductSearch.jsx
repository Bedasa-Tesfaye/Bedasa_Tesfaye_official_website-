import { useI18n } from "../../i18n/LanguageContext";

export default function ProductSearch({ value, onChange, placeholder }) {
  const { t } = useI18n();

  return (
    <div className="catalog-search reveal">
      <i className="fas fa-search" aria-hidden="true" />
      <input
        type="search"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder || t("catalog.searchPlaceholder")}
        aria-label={t("catalog.searchAria")}
      />
      {value && (
        <button type="button" className="catalog-search-clear" onClick={() => onChange("")} aria-label={t("catalog.clearSearch")}>
          <i className="fas fa-xmark" />
        </button>
      )}
    </div>
  );
}
