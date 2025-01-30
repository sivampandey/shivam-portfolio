// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // Form submission handling
  document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();
    
    // Get the form data
    const formData = new FormData(this);
  
    // Send the form data to Formspree
    fetch(this.action, {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    })
    .then(response => {
      if (response.ok) {
        alert('Thank you for your message! I will get back to you soon.');
        this.reset(); // Reset the form
      } else {
        alert('Oops! Something went wrong. Please try again.');
      }
    })
    .catch(error => {
      alert('Oops! Something went wrong. Please try again.');
    });
  });