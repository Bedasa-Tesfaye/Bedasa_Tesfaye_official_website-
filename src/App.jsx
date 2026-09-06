import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
export default function App() {
  useEffect(() => {
    document.documentElement.dataset.theme = localStorage.getItem('michu-theme') || 'dark';
    const header = document.getElementById('header');
    const onScroll = () => header?.classList.toggle('scrolled', window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('show'); observer.unobserve(entry.target); }
    }), { threshold: 0.08 });
    document.querySelectorAll('.reveal').forEach(element => observer.observe(element));
    return () => { window.removeEventListener('scroll', onScroll); observer.disconnect(); };
  }, []);
  return <><Navbar /><main><Home /></main><Footer /><ScrollToTop /></>;
}
