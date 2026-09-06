export default function ProductSearch({ value, onChange, placeholder = "Search products..." }) {
  return (
    <div className="catalog-search reveal">
      <i className="fas fa-search" aria-hidden="true" />
      <input
        type="search"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        aria-label="Search products"
      />
      {value && (
        <button type="button" className="catalog-search-clear" onClick={() => onChange("")} aria-label="Clear search">
          <i className="fas fa-xmark" />
        </button>
      )}
    </div>
  );
}
