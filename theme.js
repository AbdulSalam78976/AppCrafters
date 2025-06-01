// Theme toggle functionality
document.addEventListener('DOMContentLoaded', function() {
    // Check for saved theme preference or use default dark theme
    const currentTheme = localStorage.getItem('theme') || 'dark';
    
    // Apply the saved theme on page load
    document.documentElement.setAttribute('data-theme', currentTheme);
    
    // Update toggle button state
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
        updateToggleIcon(currentTheme);
        
        // Add event listener to toggle button
        themeToggle.addEventListener('click', function() {
            // Get the current theme
            const currentTheme = document.documentElement.getAttribute('data-theme');
            
            // Toggle theme
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            
            // Apply the new theme
            document.documentElement.setAttribute('data-theme', newTheme);
            
            // Save theme preference
            localStorage.setItem('theme', newTheme);
            
            // Update toggle button icon
            updateToggleIcon(newTheme);
        });
    }
});

// Function to update toggle button icon
function updateToggleIcon(theme) {
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
        const icon = themeToggle.querySelector('i');
        if (icon) {
            if (theme === 'dark') {
                icon.classList.remove('fa-moon');
                icon.classList.add('fa-sun');
                themeToggle.setAttribute('title', 'Switch to Light Mode');
            } else {
                icon.classList.remove('fa-sun');
                icon.classList.add('fa-moon');
                themeToggle.setAttribute('title', 'Switch to Dark Mode');
            }
        }
    }
}