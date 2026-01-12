import { Settings, Zap, Cpu, BarChart, CheckCircle, ArrowRight, Clock, DollarSign, TrendingUp, Users } from 'lucide-react';
import Link from 'next/link';

const ProcessAutomation = () => {
    const automationTypes = [
        {
            icon: <Cpu className="w-8 h-8" />,
            title: "Robotic Process Automation (RPA)",
            description: "Automate repetitive, rule-based tasks to free up your team for higher-value work."
        },
        {
            icon: <BarChart className="w-8 h-8" />,
            title: "Intelligent Document Processing",
            description: "Extract and process information from documents using AI-powered OCR and NLP."
        },
        {
            icon: <Zap className="w-8 h-8" />,
            title: "Workflow Optimization",
            description: "Streamline complex business processes with intelligent routing and decision-making."
        },
        {
            icon: <Settings className="w-8 h-8" />,
            title: "System Integration",
            description: "Connect disparate systems and automate data flow across your organization."
        }
    ];

    const processes = [
        {
            category: "Finance & Accounting",
            icon: "💰",
            processes: [
                "Invoice processing and approval",
                "Expense report management",
                "Financial reconciliation",
                "Compliance reporting",
                "Accounts payable/receivable"
            ]
        },
        {
            category: "Human Resources",
            icon: "👥",
            processes: [
                "Employee onboarding",
                "Payroll processing",
                "Benefits administration",
                "Performance reviews",
                "Recruitment screening"
            ]
        },
        {
            category: "Customer Service",
            icon: "🎧",
            processes: [
                "Ticket routing and escalation",
                "Customer data updates",
                "Response automation",
                "SLA monitoring",
                "Feedback collection"
            ]
        },
        {
            category: "Operations",
            icon: "⚙️",
            processes: [
                "Inventory management",
                "Order processing",
                "Quality control checks",
                "Scheduling optimization",
                "Compliance monitoring"
            ]
        }
    ];

    const benefits = [
        {
            icon: <Clock className="w-8 h-8" />,
            title: "80% Time Savings",
            description: "Reduce manual processing time by automating repetitive tasks"
        },
        {
            icon: <DollarSign className="w-8 h-8" />,
            title: "40% Cost Reduction",
            description: "Lower operational costs through efficient automation"
        },
        {
            icon: <TrendingUp className="w-8 h-8" />,
            title: "99.5% Accuracy",
            description: "Eliminate human errors with precise automated processes"
        },
        {
            icon: <Users className="w-8 h-8" />,
            title: "Employee Satisfaction",
            description: "Free staff from mundane tasks to focus on strategic work"
        }
    ];

    const implementation = [
        {
            step: "1",
            title: "Process Discovery",
            description: "Identify and analyze current processes to find automation opportunities.",
            duration: "1-2 weeks"
        },
        {
            step: "2",
            title: "Solution Design",
            description: "Design custom automation workflows tailored to your specific needs.",
            duration: "2-3 weeks"
        },
        {
            step: "3",
            title: "Development & Testing",
            description: "Build and thoroughly test automation solutions before deployment.",
            duration: "3-4 weeks"
        },
        {
            step: "4",
            title: "Deployment & Training",
            description: "Deploy solutions and train your team on new automated processes.",
            duration: "1-2 weeks"
        }
    ];

    return (
        <div className="service-detail-page pt-24">
            {/* Hero Section */}
            <section className="service-hero py-20">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="service-badge">
                            <Settings className="w-4 h-4" />
                            INTELLIGENT PROCESS AUTOMATION
                        </div>
                        <h1 className="service-hero-title">
                            Streamline Operations with <br />
                            <span className="text-purple-500">Smart Automation</span>
                        </h1>
                        <p className="service-hero-description">
                            Transform your business processes with intelligent automation solutions that learn, 
                            adapt, and optimize operations while reducing costs and improving efficiency.
                        </p>
                        <div className="flex flex-col md:flex-row gap-4 justify-center mt-8">
                            <Link href="/contact" className="btn btn-primary">
                                Automate Your Processes
                            </Link>
                            <Link href="/case-studies" className="btn btn-secondary">
                                View Automation Cases
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Automation Types */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4">Automation Solutions</h2>
                        <p className="text-gray-600 max-w-3xl mx-auto">
                            We offer comprehensive automation solutions that transform how your 
                            organization handles routine tasks and complex workflows.
                        </p>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-8">
                        {automationTypes.map((type, index) => (
                            <div key={index} className="automation-card">
                                <div className="automation-icon">
                                    {type.icon}
                                </div>
                                <h3 className="automation-title">{type.title}</h3>
                                <p className="automation-description">{type.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process Categories */}
            <section className="py-20">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4">Processes We Automate</h2>
                        <p className="text-gray-600 max-w-3xl mx-auto">
                            From finance to operations, we automate critical business processes 
                            across all departments and functions.
                        </p>
                    </div>
                    
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {processes.map((category, index) => (
                            <div key={index} className="process-category">
                                <div className="category-header">
                                    <div className="category-icon">{category.icon}</div>
                                    <h3 className="category-title">{category.category}</h3>
                                </div>
                                <ul className="process-list">
                                    {category.processes.map((process, idx) => (
                                        <li key={idx} className="process-item">
                                            <CheckCircle className="w-4 h-4 text-purple-500" />
                                            <span>{process}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4">Automation Benefits</h2>
                        <p className="text-gray-600 max-w-3xl mx-auto">
                            Experience measurable improvements in efficiency, accuracy, and cost savings 
                            through intelligent process automation.
                        </p>
                    </div>
                    
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {benefits.map((benefit, index) => (
                            <div key={index} className="benefit-card">
                                <div className="benefit-icon">
                                    {benefit.icon}
                                </div>
                                <h3 className="benefit-title">{benefit.title}</h3>
                                <p className="benefit-description">{benefit.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Implementation Process */}
            <section className="py-20">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4">Implementation Process</h2>
                        <p className="text-gray-600 max-w-3xl mx-auto">
                            Our proven methodology ensures smooth automation implementation with 
                            minimal disruption to your operations.
                        </p>
                    </div>
                    
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {implementation.map((step, index) => (
                            <div key={index} className="implementation-step">
                                <div className="step-number">{step.step}</div>
                                <h3 className="step-title">{step.title}</h3>
                                <p className="step-description">{step.description}</p>
                                <div className="step-duration">{step.duration}</div>
                                {index < implementation.length - 1 && (
                                    <div className="step-connector">
                                        <ArrowRight className="w-6 h-6" />
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ROI Calculator */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-6">
                    <div className="bg-gradient-to-br from-purple-500 to-indigo-600 rounded-2xl p-12 text-white text-center">
                        <h2 className="text-4xl font-bold mb-8">Automation ROI</h2>
                        <div className="grid md:grid-cols-3 gap-8 mb-8">
                            <div>
                                <div className="text-4xl font-bold mb-2">6 months</div>
                                <div className="text-purple-100">Average Payback Period</div>
                            </div>
                            <div>
                                <div className="text-4xl font-bold mb-2">300%</div>
                                <div className="text-purple-100">Average ROI in Year 1</div>
                            </div>
                            <div>
                                <div className="text-4xl font-bold mb-2">24/7</div>
                                <div className="text-purple-100">Continuous Operation</div>
                            </div>
                        </div>
                        <p className="text-xl text-purple-100 mb-8">
                            Calculate your potential savings with our automation assessment
                        </p>
                        <Link href="/contact" className="btn bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
                            Get ROI Assessment
                        </Link>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-r from-purple-500 to-indigo-600">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-4xl font-bold text-white mb-6">
                        Ready to Automate Your Processes?
                    </h2>
                    <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
                        Let's identify automation opportunities in your organization and create 
                        solutions that drive efficiency and growth.
                    </p>
                    <Link href="/contact" className="btn bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
                        Start Automation Journey
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
                    background: linear-gradient(135deg, rgba(147, 51, 234, 0.1) 0%, rgba(147, 51, 234, 0.05) 100%);
                    color: #9333ea;
                    border-radius: 50px;
                    font-weight: 700;
                    font-size: 14px;
                    letter-spacing: 1px;
                    margin-bottom: 32px;
                    border: 2px solid rgba(147, 51, 234, 0.2);
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

                .automation-card {
                    background: white;
                    padding: 2rem;
                    border-radius: 1rem;
                    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
                    transition: transform 0.3s ease;
                }

                .automation-card:hover {
                    transform: translateY(-4px);
                }

                .automation-icon {
                    width: 80px;
                    height: 80px;
                    background: linear-gradient(135deg, #9333ea, #7c3aed);
                    border-radius: 1rem;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: white;
                    margin-bottom: 1.5rem;
                }

                .automation-title {
                    font-size: 1.25rem;
                    font-weight: 700;
                    margin-bottom: 0.75rem;
                    color: #000;
                }

                .automation-description {
                    color: #6b7280;
                    line-height: 1.6;
                }

                .process-category {
                    background: white;
                    padding: 1.5rem;
                    border-radius: 1rem;
                    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
                    transition: transform 0.3s ease;
                }

                .process-category:hover {
                    transform: translateY(-4px);
                }

                .category-header {
                    text-align: center;
                    margin-bottom: 1.5rem;
                }

                .category-icon {
                    font-size: 2.5rem;
                    margin-bottom: 0.75rem;
                }

                .category-title {
                    font-size: 1.125rem;
                    font-weight: 700;
                    color: #000;
                }

                .process-list {
                    list-style: none;
                    padding: 0;
                    margin: 0;
                    space-y: 0.5rem;
                }

                .process-item {
                    display: flex;
                    align-items: flex-start;
                    gap: 0.5rem;
                    margin-bottom: 0.5rem;
                    font-size: 0.875rem;
                    color: #374151;
                }

                .benefit-card {
                    background: white;
                    padding: 2rem;
                    border-radius: 1rem;
                    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
                    text-align: center;
                    transition: transform 0.3s ease;
                }

                .benefit-card:hover {
                    transform: translateY(-4px);
                }

                .benefit-icon {
                    width: 80px;
                    height: 80px;
                    background: linear-gradient(135deg, #9333ea, #7c3aed);
                    border-radius: 1rem;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: white;
                    margin: 0 auto 1.5rem;
                }

                .benefit-title {
                    font-size: 1.25rem;
                    font-weight: 700;
                    margin-bottom: 0.75rem;
                    color: #000;
                }

                .benefit-description {
                    color: #6b7280;
                    line-height: 1.6;
                }

                .implementation-step {
                    text-align: center;
                    position: relative;
                    background: white;
                    padding: 2rem;
                    border-radius: 1rem;
                    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
                    transition: transform 0.3s ease;
                }

                .implementation-step:hover {
                    transform: translateY(-4px);
                }

                .step-number {
                    width: 60px;
                    height: 60px;
                    background: linear-gradient(135deg, #9333ea, #7c3aed);
                    color: white;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-weight: 700;
                    font-size: 1.5rem;
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
                    margin-bottom: 1rem;
                }

                .step-duration {
                    font-size: 0.875rem;
                    color: #9333ea;
                    font-weight: 600;
                }

                .step-connector {
                    position: absolute;
                    top: 50%;
                    right: -25px;
                    color: #9333ea;
                    display: none;
                }

                @media (min-width: 1024px) {
                    .step-connector {
                        display: block;
                    }
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
                    background: linear-gradient(135deg, #9333ea, #7c3aed);
                    color: white;
                }

                .btn-primary:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 8px 25px rgba(147, 51, 234, 0.3);
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

export default ProcessAutomation;