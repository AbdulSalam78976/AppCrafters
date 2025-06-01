// Loading animation functionality
document.addEventListener('DOMContentLoaded', function() {
    // Get the loading overlay element
    const loadingOverlay = document.getElementById('loading-overlay');
    
    if (loadingOverlay) {
        // Hide loading overlay after page is fully loaded
        window.addEventListener('load', function() {
            // Add fade-out class
            loadingOverlay.classList.add('fade-out');
            
            // Remove loading overlay after animation completes
            setTimeout(function() {
                loadingOverlay.style.display = 'none';
                
                // Enable scrolling on body
                document.body.classList.remove('no-scroll');
                
                // Trigger entrance animations
                document.querySelectorAll('[data-entrance]').forEach(element => {
                    element.classList.add('entrance-active');
                });
            }, 500); // Match this with the CSS transition duration
        });
    }
});

// Function to show loading overlay for internal navigation
function showLoading() {
    const loadingOverlay = document.getElementById('loading-overlay');
    
    if (loadingOverlay) {
        // Disable scrolling on body
        document.body.classList.add('no-scroll');
        
        // Show loading overlay
        loadingOverlay.style.display = 'flex';
        loadingOverlay.classList.remove('fade-out');
    }
}

// Function to hide loading overlay
function hideLoading() {
    const loadingOverlay = document.getElementById('loading-overlay');
    
    if (loadingOverlay) {
        // Add fade-out class
        loadingOverlay.classList.add('fade-out');
        
        // Remove loading overlay after animation completes
        setTimeout(function() {
            loadingOverlay.style.display = 'none';
            
            // Enable scrolling on body
            document.body.classList.remove('no-scroll');
        }, 500); // Match this with the CSS transition duration
    }
}