document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');
    form.addEventListener('submit', function(event) {
      event.preventDefault();
      alert('Form submitted!');
      // Add AJAX call here to submit the form data
    });
  
    // Smooth scrolling for navigation links
    document.querySelectorAll('.links a').forEach(anchor => {
      anchor.addEventListener('click', function(event) {
        event.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });
  });
  