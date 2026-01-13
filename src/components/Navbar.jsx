import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Set scrolled state for styling only
      setIsScrolled(currentScrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Navbar classes - always visible, no hiding
  const navbarClasses = `navbar-scroll-container navbar-scroll-visible ${isScrolled || !isHome ? 'navbar-scroll-bg-scrolled' : 'navbar-scroll-bg-default'
    }`;

  const navLinks = [
    { name: 'About Us', path: '/about' },
    {
      name: 'Capabilities',
      path: '/services',
      dropdown: [
        { name: 'Advanced Analytics', path: '/services/advanced-analytics' },
        { name: 'Custom AI Solutions', path: '/services/custom-ai-solutions' },
        { name: 'AI Strategic Consulting', path: '/services/ai-strategic-consulting' },
        { name: 'Intelligent Automation', path: '/services/intelligent-automation' }
      ]
    },
    {
      name: 'Industries',
      path: '/industries',
      dropdown: [
        { name: 'Media and Entertainment', path: '/industries/media-entertainment' },
        { name: 'Health and Life Insurance', path: '/industries/health-life-insurance' },
        { name: 'Transportation and Logistics', path: '/industries/transportation-logistics' },
        { name: 'E-commerce and Retail', path: '/industries/ecommerce-retail' }
      ]
    },
    { name: 'Success Stories', path: '/case-studies' },
    {
      name: 'Products',
      path: '/products',
      dropdown: [
        { name: 'SwassAI', path: 'https://swass.neuzenai.com/', isExternal: true },
        { name: 'LensAI', path: 'https://lens.neuzenai.com/', isExternal: true },
        { name: 'NvisionAI', path: 'https://nvision.neuzenai.com/', isExternal: true },
        { name: 'Flux', path: 'https://fluxai.neuzenai.com/login', isExternal: true }
      ]
    },
    { name: 'Career', path: '/careers' },
  ];

  return (
    <nav className={navbarClasses}>
      <div className="navbar-scroll-content">
        {/* Logo */}
        <Link to="/" className="navbar-scroll-logo">
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
                to={link.path}
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
                      item.isExternal ? (
                        <a
                          key={item.name}
                          href={item.path}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="navbar-scroll-dropdown-item"
                        >
                          {item.name}
                        </a>
                      ) : (
                        <Link
                          key={item.name}
                          to={item.path}
                          className="navbar-scroll-dropdown-item"
                        >
                          {item.name}
                        </Link>
                      )
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="navbar-scroll-cta">
          <Link to="/contact" className="navbar-scroll-btn">
            Contact Us
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
                to={link.path}
                className="navbar-scroll-mobile-link"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
              {link.dropdown && (
                <div className="navbar-scroll-mobile-dropdown">
                  {link.dropdown.map((item) => (
                    item.isExternal ? (
                      <a
                        key={item.name}
                        href={item.path}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="navbar-scroll-mobile-dropdown-item"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </a>
                    ) : (
                      <Link
                        key={item.name}
                        to={item.path}
                        className="navbar-scroll-mobile-dropdown-item"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    )
                  ))}
                </div>
              )}
            </div>
          ))}
          <Link
            to="/contact"
            className="navbar-scroll-mobile-cta"
            onClick={() => setMobileMenuOpen(false)}
          >
            Contact Us
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
