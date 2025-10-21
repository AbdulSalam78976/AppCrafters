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
}// Ad
vanced scroll-triggered animations
function initAdvancedAnimations() {
    // Scroll progress indicator
    createScrollProgress();
    
    // Scroll reveal animations
    initScrollReveal();
    
    // Staggered animations
    initStaggeredAnimations();
    
    // Parallax effects
    initParallaxEffects();
    
    // Cursor trail effect
    initCursorTrail();
    
    // Magnetic buttons
    initMagneticButtons();
    
    // Text reveal animations
    initTextReveal();
}

// Create scroll progress indicator
function createScrollProgress() {
    const progressBar = document.createElement('div');
    progressBar.className = 'scroll-progress';
    document.body.appendChild(progressBar);
    
    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset;
        const docHeight = document.body.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        progressBar.style.width = scrollPercent + '%';
    });
}

// Enhanced scroll reveal
function initScrollReveal() {
    const revealElements = document.querySelectorAll('.scroll-reveal');
    
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                revealObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    revealElements.forEach(el => {
        revealObserver.observe(el);
    });
}

// Staggered animations
function initStaggeredAnimations() {
    const staggerElements = document.querySelectorAll('.stagger-animation');
    
    const staggerObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                staggerObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.2
    });
    
    staggerElements.forEach(el => {
        staggerObserver.observe(el);
    });
}

// Enhanced parallax effects
function initParallaxEffects() {
    const parallaxElements = document.querySelectorAll('.parallax-element');
    
    if (parallaxElements.length === 0) return;
    
    let ticking = false;
    
    function updateParallax() {
        const scrollY = window.pageYOffset;
        
        parallaxElements.forEach(element => {
            const speed = element.dataset.speed || 0.5;
            const yPos = -(scrollY * speed);
            element.style.transform = `translateY(${yPos}px)`;
        });
        
        ticking = false;
    }
    
    function requestTick() {
        if (!ticking) {
            requestAnimationFrame(updateParallax);
            ticking = true;
        }
    }
    
    window.addEventListener('scroll', requestTick);
}

// Cursor trail effect
function initCursorTrail() {
    if (window.innerWidth <= 768) return; // Skip on mobile
    
    const trails = [];
    const trailLength = 5;
    
    // Create trail elements
    for (let i = 0; i < trailLength; i++) {
        const trail = document.createElement('div');
        trail.className = 'cursor-trail';
        trail.style.opacity = (trailLength - i) / trailLength * 0.5;
        trail.style.transform = `scale(${(trailLength - i) / trailLength})`;
        document.body.appendChild(trail);
        trails.push(trail);
    }
    
    let mouseX = 0, mouseY = 0;
    let trailX = 0, trailY = 0;
    
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });
    
    function animateTrail() {
        trailX += (mouseX - trailX) * 0.1;
        trailY += (mouseY - trailY) * 0.1;
        
        trails.forEach((trail, index) => {
            const delay = index * 0.02;
            const x = trailX - (mouseX - trailX) * delay;
            const y = trailY - (mouseY - trailY) * delay;
            
            trail.style.left = x - 10 + 'px';
            trail.style.top = y - 10 + 'px';
            trail.style.opacity = (trailLength - index) / trailLength * 0.5;
        });
        
        requestAnimationFrame(animateTrail);
    }
    
    animateTrail();
    
    // Show/hide trail
    document.addEventListener('mouseenter', () => {
        trails.forEach(trail => trail.style.opacity = trail.style.opacity);
    });
    
    document.addEventListener('mouseleave', () => {
        trails.forEach(trail => trail.style.opacity = '0');
    });
}

// Magnetic button effects
function initMagneticButtons() {
    const magneticButtons = document.querySelectorAll('.btn-magnetic, .btn');
    
    magneticButtons.forEach(button => {
        button.addEventListener('mouseenter', () => {
            button.classList.add('btn-magnetic');
        });
        
        button.addEventListener('mousemove', (e) => {
            const rect = button.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            
            button.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px) scale(1.05)`;
        });
        
        button.addEventListener('mouseleave', () => {
            button.style.transform = 'translate(0px, 0px) scale(1)';
        });
    });
}

// Text reveal animations
function initTextReveal() {
    const textElements = document.querySelectorAll('.text-reveal');
    
    textElements.forEach(element => {
        const text = element.textContent;
        element.innerHTML = '';
        
        text.split('').forEach(char => {
            const span = document.createElement('span');
            span.textContent = char === ' ' ? '\u00A0' : char;
            element.appendChild(span);
        });
    });
    
    const textObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                
                const spans = entry.target.querySelectorAll('span');
                spans.forEach((span, index) => {
                    setTimeout(() => {
                        span.style.transform = 'translateY(0)';
                    }, index * 50);
                });
                
                textObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.5
    });
    
    textElements.forEach(el => {
        textObserver.observe(el);
    });
}

// Add scroll reveal classes to existing elements
function addScrollRevealClasses() {
    // Add to service cards
    document.querySelectorAll('.service-card').forEach(card => {
        card.classList.add('scroll-reveal', 'hover-lift');
    });
    
    // Add to portfolio items
    document.querySelectorAll('.portfolio-item').forEach(item => {
        item.classList.add('scroll-reveal', 'hover-lift');
    });
    
    // Add to blog items
    document.querySelectorAll('.blog-item').forEach(item => {
        item.classList.add('scroll-reveal', 'hover-lift');
    });
    
    // Add to testimonial items
    document.querySelectorAll('.testimonial-item').forEach(item => {
        item.classList.add('scroll-reveal');
    });
    
    // Add stagger animation to grids
    document.querySelector('.services-grid')?.classList.add('stagger-animation');
    document.querySelector('.portfolio-grid')?.classList.add('stagger-animation');
    document.querySelector('.blog-grid')?.classList.add('stagger-animation');
}

// Initialize all advanced animations
document.addEventListener('DOMContentLoaded', () => {
    // Wait for other content to load first
    setTimeout(() => {
        addScrollRevealClasses();
        initAdvancedAnimations();
    }, 500);
});

// Performance optimization
let animationFrame;
function throttleAnimation(func) {
    if (animationFrame) return;
    animationFrame = requestAnimationFrame(() => {
        func();
        animationFrame = null;
    });
}