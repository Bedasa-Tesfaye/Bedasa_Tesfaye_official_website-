import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { COMPANY_CONTACT } from "../../data/contact";
import generateRequestId from "../../utils/generateRequestId";
import { openEmailRequest, openWhatsAppRequest } from "../../utils/productRequests";

const INSTALLATION_OPTIONS = [
  "Supply only",
  "Supply + installation",
  "Supply + installation + configuration",
  "Site survey first",
  "Not sure yet",
];

export default function ProductRequestForm({ product, categoryLabel, onCancelTo }) {
  const [submitted, setSubmitted] = useState(false);
  const [requestId, setRequestId] = useState("");
  const [form, setForm] = useState({
    customerName: "",
    phone: "",
    email: "",
    company: "",
    productName: product?.name || "",
    productId: product?.id || "",
    quantity: "1",
    installation: INSTALLATION_OPTIONS[1],
    location: "",
    message: "",
  });

  const productForMessage = useMemo(
    () => ({
      ...product,
      categoryLabel,
    }),
    [product, categoryLabel]
  );

  const updateField = (field, value) => {
    setForm((current) => ({ ...current, [field]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setRequestId(generateRequestId());
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="catalog-request-confirmation reveal">
        <div className="catalog-request-confirmation-icon">
          <i className="fas fa-circle-check" />
        </div>
        <h2>Thank you. Your product request has been received.</h2>
        <p>
          This request has not been stored in a backend yet. Please send it through WhatsApp or email so our team can
          respond with availability and quotation.
        </p>
        <div className="catalog-request-summary">
          <div>
            <span>Request ID</span>
            <strong>{requestId}</strong>
          </div>
          <div>
            <span>Product</span>
            <strong>{form.productName}</strong>
          </div>
          <div>
            <span>Quantity</span>
            <strong>{form.quantity}</strong>
          </div>
          <div>
            <span>Customer</span>
            <strong>{form.customerName}</strong>
          </div>
        </div>
        <p className="catalog-request-contact-note">
          Contact Michu Technology Solutions at {COMPANY_CONTACT.phoneDisplay} or {COMPANY_CONTACT.email}.
        </p>
        <div className="catalog-request-actions">
          <button type="button" className="btn btn-primary" onClick={() => openWhatsAppRequest(form, productForMessage)}>
            <i className="fab fa-whatsapp" /> Send via WhatsApp
          </button>
          <button type="button" className="btn btn-ghost" onClick={() => openEmailRequest(form, productForMessage)}>
            <i className="fas fa-envelope" /> Request by Email
          </button>
          {onCancelTo && (
            <Link to={onCancelTo} className="btn btn-ghost">
              Back to product
            </Link>
          )}
        </div>
      </div>
    );
  }

  return (
    <form className="catalog-request-form reveal" onSubmit={handleSubmit}>
      <div className="catalog-request-product">
        <span>Selected product</span>
        <strong>{form.productName}</strong>
        <small>{form.productId}</small>
      </div>

      <div className="form-row">
        <div className="field">
          <label htmlFor="customerName">Customer Name *</label>
          <input
            id="customerName"
            name="customerName"
            type="text"
            value={form.customerName}
            onChange={(event) => updateField("customerName", event.target.value)}
            placeholder="Full name"
            required
          />
        </div>
        <div className="field">
          <label htmlFor="phone">Phone Number *</label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={form.phone}
            onChange={(event) => updateField("phone", event.target.value)}
            placeholder="+251..."
            required
          />
        </div>
      </div>

      <div className="form-row">
        <div className="field">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            value={form.email}
            onChange={(event) => updateField("email", event.target.value)}
            placeholder="you@company.com"
          />
        </div>
        <div className="field">
          <label htmlFor="company">Company/Organization</label>
          <input
            id="company"
            name="company"
            type="text"
            value={form.company}
            onChange={(event) => updateField("company", event.target.value)}
            placeholder="Company name"
          />
        </div>
      </div>

      <div className="form-row">
        <div className="field">
          <label htmlFor="quantity">Quantity *</label>
          <input
            id="quantity"
            name="quantity"
            type="number"
            min="1"
            value={form.quantity}
            onChange={(event) => updateField("quantity", event.target.value)}
            required
          />
        </div>
        <div className="field">
          <label htmlFor="installation">Preferred installation/service</label>
          <select
            id="installation"
            name="installation"
            value={form.installation}
            onChange={(event) => updateField("installation", event.target.value)}
          >
            {INSTALLATION_OPTIONS.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="field">
        <label htmlFor="location">Location</label>
        <input
          id="location"
          name="location"
          type="text"
          value={form.location}
          onChange={(event) => updateField("location", event.target.value)}
          placeholder="City / area / site location"
        />
      </div>

      <div className="field">
        <label htmlFor="message">Additional requirements/message</label>
        <textarea
          id="message"
          name="message"
          rows="5"
          value={form.message}
          onChange={(event) => updateField("message", event.target.value)}
          placeholder="Describe installation needs, timeline, or specifications..."
        />
      </div>

      <div className="catalog-request-actions">
        <button type="submit" className="btn btn-primary submit-btn">
          <i className="fas fa-paper-plane" /> Submit Request
        </button>
        {onCancelTo ? (
          <Link to={onCancelTo} className="btn btn-ghost">
            Cancel
          </Link>
        ) : (
          <button type="button" className="btn btn-ghost" onClick={() => window.history.back()}>
            Cancel
          </button>
        )}
      </div>
    </form>
  );
}
