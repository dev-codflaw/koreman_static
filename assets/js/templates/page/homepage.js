    // Mobile Menu Toggle
    document.querySelector('.hamburger').addEventListener('click', function() {
      document.querySelector('.nav-menu').classList.toggle('active');
    });
    
    // Hero Slider
    let slideIndex = 0;
    const slides = document.querySelectorAll('.slide');
    
    function showSlides() {
      for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove('active');
      }
      
      slideIndex++;
      if (slideIndex > slides.length) {
        slideIndex = 1;
      }
      
      slides[slideIndex - 1].classList.add('active');
      setTimeout(showSlides, 5000); // Change slide every 5 seconds
    }
    
    showSlides();
