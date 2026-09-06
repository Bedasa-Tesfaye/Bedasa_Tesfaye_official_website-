import { Link } from "react-router-dom";
import "./master-link.css";

const quickLinks = [
  { label: "Website", icon: "🏠", to: "/home" },
  { label: "Services", icon: "⚙️", to: "/services" },
  { label: "Projects", icon: "📁", to: "/projects" },
  { label: "About", icon: "👤", to: "/about" },
  { label: "Contact", icon: "📩", to: "/contact" },
  { label: "Email", icon: "✉️", href: "mailto:bahilutesfaye719@gmail.com" },
  { label: "Call", icon: "📞", href: "tel:+251966764344" },
  { label: "Telegram", icon: "💬", href: "https://t.me/bahilu_leo" },
  { label: "LinkedIn", icon: "💼", href: "https://www.linkedin.com/in/bedasa-tesfaye" },
];

function MasterLinkPage() {
  return (
    <div className="links-page">
      <div className="links-container">
        <div className="profile">
          <div className="profile-image" aria-hidden="true">
            <span>B</span>
          </div>

          <h1>Bedasa Tesfaye</h1>
          <div className="profession">IT Professional • Networking • Software &amp; Web Solutions</div>
          <p className="description">
            Build practical technology. Solve real problems. Create lasting value.
          </p>
        </div>

        <div className="social-links">
          {quickLinks.map((link) => {
            const content = (
              <>
                <span>{link.icon}</span>
                <strong>{link.label}</strong>
              </>
            );

            if (link.to) {
              return (
                <Link key={link.label} to={link.to} className="link-button">
                  {content}
                </Link>
              );
            }

            return (
              <a
                key={link.label}
                href={link.href}
                className="link-button"
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noreferrer" : undefined}
              >
                {content}
              </a>
            );
          })}
        </div>

        <div className="business">
          <h2>Michu Technology Solutions</h2>
          <p>IT, security, networking and digital solutions for modern businesses.</p>
        </div>

        <p className="links-footer">© 2026 Michu Technology Solutions. All rights reserved.</p>
      </div>
    </div>
  );
}

export default MasterLinkPage;
