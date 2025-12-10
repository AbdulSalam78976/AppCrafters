// Portfolio Projects Data
const portfolioProjects = [
    {
        id: 'complaint-management',
        title: 'Complaint Management System',
        category: 'app',
        industry: 'Business Management',
        description: 'Cross-platform complaint tracking and resolution system built with Flutter',
        longDescription: 'A comprehensive complaint management system that streamlines the process of receiving, tracking, and resolving customer complaints. Built with Flutter for seamless cross-platform performance on iOS, Android, and web platforms.',
        technologies: ['Flutter', 'Dart', 'Firebase', 'Cloud Firestore', 'Push Notifications'],
        features: [
            'Real-time complaint submission and tracking',
            'Multi-level user roles (Admin, Manager, Staff)',
            'Status tracking and updates',
            'Push notifications for complaint updates',
            'Analytics dashboard for complaint trends',
            'Document and image attachment support',
            'Priority-based complaint categorization',
            'Response time tracking and SLA monitoring'
        ],
        results: [
            { metric: 'Response Time', value: '60%', description: 'faster complaint resolution' },
            { metric: 'User Satisfaction', value: '4.8/5', description: 'average rating' },
            { metric: 'Platform Support', value: '3+', description: 'iOS, Android, Web' }
        ],
        link: '#', // Placeholder link
        client: {
            name: 'Business Client',
            company: 'Enterprise Solutions',
            testimonial: 'The complaint management system has transformed how we handle customer feedback. Response times improved dramatically.'
        },
        timeline: '4 months',
        teamSize: 3,
        status: 'completed',
        featured: true
    },
    {
        id: 'school-management',
        title: 'School Management System Admin Panel',
        category: 'app',
        industry: 'Education',
        description: 'Comprehensive school administration platform built with Flutter',
        longDescription: 'A powerful admin panel for school management that handles student records, attendance, grades, staff management, and parent communication. Built with Flutter to provide a consistent experience across all platforms.',
        technologies: ['Flutter', 'Dart', 'Firebase', 'Cloud Functions', 'Real-time Database'],
        features: [
            'Student enrollment and profile management',
            'Attendance tracking and reporting',
            'Grade and report card management',
            'Staff and teacher administration',
            'Class and section management',
            'Fee collection and payment tracking',
            'Parent-teacher communication portal',
            'Timetable and schedule management',
            'Exam and assessment management',
            'Analytics and performance reports'
        ],
        results: [
            { metric: 'Administrative Efficiency', value: '75%', description: 'reduction in paperwork' },
            { metric: 'Parent Engagement', value: '90%', description: 'active parent participation' },
            { metric: 'Data Accuracy', value: '99%', description: 'accurate record keeping' }
        ],
        link: '#', // Placeholder link
        client: {
            name: 'School Administration',
            company: 'Educational Institution',
            testimonial: 'This admin panel has revolutionized our school management. Everything is now organized and accessible in one place.'
        },
        timeline: '5 months',
        teamSize: 4,
        status: 'completed',
        featured: true
    },
    {
        id: 'classic-carry',
        title: 'Classic Carry',
        category: 'web',
        industry: 'E-commerce',
        description: 'Full stack ecommerce website with user and admin panel',
        longDescription: 'A complete e-commerce solution features a robust user interface for shopping and a comprehensive admin panel for inventory and order management.',
        technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
        features: [
            'User authentication and profile management',
            'Product catalog with search and filtering',
            'Shopping cart and checkout process',
            'Admin dashboard for order management',
            'Inventory tracking',
            'Payment gateway integration'
        ],
        results: [
            { metric: 'Sales Growth', value: '150%', description: 'increase in online sales' },
            { metric: 'User Base', value: '5k+', description: 'registered users' },
            { metric: 'Uptime', value: '99.9%', description: 'service availability' }
        ],

        client: {
            name: 'Classic Carry Team',
            company: 'Classic Carry',
            testimonial: 'The platform is robust and easy to manage.'
        },
        timeline: '3 months',
        teamSize: 2,
        status: 'completed',
        featured: true,
        link: 'https://classiccarrry.com'
    },
    {
        id: 'durvalis',
        title: 'Durvalis',
        category: 'web',
        industry: 'Corporate',
        description: 'Professional static website for business presence',
        longDescription: 'A sleek and modern static website designed to establish a strong online presence for Durvalis. Optimized for performance and SEO.',
        technologies: ['HTML5', 'CSS3', 'JavaScript'],
        features: [
            'Responsive design',
            'SEO optimization',
            'Fast loading speeds',
            'Contact form integration',
            'Modern UI/UX'
        ],
        results: [
            { metric: 'Load Time', value: '<1s', description: 'page load speed' },
            { metric: 'SEO Score', value: '100', description: 'Google Lighthouse score' },
            { metric: 'Traffic', value: '200%', description: 'increase in organic traffic' }
        ],

        client: {
            name: 'Durvalis Management',
            company: 'Durvalis',
            testimonial: 'A beautiful and fast website that represents our brand perfectly.'
        },
        timeline: '1 month',
        teamSize: 1,
        status: 'completed',
        featured: true,
        link: 'https://durvalis.com'
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