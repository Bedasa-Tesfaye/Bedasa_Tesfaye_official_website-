import { useMemo, useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import usePageMeta from "../../hooks/usePageMeta";
import { getCategoryBySlug } from "../../data/productCategories";
import { getProductsByCategory } from "../../data/products";
import ProductFilters from "../../components/products/ProductFilters";
import ProductGrid from "../../components/products/ProductGrid";
import ProductSearch from "../../components/products/ProductSearch";
import SectionHeading from "../../components/SectionHeading";
import { useI18n } from "../../i18n/LanguageContext";

export default function ProductCategoryPage() {
  const { categorySlug } = useParams();
  const category = getCategoryBySlug(categorySlug);
  const [query, setQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState("all");
  const { t } = useI18n();

  const categoryProducts = useMemo(
    () => (category ? getProductsByCategory(category.id) : []),
    [category]
  );

  const filteredProducts = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    return categoryProducts.filter((product) => {
      const matchesFilter = activeFilter === "all" || product.subcategory === activeFilter;
      if (!matchesFilter) return false;
      if (!normalized) return true;

      const haystack = [product.name, product.type, product.shortDescription, ...(product.keywords || [])]
        .join(" ")
        .toLowerCase();

      return haystack.includes(normalized);
    });
  }, [categoryProducts, activeFilter, query]);

  const categoryName = category ? t(`categories.${category.id}.name`) : "";
  const categoryDescription = category ? t(`categories.${category.id}.shortDescription`) : "";

  usePageMeta(category?.seoTitle, category?.seoDescription);

  if (!category) {
    return <Navigate to="/products" replace />;
  }

  return (
    <>
      <section className="catalog-hero section">
        <div className="container">
          <div className="catalog-breadcrumb reveal">
            <Link to="/products">{t("nav.products")}</Link>
            <span>/</span>
            <span>{categoryName}</span>
          </div>
          <SectionHeading eyebrow={t("catalog.categoryEyebrow")} title={<>{categoryName}</>} text={categoryDescription} />
          <ProductSearch value={query} onChange={setQuery} placeholder={t("catalog.searchIn", { name: categoryName })} />
          <ProductFilters filters={category.filters} activeFilter={activeFilter} onChange={setActiveFilter} />
        </div>
      </section>

      <section className="section catalog-results-section">
        <div className="container">
          <div className="catalog-results-heading reveal">
            <h2>
              {t("catalog.available")} <span>{t("catalog.productsWord")}</span>
            </h2>
            <p>
              {t(filteredProducts.length === 1 ? "catalog.inView" : "catalog.inViewPlural", {
                count: String(filteredProducts.length),
              })}
            </p>
          </div>
          <ProductGrid products={filteredProducts} />
        </div>
      </section>
    </>
  );
}
