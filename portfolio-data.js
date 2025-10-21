// Portfolio Projects Data
const portfolioProjects = [
    {
        id: 'financeflow',
        title: 'FinanceFlow',
        category: 'app',
        industry: 'FinTech',
        description: 'Revolutionary mobile banking app with advanced security features',
        longDescription: 'FinanceFlow is a comprehensive mobile banking solution that revolutionizes how users manage their finances. Built with cutting-edge security protocols and an intuitive interface, it provides seamless digital banking, investment tracking, and expense management capabilities.',
        technologies: ['React Native', 'Node.js', 'MongoDB', 'AWS', 'Blockchain'],
        features: [
            'Secure biometric authentication',
            'Real-time transaction monitoring',
            'Investment portfolio tracking',
            'AI-powered expense categorization',
            'Multi-currency support',
            'Cryptocurrency integration'
        ],
        results: [
            { metric: 'User Engagement', value: '300%', description: 'increase in daily active users' },
            { metric: 'Transaction Volume', value: '$2.5M', description: 'processed monthly' },
            { metric: 'Security Rating', value: '99.9%', description: 'uptime with zero breaches' }
        ],
        images: {
            thumbnail: 'images/portfolio/financeflow-thumb.jpg',
            gallery: ['images/portfolio/financeflow-1.jpg', 'images/portfolio/financeflow-2.jpg'],
            mockups: ['images/portfolio/financeflow-mockup.jpg']
        },
        client: {
            name: 'Sarah Chen',
            company: 'TechVenture Inc.',
            testimonial: 'AppCrafters delivered our fintech app 2 weeks ahead of schedule. The attention to security and user experience was exceptional.'
        },
        timeline: '6 months',
        teamSize: 8,
        status: 'completed',
        featured: true
    },
    {
        id: 'ecotrack',
        title: 'EcoTrack',
        category: 'web',
        industry: 'Environmental',
        description: 'Comprehensive sustainability management platform for enterprises',
        longDescription: 'EcoTrack empowers organizations to monitor, analyze, and reduce their environmental impact through advanced data analytics and reporting tools. The platform integrates with existing systems to provide real-time sustainability metrics.',
        technologies: ['Flutter', 'Firebase', 'Python', 'TensorFlow', 'Google Cloud'],
        features: [
            'Carbon footprint calculation',
            'Sustainability reporting dashboard',
            'Environmental impact analytics',
            'Compliance tracking',
            'Goal setting and monitoring',
            'Third-party integrations'
        ],
        results: [
            { metric: 'Carbon Reduction', value: '50%', description: 'average client carbon footprint reduction' },
            { metric: 'Cost Savings', value: '$1.2M', description: 'annual savings for clients' },
            { metric: 'Compliance Rate', value: '100%', description: 'regulatory compliance achieved' }
        ],
        images: {
            thumbnail: 'images/portfolio/ecotrack-thumb.jpg',
            gallery: ['images/portfolio/ecotrack-1.jpg', 'images/portfolio/ecotrack-2.jpg'],
            mockups: ['images/portfolio/ecotrack-mockup.jpg']
        },
        client: {
            name: 'Marcus Rodriguez',
            company: 'GreenEarth Solutions',
            testimonial: 'The sustainability platform they built helped us reduce our carbon footprint by 50%. Outstanding technical expertise.'
        },
        timeline: '8 months',
        teamSize: 6,
        status: 'completed',
        featured: true
    },
    {
        id: 'mediconnect',
        title: 'MediConnect',
        category: 'app',
        industry: 'Healthcare',
        description: 'Advanced telemedicine platform connecting patients and healthcare providers',
        longDescription: 'MediConnect bridges the gap between patients and healthcare providers through secure video consultations, digital prescription management, and comprehensive health record systems.',
        technologies: ['Vue.js', 'Express.js', 'PostgreSQL', 'WebRTC', 'HIPAA Compliance'],
        features: [
            'HD video consultations',
            'Digital prescription system',
            'Electronic health records',
            'Appointment scheduling',
            'Insurance integration',
            'Multi-language support'
        ],
        results: [
            { metric: 'Patient Consultations', value: '200%', description: 'increase in monthly consultations' },
            { metric: 'Patient Satisfaction', value: '4.9/5', description: 'average rating' },
            { metric: 'Response Time', value: '< 2min', description: 'average connection time' }
        ],
        images: {
            thumbnail: 'images/portfolio/mediconnect-thumb.jpg',
            gallery: ['images/portfolio/mediconnect-1.jpg', 'images/portfolio/mediconnect-2.jpg'],
            mockups: ['images/portfolio/mediconnect-mockup.jpg']
        },
        client: {
            name: 'Dr. Emily Watson',
            company: 'HealthFirst Clinic',
            testimonial: 'Our telemedicine platform has revolutionized patient care. AppCrafters understood our complex requirements perfectly.'
        },
        timeline: '10 months',
        teamSize: 10,
        status: 'completed',
        featured: true
    },
    {
        id: 'retailpro',
        title: 'RetailPro',
        category: 'web',
        industry: 'Retail',
        description: 'Comprehensive e-commerce management system for retail businesses',
        longDescription: 'RetailPro streamlines retail operations with advanced inventory management, sales analytics, and customer insights. The platform integrates seamlessly with existing POS systems and e-commerce platforms.',
        technologies: ['Angular', '.NET Core', 'SQL Server', 'Azure', 'Power BI'],
        features: [
            'Real-time inventory tracking',
            'Advanced sales analytics',
            'Customer behavior insights',
            'Multi-store management',
            'Automated reordering',
            'Performance dashboards'
        ],
        results: [
            { metric: 'Operational Efficiency', value: '150%', description: 'improvement in workflow efficiency' },
            { metric: 'Inventory Accuracy', value: '99.5%', description: 'real-time accuracy' },
            { metric: 'Revenue Growth', value: '35%', description: 'increase in quarterly revenue' }
        ],
        images: {
            thumbnail: 'images/portfolio/retailpro-thumb.jpg',
            gallery: ['images/portfolio/retailpro-1.jpg', 'images/portfolio/retailpro-2.jpg'],
            mockups: ['images/portfolio/retailpro-mockup.jpg']
        },
        client: {
            name: 'James Thompson',
            company: 'RetailMax',
            testimonial: 'The e-commerce management system increased our operational efficiency by 150%. Incredible ROI.'
        },
        timeline: '7 months',
        teamSize: 9,
        status: 'completed',
        featured: false
    },
    {
        id: 'edulearn',
        title: 'EduLearn',
        category: 'web',
        industry: 'Education',
        description: 'Interactive online learning platform with advanced progress tracking',
        longDescription: 'EduLearn transforms online education with interactive courses, real-time progress tracking, and comprehensive certification systems. The platform supports multiple learning styles and provides detailed analytics.',
        technologies: ['React', 'Django', 'Redis', 'PostgreSQL', 'AWS S3'],
        features: [
            'Interactive course builder',
            'Real-time progress tracking',
            'Video streaming platform',
            'Certification system',
            'Discussion forums',
            'Mobile learning app'
        ],
        results: [
            { metric: 'Student Enrollment', value: '500%', description: 'growth in first year' },
            { metric: 'Course Completion', value: '85%', description: 'average completion rate' },
            { metric: 'Student Satisfaction', value: '4.8/5', description: 'platform rating' }
        ],
        images: {
            thumbnail: 'images/portfolio/edulearn-thumb.jpg',
            gallery: ['images/portfolio/edulearn-1.jpg', 'images/portfolio/edulearn-2.jpg'],
            mockups: ['images/portfolio/edulearn-mockup.jpg']
        },
        client: {
            name: 'Lisa Park',
            company: 'EduTech Academy',
            testimonial: 'Student enrollment grew 500% after launching our platform. The user experience is phenomenal.'
        },
        timeline: '9 months',
        teamSize: 7,
        status: 'completed',
        featured: true
    },
    {
        id: 'foodiehub',
        title: 'FoodieHub',
        category: 'app',
        industry: 'Food & Beverage',
        description: 'Restaurant discovery and table booking application',
        longDescription: 'FoodieHub connects food enthusiasts with restaurants through advanced search, reviews, and seamless table booking. The app features AI-powered recommendations and social dining experiences.',
        technologies: ['Swift', 'Kotlin', 'AWS', 'MongoDB', 'Machine Learning'],
        features: [
            'AI-powered restaurant recommendations',
            'Real-time table booking',
            'Social dining features',
            'Photo sharing and reviews',
            'Loyalty program integration',
            'Multi-city support'
        ],
        results: [
            { metric: 'App Downloads', value: '1M+', description: 'downloads in first year' },
            { metric: 'Restaurant Partners', value: '5,000+', description: 'active restaurant partners' },
            { metric: 'Monthly Bookings', value: '50K+', description: 'successful reservations' }
        ],
        images: {
            thumbnail: 'images/portfolio/foodiehub-thumb.jpg',
            gallery: ['images/portfolio/foodiehub-1.jpg', 'images/portfolio/foodiehub-2.jpg'],
            mockups: ['images/portfolio/foodiehub-mockup.jpg']
        },
        client: {
            name: 'David Kumar',
            company: 'Restaurant Chain Owner',
            testimonial: 'The app helped us reach 1M+ downloads and significantly increased our bookings. Game-changing solution.'
        },
        timeline: '8 months',
        teamSize: 8,
        status: 'completed',
        featured: false
    },
    {
        id: 'fittracker',
        title: 'FitTracker Pro',
        category: 'app',
        industry: 'Health & Fitness',
        description: 'Comprehensive fitness and wellness tracking application',
        longDescription: 'FitTracker Pro combines workout planning, nutrition tracking, and social features to create a complete fitness ecosystem. The app uses advanced analytics to provide personalized fitness recommendations.',
        technologies: ['React Native', 'GraphQL', 'MongoDB', 'TensorFlow', 'HealthKit'],
        features: [
            'Personalized workout plans',
            'Nutrition tracking and analysis',
            'Social fitness challenges',
            'Wearable device integration',
            'Progress analytics',
            'Virtual personal trainer'
        ],
        results: [
            { metric: 'User Retention', value: '80%', description: 'monthly active users' },
            { metric: 'Workout Completion', value: '92%', description: 'average completion rate' },
            { metric: 'Health Improvement', value: '65%', description: 'users report better health' }
        ],
        images: {
            thumbnail: 'images/portfolio/fittracker-thumb.jpg',
            gallery: ['images/portfolio/fittracker-1.jpg', 'images/portfolio/fittracker-2.jpg'],
            mockups: ['images/portfolio/fittracker-mockup.jpg']
        },
        client: {
            name: 'Michael Foster',
            company: 'FitLife Wellness',
            testimonial: 'The fitness app exceeded our expectations with its comprehensive features and user engagement.'
        },
        timeline: '6 months',
        teamSize: 6,
        status: 'completed',
        featured: false
    },
    {
        id: 'smarthome',
        title: 'SmartHome Hub',
        category: 'tool',
        industry: 'Smart Home',
        description: 'IoT control platform for smart home automation',
        longDescription: 'SmartHome Hub centralizes control of all IoT devices in modern homes. The platform provides intelligent automation, energy monitoring, and security features through an intuitive interface.',
        technologies: ['IoT Integration', 'React', 'Node.js', 'MQTT', 'Machine Learning'],
        features: [
            'Universal device control',
            'Intelligent automation rules',
            'Energy consumption monitoring',
            'Security system integration',
            'Voice control support',
            'Remote access capabilities'
        ],
        results: [
            { metric: 'Energy Savings', value: '40%', description: 'average household energy reduction' },
            { metric: 'Device Compatibility', value: '500+', description: 'supported IoT devices' },
            { metric: 'User Satisfaction', value: '4.7/5', description: 'platform rating' }
        ],
        images: {
            thumbnail: 'images/portfolio/smarthome-thumb.jpg',
            gallery: ['images/portfolio/smarthome-1.jpg', 'images/portfolio/smarthome-2.jpg'],
            mockups: ['images/portfolio/smarthome-mockup.jpg']
        },
        client: {
            name: 'Robert Chen',
            company: 'SmartTech Solutions',
            testimonial: 'The IoT platform seamlessly integrated all our smart home products with impressive energy savings.'
        },
        timeline: '12 months',
        teamSize: 12,
        status: 'completed',
        featured: true
    }
];

// Portfolio management functions
const PortfolioManager = {
    // Get all projects
    getAllProjects: () => portfolioProjects,
    
    // Get projects by category
    getProjectsByCategory: (category) => {
        if (category === 'all') return portfolioProjects;
        return portfolioProjects.filter(project => project.category === category);
    },
    
    // Get featured projects
    getFeaturedProjects: () => portfolioProjects.filter(project => project.featured),
    
    // Get project by ID
    getProjectById: (id) => portfolioProjects.find(project => project.id === id),
    
    // Get projects by industry
    getProjectsByIndustry: (industry) => portfolioProjects.filter(project => project.industry === industry),
    
    // Search projects
    searchProjects: (query) => {
        const searchTerm = query.toLowerCase();
        return portfolioProjects.filter(project => 
            project.title.toLowerCase().includes(searchTerm) ||
            project.description.toLowerCase().includes(searchTerm) ||
            project.industry.toLowerCase().includes(searchTerm) ||
            project.technologies.some(tech => tech.toLowerCase().includes(searchTerm))
        );
    }
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { portfolioProjects, PortfolioManager };
}