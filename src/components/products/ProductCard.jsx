import { Link } from "react-router-dom";
import ProductImage from "./ProductImage";
import { useI18n } from "../../i18n/LanguageContext";

export default function ProductCard({ product, categoryLabel }) {
  const { t } = useI18n();
  const specEntries = Object.entries(product.specifications || {}).slice(0, 3);
  const priceLabel = product.price || t("catalog.contactPrice");

  return (
    <article className="catalog-product-card reveal">
      <ProductImage product={product} />
      <div className="catalog-product-body">
        <div className="catalog-product-meta">
          <span className="catalog-product-type">{product.type}</span>
          <span className={`catalog-availability catalog-availability-${product.availability.replace(/\s+/g, "-").toLowerCase()}`}>
            {product.availability}
          </span>
        </div>
        <h3>{product.name}</h3>
        <p>{product.shortDescription}</p>
        {specEntries.length > 0 && (
          <ul className="catalog-spec-preview">
            {specEntries.map(([key, value]) => (
              <li key={key}>
                <strong>{key.replace(/([A-Z])/g, " $1").replace(/^./, (char) => char.toUpperCase())}:</strong> {value}
              </li>
            ))}
          </ul>
        )}
        <div className="catalog-product-price">{priceLabel}</div>
        <div className="catalog-product-actions">
          <Link to={`/product/${product.id}`} className="btn btn-ghost catalog-btn">
            {t("catalog.viewDetails")}
          </Link>
          <Link to={`/product/${product.id}/request`} className="btn btn-primary catalog-btn">
            {t("catalog.requestOrder")}
          </Link>
        </div>
        {categoryLabel && <span className="catalog-category-tag">{categoryLabel}</span>}
      </div>
    </article>
  );
}
