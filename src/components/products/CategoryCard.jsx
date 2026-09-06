import { Link } from "react-router-dom";

export default function CategoryCard({ category }) {
  return (
    <article className="catalog-category-card reveal">
      <div className="catalog-category-icon">
        <i className={`fas ${category.icon}`} />
      </div>
      <span className="catalog-category-label">{category.name}</span>
      <h3>{category.name}</h3>
      <p>{category.shortDescription}</p>
      <Link to={category.route} className="text-link">
        Browse catalog <i className="fas fa-arrow-right" />
      </Link>
    </article>
  );
}
