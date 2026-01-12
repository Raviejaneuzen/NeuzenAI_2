import { Star, Users, TrendingUp, Shield, BarChart, Play, ExternalLink, Eye, Brain } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Products.css';

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
            stats: { accuracy: "98%", processing: "10M+", clients: "500+" },
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
            stats: { accuracy: "99.2%", images: "50M+", models: "100+" },
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
            stats: { connections: "10K+", queries: "1M+", uptime: "99.9%" },
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
                            <Link to="/contact" className="btn btn-primary px-8 py-4 text-lg">
                                Request Demo
                            </Link>
                            <Link to="/case-studies" className="btn bg-white text-gray-800 shadow-lg hover:bg-gray-50 px-8 py-4 text-lg">
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
                                                className={`btn-demo ${product.color}`}
                                            >
                                                <Play className="w-4 h-4" />
                                                Watch Demo
                                            </a>
                                            <a 
                                                href={product.productLink} 
                                                target="_blank" 
                                                rel="noopener noreferrer" 
                                                className={`btn-product ${product.color}`}
                                            >
                                                <ExternalLink className="w-4 h-4" />
                                                Visit Product
                                            </a>
                                            <Link to="/contact" className={`btn-contact ${product.color}`}>
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
                            <Link to="/contact" className="btn bg-white text-orange-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
                                Start Free Trial
                            </Link>
                            <Link to="/contact" className="btn border-2 border-white text-white hover:bg-white hover:text-orange-600 px-8 py-4 text-lg font-semibold">
                                Schedule Consultation
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Products;