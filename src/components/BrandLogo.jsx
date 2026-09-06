const LOGO_SRC = "/images/brand/michu-logo.png";

export default function BrandLogo({ showWordmark = true, size = "default" }) {
  return (
    <>
      <span className={`brand-icon brand-icon-${size}`} aria-hidden="true">
        <img src={LOGO_SRC} alt="" />
      </span>
      {showWordmark && (
        <span className="brand-text">
          <strong>Michu</strong>
          <small>Technology Solutions</small>
        </span>
      )}
    </>
  );
}
