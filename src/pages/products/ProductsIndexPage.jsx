import { useMemo, useState } from "react";
import usePageMeta from "../../hooks/usePageMeta";
import { CATEGORY_LIST } from "../../data/productCategories";
import { searchProducts } from "../../data/products";
import CategoryCard from "../../components/products/CategoryCard";
import ProductGrid from "../../components/products/ProductGrid";
import ProductSearch from "../../components/products/ProductSearch";
import SectionHeading from "../../components/SectionHeading";
import { useI18n } from "../../i18n/LanguageContext";

export default function ProductsIndexPage() {
  const [query, setQuery] = useState("");
  const { t } = useI18n();

  usePageMeta(t("catalog.seoTitle"), t("catalog.seoDescription"));

  const searchResults = useMemo(() => searchProducts(query), [query]);

  return (
    <>
      <section className="catalog-hero section">
        <div className="container">
          <SectionHeading
            eyebrow={t("catalog.eyebrow")}
            title={
              <>
                {t("catalog.titleBefore")} <span>{t("catalog.titleHighlight")}</span>
              </>
            }
            text={t("catalog.text")}
          />
          <ProductSearch value={query} onChange={setQuery} placeholder={t("catalog.searchPlaceholder")} />
        </div>
      </section>

      {query ? (
        <section className="section catalog-results-section">
          <div className="container">
            <div className="catalog-results-heading reveal">
              <h2>
                {t("catalog.resultsFor", { query })}
              </h2>
              <p>
                {t(searchResults.length === 1 ? "catalog.found" : "catalog.foundPlural", {
                  count: String(searchResults.length),
                })}
              </p>
            </div>
            <ProductGrid products={searchResults} emptyMessage={t("catalog.emptySearch")} />
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
