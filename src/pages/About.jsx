import React from 'react';
import { Target, Users, Globe, Award, Brain, Heart, Shield, Zap, ArrowRight, MapPin, Mail, Phone, Building, Calendar, CheckCircle, ThumbsUp, Rocket } from 'lucide-react';
import { Link } from 'react-router-dom';
import './About.css';
import NeuralBackground from '../components/NeuralBackground';
import GravityBackground from '../components/GravityBackground';

const About = () => {
    const values = [
        {
            icon: <Brain className="w-8 h-8" />,
            title: "Innovation First",
            description: "We constantly push the boundaries of what's possible with AI, investing heavily in research and development to deliver cutting-edge solutions that transform businesses.",
            color: "orange"
        },
        {
            icon: <Heart className="w-8 h-8" />,
            title: "Human-Centered AI",
            description: "Technology should enhance human capabilities, not replace them. We design AI that empowers people and creates meaningful value for organizations and society.",
            color: "green"
        },
        {
            icon: <Shield className="w-8 h-8" />,
            title: "Ethical & Responsible",
            description: "We're committed to developing AI that is transparent, fair, and accountable. Our solutions prioritize privacy, security, and ethical considerations.",
            color: "blue"
        },
        {
            icon: <Zap className="w-8 h-8" />,
            title: "Excellence in Delivery",
            description: "We maintain the highest standards in everything we do, from code quality to client service, ensuring exceptional results and long-term partnerships.",
            color: "purple"
        }
    ];

    const offices = [
        {
            city: "United States",
            location: "Dallas, Texas",
            address: "Dallas Innovation Hub, TX, USA",
            type: "Global Headquarters",
            established: "2020",
            team: "85+ Engineers & Data Scientists",
            focus: "AI Research, Product Development, Global Operations",
            bgImage: "/dallas.png",
            contact: {
                email: "contact@neuzenai.com",
                phone: "+1 972 372 9983"
            }
        },
        {
            city: "Hyderabad",
            location: "T-Hub, HITEC City",
            address: "T-Hub, Raidurg, Hyderabad, Telangana 500081, India",
            type: "Innovation Hub",
            established: "2021",
            team: "60+ AI Specialists & Engineers",
            focus: "AI Development, Client Solutions, Regional Operations",
            bgImage: "/thub.png",
            contact: {
                email: "contact@neuzenai.com",
                phone: "+91 88852 57422"
            }
        }
    ];

    return (
        <div className="about-page pt-24">
            <NeuralBackground />

            {/* Hero Section */}
            <section className="about-hero">
                <GravityBackground />
                <div className="container mx-auto px-6 text-center">
                    <div className="about-hero-content fade-in">
                        <div className="about-badge">
                            ABOUT NEUZENAI
                        </div>
                        <h1 className="about-title">
                            Building the Future of <span className="about-title-highlight">Artificial Intelligence</span>
                        </h1>
                        <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-12 leading-relaxed">
                            We are a team of visionaries, engineers, and data scientists dedicated to democratizing AI for businesses worldwide,
                            making advanced technology accessible, ethical, and impactful across every industry.
                        </p>
                        <Link to="/careers" className="btn btn-primary px-8 py-4 text-lg">
                            Join Our Team
                        </Link>
                    </div>
                </div>
            </section>



            {/* Who We Are & Our Mission Sections */}
            <section className="about-details-section pt-0">
                <div className="container-custom-wide mx-auto px-6">
                    {/* Who We Are Section */}
                    <div className="who-we-are-centered fade-in">
                        <div className="about-detail-icon-box orange mx-auto">
                            <Users className="w-8 h-8" />
                        </div>
                        <h2 className="who-we-are-title">Who We Are</h2>
                        <p className="who-we-are-description">
                            NeuzenAI is a leader in the realm of Data, Analytics, and AI, dedicated to transforming the way businesses interact with data. We specialize in empowering companies to harness the power of data-driven insights, enabling smarter decision-making processes. Our team excels in revealing hidden patterns and critical insights, ensuring that operations are not just efficient but also intelligently automated. With our innovative Analytics & AI digital accelerators, we open doors to new business opportunities, helping our clients explore uncharted territories and possibilities in their respective industries. we don’t just deliver solutions; we redefine the future of business intelligence.
                        </p>
                    </div>

                    {/* Our Mission Section */}
                    <div className="mission-highlight-row fade-in">
                        <div className="mission-content-left">
                            <h2 className="mission-title">Our Mission</h2>
                            <p className="mission-main-description">
                                To bridge the gap between complex AI technology and practical business applications.
                                We believe that AI should be accessible, ethical, and transformative for every organization,
                                regardless of size or industry.
                            </p>

                            <div className="mission-points-list">
                                <div className="mission-point-item">
                                    <div className="mission-point-icon-box orange-light">
                                        <Target className="w-5 h-5 text-orange-600" />
                                    </div>
                                    <div className="mission-point-text">
                                        <h3 className="mission-point-title">Innovation at Scale</h3>
                                        <p className="mission-point-desc">
                                            Constantly pushing the boundaries of what's possible with neural networks,
                                            machine learning, and emerging AI technologies.
                                        </p>
                                    </div>
                                </div>

                                <div className="mission-point-item">
                                    <div className="mission-point-icon-box green-light">
                                        <Users className="w-5 h-5 text-emerald-600" />
                                    </div>
                                    <div className="mission-point-text">
                                        <h3 className="mission-point-title">Partnership Focused</h3>
                                        <p className="mission-point-desc">
                                            Your success is our success. We build long-term partnerships,
                                            providing ongoing support and continuous innovation.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mission-visual-right">
                            <div className="mission-premium-card">
                                <div className="brain-gradient-icon">
                                    <Brain className="w-10 h-10 text-white" />
                                </div>
                                <h3 className="card-subtitle">AI for Everyone</h3>
                                <p className="card-description">
                                    Making advanced AI accessible to all businesses, from startups to enterprises
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Image Sections: Expertise, Commitment, Innovation */}
            <section className="about-details-section">
                <div className="container mx-auto px-6">
                    {/* Expertise Section */}
                    <div className="about-detail-row fade-in">
                        <div className="about-detail-text">
                            <div className="about-detail-icon-box orange">
                                <Brain className="w-8 h-8" />
                            </div>
                            <h2 className="about-detail-title">Expertise</h2>
                            <p className="about-detail-description">
                                Our expertise spans not only in AI, Deep Learning but also other emerging technologies.
                                We pride ourselves on our ability to stay ahead of the curve, constantly innovating
                                and adapting to the ever-changing landscape of AI technology.
                            </p>
                        </div>
                        <div className="about-detail-image">
                            <img src="/expertise.jpg" alt="Our Expertise" className="rounded-2xl shadow-2xl" />
                        </div>
                    </div>

                    {/* Commitment Section */}
                    <div className="about-detail-row reverse fade-in">
                        <div className="about-detail-text">
                            <div className="about-detail-icon-box blue">
                                <ThumbsUp className="w-8 h-8" />
                            </div>
                            <h2 className="about-detail-title">Commitment</h2>
                            <p className="about-detail-description">
                                Your success is our priority. We are committed to working closely with you to understand your challenges and goals,
                                ensuring our solutions align perfectly with your business objectives. From initial consultation to deployment and beyond,
                                we offer comprehensive support, ensuring a seamless integration of AI into your business processes.
                            </p>
                        </div>
                        <div className="about-detail-image">
                            <img src="/commitment.jpg" alt="Our Commitment" className="rounded-2xl shadow-2xl" />
                        </div>
                    </div>

                    {/* Innovation Section */}
                    <div className="about-detail-row fade-in">
                        <div className="about-detail-text">
                            <div className="about-detail-icon-box green">
                                <Rocket className="w-8 h-8" />
                            </div>
                            <h2 className="about-detail-title">Innovation</h2>
                            <p className="about-detail-description">
                                Innovation is our essence, driving us to pioneer advanced AI and analytics solutions.
                                Our expert team blends cutting-edge research with collaborative client insights,
                                shaping future-ready, practical technologies that redefine business intelligence
                                and operational efficiency.
                            </p>
                        </div>
                        <div className="about-detail-image">
                            <img src="/innovation.webp" alt="Our Innovation" className="rounded-2xl shadow-2xl" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats */}
            <section className="stats-section py-20">
                <div className="container mx-auto px-6">
                    <div className="stats-grid">
                        {[
                            { label: "Founded", value: "2020", desc: "Years of Innovation" },
                            { label: "Global Team", value: "145+", desc: "AI Experts" },
                            { label: "Global Offices", value: "2", desc: "Continents" },
                            { label: "AI Solutions", value: "500+", desc: "Deployed Successfully" }
                        ].map((stat, index) => (
                            <div key={index} className="stat-item slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                                <div className="stat-value">{stat.value}</div>
                                <div className="stat-label">{stat.label}</div>
                                <div className="stat-desc">{stat.desc}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Global Presence Section (moved to last) */}
            <section className="offices-section">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="offices-section-title">Our Global Presence</h2>
                        <p className="text-gray-600 max-w-3xl mx-auto text-lg">
                            With strategic offices in the United States and India, we combine global expertise with local insights
                            to deliver world-class AI solutions across diverse markets and time zones.
                        </p>
                    </div>
                    <div className="offices-grid">
                        {offices.map((office, index) => (
                            <div key={index} className="office-card fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
                                {/* Background Image */}
                                {office.bgImage && (
                                    <div
                                        className="office-img-bg"

                                    ></div>
                                )}
                                <div className="office-card-overlay"></div>
                                <div className="office-content">
                                    <div className="office-header">
                                        <div className="office-icon">
                                            <Building className="w-8 h-8" />
                                        </div>
                                        <div className="office-info">
                                            <h3>{office.city}</h3>
                                            <div className="office-type">{office.type}</div>
                                        </div>
                                    </div>

                                    <div className="office-details">
                                        <div className="office-detail">
                                            <MapPin className="w-5 h-5 office-detail-icon" />
                                            <div>
                                                <div className="font-semibold text-black">{office.location}</div>
                                                <div className="text-sm text-gray-600">{office.address}</div>
                                            </div>
                                        </div>

                                        <div className="office-detail">
                                            <Calendar className="w-5 h-5 office-detail-icon" />
                                            <div>
                                                <div className="font-semibold text-black">Established {office.established}</div>
                                                <div className="text-sm text-gray-600">{office.team}</div>
                                            </div>
                                        </div>

                                        <div className="office-detail">
                                            <CheckCircle className="w-5 h-5 office-detail-icon" />
                                            <div>
                                                <div className="font-semibold text-black">Focus Areas</div>
                                                <div className="text-sm text-gray-600">{office.focus}</div>
                                            </div>
                                        </div>

                                        <div className="office-detail">
                                            <Mail className="w-5 h-5 office-detail-icon" />
                                            <div>
                                                <div className="font-semibold text-black">Contact</div>
                                                <div className="text-sm text-gray-600">
                                                    <div>{office.contact.email}</div>
                                                    <div>{office.contact.phone}</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
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
                        <h2 className="text-3xl font-bold text-white mb-2">
                            Ready to Shape the Future of AI?
                        </h2>
                        <p className="text-lg text-orange-100 mb-4 max-w-3xl mx-auto leading-relaxed">
                            Join our team of innovators or partner with us to transform your business with cutting-edge AI solutions.
                            Together, we can build the future of artificial intelligence.
                        </p>
                        <div className="flex flex-col md:flex-row gap-4 justify-center">
                            <Link to="/contact" className="btn bg-white text-orange-600 hover:bg-gray-100 px-6 py-3 text-lg font-semibold">
                                Contact with us
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;