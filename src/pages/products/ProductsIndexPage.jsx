import { useMemo, useState } from "react";
import usePageMeta from "../../hooks/usePageMeta";
import { CATEGORY_LIST } from "../../data/productCategories";
import { searchProducts } from "../../data/products";
import CategoryCard from "../../components/products/CategoryCard";
import ProductGrid from "../../components/products/ProductGrid";
import ProductSearch from "../../components/products/ProductSearch";
import SectionHeading from "../../components/SectionHeading";

export default function ProductsIndexPage() {
  const [query, setQuery] = useState("");

  usePageMeta(
    "Product Catalog | Michu Technology Solutions",
    "Browse CCTV, access control, networking, and computer products. Request equipment, installation, and configuration support in Ethiopia."
  );

  const searchResults = useMemo(() => searchProducts(query), [query]);

  return (
    <>
      <section className="catalog-hero section">
        <div className="container">
          <SectionHeading
            eyebrow="Product catalog"
            title={
              <>
                Technology equipment, <span>professionally supplied.</span>
              </>
            }
            text="Browse CCTV, access control, networking, and computer products. Michu Technology Solutions can supply, install, configure, and support the equipment you need."
          />
          <ProductSearch value={query} onChange={setQuery} placeholder="Search by product name, type, or keyword..." />
        </div>
      </section>

      {query ? (
        <section className="section catalog-results-section">
          <div className="container">
            <div className="catalog-results-heading reveal">
              <h2>
                Search results for <span>"{query}"</span>
              </h2>
              <p>{searchResults.length} product{searchResults.length === 1 ? "" : "s"} found</p>
            </div>
            <ProductGrid products={searchResults} emptyMessage="No products found for your search." />
          </div>
        </section>
      ) : (
        <section className="section catalog-categories-section">
          <div className="container">
            <div className="catalog-category-grid">
              {CATEGORY_LIST.map((category) => (
                <CategoryCard key={category.id} category={category} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
