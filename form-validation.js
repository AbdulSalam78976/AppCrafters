// Form validation functionality
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        // Add input event listeners for real-time validation
        const formInputs = contactForm.querySelectorAll('input, textarea');
        
        formInputs.forEach(input => {
            // Add validation on blur
            input.addEventListener('blur', function() {
                validateInput(this);
            });
            
            // Add validation on input
            input.addEventListener('input', function() {
                if (this.classList.contains('is-invalid')) {
                    validateInput(this);
                }
            });
        });
        
        // Form submission handler
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Validate all inputs
            let isValid = true;
            formInputs.forEach(input => {
                if (!validateInput(input)) {
                    isValid = false;
                }
            });
            
            if (isValid) {
                // Show loading state
                const submitBtn = contactForm.querySelector('button[type="submit"]');
                const originalBtnText = submitBtn.innerHTML;
                submitBtn.disabled = true;
                submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
                
                // Simulate form submission (replace with actual form submission)
                setTimeout(() => {
                    // Show success message
                    showFormMessage('success', 'Thank you for your message! We will get back to you soon.');
                    
                    // Reset form
                    contactForm.reset();
                    
                    // Reset button
                    submitBtn.disabled = false;
                    submitBtn.innerHTML = originalBtnText;
                    
                    // Clear success message after 5 seconds
                    setTimeout(() => {
                        const formMessage = document.querySelector('.form-message');
                        if (formMessage) {
                            formMessage.remove();
                        }
                    }, 5000);
                }, 1500);
            }
        });
    }
});

// Function to validate input
function validateInput(input) {
    const value = input.value.trim();
    const name = input.name;
    let isValid = true;
    let errorMessage = '';
    
    // Remove existing validation classes
    input.classList.remove('is-valid', 'is-invalid');
    
    // Remove existing error message
    const existingError = input.parentElement.querySelector('.error-message');
    if (existingError) {
        existingError.remove();
    }
    
    // Check if empty
    if (value === '') {
        isValid = false;
        errorMessage = 'This field is required';
    } else {
        // Specific validation based on input type
        switch (name) {
            case 'email':
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(value)) {
                    isValid = false;
                    errorMessage = 'Please enter a valid email address';
                }
                break;
                
            case 'phone':
                const phoneRegex = /^[\d\+\-\(\)\s]{8,20}$/;
                if (!phoneRegex.test(value)) {
                    isValid = false;
                    errorMessage = 'Please enter a valid phone number';
                }
                break;
                
            case 'message':
                if (value.length < 10) {
                    isValid = false;
                    errorMessage = 'Message must be at least 10 characters';
                }
                break;
        }
    }
    
    // Add validation class and error message
    if (isValid) {
        input.classList.add('is-valid');
    } else {
        input.classList.add('is-invalid');
        
        // Create and append error message
        const errorElement = document.createElement('div');
        errorElement.classList.add('error-message');
        errorElement.textContent = errorMessage;
        input.parentElement.appendChild(errorElement);
    }
    
    return isValid;
}

// Function to show form message
function showFormMessage(type, message) {
    // Remove existing message
    const existingMessage = document.querySelector('.form-message');
    if (existingMessage) {
        existingMessage.remove();
    }
    
    // Create message element
    const messageElement = document.createElement('div');
    messageElement.classList.add('form-message', `form-message-${type}`);
    
    // Add icon based on message type
    let icon = '';
    if (type === 'success') {
        icon = '<i class="fas fa-check-circle"></i>';
    } else if (type === 'error') {
        icon = '<i class="fas fa-exclamation-circle"></i>';
    }
    
    messageElement.innerHTML = `${icon} ${message}`;
    
    // Append message to form
    const contactForm = document.getElementById('contactForm');
    contactForm.parentElement.insertBefore(messageElement, contactForm);
}