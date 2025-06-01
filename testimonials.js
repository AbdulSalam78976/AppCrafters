// Testimonials data
const testimonials = [
    {
        id: 1,
        name: "Sarah Johnson",
        position: "CEO, TechStart",
        image: "images/testimonial1.svg",
        text: "App Crafters transformed our business with their exceptional mobile app. Their attention to detail and innovative approach exceeded our expectations. Highly recommended!"
    },
    {
        id: 2,
        name: "Michael Chen",
        position: "Marketing Director, GrowthHub",
        text: "Working with App Crafters was a game-changer for our company. Their web development expertise helped us increase conversions by 40%. Professional, responsive, and creative team!",
        image: "images/testimonial2.svg"
    },
    {
        id: 3,
        name: "Emily Rodriguez",
        position: "Founder, EcoSolutions",
        text: "The UI/UX design work from App Crafters completely revitalized our platform. Our user engagement metrics have improved significantly, and we've received countless compliments on the intuitive design.",
        image: "images/testimonial3.svg"
    },
    {
        id: 4,
        name: "David Wilson",
        position: "CTO, InnovateTech",
        text: "App Crafters delivered our complex project on time and within budget. Their technical expertise and problem-solving abilities are outstanding. We're already planning our next project with them.",
        image: "images/testimonial4.svg"
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
            
            testimonialItem.innerHTML = `
                <div class="testimonial-content">
                    <div class="testimonial-text">
                        <i class="fas fa-quote-left quote-icon"></i>
                        <p>${testimonial.text}</p>
                    </div>
                    <div class="testimonial-author">
                        <div class="author-image">
                            <img src="${testimonial.image}" alt="${testimonial.name}">
                        </div>
                        <div class="author-info">
                            <h4>${testimonial.name}</h4>
                            <p>${testimonial.position}</p>
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