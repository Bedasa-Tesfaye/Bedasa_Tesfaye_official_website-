import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";

export default function RelatedProducts({ products }) {
  if (!products.length) return null;

  return (
    <section className="catalog-related">
      <div className="section-heading reveal">
        <div className="eyebrow dark">
          <span />
          Related products
        </div>
        <h2>
          You may also <span>need.</span>
        </h2>
      </div>
      <div className="catalog-related-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <Link to="/products" className="text-link catalog-related-link">
        View all categories <i className="fas fa-arrow-right" />
      </Link>
    </section>
  );
}
