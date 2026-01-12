import { TrendingUp, BarChart, Database, Eye, Target, Zap, ArrowRight, CheckCircle, Star, Users, Building2 } from 'lucide-react';
import Link from 'next/link';

const AdvancedAnalytics = () => {
    const features = [
        {
            icon: <BarChart className="w-8 h-8" />,
            title: "Predictive Modeling",
            description: "Advanced statistical models that forecast trends and outcomes with high accuracy."
        },
        {
            icon: <Eye className="w-8 h-8" />,
            title: "Real-time Visualization",
            description: "Interactive dashboards that provide instant insights into your data."
        },
        {
            icon: <Database className="w-8 h-8" />,
            title: "Data Mining",
            description: "Extract valuable patterns and insights from large datasets."
        },
        {
            icon: <Target className="w-8 h-8" />,
            title: "KPI Monitoring",
            description: "Track and monitor key performance indicators in real-time."
        }
    ];

    const benefits = [
        "Increase revenue by 25-40% through data-driven decisions",
        "Reduce operational costs by identifying inefficiencies",
        "Improve customer satisfaction with personalized insights",
        "Accelerate time-to-market for new products and services",
        "Enhance risk management with predictive analytics",
        "Optimize resource allocation across departments"
    ];

    const caseStudies = [
        {
            company: "RetailMax Corp",
            industry: "E-commerce",
            challenge: "Inventory management and demand forecasting",
            solution: "Implemented predictive analytics for inventory optimization",
            result: "35% reduction in inventory costs, 20% increase in sales"
        },
        {
            company: "FinanceFlow Inc",
            industry: "Financial Services",
            challenge: "Risk assessment and fraud detection",
            solution: "Advanced analytics for real-time risk monitoring",
            result: "99.2% fraud detection accuracy, 50% faster processing"
        }
    ];

    return (
        <div className="service-detail-page pt-24">
            {/* Hero Section */}
            <section className="service-hero py-20">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="service-badge">
                            <TrendingUp className="w-4 h-4" />
                            ADVANCED ANALYTICS
                        </div>
                        <h1 className="service-hero-title">
                            Transform Data into <br />
                            <span className="text-orange-500">Actionable Insights</span>
                        </h1>
                        <p className="service-hero-description">
                            Unlock the power of your data with sophisticated analytics solutions that drive strategic 
                            decision-making and accelerate business growth through predictive modeling and real-time insights.
                        </p>
                        <div className="flex flex-col md:flex-row gap-4 justify-center mt-8">
                            <Link href="/contact" className="btn btn-primary">
                                Get Started Today
                            </Link>
                            <Link href="/case-studies" className="btn btn-secondary">
                                View Case Studies
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4">Core Capabilities</h2>
                        <p className="text-gray-600 max-w-3xl mx-auto">
                            Our advanced analytics platform provides comprehensive tools for data analysis, 
                            visualization, and predictive modeling.
                        </p>
                    </div>
                    
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {features.map((feature, index) => (
                            <div key={index} className="feature-card">
                                <div className="feature-icon">
                                    {feature.icon}
                                </div>
                                <h3 className="feature-title">{feature.title}</h3>
                                <p className="feature-description">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-20">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-4xl font-bold mb-6">Why Choose Our Analytics Solutions?</h2>
                            <p className="text-gray-600 mb-8 text-lg">
                                Our advanced analytics solutions deliver measurable business value through 
                                data-driven insights and predictive capabilities.
                            </p>
                            <ul className="space-y-4">
                                {benefits.map((benefit, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                                        <span className="text-gray-700">{benefit}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl p-8 text-white">
                            <div className="text-center">
                                <div className="text-5xl font-bold mb-2">98%</div>
                                <div className="text-orange-100 mb-6">Accuracy Rate</div>
                                <div className="text-3xl font-bold mb-2">40%</div>
                                <div className="text-orange-100 mb-6">Average ROI Increase</div>
                                <div className="text-3xl font-bold mb-2">24/7</div>
                                <div className="text-orange-100">Real-time Monitoring</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Case Studies Section */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4">Success Stories</h2>
                        <p className="text-gray-600 max-w-3xl mx-auto">
                            See how our advanced analytics solutions have transformed businesses across industries.
                        </p>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-8">
                        {caseStudies.map((study, index) => (
                            <div key={index} className="case-study-card">
                                <div className="flex items-center gap-3 mb-4">
                                    <Building2 className="w-6 h-6 text-orange-500" />
                                    <div>
                                        <h3 className="font-bold text-lg">{study.company}</h3>
                                        <p className="text-gray-500">{study.industry}</p>
                                    </div>
                                </div>
                                <div className="space-y-3">
                                    <div>
                                        <h4 className="font-semibold text-gray-800">Challenge:</h4>
                                        <p className="text-gray-600">{study.challenge}</p>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-800">Solution:</h4>
                                        <p className="text-gray-600">{study.solution}</p>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-800">Result:</h4>
                                        <p className="text-green-600 font-semibold">{study.result}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-r from-orange-500 to-red-600">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-4xl font-bold text-white mb-6">
                        Ready to Unlock Your Data's Potential?
                    </h2>
                    <p className="text-xl text-orange-100 mb-8 max-w-3xl mx-auto">
                        Let's discuss how our advanced analytics solutions can transform your business 
                        operations and drive measurable growth.
                    </p>
                    <Link href="/contact" className="btn bg-white text-orange-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
                        Schedule a Consultation
                    </Link>
                </div>
            </section>

            <style jsx>{`
                .service-detail-page {
                    background: white;
                }

                .service-hero {
                    background: white;
                }

                .service-badge {
                    display: inline-flex;
                    align-items: center;
                    gap: 8px;
                    padding: 12px 24px;
                    background: linear-gradient(135deg, rgba(249, 115, 22, 0.1) 0%, rgba(249, 115, 22, 0.05) 100%);
                    color: #f97316;
                    border-radius: 50px;
                    font-weight: 700;
                    font-size: 14px;
                    letter-spacing: 1px;
                    margin-bottom: 32px;
                    border: 2px solid rgba(249, 115, 22, 0.2);
                }

                .service-hero-title {
                    font-size: clamp(2.5rem, 5vw, 4rem);
                    font-weight: 900;
                    line-height: 1.1;
                    margin-bottom: 24px;
                    color: #000;
                }

                .service-hero-description {
                    font-size: 1.25rem;
                    color: #6b7280;
                    line-height: 1.6;
                    margin-bottom: 32px;
                }

                .feature-card {
                    background: white;
                    padding: 2rem;
                    border-radius: 1rem;
                    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
                    text-align: center;
                    transition: transform 0.3s ease;
                }

                .feature-card:hover {
                    transform: translateY(-4px);
                }

                .feature-icon {
                    width: 80px;
                    height: 80px;
                    background: linear-gradient(135deg, #f97316, #ea580c);
                    border-radius: 1rem;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: white;
                    margin: 0 auto 1.5rem;
                }

                .feature-title {
                    font-size: 1.25rem;
                    font-weight: 700;
                    margin-bottom: 0.75rem;
                    color: #000;
                }

                .feature-description {
                    color: #6b7280;
                    line-height: 1.6;
                }

                .case-study-card {
                    background: white;
                    padding: 2rem;
                    border-radius: 1rem;
                    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
                    transition: transform 0.3s ease;
                }

                .case-study-card:hover {
                    transform: translateY(-4px);
                }

                .btn {
                    display: inline-flex;
                    align-items: center;
                    gap: 0.5rem;
                    padding: 1rem 2rem;
                    border-radius: 0.75rem;
                    font-weight: 600;
                    text-decoration: none;
                    transition: all 0.3s ease;
                    border: none;
                    cursor: pointer;
                }

                .btn-primary {
                    background: linear-gradient(135deg, #f97316, #ea580c);
                    color: white;
                }

                .btn-primary:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 8px 25px rgba(249, 115, 22, 0.3);
                }

                .btn-secondary {
                    background: white;
                    color: #374151;
                    border: 2px solid #e5e7eb;
                }

                .btn-secondary:hover {
                    background: #f9fafb;
                    transform: translateY(-2px);
                }
            `}</style>
        </div>
    );
};

export default AdvancedAnalytics;