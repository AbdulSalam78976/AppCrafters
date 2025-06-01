// Enhanced animations for the website
document.addEventListener('DOMContentLoaded', function() {
    // Initialize counters for statistics
    initCounters();
    
    // Initialize parallax effect
    initParallax();
    
    // Initialize scroll animations
    initScrollAnimations();
    
    // Initialize hover effects
    initHoverEffects();
});

// Function to animate counters
function initCounters() {
    const statNumbers = document.querySelectorAll('.stat-number');
    
    if (statNumbers.length) {
        const options = {
            threshold: 0.5
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const target = entry.target;
                    const targetValue = parseInt(target.textContent.replace(/\D/g, ''));
                    let currentValue = 0;
                    const duration = 2000; // 2 seconds
                    const increment = Math.ceil(targetValue / (duration / 16)); // 60fps
                    
                    const counter = setInterval(() => {
                        currentValue += increment;
                        
                        if (currentValue >= targetValue) {
                            target.textContent = target.textContent.includes('+') ? 
                                targetValue + '+' : targetValue.toString();
                            clearInterval(counter);
                        } else {
                            target.textContent = target.textContent.includes('+') ? 
                                currentValue + '+' : currentValue.toString();
                        }
                    }, 16);
                    
                    // Unobserve after animation
                    observer.unobserve(target);
                }
            });
        }, options);
        
        statNumbers.forEach(stat => {
            observer.observe(stat);
        });
    }
}

// Function to initialize parallax effect
function initParallax() {
    const parallaxElements = document.querySelectorAll('.parallax');
    
    if (parallaxElements.length) {
        window.addEventListener('scroll', () => {
            const scrollY = window.scrollY;
            
            parallaxElements.forEach(element => {
                const speed = element.getAttribute('data-speed') || 0.2;
                const offset = scrollY * speed;
                
                element.style.transform = `translateY(${offset}px)`;
            });
        });
    }
}

// Function to initialize scroll animations
function initScrollAnimations() {
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    
    if (animatedElements.length) {
        const options = {
            threshold: 0.2
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animated');
                    observer.unobserve(entry.target);
                }
            });
        }, options);
        
        animatedElements.forEach(element => {
            observer.observe(element);
        });
    }
}

// Function to initialize hover effects
function initHoverEffects() {
    // Service card hover effect
    const serviceCards = document.querySelectorAll('.service-card');
    
    serviceCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.classList.add('hover');
        });
        
        card.addEventListener('mouseleave', function() {
            this.classList.remove('hover');
        });
    });
    
    // Portfolio item hover effect
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    
    portfolioItems.forEach(item => {
        const img = item.querySelector('img');
        
        item.addEventListener('mouseenter', function() {
            if (img) {
                img.style.transform = 'scale(1.1)';
            }
        });
        
        item.addEventListener('mouseleave', function() {
            if (img) {
                img.style.transform = 'scale(1)';
            }
        });
    });
    
    // Button hover effect
    const buttons = document.querySelectorAll('.btn');
    
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.classList.add('pulse');
        });
        
        button.addEventListener('mouseleave', function() {
            this.classList.remove('pulse');
            
            // Reset animation
            void this.offsetWidth;
        });
    });
}