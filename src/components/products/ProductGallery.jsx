import ProductImage from "./ProductImage";

export default function ProductGallery({ product, activeImage, onSelect }) {
  const images = product.images?.length ? product.images : [product.image];

  return (
    <div className="catalog-gallery">
      <ProductImage product={{ ...product, image: activeImage || images[0] }} className="catalog-gallery-main" />
      {images.length > 1 && (
        <div className="catalog-gallery-thumbs">
          {images.map((image) => (
            <button
              key={image}
              type="button"
              className={`catalog-gallery-thumb ${activeImage === image ? "active" : ""}`}
              onClick={() => onSelect(image)}
            >
              <img src={image} alt="" loading="lazy" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
