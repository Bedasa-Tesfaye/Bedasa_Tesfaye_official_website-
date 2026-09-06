import ProductCard from "./ProductCard";

export default function ProductGrid({ products, categoryLabel, emptyMessage = "No products found." }) {
  if (!products.length) {
    return (
      <div className="catalog-empty reveal">
        <i className="fas fa-box-open" />
        <h3>{emptyMessage}</h3>
        <p>Try another search term or filter, or contact us for a custom equipment recommendation.</p>
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
