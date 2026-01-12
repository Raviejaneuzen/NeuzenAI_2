import { Brain, TrendingUp, Lightbulb, Settings, ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { AnalyticsImage, AIImage, StrategyImage, AutomationImage } from '../assets/service-images.jsx';
import './Services.css';

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
            imageComponent: <AnalyticsImage />,
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
            imageComponent: <AIImage />,
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
            imageComponent: <StrategyImage />,
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
            imageComponent: <AutomationImage />,
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
                            <Link to="/contact" className="btn btn-primary px-8 py-4 text-lg">
                                Get Started Today
                            </Link>
                            <Link to="/case-studies" className="btn bg-white text-gray-800 shadow-lg hover:bg-gray-50 px-8 py-4 text-lg">
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
                                    <div className="service-image">
                                        {service.imageComponent}
                                    </div>
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
                                    
                                    <Link to={service.link} className="service-link">
                                        Learn More <ArrowRight className="w-5 h-5" />
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="process-section py-24">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4 text-black">Our Proven Process</h2>
                        <p className="text-gray-600 max-w-3xl mx-auto text-lg">
                            We follow a comprehensive methodology to ensure successful AI implementation, 
                            maximum ROI, and sustainable long-term results for your organization.
                        </p>
                    </div>
                    
                    <div className="process-grid">
                        {[
                            { 
                                step: "01", 
                                title: "Discovery & Assessment", 
                                desc: "Deep dive into your business needs, current infrastructure, and identify AI opportunities with comprehensive analysis." 
                            },
                            { 
                                step: "02", 
                                title: "Strategy & Planning", 
                                desc: "Develop a detailed AI roadmap with clear milestones, resource allocation, and success metrics tailored to your goals." 
                            },
                            { 
                                step: "03", 
                                title: "Development & Implementation", 
                                desc: "Build, test, and deploy AI solutions using best practices, ensuring seamless integration with your existing systems." 
                            },
                            { 
                                step: "04", 
                                title: "Optimization & Support", 
                                desc: "Continuous monitoring, performance optimization, and ongoing support to maximize value and adapt to changing needs." 
                            }
                        ].map((item, index) => (
                            <div key={index} className="process-step slide-up" style={{ animationDelay: `${index * 0.2}s` }}>
                                <div className="process-number">
                                    {item.step}
                                </div>
                                <h3 className="process-title">{item.title}</h3>
                                <p className="process-description">{item.desc}</p>
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
                            <Link to="/contact" className="btn bg-white text-orange-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
                                Schedule a Consultation
                            </Link>
                            <Link to="/case-studies" className="btn border-2 border-white text-white hover:bg-white hover:text-orange-600 px-8 py-4 text-lg font-semibold">
                                View Success Stories
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Services;
