import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import Services from './pages/Services';
import Products from './pages/Products';
import Insights from './pages/Insights';
import Careers from './pages/Careers';
import About from './pages/About';
import Industries from './pages/Industries';
import CaseStudies from './pages/CaseStudies';
import CaseStudyDetail from './pages/CaseStudyDetail';
import Contact from './pages/Contact';
import MediaEntertainment from './pages/MediaEntertainment';
import HealthcareInsurance from './pages/HealthcareInsurance';
import TransportationLogistics from './pages/TransportationLogistics';
import EcommerceRetail from './pages/EcommerceRetail';
import AdvancedAnalytics from './pages/AdvancedAnalytics';
import CustomAI from './pages/CustomAI';
import AIStrategy from './pages/AIStrategy';
import ProcessAutomation from './pages/ProcessAutomation';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-white overflow-hidden">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/advanced-analytics" element={<AdvancedAnalytics />} />
            <Route path="/services/custom-ai" element={<CustomAI />} />
            <Route path="/services/ai-strategy" element={<AIStrategy />} />
            <Route path="/services/process-automation" element={<ProcessAutomation />} />
            <Route path="/industries" element={<Industries />} />
            <Route path="/industries/media-entertainment" element={<MediaEntertainment />} />
            <Route path="/industries/healthcare-insurance" element={<HealthcareInsurance />} />
            <Route path="/industries/transportation-logistics" element={<TransportationLogistics />} />
            <Route path="/industries/ecommerce-retail" element={<EcommerceRetail />} />
            <Route path="/products" element={<Products />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/case-studies/:id" element={<CaseStudyDetail />} />
            <Route path="/insights" element={<Insights />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            {/* Fallback */}
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
