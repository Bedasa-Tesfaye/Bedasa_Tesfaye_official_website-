import { useI18n } from "../i18n/LanguageContext";

export default function LanguageSwitcher({ className = "" }) {
  const { lang, setLang, languages, t } = useI18n();

  return (
    <label className={`lang-switch ${className}`.trim()}>
      <span className="sr-only">{t("langLabel")}</span>
      <i className="fas fa-globe" aria-hidden="true" />
      <select value={lang} onChange={(event) => setLang(event.target.value)} aria-label={t("langLabel")}>
        {languages.map((option) => (
          <option key={option.code} value={option.code}>
            {option.nativeName}
          </option>
        ))}
      </select>
    </label>
  );
}
