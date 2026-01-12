import { Users, Heart, Building2, Factory, ShoppingCart, Shield, ArrowRight, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import { MediaImage, HealthImage, TransportImage, EcommerceImage } from '../assets/industry-images.jsx';
import './Industries.css';

const Industries = () => {
    const industries = [
        {
            icon: <Users className="w-10 h-10" />,
            title: "Media and Entertainment",
            description: "Transform content creation and distribution with AI-powered recommendation systems, audience analytics, and personalized streaming experiences that captivate viewers and maximize engagement across all platforms.",
            features: [
                "AI-Powered Content Recommendation",
                "Real-time Audience Analytics",
                "Automated Content Moderation",
                "Personalized User Experiences",
                "Content Performance Optimization",
                "Multi-platform Distribution Intelligence"
            ],
            stats: { metric: "10M+", label: "Content Views Analyzed" },
            color: "blue",
            imageComponent: <MediaImage />,
            link: "/industries/media-entertainment"
        },
        {
            icon: <Heart className="w-10 h-10" />,
            title: "Healthcare & Life Insurance",
            description: "Revolutionize patient care and insurance operations with advanced risk assessment, automated claims processing, predictive health analytics, and fraud detection systems that improve outcomes and reduce costs.",
            features: [
                "Predictive Health Risk Assessment",
                "Automated Claims Processing",
                "Medical Image Analysis",
                "Fraud Detection & Prevention",
                "Patient Outcome Prediction",
                "Personalized Treatment Plans"
            ],
            stats: { metric: "500K+", label: "Policies Processed" },
            color: "red",
            imageComponent: <HealthImage />,
            link: "/industries/healthcare-insurance"
        },
        {
            icon: <Factory className="w-10 h-10" />,
            title: "Transportation & Logistics",
            description: "Optimize supply chain operations with intelligent route planning, fleet management, predictive maintenance, and real-time logistics coordination that reduces costs and improves delivery efficiency.",
            features: [
                "Dynamic Route Optimization",
                "Predictive Fleet Maintenance",
                "Supply Chain Intelligence",
                "Real-time Tracking & Analytics",
                "Demand Forecasting",
                "Automated Warehouse Management"
            ],
            stats: { metric: "1000+", label: "Fleet Vehicles Optimized" },
            color: "green",
            imageComponent: <TransportImage />,
            link: "/industries/transportation-logistics"
        },
        {
            icon: <ShoppingCart className="w-10 h-10" />,
            title: "E-commerce & Retail",
            description: "Enhance customer experiences and boost sales with personalized shopping recommendations, dynamic pricing, inventory optimization, and comprehensive customer behavior analysis powered by advanced AI.",
            features: [
                "Personalized Product Recommendations",
                "Dynamic Pricing Optimization",
                "Inventory Management AI",
                "Customer Behavior Analytics",
                "Chatbot & Virtual Assistants",
                "Conversion Rate Optimization"
            ],
            stats: { metric: "2M+", label: "Customers Served" },
            color: "orange",
            imageComponent: <EcommerceImage />,
            link: "/industries/ecommerce-retail"
        }
    ];

    return (
        <div className="industries-page pt-24 bg-white">
            {/* Hero Section */}
            <section className="industries-hero py-20">
                <div className="container mx-auto px-6 text-center">
                    <div className="industries-hero-content">
                        <div className="industries-badge">
                            INDUSTRIES WE SERVE
                        </div>
                        <h1 className="industries-title">
                            AI Solutions Across <span className="industries-title-highlight">Every Industry</span>
                        </h1>
                        <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8 leading-relaxed">
                            From healthcare to entertainment, we deliver industry-specific AI solutions that address unique challenges, 
                            drive innovation, and deliver measurable results tailored to your sector's requirements.
                        </p>
                        <div className="flex flex-col md:flex-row gap-4 justify-center">
                            <Link to="/contact" className="btn btn-primary px-8 py-4 text-lg">
                                Discuss Your Industry
                            </Link>
                            <Link to="/case-studies" className="btn bg-white text-gray-800 shadow-lg hover:bg-gray-50 px-8 py-4 text-lg">
                                View Success Stories
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Industries Grid */}
            <section className="py-24">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4 text-black">Industries We Transform</h2>
                        <p className="text-gray-600 max-w-3xl mx-auto text-lg">
                            Our AI expertise spans across diverse sectors, delivering tailored solutions that drive growth and innovation.
                        </p>
                    </div>
                    
                    <div className="industries-grid">
                        {industries.map((industry, index) => (
                            <div key={index} className={`industry-card ${industry.color} ${index % 2 === 1 ? 'reverse' : ''} fade-in`} style={{ animationDelay: `${index * 0.1}s` }}>
                                <div className="industry-visual">
                                    <div className="industry-image">
                                        {industry.imageComponent}
                                    </div>
                                    <div className="industry-icon">
                                        {industry.icon}
                                    </div>
                                </div>
                                
                                <div className="industry-content">
                                    <h3 className="industry-title">{industry.title}</h3>
                                    <p className="industry-description">{industry.description}</p>
                                    
                                    <div className="industry-features">
                                        <h4>Key Solutions:</h4>
                                        <ul className="industry-features-list">
                                            {industry.features.map((feature, idx) => (
                                                <li key={idx} className="industry-feature">
                                                    <div className="industry-feature-dot"></div>
                                                    <span>{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="industry-stats">
                                        <div className="industry-stats-metric">{industry.stats.metric}</div>
                                        <div className="industry-stats-label">{industry.stats.label}</div>
                                    </div>

                                    <Link to={industry.link} className="industry-link">
                                        Learn More <ArrowRight className="w-5 h-5" />
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Success Metrics */}
            <section className="metrics-section py-24">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4">Proven Results Across Industries</h2>
                        <p className="text-gray-600 max-w-3xl mx-auto text-lg">
                            Our AI solutions deliver measurable impact and drive sustainable growth across diverse sectors worldwide.
                        </p>
                    </div>
                    
                    <div className="metrics-grid">
                        {[
                            { metric: "500+", label: "Projects Delivered", icon: <TrendingUp className="w-6 h-6" /> },
                            { metric: "50+", label: "Industries Served", icon: <Building2 className="w-6 h-6" /> },
                            { metric: "98%", label: "Client Satisfaction", icon: <Heart className="w-6 h-6" /> },
                            { metric: "24/7", label: "Support Available", icon: <Shield className="w-6 h-6" /> }
                        ].map((item, index) => (
                            <div key={index} className="metric-card slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                                <div className="metric-icon">
                                    {item.icon}
                                </div>
                                <div className="metric-number">{item.metric}</div>
                                <div className="metric-label">{item.label}</div>
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
                            Don't See Your Industry?
                        </h2>
                        <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
                            We work with businesses across all sectors and adapt our AI solutions to meet unique industry requirements. 
                            Let's discuss how AI can transform your specific business challenges.
                        </p>
                        <div className="flex flex-col md:flex-row gap-4 justify-center">
                            <Link to="/contact" className="btn bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
                                Start the Conversation
                            </Link>
                            <Link to="/services" className="btn border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg font-semibold">
                                Explore Our Services
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Industries;