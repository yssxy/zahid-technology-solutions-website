// Toggle the nav expansion when the button is clicked
document.getElementById('toggleButton').addEventListener('click', function() {
    const nav = document.querySelector('nav');
    nav.classList.toggle('expanded');
  });
  
  // Add click event listeners to each nav link
  document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault(); // Prevent default anchor behavior
      const targetId = this.getAttribute('href'); // Get the target section ID
      const targetElement = document.querySelector(targetId); // Find the target element
  
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' }); // Smooth scroll to the section
      }
  
      // Collapse the navigation menu
      const nav = document.querySelector('nav');
      nav.classList.remove('expanded');
    });
  });
  