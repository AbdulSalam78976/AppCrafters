// Enhanced Testimonials data
const testimonials = [
    {
        id: 1,
        name: "Sarah Chen",
        position: "CTO, TechVenture Inc.",
        company: "TechVenture Inc.",
        industry: "FinTech",
        image: "https://via.placeholder.com/80x80/4361ee/ffffff?text=SC",
        text: "AppCrafters delivered our fintech app 2 weeks ahead of schedule. The attention to security and user experience was exceptional. Our user engagement increased by 300%.",
        rating: 5,
        project: "FinanceFlow",
        metrics: {
            metric: "User Engagement",
            value: "300%",
            description: "increase in daily active users"
        }
    },
    {
        id: 2,
        name: "Marcus Rodriguez",
        position: "Founder, GreenEarth Solutions",
        company: "GreenEarth Solutions",
        industry: "Environmental",
        image: "https://via.placeholder.com/80x80/4361ee/ffffff?text=MR",
        text: "The sustainability platform they built helped us reduce our carbon footprint by 50%. Outstanding technical expertise and commitment to environmental goals.",
        rating: 5,
        project: "EcoTrack",
        metrics: {
            metric: "Carbon Reduction",
            value: "50%",
            description: "reduction in client carbon footprint"
        }
    },
    {
        id: 3,
        name: "Dr. Emily Watson",
        position: "Medical Director, HealthFirst Clinic",
        company: "HealthFirst Clinic",
        industry: "Healthcare",
        image: "https://via.placeholder.com/80x80/4361ee/ffffff?text=EW",
        text: "Our telemedicine platform has revolutionized patient care. AppCrafters understood our complex requirements perfectly and delivered a HIPAA-compliant solution.",
        rating: 5,
        project: "MediConnect",
        metrics: {
            metric: "Patient Consultations",
            value: "200%",
            description: "increase in monthly consultations"
        }
    },
    {
        id: 4,
        name: "James Thompson",
        position: "CEO, RetailMax",
        company: "RetailMax",
        industry: "Retail",
        image: "https://via.placeholder.com/80x80/4361ee/ffffff?text=JT",
        text: "The e-commerce management system increased our operational efficiency by 150%. Incredible ROI and seamless integration with our existing systems.",
        rating: 5,
        project: "RetailPro",
        metrics: {
            metric: "Operational Efficiency",
            value: "150%",
            description: "improvement in workflow efficiency"
        }
    },
    {
        id: 5,
        name: "Lisa Park",
        position: "Head of Digital Learning, EduTech Academy",
        company: "EduTech Academy",
        industry: "Education",
        image: "https://via.placeholder.com/80x80/4361ee/ffffff?text=LP",
        text: "Student enrollment grew 500% after launching our platform. The user experience is phenomenal and the analytics dashboard provides incredible insights.",
        rating: 5,
        project: "EduLearn",
        metrics: {
            metric: "Student Enrollment",
            value: "500%",
            description: "growth in first year"
        }
    },
    {
        id: 6,
        name: "David Kumar",
        position: "Restaurant Chain Owner",
        company: "Kumar Restaurant Group",
        industry: "Food & Beverage",
        image: "https://via.placeholder.com/80x80/4361ee/ffffff?text=DK",
        text: "The app helped us reach 1M+ downloads and significantly increased our bookings. Game-changing solution that transformed our customer engagement.",
        rating: 5,
        project: "FoodieHub",
        metrics: {
            metric: "App Downloads",
            value: "1M+",
            description: "downloads in first year"
        }
    }
];

// Initialize testimonials carousel
function initTestimonialsCarousel() {
    const testimonialsContainer = document.querySelector('.testimonials-carousel');
    const dotsContainer = document.querySelector('.carousel-dots');
    let currentIndex = 0;

    // Create dots
    testimonials.forEach((_, index) => {
        const dot = document.createElement('span');
        dot.classList.add('carousel-dot');
        if (index === 0) dot.classList.add('active');
        dot.addEventListener('click', () => goToSlide(index));
        dotsContainer.appendChild(dot);
    });

    // Function to update carousel
    function updateCarousel() {
        testimonialsContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
        
        // Update dots
        document.querySelectorAll('.carousel-dot').forEach((dot, index) => {
            if (index === currentIndex) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });
    }

    // Function to go to a specific slide
    function goToSlide(index) {
        currentIndex = index;
        updateCarousel();
    }

    // Function to go to the next slide
    function nextSlide() {
        currentIndex = (currentIndex + 1) % testimonials.length;
        updateCarousel();
    }

    // Function to go to the previous slide
    function prevSlide() {
        currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
        updateCarousel();
    }

    // Add event listeners for next and previous buttons
    document.querySelector('.carousel-prev').addEventListener('click', prevSlide);
    document.querySelector('.carousel-next').addEventListener('click', nextSlide);

    // Auto-advance the carousel every 5 seconds
    setInterval(nextSlide, 5000);
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Populate testimonials
    const testimonialsContainer = document.querySelector('.testimonials-carousel');
    
    if (testimonialsContainer) {
        testimonials.forEach(testimonial => {
            const testimonialItem = document.createElement('div');
            testimonialItem.classList.add('testimonial-item');
            
            // Generate star rating
            const stars = Array(testimonial.rating).fill('★').join('');
            
            testimonialItem.innerHTML = `
                <div class="testimonial-content">
                    <div class="testimonial-header">
                        <div class="testimonial-rating">
                            <span class="stars">${stars}</span>
                            <span class="rating-text">${testimonial.rating}/5</span>
                        </div>
                        <div class="testimonial-project">
                            <span class="project-tag">${testimonial.project}</span>
                        </div>
                    </div>
                    <div class="testimonial-text">
                        <i class="fas fa-quote-left quote-icon"></i>
                        <p>${testimonial.text}</p>
                    </div>
                    <div class="testimonial-metrics">
                        <div class="metric-item">
                            <span class="metric-value">${testimonial.metrics.value}</span>
                            <span class="metric-label">${testimonial.metrics.description}</span>
                        </div>
                    </div>
                    <div class="testimonial-author">
                        <div class="author-image">
                            <img src="${testimonial.image}" alt="${testimonial.name}">
                        </div>
                        <div class="author-info">
                            <h4>${testimonial.name}</h4>
                            <p>${testimonial.position}</p>
                            <span class="author-company">${testimonial.company}</span>
                            <span class="author-industry">${testimonial.industry}</span>
                        </div>
                    </div>
                </div>
            `;
            
            testimonialsContainer.appendChild(testimonialItem);
        });
        
        // Initialize the carousel
        initTestimonialsCarousel();
    }
});