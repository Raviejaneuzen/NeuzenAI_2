import { Lightbulb, Target, Users, TrendingUp, CheckCircle, ArrowRight, Star, Building2, Zap, Shield } from 'lucide-react';
import Link from 'next/link';

const AIStrategy = () => {
    const services = [
        {
            icon: <Target className="w-8 h-8" />,
            title: "AI Readiness Assessment",
            description: "Comprehensive evaluation of your organization's AI readiness, including data maturity, infrastructure, and team capabilities."
        },
        {
            icon: <TrendingUp className="w-8 h-8" />,
            title: "Strategic Roadmap Development",
            description: "Custom AI transformation roadmap aligned with your business objectives and industry requirements."
        },
        {
            icon: <Users className="w-8 h-8" />,
            title: "Change Management",
            description: "Support your team through AI adoption with training, communication, and organizational change strategies."
        },
        {
            icon: <Shield className="w-8 h-8" />,
            title: "Risk Assessment & Governance",
            description: "Identify potential risks and establish governance frameworks for responsible AI implementation."
        }
    ];

    const phases = [
        {
            phase: "Phase 1",
            title: "Current State Analysis",
            duration: "2-4 weeks",
            activities: [
                "Data infrastructure assessment",
                "Technology stack evaluation",
                "Team capability analysis",
                "Process mapping and documentation"
            ]
        },
        {
            phase: "Phase 2",
            title: "Strategy Development",
            duration: "3-6 weeks",
            activities: [
                "AI opportunity identification",
                "Use case prioritization",
                "ROI analysis and projections",
                "Technology recommendations"
            ]
        },
        {
            phase: "Phase 3",
            title: "Implementation Planning",
            duration: "2-4 weeks",
            activities: [
                "Detailed project roadmap",
                "Resource allocation planning",
                "Risk mitigation strategies",
                "Success metrics definition"
            ]
        },
        {
            phase: "Phase 4",
            title: "Execution Support",
            duration: "Ongoing",
            activities: [
                "Implementation guidance",
                "Progress monitoring",
                "Strategy refinement",
                "Continuous optimization"
            ]
        }
    ];

    const benefits = [
        "Reduce AI implementation risks by 70%",
        "Accelerate time-to-value by 50%",
        "Ensure alignment with business objectives",
        "Maximize ROI on AI investments",
        "Build sustainable AI capabilities",
        "Create competitive advantage through AI"
    ];

    const frameworks = [
        {
            name: "AI Maturity Model",
            description: "Assess and advance your organization's AI capabilities across five maturity levels."
        },
        {
            name: "Data Strategy Framework",
            description: "Establish robust data governance and management practices for AI success."
        },
        {
            name: "Ethics & Governance",
            description: "Implement responsible AI practices with comprehensive governance frameworks."
        },
        {
            name: "ROI Measurement",
            description: "Define and track key metrics to measure AI initiative success and business impact."
        }
    ];

    return (
        <div className="service-detail-page pt-24">
            {/* Hero Section */}
            <section className="service-hero py-20">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="service-badge">
                            <Lightbulb className="w-4 h-4" />
                            AI STRATEGY & CONSULTING
                        </div>
                        <h1 className="service-hero-title">
                            Navigate Your <br />
                            <span className="text-green-500">AI Transformation Journey</span>
                        </h1>
                        <p className="service-hero-description">
                            Expert guidance to develop comprehensive AI strategies that align with your business goals, 
                            minimize risks, and maximize the value of your AI investments.
                        </p>
                        <div className="flex flex-col md:flex-row gap-4 justify-center mt-8">
                            <Link href="/contact" className="btn btn-primary">
                                Start Your Strategy
                            </Link>
                            <Link href="/case-studies" className="btn btn-secondary">
                                View Success Stories
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4">Strategic Consulting Services</h2>
                        <p className="text-gray-600 max-w-3xl mx-auto">
                            Our comprehensive consulting approach ensures your AI initiatives are strategically 
                            aligned and positioned for long-term success.
                        </p>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-8">
                        {services.map((service, index) => (
                            <div key={index} className="service-card">
                                <div className="service-icon">
                                    {service.icon}
                                </div>
                                <h3 className="service-title">{service.title}</h3>
                                <p className="service-description">{service.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process Phases */}
            <section className="py-20">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4">Our Strategic Process</h2>
                        <p className="text-gray-600 max-w-3xl mx-auto">
                            A proven methodology that takes you from AI vision to successful implementation 
                            with clear milestones and measurable outcomes.
                        </p>
                    </div>
                    
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {phases.map((phase, index) => (
                            <div key={index} className="phase-card">
                                <div className="phase-header">
                                    <div className="phase-number">{index + 1}</div>
                                    <div>
                                        <div className="phase-label">{phase.phase}</div>
                                        <h3 className="phase-title">{phase.title}</h3>
                                        <div className="phase-duration">{phase.duration}</div>
                                    </div>
                                </div>
                                <ul className="phase-activities">
                                    {phase.activities.map((activity, idx) => (
                                        <li key={idx} className="activity-item">
                                            <CheckCircle className="w-4 h-4 text-green-500" />
                                            <span>{activity}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Benefits & Frameworks */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Benefits */}
                        <div>
                            <h2 className="text-3xl font-bold mb-6">Why Strategic Planning Matters</h2>
                            <p className="text-gray-600 mb-8 text-lg">
                                Organizations with well-defined AI strategies are 3x more likely to achieve 
                                their AI objectives and realize significant business value.
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

                        {/* Frameworks */}
                        <div>
                            <h2 className="text-3xl font-bold mb-6">Strategic Frameworks</h2>
                            <div className="space-y-6">
                                {frameworks.map((framework, index) => (
                                    <div key={index} className="framework-card">
                                        <h3 className="framework-title">{framework.name}</h3>
                                        <p className="framework-description">{framework.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Success Metrics */}
            <section className="py-20">
                <div className="container mx-auto px-6">
                    <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl p-12 text-white text-center">
                        <h2 className="text-4xl font-bold mb-8">Strategic Success Metrics</h2>
                        <div className="grid md:grid-cols-4 gap-8">
                            <div>
                                <div className="text-4xl font-bold mb-2">85%</div>
                                <div className="text-green-100">Strategy Success Rate</div>
                            </div>
                            <div>
                                <div className="text-4xl font-bold mb-2">3.2x</div>
                                <div className="text-green-100">Average ROI Improvement</div>
                            </div>
                            <div>
                                <div className="text-4xl font-bold mb-2">50%</div>
                                <div className="text-green-100">Faster Implementation</div>
                            </div>
                            <div>
                                <div className="text-4xl font-bold mb-2">100+</div>
                                <div className="text-green-100">Strategies Delivered</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-r from-green-500 to-emerald-600">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-4xl font-bold text-white mb-6">
                        Ready to Develop Your AI Strategy?
                    </h2>
                    <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
                        Let's work together to create a comprehensive AI strategy that aligns with your 
                        business objectives and sets you up for long-term success.
                    </p>
                    <Link href="/contact" className="btn bg-white text-green-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
                        Schedule Strategy Session
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
                    background: linear-gradient(135deg, rgba(34, 197, 94, 0.1) 0%, rgba(34, 197, 94, 0.05) 100%);
                    color: #22c55e;
                    border-radius: 50px;
                    font-weight: 700;
                    font-size: 14px;
                    letter-spacing: 1px;
                    margin-bottom: 32px;
                    border: 2px solid rgba(34, 197, 94, 0.2);
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

                .service-card {
                    background: white;
                    padding: 2rem;
                    border-radius: 1rem;
                    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
                    transition: transform 0.3s ease;
                }

                .service-card:hover {
                    transform: translateY(-4px);
                }

                .service-icon {
                    width: 80px;
                    height: 80px;
                    background: linear-gradient(135deg, #22c55e, #16a34a);
                    border-radius: 1rem;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: white;
                    margin-bottom: 1.5rem;
                }

                .service-title {
                    font-size: 1.25rem;
                    font-weight: 700;
                    margin-bottom: 0.75rem;
                    color: #000;
                }

                .service-description {
                    color: #6b7280;
                    line-height: 1.6;
                }

                .phase-card {
                    background: white;
                    padding: 1.5rem;
                    border-radius: 1rem;
                    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
                    transition: transform 0.3s ease;
                }

                .phase-card:hover {
                    transform: translateY(-4px);
                }

                .phase-header {
                    display: flex;
                    align-items: flex-start;
                    gap: 1rem;
                    margin-bottom: 1.5rem;
                }

                .phase-number {
                    width: 40px;
                    height: 40px;
                    background: linear-gradient(135deg, #22c55e, #16a34a);
                    color: white;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-weight: 700;
                    flex-shrink: 0;
                }

                .phase-label {
                    font-size: 0.875rem;
                    color: #22c55e;
                    font-weight: 600;
                }

                .phase-title {
                    font-size: 1.125rem;
                    font-weight: 700;
                    color: #000;
                    margin: 0.25rem 0;
                }

                .phase-duration {
                    font-size: 0.875rem;
                    color: #6b7280;
                }

                .phase-activities {
                    list-style: none;
                    padding: 0;
                    margin: 0;
                    space-y: 0.5rem;
                }

                .activity-item {
                    display: flex;
                    align-items: flex-start;
                    gap: 0.5rem;
                    margin-bottom: 0.5rem;
                    font-size: 0.875rem;
                    color: #374151;
                }

                .framework-card {
                    background: white;
                    padding: 1.5rem;
                    border-radius: 0.75rem;
                    border-left: 4px solid #22c55e;
                    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
                }

                .framework-title {
                    font-size: 1.125rem;
                    font-weight: 700;
                    color: #000;
                    margin-bottom: 0.5rem;
                }

                .framework-description {
                    color: #6b7280;
                    line-height: 1.6;
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
                    background: linear-gradient(135deg, #22c55e, #16a34a);
                    color: white;
                }

                .btn-primary:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 8px 25px rgba(34, 197, 94, 0.3);
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

export default AIStrategy;