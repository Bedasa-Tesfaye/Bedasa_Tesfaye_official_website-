import { Link, Navigate, useParams } from "react-router-dom";
import usePageMeta from "../../hooks/usePageMeta";
import { PRODUCT_CATEGORIES } from "../../data/productCategories";
import { getProductById } from "../../data/products";
import ProductRequestForm from "../../components/products/ProductRequestForm";
import SectionHeading from "../../components/SectionHeading";
import { useI18n } from "../../i18n/LanguageContext";

export default function ProductRequestPage() {
  const { productId } = useParams();
  const product = getProductById(productId);
  const category = product ? PRODUCT_CATEGORIES[product.category] : null;
  const { t } = useI18n();

  usePageMeta(
    product ? t("catalog.requestMetaTitle", { name: product.name }) : t("catalog.seoTitle"),
    product
      ? t("catalog.requestMetaDescription", { name: product.name })
      : t("catalog.seoDescription")
  );

  if (!product) {
    return <Navigate to="/products" replace />;
  }

  return (
    <section className="section catalog-request-page">
      <div className="container">
        <div className="catalog-breadcrumb reveal">
          <Link to="/products">{t("nav.products")}</Link>
          <span>/</span>
          <Link to={category.route}>{t(`categories.${category.id}.name`)}</Link>
          <span>/</span>
          <Link to={`/product/${product.id}`}>{product.name}</Link>
          <span>/</span>
          <span>{t("catalog.requestCrumb")}</span>
        </div>

        <SectionHeading
          eyebrow={t("catalog.requestEyebrow")}
          title={
            <>
              {t("catalog.requestTitleBefore")} <span>{product.name}</span>
            </>
          }
          text={t("catalog.requestText")}
        />

        <ProductRequestForm
          product={product}
          categoryLabel={t(`categories.${category.id}.name`)}
          onCancelTo={`/product/${product.id}`}
        />
      </div>
    </section>
  );
}
