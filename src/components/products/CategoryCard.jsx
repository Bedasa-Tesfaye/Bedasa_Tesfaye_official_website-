import { Link } from "react-router-dom";
import { useI18n } from "../../i18n/LanguageContext";

export default function CategoryCard({ category }) {
  const { t } = useI18n();

  return (
    <article className="catalog-category-card reveal">
      <div className="catalog-category-icon">
        <i className={`fas ${category.icon}`} />
      </div>
      <span className="catalog-category-label">{t(`categories.${category.id}.name`)}</span>
      <h3>{t(`categories.${category.id}.name`)}</h3>
      <p>{t(`categories.${category.id}.shortDescription`)}</p>
      <Link to={category.route} className="text-link">
        {t("products.browseCatalog")} <i className="fas fa-arrow-right" />
      </Link>
    </article>
  );
}
