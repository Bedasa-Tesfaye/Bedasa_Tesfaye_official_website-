import { Link } from "react-router-dom";
import ProductImage from "./ProductImage";

function formatPrice(price) {
  if (!price) return "Contact us for price";
  return price;
}

export default function ProductCard({ product, categoryLabel }) {
  const specEntries = Object.entries(product.specifications || {}).slice(0, 3);

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
        <div className="catalog-product-price">{formatPrice(product.price)}</div>
        <div className="catalog-product-actions">
          <Link to={`/product/${product.id}`} className="btn btn-ghost catalog-btn">
            View Details
          </Link>
          <Link to={`/product/${product.id}/request`} className="btn btn-primary catalog-btn">
            Request / Order
          </Link>
        </div>
        {categoryLabel && <span className="catalog-category-tag">{categoryLabel}</span>}
      </div>
    </article>
  );
}
