import React, { useState } from 'react';
import { Briefcase, MapPin, Clock, Users, Heart, Zap, Globe, ArrowRight, Star, Coffee, Laptop, Plane, Search, Filter, ChevronDown, X, Upload, Send } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Careers.css';

const Careers = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [selectedType, setSelectedType] = useState('All');
    const [selectedLocation, setSelectedLocation] = useState('All');
    const [selectedExperience, setSelectedExperience] = useState('All');
    const [selectedJob, setSelectedJob] = useState(null);
    const [showApplication, setShowApplication] = useState(false);
    const [applicationData, setApplicationData] = useState({
        name: '',
        email: '',
        phone: '',
        linkedin: '',
        coverLetter: '',
        resume: null
    });

    const jobs = [
        { 
            id: 1,
            role: "Senior Machine Learning Engineer", 
            location: "San Francisco, CA", 
            type: "Full-time", 
            category: "Engineering",
            experience: "Senior",
            description: "Lead the development of cutting-edge ML models and algorithms for our AI platform. Work with cross-functional teams to deploy scalable machine learning solutions that impact millions of users worldwide.",
            keyResponsibilities: [
                "Design and implement advanced machine learning algorithms for production systems",
                "Lead technical architecture decisions for ML infrastructure and model deployment",
                "Mentor junior engineers and conduct comprehensive code reviews",
                "Collaborate with product teams to define ML requirements and success metrics",
                "Optimize model performance, scalability, and reliability in production environments"
            ],
            experienceSkills: [
                "5+ years of hands-on machine learning experience in production environments",
                "Expert proficiency in Python, TensorFlow, PyTorch, and modern ML frameworks",
                "Experience with distributed computing, cloud platforms (AWS/GCP), and MLOps",
                "PhD in Computer Science, Machine Learning, or related field preferred",
                "Strong understanding of deep learning architectures and optimization techniques"
            ],
            salary: "$180k - $250k"
        },
        { 
            id: 2,
            role: "AI Product Manager", 
            location: "New York, NY", 
            type: "Full-time", 
            category: "Product",
            experience: "Mid-Senior",
            description: "Drive product strategy and roadmap for our AI solutions across multiple industries. Bridge technical capabilities with market needs to deliver innovative AI products that solve real-world problems.",
            keyResponsibilities: [
                "Define comprehensive product vision and strategy for AI platforms and solutions",
                "Work closely with engineering teams on feature development and technical roadmaps",
                "Conduct in-depth market research, competitive analysis, and customer interviews",
                "Manage product roadmap, prioritization, and cross-functional team coordination",
                "Collaborate with sales, marketing, and customer success teams on go-to-market strategies"
            ],
            experienceSkills: [
                "3+ years of product management experience with B2B SaaS or AI/ML products",
                "Strong technical background with understanding of AI/ML concepts and limitations",
                "Experience with product analytics, user research, and data-driven decision making",
                "Excellent communication, leadership, and stakeholder management skills",
                "MBA or technical degree in Computer Science, Engineering, or related field preferred"
            ],
            salary: "$150k - $200k"
        },
        { 
            id: 3,
            role: "Data Scientist", 
            location: "Remote", 
            type: "Full-time", 
            category: "Data",
            experience: "Mid-Level",
            description: "Analyze complex datasets to derive actionable insights and build predictive models. Work on diverse projects across different industries, turning data into strategic business value.",
            keyResponsibilities: [
                "Perform comprehensive exploratory data analysis and create compelling visualizations",
                "Build, validate, and deploy predictive models using advanced statistical techniques",
                "Collaborate with business stakeholders to understand requirements and translate them into analytical solutions",
                "Present findings and recommendations to executive leadership and key stakeholders",
                "Develop automated data pipelines and contribute to our data infrastructure"
            ],
            experienceSkills: [
                "3+ years of data science experience with proven track record of impactful projects",
                "Expert proficiency in Python, R, SQL, and modern data science libraries",
                "Strong foundation in statistics, mathematics, and machine learning algorithms",
                "Experience with cloud platforms (AWS, GCP, Azure) and big data technologies",
                "Master's degree in Data Science, Statistics, Mathematics, or quantitative field"
            ],
            salary: "$120k - $160k"
        },
        { 
            id: 4,
            role: "Frontend Developer (React)", 
            location: "Austin, TX", 
            type: "Full-time", 
            category: "Engineering",
            experience: "Mid-Level",
            description: "Build beautiful, responsive user interfaces for our AI dashboard and tools. Focus on creating intuitive user experiences that make complex AI capabilities accessible to all users.",
            keyResponsibilities: [
                "Develop responsive web applications using React, TypeScript, and modern frontend technologies",
                "Implement pixel-perfect UI/UX designs with attention to detail and user experience",
                "Optimize application performance, accessibility, and cross-browser compatibility",
                "Collaborate closely with designers, backend developers, and product managers",
                "Write clean, maintainable, and well-tested code following best practices"
            ],
            experienceSkills: [
                "3+ years of React development experience with modern JavaScript/TypeScript",
                "Strong knowledge of HTML5, CSS3, and responsive design principles",
                "Experience with state management (Redux, Context API) and modern build tools",
                "Understanding of UI/UX principles, accessibility standards, and design systems",
                "Bachelor's degree in Computer Science or equivalent practical experience"
            ],
            salary: "$110k - $140k"
        },
        { 
            id: 5,
            role: "AI Research Scientist", 
            location: "London, UK", 
            type: "Full-time", 
            category: "Research",
            experience: "Senior",
            description: "Conduct cutting-edge research in deep learning and neural networks. Publish research papers, contribute to open source, and push the boundaries of what's possible with AI technology.",
            keyResponsibilities: [
                "Conduct advanced AI/ML research with focus on novel algorithms and architectures",
                "Publish high-quality research papers in top-tier conferences and journals",
                "Collaborate with academic institutions and contribute to the broader research community",
                "Develop novel algorithms and techniques that advance the state of the art",
                "Present research findings at international conferences and industry events"
            ],
            experienceSkills: [
                "PhD in Computer Science, Artificial Intelligence, Machine Learning, or related field",
                "Strong publication record in top-tier ML/AI conferences (NeurIPS, ICML, ICLR, etc.)",
                "Deep expertise in research methodologies and experimental design",
                "Proficiency in deep learning frameworks and experience with large-scale experiments",
                "Strong mathematical foundation and analytical problem-solving skills"
            ],
            salary: "£80k - £120k"
        },
        { 
            id: 6,
            role: "DevOps Engineer", 
            location: "Singapore", 
            type: "Full-time", 
            category: "Engineering",
            experience: "Mid-Level",
            description: "Build and maintain scalable infrastructure for AI model deployment. Ensure high availability, performance, and security of our production systems serving millions of requests daily.",
            keyResponsibilities: [
                "Design and maintain robust CI/CD pipelines for rapid, reliable deployments",
                "Manage cloud infrastructure, auto-scaling, and cost optimization strategies",
                "Monitor system performance, reliability, and implement proactive alerting",
                "Implement security best practices and ensure compliance with industry standards",
                "Automate operational processes and improve development team productivity"
            ],
            experienceSkills: [
                "3+ years of DevOps experience with cloud platforms and containerization",
                "Expert knowledge of AWS, GCP, or Azure with infrastructure as code (Terraform, CloudFormation)",
                "Proficiency in Kubernetes, Docker, and container orchestration",
                "Strong scripting skills in Python, Bash, or similar languages",
                "Experience with monitoring tools, logging systems, and incident response"
            ],
            salary: "$100k - $130k"
        }
    ];

    const categories = ['All', 'Engineering', 'Product', 'Data', 'Research', 'Sales', 'Design'];
    const jobTypes = ['All', 'Full-time', 'Part-time', 'Contract', 'Internship'];
    const locations = ['All', 'Remote', 'San Francisco, CA', 'New York, NY', 'Austin, TX', 'London, UK', 'Singapore'];
    const experienceLevels = ['All', 'Entry-Level', 'Mid-Level', 'Mid-Senior', 'Senior'];

    const filteredJobs = jobs.filter(job => {
        return (
            (searchTerm === '' || job.role.toLowerCase().includes(searchTerm.toLowerCase())) &&
            (selectedCategory === 'All' || job.category === selectedCategory) &&
            (selectedType === 'All' || job.type === selectedType) &&
            (selectedLocation === 'All' || job.location === selectedLocation) &&
            (selectedExperience === 'All' || job.experience === selectedExperience)
        );
    });

    const handleApplicationSubmit = (e) => {
        e.preventDefault();
        // Handle form submission
        console.log('Application submitted:', applicationData);
        alert('Application submitted successfully!');
        setShowApplication(false);
        setApplicationData({
            name: '',
            email: '',
            phone: '',
            linkedin: '',
            coverLetter: '',
            resume: null
        });
    };

    const handleInputChange = (field, value) => {
        setApplicationData(prev => ({
            ...prev,
            [field]: value
        }));
    };

    if (selectedJob && !showApplication) {
        return (
            <div className="job-details-page">
                <div className="job-details-container">
                    <button 
                        onClick={() => setSelectedJob(null)}
                        className="back-button"
                    >
                        ← Back to Jobs
                    </button>
                    
                    <div className="job-details-grid">
                        {/* Left Column - Job Details */}
                        <div className="job-details-left-side">
                            <div className="job-details-main">
                                <div className="job-details-header">
                                    <h1 className="job-details-title">{selectedJob.role}</h1>
                                    <div className="job-details-meta">
                                        <span className="job-details-meta-item">
                                            <MapPin className="job-details-meta-icon" /> {selectedJob.location}
                                        </span>
                                        <span className="job-details-meta-item">
                                            <Briefcase className="job-details-meta-icon" /> {selectedJob.category}
                                        </span>
                                        <span className="job-details-meta-item">
                                            <Clock className="job-details-meta-icon" /> {selectedJob.type}
                                        </span>
                                    </div>
                                    <p className="job-details-description">{selectedJob.description}</p>
                                </div>

                                {/* Company Overview */}
                                <div className="company-overview">
                                    <h3>About NeuZenAI</h3>
                                    <p>
                                        NeuZenAI is a leading artificial intelligence company focused on developing cutting-edge AI solutions 
                                        that transform industries and improve lives. With offices in Silicon Valley and Hyderabad T-Hub, 
                                        we're building the future of AI technology with a team of world-class engineers, researchers, and innovators. 
                                        Our mission is to democratize AI and make intelligent solutions accessible to businesses of all sizes.
                                    </p>
                                </div>

                                {/* Key Responsibilities */}
                                <div className="section">
                                    <h3 className="section-title">Key Responsibilities</h3>
                                    <ul className="responsibilities-list">
                                        {selectedJob.keyResponsibilities.map((responsibility, index) => (
                                            <li key={index} className="list-item">
                                                <div className="list-bullet"></div>
                                                <span className="list-text">{responsibility}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Experience and Skills */}
                                <div className="section">
                                    <h3 className="section-title">Experience & Skills</h3>
                                    <ul className="skills-list">
                                        {selectedJob.experienceSkills.map((skill, index) => (
                                            <li key={index} className="list-item">
                                                <div className="list-bullet"></div>
                                                <span className="list-text">{skill}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Right Column - Job Info & Apply */}
                        <div className="job-details-right-side">
                            <div className="job-info-card-sticky">
                                <h4 className="job-info-title">Job Details</h4>
                                <div className="job-info-grid">
                                    <div className="job-info-item">
                                        <span className="job-info-label">Job Category</span>
                                        <p className="job-info-value">{selectedJob.category}</p>
                                    </div>
                                    <div className="job-info-item">
                                        <span className="job-info-label">Job Type</span>
                                        <p className="job-info-value">{selectedJob.type}</p>
                                    </div>
                                    <div className="job-info-item">
                                        <span className="job-info-label">Location</span>
                                        <p className="job-info-value">{selectedJob.location}</p>
                                    </div>
                                    <div className="job-info-item">
                                        <span className="job-info-label">Experience Level</span>
                                        <p className="job-info-value">{selectedJob.experience}</p>
                                    </div>
                                    <div className="job-info-item">
                                        <span className="job-info-label">Salary Range</span>
                                        <p className="job-info-value job-info-salary">{selectedJob.salary}</p>
                                    </div>
                                </div>
                                
                                <button 
                                    onClick={() => setShowApplication(true)}
                                    className="btn-apply"
                                >
                                    Apply for This Position
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    if (showApplication) {
        return (
            <div className="application-form-page">
                <div className="application-container">
                    <button 
                        onClick={() => setShowApplication(false)}
                        className="back-button"
                    >
                        ← Back to Job Details
                    </button>
                    
                    <div className="application-header">
                        <h1 className="application-title">Apply for {selectedJob.role}</h1>
                        <p className="application-subtitle">Fill out the form below to submit your application. We'll review it carefully and get back to you soon.</p>
                    </div>
                    
                    <div className="application-form">
                        <form onSubmit={handleApplicationSubmit}>
                            <div className="form-grid">
                                <div className="form-group">
                                    <label className="form-label required">Full Name</label>
                                    <input
                                        type="text"
                                        required
                                        value={applicationData.name}
                                        onChange={(e) => handleInputChange('name', e.target.value)}
                                        className="form-input"
                                        placeholder="Enter your full name"
                                    />
                                </div>
                                <div className="form-group">
                                    <label className="form-label required">Email Address</label>
                                    <input
                                        type="email"
                                        required
                                        value={applicationData.email}
                                        onChange={(e) => handleInputChange('email', e.target.value)}
                                        className="form-input"
                                        placeholder="Enter your email"
                                    />
                                </div>
                            </div>
                            
                            <div className="form-grid">
                                <div className="form-group">
                                    <label className="form-label required">Contact Number</label>
                                    <input
                                        type="tel"
                                        required
                                        value={applicationData.phone}
                                        onChange={(e) => handleInputChange('phone', e.target.value)}
                                        className="form-input"
                                        placeholder="Enter your phone number"
                                    />
                                </div>
                                <div className="form-group">
                                    <label className="form-label">LinkedIn URL</label>
                                    <input
                                        type="url"
                                        value={applicationData.linkedin}
                                        onChange={(e) => handleInputChange('linkedin', e.target.value)}
                                        className="form-input"
                                        placeholder="https://linkedin.com/in/yourprofile"
                                    />
                                </div>
                            </div>
                            
                            <div className="form-group">
                                <label className="form-label required">Cover Letter</label>
                                <textarea
                                    required
                                    value={applicationData.coverLetter}
                                    onChange={(e) => handleInputChange('coverLetter', e.target.value)}
                                    className="form-textarea"
                                    placeholder="Tell us why you're interested in this position and what makes you a great fit for our team..."
                                />
                            </div>
                            
                            <div className="form-group">
                                <label className="form-label required">Upload Resume</label>
                                <div className="file-upload-area">
                                    <Upload className="file-upload-icon" />
                                    <p className="file-upload-text">Click to upload or drag and drop</p>
                                    <p className="file-upload-subtext">PDF, DOC, DOCX (Max 5MB)</p>
                                    <input
                                        type="file"
                                        accept=".pdf,.doc,.docx"
                                        onChange={(e) => handleInputChange('resume', e.target.files[0])}
                                        className="hidden"
                                        id="resume-upload"
                                    />
                                    <label htmlFor="resume-upload">
                                        <span className="file-upload-button">
                                            Choose File
                                        </span>
                                    </label>
                                    {applicationData.resume && (
                                        <p className="file-selected">
                                            Selected: {applicationData.resume.name}
                                        </p>
                                    )}
                                </div>
                            </div>
                            
                            <button type="submit" className="btn-submit">
                                <Send className="w-5 h-5" />
                                Submit Application
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="careers-page">
            {/* Hero Section */}
            <section className="careers-hero">
                <div className="container mx-auto px-6 text-center">
                    <div className="careers-hero-content fade-in">
                        <div className="careers-badge">
                            JOIN OUR TEAM
                        </div>
                        <h1 className="careers-title">
                            Build the Future of <span className="careers-title-highlight">AI with Us</span>
                        </h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
                            Join a team of passionate innovators working on cutting-edge AI solutions that transform industries and improve lives worldwide. 
                            Be part of the next generation of AI technology.
                        </p>
                    </div>
                </div>
            </section>

            {/* Search and Filters */}
            <section className="careers-filters">
                <div className="container mx-auto px-6">
                    <div className="max-w-6xl mx-auto">
                        {/* Search Bar */}
                        <div className="search-container">
                            <Search className="search-icon" />
                            <input
                                type="text"
                                placeholder="Search jobs by title, keyword, or skill..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="search-input"
                            />
                        </div>

                        {/* Filters */}
                        <div className="filters-grid">
                            <div className="filter-group">
                                <label className="filter-label">Job Category</label>
                                <select
                                    value={selectedCategory}
                                    onChange={(e) => setSelectedCategory(e.target.value)}
                                    className="filter-select"
                                >
                                    {categories.map(category => (
                                        <option key={category} value={category}>{category}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="filter-group">
                                <label className="filter-label">Job Type</label>
                                <select
                                    value={selectedType}
                                    onChange={(e) => setSelectedType(e.target.value)}
                                    className="filter-select"
                                >
                                    {jobTypes.map(type => (
                                        <option key={type} value={type}>{type}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="filter-group">
                                <label className="filter-label">Location</label>
                                <select
                                    value={selectedLocation}
                                    onChange={(e) => setSelectedLocation(e.target.value)}
                                    className="filter-select"
                                >
                                    {locations.map(location => (
                                        <option key={location} value={location}>{location}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="filter-group">
                                <label className="filter-label">Experience</label>
                                <select
                                    value={selectedExperience}
                                    onChange={(e) => setSelectedExperience(e.target.value)}
                                    className="filter-select"
                                >
                                    {experienceLevels.map(level => (
                                        <option key={level} value={level}>{level}</option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        <div className="results-count">
                            Showing {filteredJobs.length} of {jobs.length} jobs
                        </div>
                    </div>
                </div>
            </section>

            {/* Jobs List */}
            <section className="jobs-section">
                <div className="container mx-auto px-6">
                    <div className="jobs-container">
                        {filteredJobs.map((job) => (
                            <div key={job.id} className="job-card slide-up">
                                <div className="job-header">
                                    <div className="job-title-section">
                                        <h3 className="job-title">{job.role}</h3>
                                        <span className="job-level-badge">
                                            {job.experience}
                                        </span>
                                        <div className="job-meta">
                                            <span className="job-meta-item">
                                                <Briefcase className="job-meta-icon" /> {job.category}
                                            </span>
                                            <span className="job-meta-item">
                                                <MapPin className="job-meta-icon" /> {job.location}
                                            </span>
                                            <span className="job-meta-item">
                                                <Clock className="job-meta-icon" /> {job.type}
                                            </span>
                                        </div>
                                        <p className="job-description">{job.description}</p>
                                        <div className="job-salary">{job.salary}</div>
                                    </div>
                                    <div className="job-actions">
                                        <button 
                                            onClick={() => setSelectedJob(job)}
                                            className="btn-view-details"
                                        >
                                            View Details
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Careers;