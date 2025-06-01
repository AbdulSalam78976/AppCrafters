// Blog posts data
const blogPosts = [
    {
        id: 1,
        title: "10 Essential UI/UX Design Principles for Mobile Apps",
        excerpt: "Learn the key design principles that can make your mobile app more intuitive, engaging, and user-friendly.",
        image: "images/blog1.svg",
        date: "June 15, 2024",
        author: "Alex Morgan",
        category: "Design"
    },
    {
        id: 2,
        title: "The Future of Web Development: Trends to Watch in 2024",
        excerpt: "Explore the emerging technologies and methodologies that are shaping the future of web development.",
        image: "images/blog2.svg",
        date: "June 10, 2024",
        author: "Jessica Chen",
        category: "Development"
    },
    {
        id: 3,
        title: "How to Optimize Your Website for Better SEO Performance",
        excerpt: "Discover practical strategies to improve your website's visibility in search engines and drive more organic traffic.",
        image: "images/blog3.svg",
        date: "June 5, 2024",
        author: "Mark Wilson",
        category: "SEO"
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
            
            blogItem.innerHTML = `
                <div class="blog-img">
                    <img src="${post.image}" alt="${post.title}">
                    <div class="blog-category">${post.category}</div>
                </div>
                <div class="blog-content">
                    <div class="blog-meta">
                        <span><i class="far fa-calendar-alt"></i> ${post.date}</span>
                        <span><i class="far fa-user"></i> ${post.author}</span>
                    </div>
                    <h3 class="blog-title">${post.title}</h3>
                    <p class="blog-excerpt">${post.excerpt}</p>
                    <a href="#" class="blog-link">Read More <i class="fas fa-arrow-right"></i></a>
                </div>
            `;
            
            blogContainer.appendChild(blogItem);
        });
    }
});