import { COMPANY_CONTACT } from "../data/contact";
import { INSTALLATION_OPTION_EN } from "../i18n/translations";

export function buildProductRequestMessage(form, product) {
  const categoryName = product?.categoryLabel || product?.category || "General";
  const productName = form.productName || product?.name || "Not specified";
  const productId = form.productId || product?.id || "Not specified";

  return `Hello Michu Technology Solutions,

I would like to request the following product:

Product:
${productName}

Product ID:
${productId}

Category:
${categoryName}

Quantity:
${form.quantity || "1"}

Customer:
${form.customerName}

Phone:
${form.phone}

Email:
${form.email || "Not provided"}

Company:
${form.company || "Not provided"}

Location:
${form.location || "Not provided"}

Preferred installation/service:
${INSTALLATION_OPTION_EN[form.installation] || form.installation || "Not specified"}

Additional requirements:
${form.message || "None"}

Please provide availability and quotation.

Thank you.`;
}

export function buildWhatsAppUrl(message) {
  return `https://wa.me/${COMPANY_CONTACT.whatsapp}?text=${encodeURIComponent(message)}`;
}

export function buildProductEmailUrl(form, product) {
  const subject = encodeURIComponent(
    `Product Request — ${form.productName || product?.name || "General Inquiry"}`
  );
  const body = encodeURIComponent(buildProductRequestMessage(form, product));
  return `mailto:${COMPANY_CONTACT.email}?subject=${subject}&body=${body}`;
}

export function openWhatsAppRequest(form, product) {
  const message = buildProductRequestMessage(form, product);
  window.open(buildWhatsAppUrl(message), "_blank", "noopener,noreferrer");
}

export function openEmailRequest(form, product) {
  window.location.href = buildProductEmailUrl(form, product);
}

export default {
  buildProductRequestMessage,
  buildWhatsAppUrl,
  buildProductEmailUrl,
  openWhatsAppRequest,
  openEmailRequest,
};
