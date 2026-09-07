import { useState } from "react";
import SectionHeading from "../components/SectionHeading";
import { useI18n } from "../i18n/LanguageContext";
import { translations } from "../i18n/translations";

const SERVICE_IDS = ["cctv", "networking", "it-support", "access-attendance", "web-software", "computers"];

export default function Contact() {
  const [status, setStatus] = useState("");
  const { t, copy } = useI18n();

  const submit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const serviceId = data.get("service");
    const serviceLabel = translations.en.contact.services[serviceId] || serviceId;
    const subject = encodeURIComponent(`Service Request — ${serviceLabel}`);
    const body = encodeURIComponent(
      `Hello Michu Technology Solutions,\n\nName: ${data.get("name")}\nPhone: ${data.get("phone")}\nService: ${serviceLabel}\n\nProject details:\n${data.get("message")}\n\nThank you.`
    );
    window.location.href = `mailto:bahilutesfaye719@gmail.com?subject=${subject}&body=${body}`;
    setStatus(t("contact.status"));
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <SectionHeading
          eyebrow={t("contact.eyebrow")}
          title={
            <>
              {t("contact.titleBefore")} <span>{t("contact.titleHighlight")}</span>
            </>
          }
          text={t("contact.text")}
        />
        <div className="contact-grid">
          <div className="contact-details reveal">
            <a href="mailto:bahilutesfaye719@gmail.com" className="contact-card">
              <i className="fas fa-envelope" />
              <div>
                <small>{t("contact.email")}</small>
                <strong>bahilutesfaye719@gmail.com</strong>
              </div>
            </a>
            <a href="tel:+251966764344" className="contact-card">
              <i className="fas fa-phone" />
              <div>
                <small>{t("contact.phone")}</small>
                <strong>+251 966 764 344</strong>
              </div>
            </a>
            <a href="https://t.me/bahilu_leo" target="_blank" rel="noreferrer" className="contact-card">
              <i className="fab fa-telegram" />
              <div>
                <small>{t("contact.telegram")}</small>
                <strong>@bahilu_leo</strong>
              </div>
            </a>
            <div className="contact-note">
              <i className="fas fa-location-dot" />
              <div>
                <strong>{t("contact.serviceArea")}</strong>
                <p>{t("contact.serviceAreaText")}</p>
              </div>
            </div>
          </div>
          <form className="contact-form reveal" onSubmit={submit}>
            <div className="form-row">
              <div className="field">
                <label htmlFor="name">{t("contact.name")}</label>
                <input id="name" name="name" type="text" placeholder={t("contact.namePlaceholder")} required />
              </div>
              <div className="field">
                <label htmlFor="phone">{t("contact.phoneLabel")}</label>
                <input id="phone" name="phone" type="tel" placeholder={t("contact.phonePlaceholder")} required />
              </div>
            </div>
            <div className="field">
              <label htmlFor="service">{t("contact.serviceNeeded")}</label>
              <select id="service" name="service" required defaultValue="">
                <option value="">{t("contact.selectService")}</option>
                {SERVICE_IDS.map((id) => (
                  <option key={id} value={id}>
                    {copy.contact.services[id]}
                  </option>
                ))}
              </select>
            </div>
            <div className="field">
              <label htmlFor="message">{t("contact.detailsLabel")}</label>
              <textarea id="message" name="message" rows="5" placeholder={t("contact.detailsPlaceholder")} required />
            </div>
            <button className="btn btn-primary submit-btn" type="submit">
              <i className="fas fa-paper-plane" /> {t("contact.send")}
            </button>
            <p className="form-status" role="status">
              {status}
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
