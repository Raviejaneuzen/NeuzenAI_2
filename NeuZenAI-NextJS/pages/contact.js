import { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, User, Building, MessageSquare } from 'lucide-react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        phone: '',
        service: '',
        message: ''
    });

    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here
        console.log('Form submitted:', formData);
        setIsSubmitted(true);
        
        // Reset form after 3 seconds
        setTimeout(() => {
            setIsSubmitted(false);
            setFormData({
                name: '',
                email: '',
                company: '',
                phone: '',
                service: '',
                message: ''
            });
        }, 3000);
    };

    const contactInfo = [
        {
            icon: <Mail className="w-6 h-6" />,
            title: "Email Us",
            details: "hello@neuzenai.com",
            description: "Send us an email anytime"
        },
        {
            icon: <Phone className="w-6 h-6" />,
            title: "Call Us",
            details: "+1 (555) 123-4567",
            description: "Mon-Fri from 8am to 5pm"
        },
        {
            icon: <MapPin className="w-6 h-6" />,
            title: "Visit Us",
            details: "123 AI Innovation Drive, Tech City, TC 12345",
            description: "Come say hello at our office"
        }
    ];

    const services = [
        "Advanced Analytics & BI",
        "Custom AI & ML Solutions", 
        "AI Strategy & Consulting",
        "Process Automation",
        "Other"
    ];

    return (
        <div className="contact-page pt-24">
            {/* Hero Section */}
            <section className="contact-hero">
                <div className="container mx-auto px-6 text-center">
                    <div className="contact-hero-content fade-in">
                        <div className="contact-badge">
                            GET IN TOUCH
                        </div>
                        <h1 className="contact-title">
                            Let's Build the Future with <span className="contact-title-highlight">AI Together</span>
                        </h1>
                        <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-12 leading-relaxed">
                            Ready to transform your business with cutting-edge AI solutions? 
                            Our team of experts is here to help you navigate your AI journey and unlock unprecedented growth opportunities.
                        </p>
                        
                        {/* Quick Stats */}
                        <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto">
                            <div className="text-center">
                                <div className="text-3xl font-bold text-orange-500 mb-2">24h</div>
                                <div className="text-gray-600">Response Time</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-green-500 mb-2">500+</div>
                                <div className="text-gray-600">Projects Delivered</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-orange-500 mb-2">98%</div>
                                <div className="text-gray-600">Client Satisfaction</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Form & Info Section with Image Background */}
            <section className="contact-form-section">
                <div className="container mx-auto px-6">
                    <div className="contact-form-grid">
                        {/* Left Side - Get in Touch */}
                        <div className="contact-info-section-left fade-in">
                            <h2>Get in Touch</h2>
                            <p>
                                We're here to help you succeed. Reach out through any of these channels and let's start building something amazing together.
                            </p>

                            <div className="contact-info-cards-grid">
                                {contactInfo.map((info, index) => (
                                    <div key={index} className="contact-info-card-bg fade-in-stagger">
                                        <div className="contact-info-icon-bg">
                                            {info.icon}
                                        </div>
                                        <div className="contact-info-content-bg">
                                            <h3 className="contact-info-title-bg">{info.title}</h3>
                                            <p className="contact-info-details-bg">{info.details}</p>
                                            <p className="contact-info-description-bg">{info.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right Side - Send Us a Message Form */}
                        <div className="contact-form-section-right fade-in">
                            <h2>Send Us a Message</h2>
                            <p>
                                Fill out the form below and we'll get back to you within 24 hours with a personalized response.
                            </p>

                            {isSubmitted ? (
                                <div className="success-message-bg">
                                    <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                                    <h3>Message Sent!</h3>
                                    <p>Thank you for reaching out. We'll be in touch soon.</p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="contact-form-bg">
                                    <div className="form-row-bg">
                                        <div className="form-group-bg">
                                            <label htmlFor="name" className="form-label-bg">
                                                <User className="w-4 h-4" />
                                                Full Name *
                                            </label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                                className="form-input-bg"
                                                placeholder="Your full name"
                                            />
                                        </div>
                                        <div className="form-group-bg">
                                            <label htmlFor="email" className="form-label-bg">
                                                <Mail className="w-4 h-4" />
                                                Email Address *
                                            </label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                                className="form-input-bg"
                                                placeholder="your.email@company.com"
                                            />
                                        </div>
                                    </div>

                                    <div className="form-row-bg">
                                        <div className="form-group-bg">
                                            <label htmlFor="company" className="form-label-bg">
                                                <Building className="w-4 h-4" />
                                                Company
                                            </label>
                                            <input
                                                type="text"
                                                id="company"
                                                name="company"
                                                value={formData.company}
                                                onChange={handleChange}
                                                className="form-input-bg"
                                                placeholder="Your company name"
                                            />
                                        </div>
                                        <div className="form-group-bg">
                                            <label htmlFor="phone" className="form-label-bg">
                                                <Phone className="w-4 h-4" />
                                                Phone Number
                                            </label>
                                            <input
                                                type="tel"
                                                id="phone"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                className="form-input-bg"
                                                placeholder="+1 (555) 123-4567"
                                            />
                                        </div>
                                    </div>

                                    <div className="form-group-bg">
                                        <label htmlFor="message" className="form-label-bg">
                                            <MessageSquare className="w-4 h-4" />
                                            Message *
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                            rows="5"
                                            className="form-textarea-bg"
                                            placeholder="Tell us about your project and how we can help..."
                                        ></textarea>
                                    </div>

                                    <button type="submit" className="submit-button-bg">
                                        <Send className="w-5 h-5" />
                                        Send Message
                                    </button>
                                </form>
                            )}
                        </div>

                        {/* Full Width Quick Response Promise */}
                        <div className="response-promise-full-width fade-in">
                            <div className="response-promise-icon-full">
                                <Clock className="w-8 h-8" />
                            </div>
                            <div>
                                <h3>Quick Response Guarantee</h3>
                                <p>
                                    We respond to all inquiries within 24 hours. For urgent matters, 
                                    call us directly for immediate assistance. Our team is committed to providing 
                                    exceptional support throughout your AI transformation journey. Whether you're looking 
                                    to implement AI solutions, need technical consultation, or want to explore partnership 
                                    opportunities, we're here to help you succeed.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="cta-section py-24">
                <div className="container mx-auto px-6 text-center">
                    <div className="cta-content">
                        <h2 className="text-4xl font-bold text-white mb-6">
                            Ready to Start Your AI Journey?
                        </h2>
                        <p className="text-xl text-orange-100 mb-8 max-w-3xl mx-auto leading-relaxed">
                            Join hundreds of companies that have transformed their operations with our AI solutions. 
                            Let's discuss how we can help you achieve your goals.
                        </p>
                        <div className="flex flex-col md:flex-row gap-4 justify-center">
                            <a href="tel:+15551234567" className="btn bg-white text-orange-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
                                Call Now: +1 (555) 123-4567
                            </a>
                            <a href="mailto:hello@neuzenai.com" className="btn border-2 border-white text-white hover:bg-white hover:text-orange-600 px-8 py-4 text-lg font-semibold">
                                Email Us
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <style jsx>{`
                .contact-page {
                    background: white;
                }

                .contact-hero {
                    background: white;
                    position: relative;
                    overflow: hidden;
                    padding: 100px 0 80px;
                }

                .contact-badge {
                    display: inline-block;
                    padding: 10px 24px;
                    background: linear-gradient(135deg, rgba(249, 115, 22, 0.1) 0%, rgba(249, 115, 22, 0.05) 100%);
                    color: #f97316;
                    border-radius: 50px;
                    font-weight: 700;
                    font-size: 14px;
                    letter-spacing: 1px;
                    margin-bottom: 32px;
                    border: 2px solid rgba(249, 115, 22, 0.2);
                }

                .contact-title {
                    font-size: clamp(2.5rem, 5vw, 4rem);
                    font-weight: 900;
                    line-height: 1.1;
                    margin-bottom: 32px;
                    color: #000000;
                }

                .contact-title-highlight {
                    background: linear-gradient(135deg, #f97316 0%, #ea580c 100%);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    background-clip: text;
                }

                .contact-form-section {
                    padding: 100px 0;
                    background: #fafafa;
                }

                .contact-form-grid {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 4rem;
                    max-width: 1200px;
                    margin: 0 auto;
                }

                .contact-info-section-left h2 {
                    font-size: 2rem;
                    font-weight: 800;
                    color: #000;
                    margin-bottom: 1rem;
                }

                .contact-info-section-left p {
                    color: #6b7280;
                    margin-bottom: 2rem;
                    font-size: 1.1rem;
                    line-height: 1.6;
                }

                .contact-info-cards-grid {
                    display: flex;
                    flex-direction: column;
                    gap: 1.5rem;
                }

                .contact-info-card-bg {
                    background: white;
                    padding: 1.5rem;
                    border-radius: 1rem;
                    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
                    display: flex;
                    align-items: flex-start;
                    gap: 1rem;
                    transition: all 0.3s ease;
                }

                .contact-info-card-bg:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 8px 25px -8px rgba(0, 0, 0, 0.15);
                }

                .contact-info-icon-bg {
                    width: 3rem;
                    height: 3rem;
                    background: linear-gradient(135deg, #f97316, #ea580c);
                    border-radius: 0.75rem;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: white;
                    flex-shrink: 0;
                }

                .contact-info-title-bg {
                    font-size: 1.125rem;
                    font-weight: 700;
                    color: #000;
                    margin-bottom: 0.25rem;
                }

                .contact-info-details-bg {
                    color: #f97316;
                    font-weight: 600;
                    margin-bottom: 0.25rem;
                }

                .contact-info-description-bg {
                    color: #6b7280;
                    font-size: 0.875rem;
                }

                .contact-form-section-right h2 {
                    font-size: 2rem;
                    font-weight: 800;
                    color: #000;
                    margin-bottom: 1rem;
                }

                .contact-form-section-right p {
                    color: #6b7280;
                    margin-bottom: 2rem;
                    font-size: 1.1rem;
                    line-height: 1.6;
                }

                .contact-form-bg {
                    background: white;
                    padding: 2rem;
                    border-radius: 1rem;
                    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
                }

                .form-row-bg {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 1rem;
                    margin-bottom: 1.5rem;
                }

                .form-group-bg {
                    margin-bottom: 1.5rem;
                }

                .form-label-bg {
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    font-weight: 600;
                    color: #374151;
                    margin-bottom: 0.5rem;
                    font-size: 0.875rem;
                }

                .form-input-bg,
                .form-textarea-bg {
                    width: 100%;
                    padding: 0.75rem 1rem;
                    border: 1px solid #d1d5db;
                    border-radius: 0.5rem;
                    font-size: 1rem;
                    transition: all 0.3s ease;
                }

                .form-input-bg:focus,
                .form-textarea-bg:focus {
                    outline: none;
                    border-color: #f97316;
                    box-shadow: 0 0 0 3px rgba(249, 115, 22, 0.1);
                }

                .submit-button-bg {
                    width: 100%;
                    background: linear-gradient(135deg, #f97316, #ea580c);
                    color: white;
                    padding: 0.75rem 1.5rem;
                    border: none;
                    border-radius: 0.5rem;
                    font-weight: 600;
                    font-size: 1rem;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 0.5rem;
                }

                .submit-button-bg:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 8px 25px -8px rgba(249, 115, 22, 0.4);
                }

                .success-message-bg {
                    background: white;
                    padding: 3rem 2rem;
                    border-radius: 1rem;
                    text-align: center;
                    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
                }

                .success-message-bg h3 {
                    font-size: 1.5rem;
                    font-weight: 700;
                    color: #000;
                    margin-bottom: 0.5rem;
                }

                .success-message-bg p {
                    color: #6b7280;
                }

                .response-promise-full-width {
                    grid-column: 1 / -1;
                    background: white;
                    padding: 2rem;
                    border-radius: 1rem;
                    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
                    display: flex;
                    align-items: flex-start;
                    gap: 1rem;
                    margin-top: 2rem;
                }

                .response-promise-icon-full {
                    width: 4rem;
                    height: 4rem;
                    background: linear-gradient(135deg, #10b981, #059669);
                    border-radius: 1rem;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: white;
                    flex-shrink: 0;
                }

                .response-promise-full-width h3 {
                    font-size: 1.25rem;
                    font-weight: 700;
                    color: #000;
                    margin-bottom: 0.5rem;
                }

                .response-promise-full-width p {
                    color: #6b7280;
                    line-height: 1.6;
                }

                .cta-section {
                    background: linear-gradient(135deg, #f97316 0%, #ea580c 100%);
                }

                @media (max-width: 768px) {
                    .contact-form-grid {
                        grid-template-columns: 1fr;
                        gap: 2rem;
                    }

                    .form-row-bg {
                        grid-template-columns: 1fr;
                    }

                    .response-promise-full-width {
                        flex-direction: column;
                        text-align: center;
                    }
                }
            `}</style>
        </div>
    );
};

export default Contact;