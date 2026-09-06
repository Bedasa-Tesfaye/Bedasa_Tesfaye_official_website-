import { PRODUCT_CATEGORIES } from "../../data/productCategories";

const CATEGORY_ICONS = {
  cctv: "fa-video",
  "access-attendance": "fa-fingerprint",
  networking: "fa-network-wired",
  computers: "fa-laptop",
};

export default function ProductImage({ product, className = "" }) {
  const icon = CATEGORY_ICONS[product.category] || "fa-box";
  const categoryName = PRODUCT_CATEGORIES[product.category]?.name || "Product";

  return (
    <div className={`catalog-product-image ${className}`.trim()}>
      <img
        src={product.image}
        alt={product.name}
        loading="lazy"
        onError={(event) => {
          event.currentTarget.style.display = "none";
          const placeholder = event.currentTarget.nextElementSibling;
          if (placeholder) placeholder.classList.add("visible");
        }}
      />
      <div className="catalog-product-image-placeholder" aria-hidden="true">
        <i className={`fas ${icon}`} />
        <span>{categoryName}</span>
        <small>Image coming soon</small>
      </div>
    </div>
  );
}
