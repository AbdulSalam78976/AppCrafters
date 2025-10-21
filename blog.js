// Enhanced Blog posts data
const blogPosts = [
    {
        id: 1,
        title: "The Future of Mobile App Development in 2024",
        slug: "future-mobile-app-development-2024",
        excerpt: "Exploring emerging technologies like AI integration, 5G optimization, and cross-platform development trends that are reshaping the mobile app landscape.",
        content: "The mobile app development industry continues to evolve at a rapid pace...",
        author: {
            name: "Alex Morgan",
            role: "Lead Developer",
            avatar: "https://via.placeholder.com/50x50/4361ee/ffffff?text=AM"
        },
        publishDate: "December 15, 2024",
        category: "Technology Trends",
        tags: ["Mobile Development", "AI", "5G", "Cross-platform"],
        readTime: 8,
        featured: true,
        image: "https://via.placeholder.com/400x250/4361ee/ffffff?text=Mobile+Future"
    },
    {
        id: 2,
        title: "How We Built a FinTech App That Increased User Engagement by 300%",
        slug: "fintech-app-user-engagement-case-study",
        excerpt: "Deep dive into the development process and UX decisions behind FinanceFlow's success, including security implementations and user experience optimization.",
        content: "When TechVenture Inc. approached us to build their fintech application...",
        author: {
            name: "Sarah Kim",
            role: "Product Manager",
            avatar: "https://via.placeholder.com/50x50/4361ee/ffffff?text=SK"
        },
        publishDate: "December 10, 2024",
        category: "Case Study",
        tags: ["FinTech", "User Engagement", "UX Design", "Security"],
        readTime: 12,
        featured: true,
        image: "https://via.placeholder.com/400x250/4361ee/ffffff?text=FinTech+Success"
    },
    {
        id: 3,
        title: "10 Essential UI/UX Principles for Mobile Apps",
        slug: "essential-ui-ux-principles-mobile-apps",
        excerpt: "Key design principles that make mobile apps intuitive, engaging, and user-friendly, backed by real-world examples and user research.",
        content: "Creating exceptional mobile app experiences requires understanding fundamental design principles...",
        author: {
            name: "Michael Chen",
            role: "UX Designer",
            avatar: "https://via.placeholder.com/50x50/4361ee/ffffff?text=MC"
        },
        publishDate: "December 5, 2024",
        category: "Design",
        tags: ["UI/UX", "Mobile Design", "User Experience", "Design Principles"],
        readTime: 6,
        featured: false,
        image: "https://via.placeholder.com/400x250/4361ee/ffffff?text=UI+UX+Design"
    },
    {
        id: 4,
        title: "Choosing the Right Technology Stack for Your Startup",
        slug: "choosing-technology-stack-startup",
        excerpt: "Comprehensive guide to selecting technologies that scale with your business needs, including cost considerations and future-proofing strategies.",
        content: "Selecting the right technology stack is one of the most critical decisions for any startup...",
        author: {
            name: "Jennifer Lopez",
            role: "Technical Architect",
            avatar: "https://via.placeholder.com/50x50/4361ee/ffffff?text=JL"
        },
        publishDate: "November 28, 2024",
        category: "Development",
        tags: ["Technology Stack", "Startup", "Architecture", "Scalability"],
        readTime: 10,
        featured: true,
        image: "https://via.placeholder.com/400x250/4361ee/ffffff?text=Tech+Stack"
    },
    {
        id: 5,
        title: "The ROI of Custom App Development vs. Off-the-Shelf Solutions",
        slug: "roi-custom-app-development-vs-off-shelf",
        excerpt: "Data-driven analysis of when custom development provides better long-term value, including cost breakdowns and performance metrics.",
        content: "Businesses often face the dilemma of choosing between custom app development and off-the-shelf solutions...",
        author: {
            name: "Robert Taylor",
            role: "Business Analyst",
            avatar: "https://via.placeholder.com/50x50/4361ee/ffffff?text=RT"
        },
        publishDate: "November 20, 2024",
        category: "Business Strategy",
        tags: ["ROI", "Custom Development", "Business Strategy", "Cost Analysis"],
        readTime: 9,
        featured: false,
        image: "https://via.placeholder.com/400x250/4361ee/ffffff?text=ROI+Analysis"
    },
    {
        id: 6,
        title: "Security Best Practices for Modern Web Applications",
        slug: "security-best-practices-web-applications",
        excerpt: "Essential security measures every web application should implement from day one, including authentication, data protection, and vulnerability prevention.",
        content: "In today's digital landscape, web application security is more critical than ever...",
        author: {
            name: "Amanda Foster",
            role: "Security Specialist",
            avatar: "https://via.placeholder.com/50x50/4361ee/ffffff?text=AF"
        },
        publishDate: "November 15, 2024",
        category: "Security",
        tags: ["Web Security", "Authentication", "Data Protection", "Best Practices"],
        readTime: 11,
        featured: false,
        image: "https://via.placeholder.com/400x250/4361ee/ffffff?text=Web+Security"
    }
];

// Initialize blog section
document.addEventListener('DOMContentLoaded', function() {
    const blogContainer = document.querySelector('.blog-grid');
    
    if (blogContainer) {
        // Populate blog posts
        blogPosts.forEach(post => {
            const blogItem = document.createElement('div');
            blogItem.classList.add('blog-item');
            blogItem.setAttribute('data-aos', 'fade-up');
            blogItem.setAttribute('data-aos-delay', (post.id * 100).toString());
            
            // Add featured class if applicable
            if (post.featured) {
                blogItem.classList.add('featured-post');
            }
            
            blogItem.innerHTML = `
                <div class="blog-img">
                    <img src="${post.image}" alt="${post.title}" loading="lazy">
                    <div class="blog-category">${post.category}</div>
                    ${post.featured ? '<div class="featured-badge">Featured</div>' : ''}
                </div>
                <div class="blog-content">
                    <div class="blog-meta">
                        <span><i class="far fa-calendar-alt"></i> ${post.publishDate}</span>
                        <span><i class="far fa-user"></i> ${post.author.name}</span>
                        <span><i class="far fa-clock"></i> ${post.readTime} min read</span>
                    </div>
                    <h3 class="blog-title">${post.title}</h3>
                    <p class="blog-excerpt">${post.excerpt}</p>
                    <div class="blog-tags">
                        ${post.tags.slice(0, 3).map(tag => `<span class="blog-tag">${tag}</span>`).join('')}
                    </div>
                    <div class="blog-footer">
                        <div class="blog-author">
                            <img src="${post.author.avatar}" alt="${post.author.name}" class="author-avatar">
                            <div class="author-details">
                                <span class="author-name">${post.author.name}</span>
                                <span class="author-role">${post.author.role}</span>
                            </div>
                        </div>
                        <a href="#" class="blog-link" data-post-id="${post.id}">Read More <i class="fas fa-arrow-right"></i></a>
                    </div>
                </div>
            `;
            
            blogContainer.appendChild(blogItem);
        });
    }
});