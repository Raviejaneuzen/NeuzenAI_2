import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showNavbar, setShowNavbar] = useState(true);
  const router = useRouter();
  const isHome = router.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Set scrolled state for styling
      setIsScrolled(currentScrollY > 50);
      
      // Show/hide navbar based on scroll direction
      if (currentScrollY < 10) {
        // Always show navbar at the top
        setShowNavbar(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down - hide navbar
        setShowNavbar(false);
        setActiveDropdown(null); // Close any open dropdowns
        setMobileMenuOpen(false); // Close mobile menu
      } else if (currentScrollY < lastScrollY) {
        // Scrolling up - show navbar
        setShowNavbar(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  // Navbar classes with unique naming
  const navbarClasses = `navbar-scroll-container ${
    showNavbar ? 'navbar-scroll-visible' : 'navbar-scroll-hidden'
  } ${isScrolled || !isHome ? 'navbar-scroll-bg-scrolled' : 'navbar-scroll-bg-default'}`;

  const navLinks = [
    { name: 'About Us', path: '/about' },
    {
      name: 'Services',
      path: '/services',
      dropdown: [
        { name: 'Advanced Analytics', path: '/services/advanced-analytics' },
        { name: 'Custom AI Solutions', path: '/services/custom-ai' },
        { name: 'AI Strategy', path: '/services/ai-strategy' },
        { name: 'Process Automation', path: '/services/process-automation' }
      ]
    },
    {
      name: 'Industries / Verticals',
      path: '/industries',
      dropdown: [
        { name: 'Media and Entertainment', path: '/industries/media-entertainment' },
        { name: 'Healthcare & Insurance', path: '/industries/healthcare-insurance' },
        { name: 'Transportation & Logistics', path: '/industries/transportation-logistics' },
        { name: 'E-commerce & Retail', path: '/industries/ecommerce-retail' }
      ]
    },
    { name: 'Success Stories', path: '/case-studies' },
    {
      name: 'Products',
      path: '/products',
      dropdown: [
        { name: 'SwassAI', path: '/products#swassai' },
        { name: 'LensAI', path: '/products#lensai' },
        { name: 'NvisionAI', path: '/products#nvisionai' }
      ]
    },
    { name: 'Contact Us', path: '/contact' },
  ];

  return (
    <nav className={navbarClasses}>
      <div className="navbar-scroll-content">
        {/* Logo */}
        <Link href="/" className="navbar-scroll-logo">
          <span className="navbar-scroll-logo-neu">NeuZen</span>
          <span className="navbar-scroll-logo-ai">AI</span>
        </Link>

        {/* Desktop Menu */}
        <div className="navbar-scroll-menu">
          {navLinks.map((link) => (
            <div
              key={link.name}
              className="navbar-scroll-dropdown"
              onMouseEnter={() => link.dropdown && setActiveDropdown(link.name)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link
                href={link.path}
                className="navbar-scroll-link"
              >
                {link.name}
                {link.dropdown && <ChevronDown className="w-4 h-4" />}
              </Link>

              {/* Dropdown Menu */}
              {link.dropdown && activeDropdown === link.name && (
                <div className="navbar-scroll-dropdown-menu">
                  <div className="navbar-scroll-dropdown-content">
                    {link.dropdown.map((item) => (
                      <Link
                        key={item.name}
                        href={item.path}
                        className="navbar-scroll-dropdown-item"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="navbar-scroll-cta">
          <Link href="/careers" className="navbar-scroll-btn">
            Career
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="navbar-scroll-mobile-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="navbar-scroll-mobile-menu">
          {navLinks.map((link) => (
            <div key={link.name}>
              <Link
                href={link.path}
                className="navbar-scroll-mobile-link"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
              {link.dropdown && (
                <div className="navbar-scroll-mobile-dropdown">
                  {link.dropdown.map((item) => (
                    <Link
                      key={item.name}
                      href={item.path}
                      className="navbar-scroll-mobile-dropdown-item"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <Link
            href="/careers"
            className="navbar-scroll-mobile-cta"
            onClick={() => setMobileMenuOpen(false)}
          >
            Career
          </Link>
        </div>
      )}

      <style jsx>{`
        /* Navbar Scroll Animation Styles */
        .navbar-scroll-container {
          position: fixed;
          top: 10px;
          left: 20px;
          right: 20px;
          z-index: 50;
          transition: transform 0.3s ease-in-out;
        }

        .navbar-scroll-visible {
          transform: translateY(0);
        }

        .navbar-scroll-hidden {
          transform: translateY(-100%);
        }

        .navbar-scroll-bg-default {
          background: rgba(68, 68, 68, 0.95);
          backdrop-filter: blur(12px);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
          padding: 12px 24px;
          border-radius: 50px;
        }

        .navbar-scroll-bg-scrolled {
          background: rgba(68, 68, 68, 0.98);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
          padding: 12px 24px;
          border-radius: 50px;
        }

        .navbar-scroll-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
        }

        .navbar-scroll-logo {
          font-size: 24px;
          font-weight: bold;
          text-decoration: none;
          letter-spacing: -0.025em;
        }

        .navbar-scroll-logo-neu {
          color: #f97316;
        }

        .navbar-scroll-logo-ai {
          color: #ffffff;
        }

        .navbar-scroll-menu {
          display: none;
          align-items: center;
          gap: 32px;
        }

        @media (min-width: 768px) {
          .navbar-scroll-menu {
            display: flex;
          }
        }

        .navbar-scroll-dropdown {
          position: relative;
        }

        .navbar-scroll-link {
          display: flex;
          align-items: center;
          gap: 4px;
          font-size: 14px;
          font-weight: 500;
          color: #ffffff;
          text-decoration: none;
          transition: color 0.2s ease;
        }

        .navbar-scroll-link:hover {
          color: #f97316;
        }

        .navbar-scroll-dropdown-menu {
          position: absolute;
          top: 100%;
          left: 0;
          padding-top: 16px;
          opacity: 0;
          visibility: hidden;
          transition: all 0.2s ease;
          transform: translateY(-10px);
        }

        .navbar-scroll-dropdown:hover .navbar-scroll-dropdown-menu {
          opacity: 1;
          visibility: visible;
          transform: translateY(0);
        }

        .navbar-scroll-dropdown-content {
          background: white;
          border-radius: 12px;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
          border: 1px solid #f3f4f6;
          padding: 8px;
          min-width: 200px;
          overflow: hidden;
        }

        .navbar-scroll-dropdown-item {
          display: block;
          padding: 8px 16px;
          font-size: 14px;
          color: #4b5563;
          text-decoration: none;
          border-radius: 8px;
          transition: all 0.2s ease;
        }

        .navbar-scroll-dropdown-item:hover {
          background: #fff7ed;
          color: #f97316;
        }

        .navbar-scroll-cta {
          display: none;
        }

        @media (min-width: 768px) {
          .navbar-scroll-cta {
            display: block;
          }
        }

        .navbar-scroll-btn {
          background: linear-gradient(135deg, #f97316 0%, #ea580c 100%);
          color: white;
          padding: 10px 20px;
          border-radius: 8px;
          font-size: 14px;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.2s ease;
          box-shadow: 0 2px 4px rgba(249, 115, 22, 0.2);
        }

        .navbar-scroll-btn:hover {
          transform: translateY(-1px);
          box-shadow: 0 4px 8px rgba(249, 115, 22, 0.3);
        }

        .navbar-scroll-mobile-toggle {
          display: block;
          background: none;
          border: none;
          color: #ffffff;
          cursor: pointer;
          padding: 4px;
        }

        @media (min-width: 768px) {
          .navbar-scroll-mobile-toggle {
            display: none;
          }
        }

        .navbar-scroll-mobile-menu {
          position: absolute;
          top: calc(100% + 10px);
          left: 0;
          right: 0;
          background: rgba(68, 68, 68, 0.98);
          border-radius: 20px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
          padding: 20px;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        @media (min-width: 768px) {
          .navbar-scroll-mobile-menu {
            display: none;
          }
        }

        .navbar-scroll-mobile-link {
          display: block;
          color: #ffffff;
          font-weight: 500;
          padding: 8px 0;
          text-decoration: none;
        }

        .navbar-scroll-mobile-dropdown {
          padding-left: 16px;
          display: flex;
          flex-direction: column;
          gap: 8px;
          margin-top: 8px;
          border-left: 2px solid #f97316;
        }

        .navbar-scroll-mobile-dropdown-item {
          font-size: 14px;
          color: #d1d5db;
          padding: 4px 0;
          text-decoration: none;
        }

        .navbar-scroll-mobile-cta {
          background: linear-gradient(135deg, #f97316 0%, #ea580c 100%);
          color: white;
          padding: 12px;
          border-radius: 8px;
          font-weight: 600;
          text-align: center;
          text-decoration: none;
          margin-top: 16px;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;