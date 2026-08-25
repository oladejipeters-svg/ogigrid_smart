import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import Platform from "./pages/Platform.jsx";
import LocalAISecurity from "./pages/LocalAISecurity.jsx";
import ProductSuite from "./pages/ProductSuite.jsx";
import Pricing from "./pages/Pricing.jsx";
import About from "./pages/About.jsx";
import CaseStudies from "./pages/CaseStudies.jsx";
import Resources from "./pages/Resources.jsx";
import Contact from "./pages/Contact.jsx";
import RequestDemo from "./pages/RequestDemo.jsx";
import LegalPage from "./pages/LegalPage.jsx";
import NotFound from "./pages/NotFound.jsx";

export default function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/platform" element={<Platform />} />
          <Route path="/local-ai-security" element={<LocalAISecurity />} />
          <Route path="/products" element={<ProductSuite />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/about" element={<About />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/request-demo" element={<RequestDemo />} />
          <Route path="/legal/privacy" element={<LegalPage slug="privacy" />} />
          <Route path="/legal/terms" element={<LegalPage slug="terms" />} />
          <Route path="/legal/data-security" element={<LegalPage slug="data-security" />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
