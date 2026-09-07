import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";
import { useI18n } from "../../i18n/LanguageContext";

export default function RelatedProducts({ products }) {
  const { t } = useI18n();

  if (!products.length) return null;

  return (
    <section className="catalog-related">
      <div className="section-heading reveal">
        <div className="eyebrow dark">
          <span />
          {t("catalog.relatedEyebrow")}
        </div>
        <h2>
          {t("catalog.relatedTitleBefore")} <span>{t("catalog.relatedTitleHighlight")}</span>
        </h2>
      </div>
      <div className="catalog-related-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <Link to="/products" className="text-link catalog-related-link">
        {t("catalog.viewAll")} <i className="fas fa-arrow-right" />
      </Link>
    </section>
  );
}
