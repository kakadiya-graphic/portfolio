document.addEventListener('DOMContentLoaded', function () {
    const navbar = document.getElementById('navbar');

    // Handle navbar transparency on scroll
    window.addEventListener('scroll', function () {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Initialize masonry layout
    const portfolioGrid = document.querySelector('.portfolio-grid');
    if (portfolioGrid) {
        portfolioGrid.style.display = 'block';
        portfolioGrid.style.columns = '3';
        portfolioGrid.style.columnGap = '30px';
    }
});
