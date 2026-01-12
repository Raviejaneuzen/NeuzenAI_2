import { Brain, Cpu, Eye, MessageSquare, Target, Zap, ArrowRight, CheckCircle, Star, Users, Building2, Code } from 'lucide-react';
import Link from 'next/link';

const CustomAI = () => {
    const capabilities = [
        {
            icon: <Brain className="w-8 h-8" />,
            title: "Machine Learning Models",
            description: "Custom ML algorithms tailored to your specific business requirements and data patterns."
        },
        {
            icon: <Eye className="w-8 h-8" />,
            title: "Computer Vision",
            description: "Advanced image and video analysis for quality control, security, and automation."
        },
        {
            icon: <MessageSquare className="w-8 h-8" />,
            title: "Natural Language Processing",
            description: "Intelligent text analysis, chatbots, and language understanding systems."
        },
        {
            icon: <Target className="w-8 h-8" />,
            title: "Recommendation Systems",
            description: "Personalized recommendation engines that drive engagement and sales."
        },
        {
            icon: <Cpu className="w-8 h-8" />,
            title: "Deep Learning",
            description: "Neural networks for complex pattern recognition and decision making."
        },
        {
            icon: <Code className="w-8 h-8" />,
            title: "AI Integration",
            description: "Seamless integration of AI models into your existing systems and workflows."
        }
    ];

    const process = [
        {
            step: "01",
            title: "Discovery & Analysis",
            description: "We analyze your business needs, data, and objectives to design the perfect AI solution."
        },
        {
            step: "02",
            title: "Model Development",
            description: "Our experts develop and train custom AI models using cutting-edge techniques."
        },
        {
            step: "03",
            title: "Testing & Validation",
            description: "Rigorous testing ensures your AI solution meets performance and accuracy requirements."
        },
        {
            step: "04",
            title: "Deployment & Support",
            description: "We deploy your solution and provide ongoing support and optimization."
        }
    ];

    const industries = [
        {
            name: "Healthcare",
            icon: "🏥",
            applications: ["Medical imaging analysis", "Drug discovery", "Patient diagnosis", "Treatment optimization"]
        },
        {
            name: "Finance",
            icon: "💰",
            applications: ["Fraud detection", "Risk assessment", "Algorithmic trading", "Credit scoring"]
        },
        {
            name: "Manufacturing",
            icon: "🏭",
            applications: ["Quality control", "Predictive maintenance", "Supply chain optimization", "Process automation"]
        },
        {
            name: "Retail",
            icon: "🛒",
            applications: ["Personalization", "Inventory management", "Price optimization", "Customer analytics"]
        }
    ];

    return (
        <div className="service-detail-page pt-24">
            {/* Hero Section */}
            <section className="service-hero py-20">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="service-badge">
                            <Brain className="w-4 h-4" />
                            CUSTOM AI SOLUTIONS
                        </div>
                        <h1 className="service-hero-title">
                            Build Intelligent Systems <br />
                            <span className="text-blue-500">Tailored for Your Business</span>
                        </h1>
                        <p className="service-hero-description">
                            From computer vision to natural language processing, we develop custom AI solutions 
                            that solve your unique challenges and drive innovation across your organization.
                        </p>
                        <div className="flex flex-col md:flex-row gap-4 justify-center mt-8">
                            <Link href="/contact" className="btn btn-primary">
                                Start Your AI Project
                            </Link>
                            <Link href="/case-studies" className="btn btn-secondary">
                                View AI Solutions
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Capabilities Section */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4">AI Capabilities</h2>
                        <p className="text-gray-600 max-w-3xl mx-auto">
                            We leverage the latest AI technologies to build solutions that transform 
                            how your business operates and serves customers.
                        </p>
                    </div>
                    
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {capabilities.map((capability, index) => (
                            <div key={index} className="capability-card">
                                <div className="capability-icon">
                                    {capability.icon}
                                </div>
                                <h3 className="capability-title">{capability.title}</h3>
                                <p className="capability-description">{capability.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="py-20">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4">Our Development Process</h2>
                        <p className="text-gray-600 max-w-3xl mx-auto">
                            We follow a proven methodology to ensure your custom AI solution delivers 
                            exceptional results and integrates seamlessly with your operations.
                        </p>
                    </div>
                    
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {process.map((step, index) => (
                            <div key={index} className="process-step">
                                <div className="step-number">{step.step}</div>
                                <h3 className="step-title">{step.title}</h3>
                                <p className="step-description">{step.description}</p>
                                {index < process.length - 1 && (
                                    <div className="step-connector">
                                        <ArrowRight className="w-6 h-6" />
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Industries Section */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4">Industry Applications</h2>
                        <p className="text-gray-600 max-w-3xl mx-auto">
                            Our custom AI solutions are transforming businesses across diverse industries 
                            with tailored applications and measurable results.
                        </p>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-8">
                        {industries.map((industry, index) => (
                            <div key={index} className="industry-card">
                                <div className="industry-header">
                                    <div className="industry-icon">{industry.icon}</div>
                                    <h3 className="industry-title">{industry.name}</h3>
                                </div>
                                <div className="industry-applications">
                                    {industry.applications.map((app, idx) => (
                                        <div key={idx} className="application-item">
                                            <CheckCircle className="w-5 h-5 text-blue-500" />
                                            <span>{app}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-20">
                <div className="container mx-auto px-6">
                    <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-12 text-white text-center">
                        <h2 className="text-4xl font-bold mb-8">Proven AI Excellence</h2>
                        <div className="grid md:grid-cols-4 gap-8">
                            <div>
                                <div className="text-4xl font-bold mb-2">200+</div>
                                <div className="text-blue-100">AI Models Deployed</div>
                            </div>
                            <div>
                                <div className="text-4xl font-bold mb-2">95%</div>
                                <div className="text-blue-100">Accuracy Rate</div>
                            </div>
                            <div>
                                <div className="text-4xl font-bold mb-2">60%</div>
                                <div className="text-blue-100">Average Efficiency Gain</div>
                            </div>
                            <div>
                                <div className="text-4xl font-bold mb-2">24/7</div>
                                <div className="text-blue-100">AI Monitoring</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-r from-blue-500 to-purple-600">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-4xl font-bold text-white mb-6">
                        Ready to Build Your Custom AI Solution?
                    </h2>
                    <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                        Let's discuss your unique requirements and create an AI solution that transforms 
                        your business operations and drives competitive advantage.
                    </p>
                    <Link href="/contact" className="btn bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
                        Start Your AI Journey
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
                    background: linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(59, 130, 246, 0.05) 100%);
                    color: #3b82f6;
                    border-radius: 50px;
                    font-weight: 700;
                    font-size: 14px;
                    letter-spacing: 1px;
                    margin-bottom: 32px;
                    border: 2px solid rgba(59, 130, 246, 0.2);
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

                .capability-card {
                    background: white;
                    padding: 2rem;
                    border-radius: 1rem;
                    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
                    text-align: center;
                    transition: transform 0.3s ease;
                }

                .capability-card:hover {
                    transform: translateY(-4px);
                }

                .capability-icon {
                    width: 80px;
                    height: 80px;
                    background: linear-gradient(135deg, #3b82f6, #1d4ed8);
                    border-radius: 1rem;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: white;
                    margin: 0 auto 1.5rem;
                }

                .capability-title {
                    font-size: 1.25rem;
                    font-weight: 700;
                    margin-bottom: 0.75rem;
                    color: #000;
                }

                .capability-description {
                    color: #6b7280;
                    line-height: 1.6;
                }

                .process-step {
                    text-align: center;
                    position: relative;
                }

                .step-number {
                    width: 60px;
                    height: 60px;
                    background: linear-gradient(135deg, #3b82f6, #1d4ed8);
                    color: white;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-weight: 700;
                    font-size: 1.25rem;
                    margin: 0 auto 1.5rem;
                }

                .step-title {
                    font-size: 1.25rem;
                    font-weight: 700;
                    margin-bottom: 0.75rem;
                    color: #000;
                }

                .step-description {
                    color: #6b7280;
                    line-height: 1.6;
                }

                .step-connector {
                    position: absolute;
                    top: 30px;
                    right: -50%;
                    color: #3b82f6;
                    display: none;
                }

                @media (min-width: 1024px) {
                    .step-connector {
                        display: block;
                    }
                }

                .industry-card {
                    background: white;
                    padding: 2rem;
                    border-radius: 1rem;
                    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
                    transition: transform 0.3s ease;
                }

                .industry-card:hover {
                    transform: translateY(-4px);
                }

                .industry-header {
                    display: flex;
                    align-items: center;
                    gap: 1rem;
                    margin-bottom: 1.5rem;
                }

                .industry-icon {
                    font-size: 2rem;
                }

                .industry-title {
                    font-size: 1.5rem;
                    font-weight: 700;
                    color: #000;
                }

                .industry-applications {
                    space-y: 0.75rem;
                }

                .application-item {
                    display: flex;
                    align-items: center;
                    gap: 0.75rem;
                    margin-bottom: 0.75rem;
                    color: #374151;
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
                    background: linear-gradient(135deg, #3b82f6, #1d4ed8);
                    color: white;
                }

                .btn-primary:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 8px 25px rgba(59, 130, 246, 0.3);
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

export default CustomAI;