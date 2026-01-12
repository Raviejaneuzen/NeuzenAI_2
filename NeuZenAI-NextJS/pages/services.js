import { Brain, TrendingUp, Lightbulb, Settings, ArrowRight, CheckCircle } from 'lucide-react';
import Link from 'next/link';

const Services = () => {
    const services = [
        {
            icon: <TrendingUp className="w-10 h-10" />,
            title: "Advanced Analytics & Business Intelligence",
            description: "Transform raw data into actionable insights with sophisticated statistical models, predictive analytics, and comprehensive business intelligence solutions that drive strategic decision-making.",
            features: [
                "Predictive Modeling & Forecasting",
                "Real-time Data Visualization",
                "Statistical Analysis & Reporting",
                "Custom Dashboard Development",
                "KPI Monitoring & Alerts",
                "Data Mining & Pattern Recognition"
            ],
            color: "orange",
            link: "/services/advanced-analytics"
        },
        {
            icon: <Brain className="w-10 h-10" />,
            title: "Custom AI & Machine Learning Solutions",
            description: "Tailored artificial intelligence systems designed specifically for your business needs, from computer vision to natural language processing, built to scale with your organization.",
            features: [
                "Custom ML Model Development",
                "Deep Learning & Neural Networks",
                "Computer Vision Applications",
                "Natural Language Processing",
                "Recommendation Systems",
                "AI Model Deployment & Monitoring"
            ],
            color: "blue",
            link: "/services/custom-ai"
        },
        {
            icon: <Lightbulb className="w-10 h-10" />,
            title: "AI Strategy & Digital Transformation",
            description: "Expert guidance on AI adoption, implementation strategies, and comprehensive digital transformation roadmaps that align with your business objectives and industry requirements.",
            features: [
                "AI Readiness Assessment",
                "Strategic Roadmap Development",
                "Technology Stack Evaluation",
                "Change Management Support",
                "ROI Analysis & Planning",
                "Team Training & Upskilling"
            ],
            color: "green",
            link: "/services/ai-strategy"
        },
        {
            icon: <Settings className="w-10 h-10" />,
            title: "Intelligent Process Automation",
            description: "Streamline operations with smart automation solutions that learn and adapt, optimizing business processes while reducing costs and improving efficiency across your organization.",
            features: [
                "Robotic Process Automation (RPA)",
                "Workflow Optimization",
                "Smart Document Processing",
                "Automated Decision Making",
                "Process Mining & Analysis",
                "Integration with Existing Systems"
            ],
            color: "purple",
            link: "/services/process-automation"
        }
    ];

    return (
        <div className="services-page pt-24">
            {/* Hero Section */}
            <section className="services-hero py-20">
                <div className="container mx-auto px-6 text-center">
                    <div className="services-hero-content">
                        <div className="services-badge">
                            OUR SERVICES
                        </div>
                        <h1 className="services-title">
                            Comprehensive <span className="services-title-highlight">AI Solutions</span><br />
                            for Modern Business
                        </h1>
                        <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8 leading-relaxed">
                            From strategy to implementation, we provide end-to-end AI services that transform your business operations, 
                            drive innovation, and deliver measurable results across every aspect of your organization.
                        </p>
                        <div className="flex flex-col md:flex-row gap-4 justify-center">
                            <Link href="/contact" className="btn btn-primary px-8 py-4 text-lg">
                                Get Started Today
                            </Link>
                            <Link href="/case-studies" className="btn bg-white text-gray-800 shadow-lg hover:bg-gray-50 px-8 py-4 text-lg">
                                View Case Studies
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-24">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4 text-black">Our Core Services</h2>
                        <p className="text-gray-600 max-w-3xl mx-auto text-lg">
                            We offer comprehensive AI solutions tailored to your specific industry needs and business objectives.
                        </p>
                    </div>
                    
                    <div className="services-grid">
                        {services.map((service, index) => (
                            <div key={index} className={`service-card ${service.color} ${index % 2 === 1 ? 'reverse' : ''} fade-in`} style={{ animationDelay: `${index * 0.1}s` }}>
                                <div className="service-visual">
                                    <div className="service-icon">
                                        {service.icon}
                                    </div>
                                </div>
                                
                                <div className="service-content">
                                    <h3 className="service-title">{service.title}</h3>
                                    <p className="service-description">{service.description}</p>
                                    
                                    <ul className="service-features">
                                        {service.features.map((feature, idx) => (
                                            <li key={idx} className="service-feature">
                                                <CheckCircle className="w-5 h-5 service-feature-icon" />
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    
                                    <Link href={service.link} className="service-link">
                                        Learn More <ArrowRight className="w-5 h-5" />
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="cta-section py-24">
                <div className="container mx-auto px-6 text-center">
                    <div className="cta-content">
                        <h2 className="text-4xl font-bold text-white mb-6">
                            Ready to Transform Your Business with AI?
                        </h2>
                        <p className="text-xl text-orange-100 mb-8 max-w-3xl mx-auto leading-relaxed">
                            Let's discuss how our comprehensive AI solutions can drive innovation, improve efficiency, 
                            and accelerate growth for your organization. Schedule a consultation today.
                        </p>
                        <div className="flex flex-col md:flex-row gap-4 justify-center">
                            <Link href="/contact" className="btn bg-white text-orange-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
                                Schedule a Consultation
                            </Link>
                            <Link href="/case-studies" className="btn border-2 border-white text-white hover:bg-white hover:text-orange-600 px-8 py-4 text-lg font-semibold">
                                View Success Stories
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <style jsx>{`
                .services-page {
                    background: white;
                }

                .services-hero {
                    background: white;
                    position: relative;
                    overflow: hidden;
                }

                .services-badge {
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

                .services-title {
                    font-size: clamp(2.5rem, 5vw, 4rem);
                    font-weight: 900;
                    line-height: 1.1;
                    margin-bottom: 32px;
                    color: #000000;
                }

                .services-title-highlight {
                    background: linear-gradient(135deg, #f97316 0%, #ea580c 100%);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    background-clip: text;
                }

                .services-grid {
                    display: flex;
                    flex-direction: column;
                    gap: 3rem;
                }

                .service-card {
                    display: flex;
                    align-items: center;
                    gap: 3rem;
                    background: white;
                    border-radius: 1.5rem;
                    padding: 2.5rem;
                    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
                    transition: all 0.3s ease;
                    border: 1px solid #e5e7eb;
                }

                .service-card:hover {
                    transform: translateY(-8px);
                    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
                }

                .service-card.reverse {
                    flex-direction: row-reverse;
                }

                .service-visual {
                    flex: 0 0 200px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }

                .service-icon {
                    width: 120px;
                    height: 120px;
                    background: linear-gradient(135deg, #f97316, #ea580c);
                    border-radius: 1.5rem;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: white;
                    box-shadow: 0 10px 30px rgba(249, 115, 22, 0.3);
                }

                .service-content {
                    flex: 1;
                }

                .service-title {
                    font-size: 1.75rem;
                    font-weight: 800;
                    color: #000;
                    margin-bottom: 1rem;
                }

                .service-description {
                    color: #6b7280;
                    line-height: 1.7;
                    margin-bottom: 1.5rem;
                    font-size: 1.1rem;
                }

                .service-features {
                    list-style: none;
                    padding: 0;
                    margin: 0 0 1.5rem 0;
                    display: grid;
                    grid-template-columns: repeat(2, 1fr);
                    gap: 0.5rem;
                }

                .service-feature {
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    color: #374151;
                    font-size: 0.95rem;
                }

                .service-feature-icon {
                    color: #10b981;
                    flex-shrink: 0;
                }

                .service-link {
                    display: inline-flex;
                    align-items: center;
                    gap: 0.5rem;
                    color: #f97316;
                    font-weight: 600;
                    text-decoration: none;
                    transition: all 0.3s ease;
                    font-size: 1.1rem;
                }

                .service-link:hover {
                    color: #ea580c;
                    transform: translateX(4px);
                }

                .cta-section {
                    background: linear-gradient(135deg, #f97316 0%, #ea580c 100%);
                }

                @media (max-width: 768px) {
                    .service-card {
                        flex-direction: column !important;
                        gap: 2rem;
                        text-align: center;
                    }

                    .service-visual {
                        flex: none;
                    }

                    .service-features {
                        grid-template-columns: 1fr;
                    }
                }
            `}</style>
        </div>
    );
};

export default Services;