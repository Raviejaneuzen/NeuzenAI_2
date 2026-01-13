import React from 'react';
import { Link } from 'react-router-dom';
import { Twitter, Linkedin, Github, Mail, Phone, ArrowRight, Facebook, Instagram } from 'lucide-react';
import footerMap from '../assets/footer_map.png';
import './Footer.css'; // Import the new CSS file

const Footer = () => {
    return (
        <footer className="footer-container">
            <div className="footer-inner">
                <Link to="/" className="footer-brand-title">
                    NeuZenAI
                </Link>
                <div className="footer-grid">
                    {/* Brand */}
                    <div className="footer-col-brand">
                        <p className="footer-brand-desc">
                            Empowering businesses with next-generation AI solutions that transform operations and drive innovation across industries.
                        </p>
                        <div className="footer-social-links">
                            <a href="https://x.com/Neuzenai23" target="_blank" rel="noopener noreferrer" className="footer-social-icon">
                                <Twitter size={20} />
                            </a>
                            <a href="https://www.linkedin.com/company/neuzenai/" target="_blank" rel="noopener noreferrer" className="footer-social-icon">
                                <Linkedin size={20} />
                            </a>
                            <a href="https://www.facebook.com/people/Neuzenai/61554736760102/?mibextid=LQQJ4d" target="_blank" rel="noopener noreferrer" className="footer-social-icon">
                                <Facebook size={20} />
                            </a>
                            <a href="https://www.instagram.com/neuzenai/?igsh=MWIya2FuZWphdHkzcw%3D%3D" target="_blank" rel="noopener noreferrer" className="footer-social-icon">
                                <Instagram size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="footer-col-links">
                        <h4 className="footer-heading">Company</h4>
                        <ul className="footer-links">
                            <li><Link to="/about" className="footer-link-item"><ArrowRight size={16} />About Us</Link></li>
                            <li><Link to="/careers" className="footer-link-item"><ArrowRight size={16} />Careers</Link></li>
                            <li><Link to="/insights" className="footer-link-item"><ArrowRight size={16} />Insights</Link></li>
                            <li><Link to="/case-studies" className="footer-link-item"><ArrowRight size={16} />Case Studies</Link></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div className="footer-col-links">
                        <h4 className="footer-heading">Capabilities</h4>
                        <ul className="footer-links">
                            <li><Link to="/services/advanced-analytics" className="footer-link-item"><ArrowRight size={16} />Advanced Analytics</Link></li>
                            <li><Link to="/services/custom-ai-solutions" className="footer-link-item"><ArrowRight size={16} />Custom AI</Link></li>
                            <li><Link to="/services/ai-strategic-consulting" className="footer-link-item"><ArrowRight size={16} />AI Strategy</Link></li>
                            <li><Link to="/services/intelligent-automation" className="footer-link-item"><ArrowRight size={16} />Automation</Link></li>
                        </ul>
                    </div>

                    {/* Products */}
                    <div className="footer-col-links">
                        <h4 className="footer-heading">Products</h4>
                        <ul className="footer-links">
                            <li><a href="https://swass.neuzenai.com/" target="_blank" rel="noopener noreferrer" className="footer-link-item"><ArrowRight size={16} />SwassAI</a></li>
                            <li><a href="https://lens.neuzenai.com/" target="_blank" rel="noopener noreferrer" className="footer-link-item"><ArrowRight size={16} />LensAI</a></li>
                            <li><a href="https://nvision.neuzenai.com/" target="_blank" rel="noopener noreferrer" className="footer-link-item"><ArrowRight size={16} />NvisionAI</a></li>
                            <li><a href="https://fluxai.neuzenai.com/login" target="_blank" rel="noopener noreferrer" className="footer-link-item"><ArrowRight size={16} />Flux</a></li>
                        </ul>
                    </div>

                    {/* Contact Info & Locations */}
                    <div className="footer-col-contact">
                        <h4 className="footer-heading">Contact</h4>
                        <ul className="footer-links">
                            <li className="footer-contact-item">
                                <Mail size={20} className="footer-brand-highlight" />
                                <span>contact@neuzenai.com</span>
                            </li>
                            <li className="footer-contact-item">
                                <Phone size={20} className="footer-brand-highlight" />
                                <div>
                                    <div className="mb-1">India: +91 88852 57422</div>
                                    <div>USA: +1 972 372 9983</div>
                                </div>
                            </li>
                        </ul>

                        {/* Office Locations Map */}
                        <div className="footer-locations">
                            <h5 className="footer-heading" style={{ fontSize: '1.25rem', marginBottom: '12px' }}>Our Locations</h5>
                            <div className="footer-locations-card">
                                {/* World Map Image with Interactive Markers */}
                                <div className="footer-map-container">
                                    <img
                                        src={footerMap}
                                        alt="World Map showing Dallas and Hyderabad"
                                        className="footer-map-img"
                                    />

                                    {/* Dallas Interactive Marker */}
                                    <div className="footer-map-marker" style={{ left: '22%', top: '38%' }}>
                                        <div className="footer-marker-dot"></div>
                                        {/* Tooltip */}
                                        <div className="footer-tooltip">
                                            Dallas, USA
                                        </div>
                                    </div>

                                    {/* Hyderabad Interactive Marker */}
                                    <div className="footer-map-marker" style={{ left: '69%', top: '50%' }}>
                                        <div className="footer-marker-dot"></div>
                                        {/* Tooltip */}
                                        <div className="footer-tooltip" style={{ left: 'auto', right: '0', transform: 'none' }}>
                                            T Hub Phase 2, Hyderabad
                                        </div>
                                    </div>
                                </div>

                                {/* Location Details List */}
                                <div className="footer-locations-list">
                                    {/* Dallas Location */}
                                    <div className="footer-location-item">
                                        <div className="footer-location-dot"></div>
                                        <div>
                                            <h6 className="footer-location-name">Dallas, USA</h6>
                                            <p className="footer-location-address">Innovation District</p>
                                        </div>
                                    </div>

                                    {/* Hyderabad Location */}
                                    <div className="footer-location-item">
                                        <div className="footer-location-dot"></div>
                                        <div>
                                            <h6 className="footer-location-name">Hyderabad, India</h6>
                                            <p className="footer-location-address">
                                                T Hub Phase 2, 20, In orbit Mall Rd,<br />
                                                Vittal Rao Nagar, Madhapur,<br />
                                                Hyderabad, Telangana 500081
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="footer-bottom">
                    <div className="footer-copyright">
                        © {new Date().getFullYear()} NeuZenAI. All rights reserved.
                    </div>
                    <div className="footer-bottom-links">
                        <Link to="/privacy" className="footer-bottom-link">Privacy Policy</Link>
                        <Link to="/terms" className="footer-bottom-link">Terms of Service</Link>
                        <Link to="/cookies" className="footer-bottom-link">Cookie Policy</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
