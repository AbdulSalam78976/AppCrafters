// Enhanced Portfolio Functionality
document.addEventListener('DOMContentLoaded', function () {
    initPortfolio();
});

function initPortfolio() {
    renderPortfolioItems();
    initPortfolioFilters();
    initPortfolioModal();
}

// Render portfolio items
function renderPortfolioItems(projects = portfolioProjects) {
    const portfolioGrid = document.getElementById('portfolioGrid');
    if (!portfolioGrid) return;

    portfolioGrid.innerHTML = '';

    projects.forEach((project, index) => {
        const portfolioItem = createPortfolioItem(project, index);
        portfolioGrid.appendChild(portfolioItem);
    });

    // Reinitialize AOS for new elements
    if (typeof AOS !== 'undefined') {
        AOS.refresh();
    }
}

// Create portfolio item element
function createPortfolioItem(project, index) {
    const item = document.createElement('div');
    item.className = 'portfolio-item';
    item.setAttribute('data-category', project.category);
    item.setAttribute('data-aos', 'fade-up');
    item.setAttribute('data-aos-delay', (index * 100).toString());
    item.setAttribute('data-project-id', project.id);

    // Check if thumbnail is a video or image


    item.innerHTML = `

        <div class="portfolio-details">
            <div class="portfolio-industry">${project.industry}</div>
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <div class="portfolio-tech">
                ${project.technologies.slice(0, 3).map(tech =>
        `<span class="tech-tag">${tech}</span>`
    ).join('')}
                ${project.technologies.length > 3 ? `<span class="tech-tag">+${project.technologies.length - 3} more</span>` : ''}
            </div>
            <div class="portfolio-results">
                <strong>${project.results[0].value}</strong> ${project.results[0].description}
            </div>
        </div>
    `;

    // Add click event to open modal
    item.addEventListener('click', () => openPortfolioModal(project));

    return item;
}

// Initialize portfolio filters
function initPortfolioFilters() {
    const filterBtns = document.querySelectorAll('.filter-btn');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', function () {
            // Remove active class from all buttons
            filterBtns.forEach(b => b.classList.remove('active'));

            // Add active class to clicked button
            this.classList.add('active');

            const filterValue = this.getAttribute('data-filter');
            const filteredProjects = PortfolioManager.getProjectsByCategory(filterValue);

            // Add fade out animation
            const portfolioGrid = document.getElementById('portfolioGrid');
            portfolioGrid.style.opacity = '0';

            setTimeout(() => {
                renderPortfolioItems(filteredProjects);
                portfolioGrid.style.opacity = '1';
            }, 300);
        });
    });
}

// Initialize portfolio modal
function initPortfolioModal() {
    const modal = document.getElementById('portfolioModal');
    const closeBtn = document.querySelector('.modal-close');

    // Close modal when clicking close button
    if (closeBtn) {
        closeBtn.addEventListener('click', closePortfolioModal);
    }

    // Close modal when clicking outside
    if (modal) {
        modal.addEventListener('click', function (e) {
            if (e.target === modal) {
                closePortfolioModal();
            }
        });
    }

    // Close modal with Escape key
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && modal.style.display === 'block') {
            closePortfolioModal();
        }
    });
}

// Open portfolio modal
function openPortfolioModal(project) {
    const modal = document.getElementById('portfolioModal');
    if (!modal) return;

    // Populate modal content
    populateModalContent(project);

    // Show modal
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';

    // Add animation
    setTimeout(() => {
        modal.querySelector('.modal-content').style.transform = 'scale(1)';
        modal.querySelector('.modal-content').style.opacity = '1';
    }, 10);
}

// Close portfolio modal
function closePortfolioModal() {
    const modal = document.getElementById('portfolioModal');
    if (!modal) return;

    // Add closing animation
    modal.querySelector('.modal-content').style.transform = 'scale(0.9)';
    modal.querySelector('.modal-content').style.opacity = '0';

    setTimeout(() => {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }, 300);
}

// Populate modal content
function populateModalContent(project) {
    // Check if thumbnail is a video or image
    // Update modal media element - REMOVED per user request
    const modalImageContainer = document.querySelector('.modal-image');
    if (modalImageContainer) {
        modalImageContainer.style.display = 'none';
    }

    // Update modal elements
    document.getElementById('modalTitle').textContent = project.title;
    document.getElementById('modalIndustry').textContent = project.industry;
    document.getElementById('modalDescription').textContent = project.longDescription;

    // Populate features
    const featuresList = document.getElementById('modalFeatures');
    featuresList.innerHTML = project.features.map(feature => `<li>${feature}</li>`).join('');

    // Populate technologies
    const techContainer = document.getElementById('modalTechnologies');
    techContainer.innerHTML = project.technologies.map(tech =>
        `<span class="tech-badge">${tech}</span>`
    ).join('');

    // Populate results
    const resultsContainer = document.getElementById('modalResults');
    resultsContainer.innerHTML = project.results.map(result => `
        <div class="result-item">
            <span class="result-value">${result.value}</span>
            <div class="result-metric">${result.metric}</div>
            <div class="result-description">${result.description}</div>
        </div>
    `).join('');

    // Populate testimonial
    document.getElementById('modalTestimonial').textContent = project.client.testimonial;
    document.getElementById('modalClient').textContent = `${project.client.name}, ${project.client.company}`;

    // Populate meta information
    document.getElementById('modalTimeline').textContent = project.timeline;
    document.getElementById('modalTeamSize').textContent = project.teamSize;

    // Add external link button if available
    const modalInfo = document.querySelector('.modal-info');
    const existingBtn = modalInfo.querySelector('.btn-visit');
    if (existingBtn) existingBtn.remove();

    if (project.link) {
        const btn = document.createElement('a');
        btn.href = project.link;
        btn.target = '_blank';
        btn.className = 'btn btn-primary btn-visit';
        btn.style.marginTop = '20px';
        btn.innerHTML = 'Visit Live Website <i class="fas fa-external-link-alt"></i>';
        modalInfo.appendChild(btn);
    }
}

// Add smooth transitions to modal content
const modalStyle = document.createElement('style');
modalStyle.textContent = `
    .modal-content {
        transform: scale(0.9);
        opacity: 0;
        transition: all 0.3s ease;
    }
    
    .portfolio-grid {
        transition: opacity 0.3s ease;
    }
`;
document.head.appendChild(modalStyle);