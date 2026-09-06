import { Link } from "react-router-dom";
import BrandLogo from "./BrandLogo";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-main">
        <div className="footer-brand">
          <Link className="brand" to="/home" aria-label="Michu Technology Solutions home">
            <BrandLogo />
          </Link>
          <p>IT, security, networking and digital solutions for modern businesses.</p>
        </div>
        <div className="footer-links">
          <h4>Company</h4>
          <Link to="/about">About</Link>
          <Link to="/services">Services</Link>
          <Link to="/products">Products</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <div className="footer-links">
          <h4>Products</h4>
          <Link to="/products/cctv">CCTV & Surveillance</Link>
          <Link to="/products/access-attendance">Access & Attendance</Link>
          <Link to="/products/networking">Networking Equipment</Link>
          <Link to="/products/computers">Computers & Accessories</Link>
        </div>
        <div className="footer-links">
          <h4>Connect</h4>
          <a href="mailto:bahilutesfaye719@gmail.com">Email us</a>
          <a href="tel:+251966764344">Call us</a>
          <a href="https://t.me/bahilu_leo" target="_blank" rel="noreferrer">
            Telegram
          </a>
          <a href="https://www.linkedin.com/in/bedasa-tesfaye" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} Michu Technology Solutions. All rights reserved.</span>
        <span>Technology • Security • Connectivity • Digital</span>
      </div>
    </footer>
  );
}
