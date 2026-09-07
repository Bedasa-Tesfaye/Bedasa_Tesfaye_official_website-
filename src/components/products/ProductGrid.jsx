import ProductCard from "./ProductCard";
import { useI18n } from "../../i18n/LanguageContext";

export default function ProductGrid({ products, categoryLabel, emptyMessage }) {
  const { t } = useI18n();
  const message = emptyMessage || t("catalog.emptySearch");

  if (!products.length) {
    return (
      <div className="catalog-empty reveal">
        <i className="fas fa-box-open" />
        <h3>{message}</h3>
        <p>{t("catalog.emptyHint")}</p>
      </div>
    );
  }

  return (
    <div className="catalog-product-grid">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} categoryLabel={categoryLabel} />
      ))}
    </div>
  );
}
