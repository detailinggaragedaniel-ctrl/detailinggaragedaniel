import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import UnifiedHeader from './components/UnifiedHeader';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import Home from './pages/Home';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Pricing from './pages/Pricing';
import About from './pages/About';
import Contact from './pages/Contact';
import QrCard from './pages/QrCard';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior });
  }, [pathname]);
  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        {/* standalone hidden page — no Header, Footer or WhatsApp button */}
        <Route path="/qr-card" element={<QrCard />} />
        <Route
          path="*"
          element={
            <div className="min-h-screen relative">
              <UnifiedHeader />
              <Routes>
                <Route path="/" element={<><Home /><Footer /></>} />
                <Route path="/servizi" element={<><Services /><Footer /></>} />
                <Route path="/portfolio" element={<><Portfolio /><Footer /></>} />
                <Route path="/prezzi" element={<><Pricing /><Footer /></>} />
                <Route path="/chi-siamo" element={<><About /><Footer /></>} />
                <Route path="/contatti" element={<><Contact /><Footer /></>} />
              </Routes>
              <WhatsAppButton />
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
