import { Link } from "react-router-dom";
import SectionHeading from "../components/SectionHeading";
import homeProducts from "../data/homeProducts";
import { useI18n } from "../i18n/LanguageContext";

export default function Products() {
  const { t, copy } = useI18n();

  return (
    <section id="products" className="section products-section">
      <div className="container">
        <SectionHeading
          eyebrow={t("products.eyebrow")}
          title={
            <>
              {t("products.titleBefore")} <span>{t("products.titleHighlight")}</span>
            </>
          }
          text={t("products.text")}
        />

        <div className="product-grid">
          {homeProducts.map((product) => {
            const slug = product.route.split("/").pop();
            const category = copy.categories[slug];
            const items = copy.products.items[slug] || product.items;

            return (
              <article className="product-card reveal" key={product.title}>
                <div className={`product-image ${product.route.includes("networking") ? "product-network" : ""}`}>
                  {product.route.includes("networking") ? (
                    <>
                      <i className="fas fa-network-wired" />
                      <span>{t("products.connected")}</span>
                      <small>{t("products.networkLine")}</small>
                    </>
                  ) : (
                    <div className="catalog-product-image-placeholder visible">
                      <i className={`fas ${product.icon}`} />
                      <span>{category?.name || product.title}</span>
                      <small>{t("products.browseCatalog")}</small>
                    </div>
                  )}
                  <span className="product-type">{t(`products.types.${slug}`) || product.type}</span>
                </div>
                <div className="product-content">
                  <div className="product-icon">
                    <i className={`fas ${product.icon}`} />
                  </div>
                  <h3>{category?.name || product.title}</h3>
                  <p>{category?.shortDescription || product.text}</p>
                  <ul>
                    {items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <Link to={product.route}>
                    {t("products.browseCatalog")} <i className="fas fa-arrow-right" />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>

        <div className="product-note reveal">
          <i className="fas fa-circle-info" />
          <p>
            <strong>{t("products.needTitle")}</strong> {t("products.needText")}
          </p>
          <Link to="/products" className="text-link">
            {t("products.viewFull")} <i className="fas fa-arrow-right" />
          </Link>
        </div>
      </div>
    </section>
  );
}
