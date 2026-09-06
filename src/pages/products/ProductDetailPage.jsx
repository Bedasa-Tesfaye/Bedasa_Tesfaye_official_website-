import { useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import usePageMeta from "../../hooks/usePageMeta";
import { PRODUCT_CATEGORIES } from "../../data/productCategories";
import { getProductById, getRelatedProducts } from "../../data/products";
import ProductGallery from "../../components/products/ProductGallery";
import ProductSpecifications from "../../components/products/ProductSpecifications";
import RelatedProducts from "../../components/products/RelatedProducts";

function formatPrice(price) {
  if (!price) return "Contact us for price";
  return price;
}

export default function ProductDetailPage() {
  const { productId } = useParams();
  const product = getProductById(productId);
  const [activeImage, setActiveImage] = useState(product?.image || "");

  usePageMeta(
    product
      ? `${product.name} | Michu Technology Solutions`
      : "Product | Michu Technology Solutions",
    product
      ? `${product.shortDescription} Request supply, installation, and configuration from Michu Technology Solutions.`
      : "Browse technology products from Michu Technology Solutions."
  );

  if (!product) {
    return <Navigate to="/products" replace />;
  }

  const category = PRODUCT_CATEGORIES[product.category];
  const relatedProducts = getRelatedProducts(product);

  return (
    <>
      <section className="catalog-detail-hero section">
        <div className="container">
          <div className="catalog-breadcrumb reveal">
            <Link to="/products">Products</Link>
            <span>/</span>
            <Link to={category.route}>{category.name}</Link>
            <span>/</span>
            <span>{product.name}</span>
          </div>

          <div className="catalog-detail-layout">
            <div className="catalog-detail-gallery reveal">
              <ProductGallery product={product} activeImage={activeImage} onSelect={setActiveImage} />
            </div>

            <div className="catalog-detail-summary reveal">
              <span className="catalog-product-type">{product.type}</span>
              <h1>{product.name}</h1>
              <p className="catalog-detail-category">{category.name}</p>
              <p className="catalog-detail-short">{product.shortDescription}</p>
              <div className="catalog-detail-status">
                <span className={`catalog-availability catalog-availability-${product.availability.replace(/\s+/g, "-").toLowerCase()}`}>
                  {product.availability}
                </span>
                <span className="catalog-product-price">{formatPrice(product.price)}</span>
              </div>
              <div className="catalog-product-actions catalog-detail-actions">
                <Link to={`/product/${product.id}/request`} className="btn btn-primary">
                  Request This Product
                </Link>
                <Link to={`/product/${product.id}/request`} className="btn btn-ghost">
                  Request a Quote
                </Link>
              </div>
              <p className="catalog-detail-support">{product.installationSupport}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section catalog-detail-content">
        <div className="container catalog-detail-stack">
          <div className="catalog-detail-block reveal">
            <h2>Detailed Description</h2>
            <p>{product.description}</p>
          </div>

          <div className="catalog-detail-block reveal">
            <h2>Key Features</h2>
            <ul className="catalog-feature-list">
              {product.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </div>

          <ProductSpecifications specifications={product.specifications} />

          <div className="catalog-detail-block reveal">
            <h2>Typical Applications</h2>
            <ul className="catalog-feature-list">
              {product.applications.map((application) => (
                <li key={application}>{application}</li>
              ))}
            </ul>
          </div>

          <div className="catalog-detail-block reveal">
            <h2>Installation & Support</h2>
            <p>{product.installationSupport}</p>
          </div>

          <RelatedProducts products={relatedProducts} />
        </div>
      </section>
    </>
  );
}
