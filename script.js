<script src="script.js" defer></script>

// Run when page loads
window.onload = function() {
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
  
  // Portfolio grid layout
  var grid = document.querySelector('.portfolio-grid');
  if (grid) {
    grid.style.display = 'block';
    grid.style.columns = '3';
    grid.style.columnGap = '30px';
  }
  
  // Smooth scroll for portfolio links
  var links = document.getElementsByTagName('a');
  for (var i = 0; i < links.length; i++) {
    if (links[i].href.indexOf('#Portfolio') > -1) {
      links[i].onclick = function(e) {
        e.preventDefault();
        var section = document.getElementById('Portfolio');
        section.scrollIntoView({behavior: 'smooth'});
      };
    }
  }
  
  // Scroll to portfolio if in URL
  if (window.location.hash == '#Portfolio') {
    var section = document.getElementById('Portfolio');
    section.scrollIntoView({behavior: 'smooth'});
  }
};

