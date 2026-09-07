import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { COMPANY_CONTACT } from "../../data/contact";
import generateRequestId from "../../utils/generateRequestId";
import { openEmailRequest, openWhatsAppRequest } from "../../utils/productRequests";
import { INSTALLATION_OPTION_IDS } from "../../i18n/translations";
import { useI18n } from "../../i18n/LanguageContext";

export default function ProductRequestForm({ product, categoryLabel, onCancelTo }) {
  const { t } = useI18n();
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
    installation: INSTALLATION_OPTION_IDS[1],
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
        <h2>{t("request.thanks")}</h2>
        <p>{t("request.notStored")}</p>
        <div className="catalog-request-summary">
          <div>
            <span>{t("request.requestId")}</span>
            <strong>{requestId}</strong>
          </div>
          <div>
            <span>{t("request.product")}</span>
            <strong>{form.productName}</strong>
          </div>
          <div>
            <span>{t("request.quantityLabel")}</span>
            <strong>{form.quantity}</strong>
          </div>
          <div>
            <span>{t("request.customer")}</span>
            <strong>{form.customerName}</strong>
          </div>
        </div>
        <p className="catalog-request-contact-note">
          {t("request.contactNote", { phone: COMPANY_CONTACT.phoneDisplay, email: COMPANY_CONTACT.email })}
        </p>
        <div className="catalog-request-actions">
          <button type="button" className="btn btn-primary" onClick={() => openWhatsAppRequest(form, productForMessage)}>
            <i className="fab fa-whatsapp" /> {t("request.whatsapp")}
          </button>
          <button type="button" className="btn btn-ghost" onClick={() => openEmailRequest(form, productForMessage)}>
            <i className="fas fa-envelope" /> {t("request.emailBtn")}
          </button>
          {onCancelTo && (
            <Link to={onCancelTo} className="btn btn-ghost">
              {t("request.back")}
            </Link>
          )}
        </div>
      </div>
    );
  }

  return (
    <form className="catalog-request-form reveal" onSubmit={handleSubmit}>
      <div className="catalog-request-product">
        <span>{t("request.selected")}</span>
        <strong>{form.productName}</strong>
        <small>{form.productId}</small>
      </div>

      <div className="form-row">
        <div className="field">
          <label htmlFor="customerName">{t("request.customerName")}</label>
          <input
            id="customerName"
            name="customerName"
            type="text"
            value={form.customerName}
            onChange={(event) => updateField("customerName", event.target.value)}
            placeholder={t("request.fullName")}
            required
          />
        </div>
        <div className="field">
          <label htmlFor="phone">{t("request.phone")}</label>
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
          <label htmlFor="email">{t("request.email")}</label>
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
          <label htmlFor="company">{t("request.company")}</label>
          <input
            id="company"
            name="company"
            type="text"
            value={form.company}
            onChange={(event) => updateField("company", event.target.value)}
            placeholder={t("request.companyPlaceholder")}
          />
        </div>
      </div>

      <div className="form-row">
        <div className="field">
          <label htmlFor="quantity">{t("request.quantity")}</label>
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
          <label htmlFor="installation">{t("request.installation")}</label>
          <select
            id="installation"
            name="installation"
            value={form.installation}
            onChange={(event) => updateField("installation", event.target.value)}
          >
            {INSTALLATION_OPTION_IDS.map((option) => (
              <option key={option} value={option}>
                {t(`request.installOptions.${option}`)}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="field">
        <label htmlFor="location">{t("request.location")}</label>
        <input
          id="location"
          name="location"
          type="text"
          value={form.location}
          onChange={(event) => updateField("location", event.target.value)}
          placeholder={t("request.locationPlaceholder")}
        />
      </div>

      <div className="field">
        <label htmlFor="message">{t("request.message")}</label>
        <textarea
          id="message"
          name="message"
          rows="5"
          value={form.message}
          onChange={(event) => updateField("message", event.target.value)}
          placeholder={t("request.messagePlaceholder")}
        />
      </div>

      <div className="catalog-request-actions">
        <button type="submit" className="btn btn-primary submit-btn">
          <i className="fas fa-paper-plane" /> {t("request.submit")}
        </button>
        {onCancelTo ? (
          <Link to={onCancelTo} className="btn btn-ghost">
            {t("request.cancel")}
          </Link>
        ) : (
          <button type="button" className="btn btn-ghost" onClick={() => window.history.back()}>
            {t("request.cancel")}
          </button>
        )}
      </div>
    </form>
  );
}
