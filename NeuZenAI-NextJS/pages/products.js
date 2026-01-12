import { Star, Users, TrendingUp, Shield, BarChart, Play, ExternalLink, Eye, Brain } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const Products = () => {
    const products = [
        {
            name: "SwassAI",
            tagline: "Intelligent Business Analytics",
            description: "Transform your business data into actionable insights with advanced predictive analytics, real-time dashboards, and AI-powered forecasting that drives strategic decision-making.",
            icon: <BarChart className="w-12 h-12" />,
            image: "/swassAI.png",
            color: "blue",
            features: [
                "Real-time Data Processing",
                "Predictive Modeling",
                "Interactive Dashboards",
                "Custom KPI Tracking",
                "Automated Reporting",
                "API Integration"
            ],
            pricing: "Starting at $299/month",
            demoLink: "https://swassai-demo.neuzenai.com",
            productLink: "https://swassai.neuzenai.com"
        },
        {
            name: "LensAI",
            tagline: "Computer Vision Platform",
            description: "Advanced computer vision and image recognition platform that enables businesses to extract meaningful insights from visual data with state-of-the-art AI algorithms.",
            icon: <Eye className="w-12 h-12" />,
            image: "/lensAI.png",
            color: "orange",
            features: [
                "Object Detection & Recognition",
                "Image Classification",
                "Real-time Video Analysis",
                "Custom Model Training",
                "Edge Computing Support",
                "Multi-format Processing"
            ],
            pricing: "Starting at $399/month",
            demoLink: "https://lensai-demo.neuzenai.com",
            productLink: "https://lensai.neuzenai.com"
        },
        {
            name: "NvisionAI",
            tagline: "Unified AI Knowledge Platform",
            description: "Break down data silos with our intelligent knowledge graph that connects all your organizational data for seamless discovery, insights, and collaborative intelligence.",
            icon: <Brain className="w-12 h-12" />,
            image: "/nvisionAI.png",
            color: "purple",
            features: [
                "Semantic Data Layer",
                "Natural Language Search",
                "Cross-platform Integration",
                "Knowledge Discovery",
                "Collaborative Workspaces",
                "Security & Compliance"
            ],
            pricing: "Starting at $499/month",
            demoLink: "https://nvisionai-demo.neuzenai.com",
            productLink: "https://nvisionai.neuzenai.com"
        }
    ];

    return (
        <div className="products-page pt-24">
            {/* Hero Section */}
            <section className="products-hero">
                <div className="container mx-auto px-6 text-center">
                    <div className="products-hero-content fade-in">
                        <div className="products-badge">
                            OUR PRODUCTS
                        </div>
                        <h1 className="products-title">
                            Ready-to-Deploy <span className="products-title-highlight">AI Platforms</span>
                        </h1>
                        <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-12 leading-relaxed">
                            Accelerate your AI adoption with our suite of enterprise-ready platforms designed to solve real business challenges. 
                            From predictive analytics to intelligent automation, transform your operations with proven AI solutions.
                        </p>
                        <div className="flex flex-col md:flex-row gap-4 justify-center">
                            <Link href="/contact" className="btn btn-primary px-8 py-4 text-lg">
                                Request Demo
                            </Link>
                            <Link href="/case-studies" className="btn bg-white text-gray-800 shadow-lg hover:bg-gray-50 px-8 py-4 text-lg">
                                View Success Stories
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Products Section */}
            <section className="products-section">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-6 text-black">Our AI Product Suite</h2>
                        <p className="text-gray-600 max-w-3xl mx-auto text-lg">
                            Three powerful AI platforms designed to address your most critical business challenges with cutting-edge technology.
                        </p>
                    </div>
                    
                    <div className="products-zigzag">
                        {products.map((product, index) => (
                            <div key={index} className={`product-row ${index % 2 === 1 ? 'reverse' : ''} fade-in`} 
                                 style={{ 
                                     animationDelay: `${index * 0.2}s`,
                                     backgroundImage: `url(${product.image})`,
                                     backgroundSize: 'cover',
                                     backgroundPosition: 'center',
                                     backgroundRepeat: 'no-repeat'
                                 }}>
                                <div className="product-row-overlay">
                                    <div className="product-visual">
                                        <div className="product-icon-large">
                                            {product.icon}
                                        </div>
                                        
                                        <div className="product-actions">
                                            <a 
                                                href={product.demoLink} 
                                                target="_blank" 
                                                rel="noopener noreferrer" 
                                                className="btn-demo"
                                            >
                                                <Play className="w-4 h-4" />
                                                Watch Demo
                                            </a>
                                            <a 
                                                href={product.productLink} 
                                                target="_blank" 
                                                rel="noopener noreferrer" 
                                                className="btn-product"
                                            >
                                                <ExternalLink className="w-4 h-4" />
                                                Visit Product
                                            </a>
                                            <Link href="/contact" className="btn-contact">
                                                Get Started
                                            </Link>
                                        </div>
                                    </div>
                                    
                                    <div className="product-content">
                                        <div className="product-header">
                                            <h3 className="product-name">{product.name}</h3>
                                            <p className="product-tagline">{product.tagline}</p>
                                        </div>
                                        
                                        <p className="product-description">{product.description}</p>
                                        
                                        <div className="product-features">
                                            <h4>Key Features</h4>
                                            <ul className="features-list">
                                                {product.features.slice(0, 4).map((feature, idx) => (
                                                    <li key={idx} className="feature-item">
                                                        <span>{feature}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features Comparison */}
            <section className="features-section">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-6 text-black">Why Choose NeuZen Products?</h2>
                        <p className="text-gray-600 max-w-3xl mx-auto text-lg">
                            Built for enterprise scale with security, reliability, and performance at the core. 
                            Our products are trusted by organizations worldwide for their robust architecture and proven results.
                        </p>
                    </div>
                    
                    <div className="features-grid">
                        {[
                            { 
                                icon: <Shield className="w-10 h-10" />, 
                                title: "Enterprise Security", 
                                desc: "SOC 2 compliant with end-to-end encryption and advanced threat protection",
                                color: "blue"
                            },
                            { 
                                icon: <TrendingUp className="w-10 h-10" />, 
                                title: "Scalable Architecture", 
                                desc: "Handles millions of operations per second with auto-scaling infrastructure",
                                color: "green"
                            },
                            { 
                                icon: <Users className="w-10 h-10" />, 
                                title: "24/7 Support", 
                                desc: "Dedicated success team and technical support with 99.9% uptime guarantee",
                                color: "orange"
                            },
                            { 
                                icon: <Star className="w-10 h-10" />, 
                                title: "Proven Results", 
                                desc: "Trusted by 500+ organizations worldwide with measurable ROI and success metrics",
                                color: "purple"
                            }
                        ].map((item, index) => (
                            <div key={index} className={`feature-card ${item.color} slide-up`} style={{ animationDelay: `${index * 0.1}s` }}>
                                <div className="feature-visual">
                                    <div className="feature-icon">
                                        {item.icon}
                                    </div>
                                    <div className="feature-glow"></div>
                                </div>
                                <div className="feature-content">
                                    <h3 className="feature-title">{item.title}</h3>
                                    <p className="feature-description">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="cta-section">
                <div className="container mx-auto px-6 text-center">
                    <div className="cta-content">
                        <h2 className="text-4xl font-bold text-white mb-6">
                            Ready to Transform Your Business?
                        </h2>
                        <p className="text-xl text-orange-100 mb-8 max-w-3xl mx-auto leading-relaxed">
                            Join hundreds of organizations already using NeuZen products to drive innovation and growth. 
                            Start your AI transformation journey today with our enterprise-ready platforms.
                        </p>
                        <div className="flex flex-col md:flex-row gap-4 justify-center">
                            <Link href="/contact" className="btn bg-white text-orange-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
                                Start Free Trial
                            </Link>
                            <Link href="/contact" className="btn border-2 border-white text-white hover:bg-white hover:text-orange-600 px-8 py-4 text-lg font-semibold">
                                Schedule Consultation
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <style jsx>{`
                .products-page {
                    font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
                    background: #ffffff;
                    color: #000000;
                }

                .products-hero {
                    background: #ffffff;
                    position: relative;
                    overflow: hidden;
                    padding: 100px 0 80px;
                }

                .products-badge {
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
                    box-shadow: 0 4px 20px rgba(249, 115, 22, 0.1);
                }

                .products-title {
                    font-size: clamp(2.8rem, 6vw, 4.5rem);
                    font-weight: 900;
                    line-height: 1.1;
                    margin-bottom: 32px;
                    color: #000000;
                    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
                }

                .products-title-highlight {
                    background: linear-gradient(135deg, #f97316 0%, #ea580c 100%);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    background-clip: text;
                    position: relative;
                }

                .products-section {
                    padding: 100px 0;
                    background: #ffffff;
                }

                .products-zigzag {
                    display: flex;
                    flex-direction: column;
                    gap: 40px;
                    margin-top: 64px;
                    max-width: 1400px;
                    margin-left: auto;
                    margin-right: auto;
                }

                .product-row {
                    display: flex;
                    align-items: center;
                    gap: 80px;
                    border-radius: 32px;
                    padding: 80px 60px;
                    border: 1px solid rgba(255, 255, 255, 0.2);
                    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
                    position: relative;
                    overflow: hidden;
                    box-shadow: 0 12px 48px rgba(0, 0, 0, 0.15);
                    min-height: 600px;
                }

                .product-row-overlay {
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: linear-gradient(135deg, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.5) 100%);
                    border-radius: 32px;
                    display: flex;
                    align-items: center;
                    gap: 80px;
                    padding: 80px 60px;
                    z-index: 1;
                }

                .product-row:hover {
                    transform: translateY(-16px);
                    box-shadow: 0 32px 100px rgba(0, 0, 0, 0.25);
                    border-color: rgba(255, 255, 255, 0.4);
                }

                .product-row:hover .product-row-overlay {
                    background: linear-gradient(135deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.4) 100%);
                }

                .product-row.reverse .product-row-overlay {
                    flex-direction: row-reverse;
                }

                .product-visual {
                    flex: 0 0 400px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 32px;
                    position: relative;
                    z-index: 2;
                }

                .product-icon-large {
                    width: 140px;
                    height: 140px;
                    background: rgba(255, 255, 255, 0.15);
                    backdrop-filter: blur(10px);
                    border-radius: 28px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: white;
                    margin-bottom: 20px;
                    transition: all 0.4s ease;
                    border: 2px solid rgba(255, 255, 255, 0.2);
                    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.3);
                }

                .product-row:hover .product-icon-large {
                    transform: scale(1.1);
                    background: rgba(255, 255, 255, 0.25);
                    border-color: rgba(255, 255, 255, 0.4);
                }

                .product-icon-large svg {
                    width: 72px;
                    height: 72px;
                }

                .product-content {
                    flex: 1;
                    min-width: 0;
                    position: relative;
                    z-index: 2;
                    color: white;
                }

                .product-header {
                    margin-bottom: 24px;
                    text-align: center;
                }

                .product-name {
                    font-size: 40px;
                    font-weight: 900;
                    color: #f97316;
                    margin-bottom: 12px;
                    line-height: 1.1;
                    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
                }

                .product-tagline {
                    color: rgba(255, 255, 255, 0.9);
                    font-weight: 600;
                    font-size: 18px;
                    margin-bottom: 0;
                    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
                }

                .product-description {
                    color: rgba(255, 255, 255, 0.85);
                    line-height: 1.6;
                    margin-bottom: 24px;
                    font-size: 16px;
                    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
                }

                .product-features {
                    margin-bottom: 4px;
                }

                .product-features h4 {
                    font-weight: 700;
                    color: white;
                    margin-bottom: 12px;
                    font-size: 18px;
                    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
                }

                .features-list {
                    list-style: none;
                    padding: 0;
                    margin: 0;
                    display: grid;
                    grid-template-columns: repeat(2, 1fr);
                    gap: 1px;
                }

                .feature-item {
                    display: flex;
                    align-items: center;
                    color: rgba(255, 255, 255, 0.9);
                    font-size: 15px;
                    margin-bottom: 8px;
                    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
                }

                .product-actions {
                    display: flex;
                    gap: 12px;
                    justify-content: center;
                    flex-wrap: wrap;
                }

                .btn-demo,
                .btn-product,
                .btn-contact {
                    display: inline-flex;
                    align-items: center;
                    gap: 4px;
                    padding: 12px 20px;
                    border-radius: 10px;
                    font-weight: 600;
                    font-size: 14px;
                    text-decoration: none;
                    transition: all 0.3s ease;
                    border: 2px solid transparent;
                    cursor: pointer;
                }

                .btn-demo {
                    background: #10b981;
                    color: white;
                    box-shadow: 0 4px 15px rgba(16, 185, 129, 0.3);
                }

                .btn-demo:hover {
                    background: #059669;
                    transform: translateY(-2px);
                    box-shadow: 0 8px 25px rgba(16, 185, 129, 0.4);
                }

                .btn-product {
                    background: #34d399;
                    color: white;
                    border-color: #34d399;
                }

                .btn-product:hover {
                    background: #10b981;
                    border-color: #10b981;
                    transform: translateY(-2px);
                    box-shadow: 0 6px 20px rgba(52, 211, 153, 0.4);
                }

                .btn-contact {
                    background: #6ee7b7;
                    color: #065f46;
                    border-color: #6ee7b7;
                }

                .btn-contact:hover {
                    background: #34d399;
                    color: white;
                    border-color: #34d399;
                    transform: translateY(-2px);
                    box-shadow: 0 6px 20px rgba(110, 231, 183, 0.4);
                }

                .features-section {
                    padding: 100px 0;
                    background: #ffffff;
                    position: relative;
                    overflow: hidden;
                }

                .features-grid {
                    display: grid;
                    grid-template-columns: repeat(4, 1fr);
                    gap: 32px;
                    margin-top: 64px;
                    position: relative;
                    z-index: 1;
                }

                .feature-card {
                    background: #ffffff;
                    padding: 40px 32px;
                    border-radius: 24px;
                    border: 1px solid #e5e7eb;
                    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
                    position: relative;
                    overflow: hidden;
                    text-align: center;
                }

                .feature-card:hover {
                    transform: translateY(-8px);
                    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.12);
                }

                .feature-visual {
                    position: relative;
                    margin-bottom: 24px;
                }

                .feature-icon {
                    width: 80px;
                    height: 80px;
                    background: #f8fafc;
                    border-radius: 20px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: #f97316;
                    margin: 0 auto;
                    transition: all 0.4s ease;
                    position: relative;
                    z-index: 2;
                    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.08);
                }

                .feature-card:hover .feature-icon {
                    transform: scale(1.1);
                    background: #f97316;
                    color: white;
                }

                .feature-title {
                    font-size: 20px;
                    font-weight: 800;
                    color: #000000;
                    margin-bottom: 12px;
                }

                .feature-description {
                    color: #4b5563;
                    line-height: 1.6;
                    font-size: 15px;
                }

                .cta-section {
                    background: linear-gradient(135deg, #f97316 0%, #ea580c 100%);
                    position: relative;
                    overflow: hidden;
                    padding: 100px 0;
                }

                @media (max-width: 1024px) {
                    .product-row {
                        flex-direction: column !important;
                        gap: 50px;
                        padding: 60px 50px;
                        min-height: 700px;
                    }
                    
                    .product-row-overlay {
                        flex-direction: column !important;
                        gap: 50px;
                        padding: 60px 50px;
                    }
                    
                    .product-visual {
                        flex: none;
                        width: 100%;
                    }
                    
                    .features-grid {
                        grid-template-columns: repeat(2, 1fr);
                        gap: 24px;
                    }
                }

                @media (max-width: 768px) {
                    .product-row {
                        padding: 50px 40px;
                        gap: 40px;
                        min-height: 600px;
                    }
                    
                    .product-row-overlay {
                        padding: 50px 40px;
                        gap: 40px;
                    }
                    
                    .product-name {
                        font-size: 32px;
                    }
                    
                    .features-grid {
                        grid-template-columns: 1fr;
                        gap: 20px;
                    }
                    
                    .features-list {
                        grid-template-columns: 1fr;
                    }
                }
            `}</style>
        </div>
    );
};

export default Products;