<script src="script.js" defer></script>

// Run when page loads
window.onload = function () {
    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        const navbar = document.getElementById('navbar');

        // Check if the page is scrolled more than 50px
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled'); // Add the 'scrolled' class
        } else {
            navbar.classList.remove('scrolled'); // Remove the 'scrolled' class
        }
    });

    // Mobile menu toggle (optional)
    const menuToggle = document.createElement('div');
    menuToggle.id = 'menu-toggle';
    menuToggle.innerHTML = '&#9776;'; // Hamburger icon
    document.getElementById('navbar').prepend(menuToggle);

    menuToggle.addEventListener('click', () => {
        const menu = document.querySelector('#menu.items');
        menu.classList.toggle('active');
    });

    // Smooth scroll for portfolio links
    const links = document.getElementsByTagName('a');
    for (let i = 0; i < links.length; i++) {
        if (links[i].href.indexOf('#Portfolio') > -1) {
            links[i].onclick = function (e) {
                e.preventDefault();
                const section = document.getElementById('Portfolio');
                section.scrollIntoView({ behavior: 'smooth' });
            };
        }
    }

    // Scroll to portfolio if in URL
    if (window.location.hash === '#Portfolio') {
        const section = document.getElementById('Portfolio');
        section.scrollIntoView({ behavior: 'smooth' });
    }
};

