import React from 'react';
import { ArrowRight, TrendingUp, Users, DollarSign, Clock, Star, Award, Target, CheckCircle, Lightbulb, BarChart, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import './CaseStudies.css';

const CaseStudies = () => {
    const caseStudies = [
        {
            id: "education-remote-learning",
            category: "Education",
            title: "Revolutionizing Remote Learning",
            company: "EduTech Global",
            description: "How we implemented AI-driven personalization for a leading online education platform, transforming student engagement and learning outcomes.",
            challenge: "Low student engagement and high dropout rates in online courses",
            solution: "AI-powered personalized learning paths and intelligent tutoring system",
            results: [
                { metric: "40%", label: "Increase in Engagement" },
                { metric: "65%", label: "Reduction in Dropouts" },
                { metric: "85%", label: "Student Satisfaction" }
            ],
            gradient: "from-blue-400 to-cyan-500",
            color: "blue",
            timeline: "6 months",
            industry: "EdTech"
        },
        {
            id: "finance-fraud-detection",
            category: "Finance",
            title: "Fraud Detection at Scale",
            company: "SecureBank Corp",
            description: "Deploying a real-time anomaly detection system that prevented millions in fraudulent transactions while maintaining seamless user experience.",
            challenge: "Rising fraud rates and false positives affecting customer experience",
            solution: "Machine learning-based real-time fraud detection with behavioral analysis",
            results: [
                { metric: "$2M+", label: "Fraud Prevented" },
                { metric: "99.8%", label: "Detection Accuracy" },
                { metric: "75%", label: "Reduced False Positives" }
            ],
            gradient: "from-green-400 to-emerald-500",
            color: "green",
            timeline: "4 months",
            industry: "FinTech"
        },
        {
            id: "healthcare-drug-discovery",
            category: "Healthcare",
            title: "Accelerating Drug Discovery",
            company: "MedInnovate Labs",
            description: "Using AI to identify potential drug compounds and predict their effectiveness, significantly reducing research timelines.",
            challenge: "Traditional drug discovery taking 10+ years with high failure rates",
            solution: "AI-powered molecular analysis and predictive modeling for drug efficacy",
            results: [
                { metric: "60%", label: "Faster Discovery" },
                { metric: "3x", label: "More Candidates" },
                { metric: "$50M", label: "Cost Savings" }
            ],
            gradient: "from-purple-400 to-pink-500",
            color: "purple",
            timeline: "8 months",
            industry: "Pharma"
        },
        {
            id: "manufacturing-predictive-maintenance",
            category: "Manufacturing",
            title: "Predictive Maintenance Revolution",
            company: "AutoManufacture Inc",
            description: "Implementing IoT sensors and AI analytics to predict equipment failures before they occur, minimizing downtime.",
            challenge: "Unexpected equipment failures causing production delays and costs",
            solution: "IoT-enabled predictive maintenance with machine learning algorithms",
            results: [
                { metric: "80%", label: "Reduced Downtime" },
                { metric: "$5M", label: "Annual Savings" },
                { metric: "95%", label: "Prediction Accuracy" }
            ],
            gradient: "from-orange-400 to-red-500",
            color: "orange",
            timeline: "5 months",
            industry: "Manufacturing"
        },
        {
            id: "retail-personalized-shopping",
            category: "Retail",
            title: "Personalized Shopping Experience",
            company: "RetailMax Chain",
            description: "Creating AI-driven recommendation engines and inventory optimization to enhance customer experience and reduce waste.",
            challenge: "Low conversion rates and excess inventory leading to losses",
            solution: "Personalized recommendation system with demand forecasting",
            results: [
                { metric: "35%", label: "Sales Increase" },
                { metric: "50%", label: "Inventory Optimization" },
                { metric: "90%", label: "Customer Satisfaction" }
            ],
            gradient: "from-indigo-400 to-purple-500",
            color: "indigo",
            timeline: "7 months",
            industry: "E-commerce"
        },
        {
            id: "government-smart-city",
            category: "Government",
            title: "Smart City Infrastructure",
            company: "Metro City Council",
            description: "Optimizing traffic flow and resource allocation using AI-powered analytics and real-time data processing.",
            challenge: "Traffic congestion and inefficient resource allocation",
            solution: "AI-powered traffic management and resource optimization system",
            results: [
                { metric: "30%", label: "Traffic Reduction" },
                { metric: "40%", label: "Energy Savings" },
                { metric: "25%", label: "Response Time Improvement" }
            ],
            gradient: "from-teal-400 to-blue-500",
            color: "teal",
            timeline: "12 months",
            industry: "Public Sector"
        }
    ];

    const colorClasses = {
        blue: { text: "text-blue-500", bg: "bg-blue-50" },
        green: { text: "text-green-500", bg: "bg-green-50" },
        purple: { text: "text-purple-500", bg: "bg-purple-50" },
        orange: { text: "text-orange-500", bg: "bg-orange-50" },
        indigo: { text: "text-indigo-500", bg: "bg-indigo-50" },
        teal: { text: "text-teal-500", bg: "bg-teal-50" }
    };

    return (
        <div className="case-studies-page pt-24">
            {/* Hero Section */}
            <section className="case-studies-hero">
                <div className="container mx-auto px-6 text-center">
                    <div className="case-studies-hero-content fade-in">
                        <div className="case-studies-badge">
                            SUCCESS STORIES
                        </div>
                        <h1 className="case-studies-title">
                            Real Results from <span className="case-studies-title-highlight">Real Clients</span>
                        </h1>
                        <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-12 leading-relaxed">
                            Discover how organizations across industries have transformed their operations and achieved remarkable results 
                            with our cutting-edge AI solutions. From startups to Fortune 500 companies, see the measurable impact we deliver.
                        </p>
                        <div className="flex flex-col md:flex-row gap-4 justify-center">
                            <Link to="/contact" className="btn btn-primary px-8 py-4 text-lg">
                                Start Your Success Story
                            </Link>
                            <Link to="/services" className="btn bg-white text-gray-800 shadow-lg hover:bg-gray-50 px-8 py-4 text-lg">
                                Explore Our Services
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Case Studies Grid */}
            <section className="case-studies-section">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-6 text-black">Client Success Stories</h2>
                        <p className="text-gray-600 max-w-3xl mx-auto text-lg">
                            From concept to implementation, see how we've helped organizations across diverse industries 
                            achieve breakthrough results with AI-powered solutions.
                        </p>
                    </div>
                    
                    <div className="case-studies-grid">
                        {caseStudies.map((study, index) => (
                            <div key={index} className={`case-study-card ${study.color} fade-in`} style={{ animationDelay: `${index * 0.1}s` }}>
                                <div className="case-study-header">
                                    <div className="case-study-visual">
                                        <div className="case-study-icon">
                                            {study.color === 'blue' && <Lightbulb className="w-8 h-8" />}
                                            {study.color === 'green' && <Target className="w-8 h-8" />}
                                            {study.color === 'purple' && <Award className="w-8 h-8" />}
                                            {study.color === 'orange' && <Zap className="w-8 h-8" />}
                                            {study.color === 'indigo' && <BarChart className="w-8 h-8" />}
                                            {study.color === 'teal' && <TrendingUp className="w-8 h-8" />}
                                        </div>
                                        <div className="case-study-glow"></div>
                                    </div>
                                    <div className="case-study-meta">
                                        <div className="case-study-category">{study.category}</div>
                                        <div className="case-study-timeline">
                                            <Clock className="w-4 h-4" />
                                            <span>{study.timeline}</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="case-study-content">
                                    <h3 className="case-study-title">{study.title}</h3>
                                    <p className="case-study-company">{study.company}</p>
                                    <p className="case-study-description">{study.description}</p>

                                    <div className="case-study-details">
                                        <div className="case-study-detail">
                                            <h4>Challenge</h4>
                                            <p>{study.challenge}</p>
                                        </div>
                                        <div className="case-study-detail">
                                            <h4>Solution</h4>
                                            <p>{study.solution}</p>
                                        </div>
                                    </div>

                                    <div className="case-study-results">
                                        <h4>Key Results</h4>
                                        <div className="results-grid">
                                            {study.results.map((result, idx) => (
                                                <div key={idx} className="result-item">
                                                    <div className="result-metric">{result.metric}</div>
                                                    <div className="result-label">{result.label}</div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <Link to={`/case-studies/${study.id}`} className="case-study-link">
                                        Read Full Case Study <ArrowRight className="w-5 h-5" />
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="stats-section">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-6 text-black">Our Impact by the Numbers</h2>
                        <p className="text-gray-600 max-w-3xl mx-auto text-lg">
                            Measurable results across all our client engagements, demonstrating consistent value delivery 
                            and transformational outcomes across diverse industries and use cases.
                        </p>
                    </div>
                    
                    <div className="stats-grid">
                        {[
                            { 
                                icon: <TrendingUp className="w-10 h-10" />, 
                                metric: "500+", 
                                label: "Projects Completed",
                                description: "Successfully delivered AI solutions",
                                color: "blue" 
                            },
                            { 
                                icon: <Users className="w-10 h-10" />, 
                                metric: "200+", 
                                label: "Happy Clients",
                                description: "Organizations transformed globally",
                                color: "green" 
                            },
                            { 
                                icon: <DollarSign className="w-10 h-10" />, 
                                metric: "$100M+", 
                                label: "Value Generated",
                                description: "Measurable business impact delivered",
                                color: "orange" 
                            },
                            { 
                                icon: <Star className="w-10 h-10" />, 
                                metric: "98%", 
                                label: "Success Rate",
                                description: "Client satisfaction and project success",
                                color: "purple" 
                            }
                        ].map((item, index) => (
                            <div key={index} className={`stat-card ${item.color} slide-up`} style={{ animationDelay: `${index * 0.1}s` }}>
                                <div className="stat-visual">
                                    <div className="stat-icon">
                                        {item.icon}
                                    </div>
                                    <div className="stat-glow"></div>
                                </div>
                                <div className="stat-content">
                                    <div className="stat-metric">{item.metric}</div>
                                    <div className="stat-label">{item.label}</div>
                                    <div className="stat-description">{item.description}</div>
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
                            Ready to Write Your Success Story?
                        </h2>
                        <p className="text-xl text-orange-100 mb-8 max-w-3xl mx-auto leading-relaxed">
                            Join the growing list of organizations that have transformed their business with our AI solutions. 
                            Let's discuss how we can help you achieve similar breakthrough results.
                        </p>
                        <div className="flex flex-col md:flex-row gap-4 justify-center">
                            <Link to="/contact" className="btn bg-white text-orange-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
                                Get Started Today
                            </Link>
                            <Link to="/services" className="btn border-2 border-white text-white hover:bg-white hover:text-orange-600 px-8 py-4 text-lg font-semibold">
                                Explore Our Services
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CaseStudies;