import { Link, Navigate, useParams } from "react-router-dom";
import usePageMeta from "../../hooks/usePageMeta";
import { PRODUCT_CATEGORIES } from "../../data/productCategories";
import { getProductById } from "../../data/products";
import ProductRequestForm from "../../components/products/ProductRequestForm";
import SectionHeading from "../../components/SectionHeading";

export default function ProductRequestPage() {
  const { productId } = useParams();
  const product = getProductById(productId);
  const category = product ? PRODUCT_CATEGORIES[product.category] : null;

  usePageMeta(
    product
      ? `Request ${product.name} | Michu Technology Solutions`
      : "Product Request | Michu Technology Solutions",
    product
      ? `Submit a product request for ${product.name}. Michu Technology Solutions provides supply, installation, and configuration support in Ethiopia.`
      : "Submit a product request to Michu Technology Solutions."
  );

  if (!product) {
    return <Navigate to="/products" replace />;
  }

  return (
    <section className="section catalog-request-page">
      <div className="container">
        <div className="catalog-breadcrumb reveal">
          <Link to="/products">Products</Link>
          <span>/</span>
          <Link to={category.route}>{category.name}</Link>
          <span>/</span>
          <Link to={`/product/${product.id}`}>{product.name}</Link>
          <span>/</span>
          <span>Request</span>
        </div>

        <SectionHeading
          eyebrow="Product request"
          title={
            <>
              Request <span>{product.name}</span>
            </>
          }
          text="Tell us what you need and our team will respond with availability, quotation, and installation options."
        />

        <ProductRequestForm
          product={product}
          categoryLabel={category.name}
          onCancelTo={`/product/${product.id}`}
        />
      </div>
    </section>
  );
}
