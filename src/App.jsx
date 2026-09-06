import { useEffect } from "react";
import { BrowserRouter, Routes, Route, Outlet, useLocation } from "react-router-dom";
import { initTheme } from "./utils/theme";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

import Home from "./pages/Home";
import ServicesPage from "./pages/ServicesPage";
import ProjectsPage from "./pages/ProjectsPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import MasterLinkPage from "./pages/MasterLinkPage";
import ProductsIndexPage from "./pages/products/ProductsIndexPage";
import ProductCategoryPage from "./pages/products/ProductCategoryPage";
import ProductDetailPage from "./pages/products/ProductDetailPage";
import ProductRequestPage from "./pages/products/ProductRequestPage";

function SiteLayout() {
  const location = useLocation();

  useEffect(() => {
    initTheme();
  }, []);

  useEffect(() => {
    const header = document.getElementById("header");
    const onScroll = () => header?.classList.toggle("scrolled", window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
            observer.unobserve(entry.target);
          }
        }),
      { threshold: 0.08 }
    );

    document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));

    return () => {
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
  }, [location.pathname]);

  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MasterLinkPage />} />
        <Route path="/links" element={<MasterLinkPage />} />

        <Route element={<SiteLayout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/products" element={<ProductsIndexPage />} />
          <Route path="/products/:categorySlug" element={<ProductCategoryPage />} />
          <Route path="/product/:productId" element={<ProductDetailPage />} />
          <Route path="/product/:productId/request" element={<ProductRequestPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
