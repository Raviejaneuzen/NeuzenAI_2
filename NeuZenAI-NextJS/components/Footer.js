import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">
              <span className="text-orange-500">NeuZen</span>AI
            </h3>
            <p className="text-gray-400">
              Transforming businesses with intelligent AI solutions.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/services/advanced-analytics" className="hover:text-orange-500">Advanced Analytics</Link></li>
              <li><Link href="/services/custom-ai" className="hover:text-orange-500">Custom AI Solutions</Link></li>
              <li><Link href="/services/ai-strategy" className="hover:text-orange-500">AI Strategy</Link></li>
              <li><Link href="/services/process-automation" className="hover:text-orange-500">Process Automation</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Industries</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/industries/media-entertainment" className="hover:text-orange-500">Media & Entertainment</Link></li>
              <li><Link href="/industries/healthcare-insurance" className="hover:text-orange-500">Healthcare & Insurance</Link></li>
              <li><Link href="/industries/transportation-logistics" className="hover:text-orange-500">Transportation & Logistics</Link></li>
              <li><Link href="/industries/ecommerce-retail" className="hover:text-orange-500">E-commerce & Retail</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/about" className="hover:text-orange-500">About Us</Link></li>
              <li><Link href="/case-studies" className="hover:text-orange-500">Case Studies</Link></li>
              <li><Link href="/careers" className="hover:text-orange-500">Careers</Link></li>
              <li><Link href="/contact" className="hover:text-orange-500">Contact</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 NeuZenAI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;