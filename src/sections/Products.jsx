import { Link } from "react-router-dom";
import SectionHeading from "../components/SectionHeading";
import homeProducts from "../data/homeProducts";

export default function Products() {
  return (
    <section id="products" className="section products-section">
      <div className="container">
        <SectionHeading
          eyebrow="Technology products"
          title={
            <>
              Quality equipment, <span>properly matched.</span>
            </>
          }
          text="We help you choose the right products for your space, needs and budget—then install and configure them so they work from day one."
        />

        <div className="product-grid">
          {homeProducts.map((product) => (
            <article className="product-card reveal" key={product.title}>
              <div className={`product-image ${product.route.includes("networking") ? "product-network" : ""}`}>
                {product.route.includes("networking") ? (
                  <>
                    <i className="fas fa-network-wired" />
                    <span>CONNECTED</span>
                    <small>ROUTERS · SWITCHES · CABLES</small>
                  </>
                ) : (
                  <div className="catalog-product-image-placeholder visible">
                    <i className={`fas ${product.icon}`} />
                    <span>{product.title}</span>
                    <small>Browse catalog</small>
                  </div>
                )}
                <span className="product-type">{product.type}</span>
              </div>
              <div className="product-content">
                <div className="product-icon">
                  <i className={`fas ${product.icon}`} />
                </div>
                <h3>{product.title}</h3>
                <p>{product.text}</p>
                <ul>
                  {product.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <Link to={product.route}>
                  Browse catalog <i className="fas fa-arrow-right" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="product-note reveal">
          <i className="fas fa-circle-info" />
          <p>
            <strong>Need a recommendation?</strong> Tell us what you are setting up and we will prepare a practical
            equipment list and quote.
          </p>
          <Link to="/products" className="text-link">
            View full product catalog <i className="fas fa-arrow-right" />
          </Link>
        </div>
      </div>
    </section>
  );
}
