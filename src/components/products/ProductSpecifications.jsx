export default function ProductSpecifications({ specifications }) {
  const entries = Object.entries(specifications || {});
  if (!entries.length) return null;

  return (
    <div className="catalog-spec-table">
      <h3>Technical Specifications</h3>
      <dl>
        {entries.map(([key, value]) => (
          <div key={key}>
            <dt>{key.replace(/([A-Z])/g, " $1").replace(/^./, (char) => char.toUpperCase())}</dt>
            <dd>{value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
