import { ArrowRight, Brain, Database, Shield, Cloud, Zap, Code, BarChart, Users, Star, CheckCircle, Heart, Building2, Factory, ShoppingCart, Sparkles, TrendingUp, Award, Globe } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const Home = () => {
    const services = [
        {
            icon: <TrendingUp className="w-8 h-8" />,
            title: "Advanced Analytics & BI",
            description: "Transform raw data into actionable insights with sophisticated statistical models and comprehensive business intelligence solutions."
        },
        {
            icon: <Brain className="w-8 h-8" />,
            title: "Custom AI Solutions",
            description: "Tailored artificial intelligence systems designed specifically for your business needs, from computer vision to natural language processing."
        },
        {
            icon: <Sparkles className="w-8 h-8" />,
            title: "AI Strategy & Consulting",
            description: "Expert guidance on AI adoption, implementation strategies, and comprehensive digital transformation roadmaps."
        },
        {
            icon: <Zap className="w-8 h-8" />,
            title: "Process Automation",
            description: "Streamline operations with smart automation solutions that learn and adapt, optimizing business processes."
        }
    ];

    const industries = [
        {
            icon: <Users className="w-6 h-6" />,
            title: "Media & Entertainment",
            description: "AI-powered content recommendation and audience analytics"
        },
        {
            icon: <Heart className="w-6 h-6" />,
            title: "Healthcare & Insurance",
            description: "Predictive health analytics and automated claims processing"
        },
        {
            icon: <Factory className="w-6 h-6" />,
            title: "Transportation & Logistics",
            description: "Route optimization and predictive fleet maintenance"
        },
        {
            icon: <ShoppingCart className="w-6 h-6" />,
            title: "E-commerce & Retail",
            description: "Personalized recommendations and dynamic pricing"
        },
        {
            icon: <Building2 className="w-6 h-6" />,
            title: "Financial Services",
            description: "Fraud detection and risk assessment solutions"
        },
        {
            icon: <Globe className="w-6 h-6" />,
            title: "Manufacturing",
            description: "Predictive maintenance and quality control systems"
        }
    ];

    const successStories = [
        {
            title: "E-commerce Revenue Boost",
            description: "Increased online sales by 45% through AI-powered personalization",
            metric: "45%",
            label: "Revenue Increase"
        },
        {
            title: "Healthcare Cost Reduction",
            description: "Reduced operational costs by 30% with predictive analytics",
            metric: "30%",
            label: "Cost Reduction"
        },
        {
            title: "Manufacturing Efficiency",
            description: "Improved production efficiency by 60% with smart automation",
            metric: "60%",
            label: "Efficiency Gain"
        }
    ];

    return (
        <div className="home-page">
            {/* Hero Section */}
            <section className="hero-section">
                <div className="hero-background"></div>
                <div className="container mx-auto px-6 py-20">
                    <div className="text-center max-w-4xl mx-auto">
                        <div className="hero-badge fade-in">
                            <Sparkles className="w-5 h-5" />
                            INTELLIGENT AI SOLUTIONS
                        </div>
                        <h1 className="hero-title fade-in">
                            Transform Your Business with <span className="text-highlight">Artificial Intelligence</span>
                        </h1>
                        <p className="hero-description fade-in">
                            Unlock the power of AI to drive innovation, optimize operations, and accelerate growth. 
                            From predictive analytics to intelligent automation, we deliver cutting-edge solutions 
                            tailored to your industry needs.
                        </p>
                        <div className="hero-actions fade-in">
                            <Link href="/contact" className="btn btn-primary">
                                Get Started Today
                                <ArrowRight className="w-5 h-5" />
                            </Link>
                            <Link href="/case-studies" className="btn btn-secondary">
                                View Success Stories
                            </Link>
                        </div>
                        <div className="hero-stats fade-in">
                            <div className="stat-item">
                                <div className="stat-number">500+</div>
                                <div className="stat-label">Projects Delivered</div>
                            </div>
                            <div className="stat-item">
                                <div className="stat-number">98%</div>
                                <div className="stat-label">Client Satisfaction</div>
                            </div>
                            <div className="stat-item">
                                <div className="stat-number">50+</div>
                                <div className="stat-label">Industries Served</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* What We Do Section */}
            <section className="services-section">
                <div className="container mx-auto px-6 py-20">
                    <div className="text-center mb-16">
                        <h2 className="section-title">What We Do</h2>
                        <p className="section-description">
                            Comprehensive AI solutions designed to solve real business challenges and drive measurable results.
                        </p>
                    </div>
                    <div className="services-grid">
                        {services.map((service, index) => (
                            <div key={index} className="service-card slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                                <div className="service-icon">
                                    {service.icon}
                                </div>
                                <h3 className="service-title">{service.title}</h3>
                                <p className="service-description">{service.description}</p>
                                <Link href="/services" className="service-link">
                                    Learn More <ArrowRight className="w-4 h-4" />
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Industries Section */}
            <section className="industries-section">
                <div className="container mx-auto px-6 py-20">
                    <div className="text-center mb-16">
                        <h2 className="section-title">Industries We Serve</h2>
                        <p className="section-description">
                            Delivering specialized AI solutions across diverse industries with proven expertise and results.
                        </p>
                    </div>
                    <div className="industries-grid">
                        {industries.map((industry, index) => (
                            <div key={index} className="industry-card slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                                <div className="industry-icon">
                                    {industry.icon}
                                </div>
                                <h3 className="industry-title">{industry.title}</h3>
                                <p className="industry-description">{industry.description}</p>
                            </div>
                        ))}
                    </div>
                    <div className="text-center mt-12">
                        <Link href="/industries" className="btn btn-primary">
                            Explore All Industries
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Success Stories Section */}
            <section className="success-stories-section">
                <div className="container mx-auto px-6 py-20">
                    <div className="text-center mb-16">
                        <h2 className="section-title text-white">Our Success Stories</h2>
                        <p className="section-description text-gray-300">
                            Real results from real clients who transformed their businesses with our AI solutions.
                        </p>
                    </div>
                    <div className="success-stories-grid">
                        {successStories.map((story, index) => (
                            <div key={index} className="success-story-card slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                                <div className="story-metric">{story.metric}</div>
                                <div className="story-label">{story.label}</div>
                                <h3 className="story-title">{story.title}</h3>
                                <p className="story-description">{story.description}</p>
                            </div>
                        ))}
                    </div>
                    <div className="text-center mt-12">
                        <Link href="/case-studies" className="btn bg-white text-gray-800 hover:bg-gray-100">
                            View All Case Studies
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="cta-section">
                <div className="container mx-auto px-6 py-20 text-center">
                    <h2 className="text-4xl font-bold text-white mb-6">
                        Ready to Transform Your Business?
                    </h2>
                    <p className="text-xl text-orange-100 mb-8 max-w-3xl mx-auto">
                        Join hundreds of companies already using AI to drive innovation and growth. 
                        Let's discuss how we can help you achieve your business goals.
                    </p>
                    <div className="flex flex-col md:flex-row gap-4 justify-center">
                        <Link href="/contact" className="btn bg-white text-orange-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
                            Start Your AI Journey
                        </Link>
                        <Link href="/products" className="btn border-2 border-white text-white hover:bg-white hover:text-orange-600 px-8 py-4 text-lg font-semibold">
                            Explore Our Products
                        </Link>
                    </div>
                </div>
            </section>

            <style jsx>{`
                .home-page {
                    background: white;
                }

                .hero-section {
                    position: relative;
                    background: linear-gradient(135deg, #f97316 0%, #ea580c 100%);
                    overflow: hidden;
                }

                .hero-background {
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse"><path d="M 10 0 L 0 0 0 10" fill="none" stroke="rgba(255,255,255,0.1)" stroke-width="0.5"/></pattern></defs><rect width="100" height="100" fill="url(%23grid)"/></svg>');
                    opacity: 0.3;
                }

                .hero-badge {
                    display: inline-flex;
                    align-items: center;
                    gap: 0.5rem;
                    background: rgba(255, 255, 255, 0.2);
                    backdrop-filter: blur(10px);
                    padding: 0.5rem 1rem;
                    border-radius: 2rem;
                    color: white;
                    font-size: 0.875rem;
                    font-weight: 600;
                    margin-bottom: 2rem;
                    border: 1px solid rgba(255, 255, 255, 0.3);
                }

                .hero-title {
                    font-size: clamp(2.5rem, 5vw, 4rem);
                    font-weight: 900;
                    line-height: 1.1;
                    color: white;
                    margin-bottom: 1.5rem;
                }

                .text-highlight {
                    background: linear-gradient(135deg, #10b981, #059669);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    background-clip: text;
                }

                .hero-description {
                    font-size: 1.25rem;
                    line-height: 1.7;
                    color: rgba(255, 255, 255, 0.9);
                    margin-bottom: 2rem;
                    max-width: 3xl;
                    margin-left: auto;
                    margin-right: auto;
                }

                .hero-actions {
                    display: flex;
                    gap: 1rem;
                    justify-content: center;
                    flex-wrap: wrap;
                    margin-bottom: 3rem;
                }

                .hero-stats {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 2rem;
                    max-width: 600px;
                    margin: 0 auto;
                }

                .stat-item {
                    text-align: center;
                    padding: 1rem;
                    background: rgba(255, 255, 255, 0.1);
                    backdrop-filter: blur(10px);
                    border-radius: 1rem;
                    border: 1px solid rgba(255, 255, 255, 0.2);
                }

                .stat-number {
                    font-size: 2rem;
                    font-weight: 800;
                    color: white;
                    margin-bottom: 0.25rem;
                }

                .stat-label {
                    font-size: 0.875rem;
                    color: rgba(255, 255, 255, 0.8);
                }

                .services-section {
                    background: #fafafa;
                }

                .section-title {
                    font-size: 2.5rem;
                    font-weight: 800;
                    color: #000;
                    margin-bottom: 1rem;
                }

                .section-description {
                    font-size: 1.125rem;
                    color: #6b7280;
                    max-width: 3xl;
                    margin: 0 auto;
                }

                .services-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
                    gap: 2rem;
                }

                .service-card {
                    background: white;
                    padding: 2rem;
                    border-radius: 1rem;
                    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
                    transition: all 0.3s ease;
                    border: 1px solid #e5e7eb;
                }

                .service-card:hover {
                    transform: translateY(-4px);
                    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
                }

                .service-icon {
                    width: 3rem;
                    height: 3rem;
                    background: linear-gradient(135deg, #f97316, #ea580c);
                    border-radius: 0.75rem;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: white;
                    margin-bottom: 1rem;
                }

                .service-title {
                    font-size: 1.25rem;
                    font-weight: 700;
                    color: #000;
                    margin-bottom: 0.75rem;
                }

                .service-description {
                    color: #6b7280;
                    line-height: 1.6;
                    margin-bottom: 1rem;
                }

                .service-link {
                    display: inline-flex;
                    align-items: center;
                    gap: 0.5rem;
                    color: #f97316;
                    font-weight: 600;
                    text-decoration: none;
                    transition: all 0.3s ease;
                }

                .service-link:hover {
                    color: #ea580c;
                    transform: translateX(4px);
                }

                .industries-section {
                    background: white;
                }

                .industries-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
                    gap: 1.5rem;
                }

                .industry-card {
                    background: white;
                    padding: 1.5rem;
                    border-radius: 1rem;
                    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
                    transition: all 0.3s ease;
                    border: 1px solid #e5e7eb;
                    text-align: center;
                }

                .industry-card:hover {
                    transform: translateY(-4px);
                    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
                }

                .industry-icon {
                    width: 2.5rem;
                    height: 2.5rem;
                    background: linear-gradient(135deg, #10b981, #059669);
                    border-radius: 0.75rem;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: white;
                    margin: 0 auto 1rem;
                }

                .industry-title {
                    font-size: 1.125rem;
                    font-weight: 700;
                    color: #000;
                    margin-bottom: 0.5rem;
                }

                .industry-description {
                    color: #6b7280;
                    font-size: 0.875rem;
                    line-height: 1.5;
                }

                .success-stories-section {
                    background: linear-gradient(135deg, #1f2937 0%, #111827 100%);
                }

                .success-stories-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
                    gap: 2rem;
                }

                .success-story-card {
                    background: rgba(255, 255, 255, 0.1);
                    backdrop-filter: blur(10px);
                    padding: 2rem;
                    border-radius: 1rem;
                    border: 1px solid rgba(255, 255, 255, 0.2);
                    text-align: center;
                    transition: all 0.3s ease;
                }

                .success-story-card:hover {
                    transform: translateY(-4px);
                    background: rgba(255, 255, 255, 0.15);
                }

                .story-metric {
                    font-size: 3rem;
                    font-weight: 800;
                    color: #10b981;
                    margin-bottom: 0.5rem;
                }

                .story-label {
                    font-size: 0.875rem;
                    color: #10b981;
                    font-weight: 600;
                    margin-bottom: 1rem;
                    text-transform: uppercase;
                    letter-spacing: 0.05em;
                }

                .story-title {
                    font-size: 1.25rem;
                    font-weight: 700;
                    color: white;
                    margin-bottom: 0.75rem;
                }

                .story-description {
                    color: #d1d5db;
                    line-height: 1.6;
                }

                .cta-section {
                    background: linear-gradient(135deg, #f97316 0%, #ea580c 100%);
                }

                @media (max-width: 768px) {
                    .hero-stats {
                        grid-template-columns: 1fr;
                        gap: 1rem;
                    }

                    .hero-actions {
                        flex-direction: column;
                        align-items: center;
                    }

                    .services-grid,
                    .industries-grid,
                    .success-stories-grid {
                        grid-template-columns: 1fr;
                    }
                }
            `}</style>
        </div>
    );
};

export default Home;