export default function ProductFilters({ filters, activeFilter, onChange }) {
  return (
    <div className="catalog-filters reveal">
      {filters.map((filter) => (
        <button
          key={filter.id}
          type="button"
          className={`catalog-filter ${activeFilter === filter.id ? "active" : ""}`}
          onClick={() => onChange(filter.id)}
        >
          {filter.label}
        </button>
      ))}
    </div>
  );
}
