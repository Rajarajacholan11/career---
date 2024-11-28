document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");

    hamburger.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
});

// js for slideshow

let slideIndex = 0;

function showSlides() {
    let slides = document.querySelectorAll('.slide');
    
    // Hide all slides
    slides.forEach(slide => slide.style.display = 'none');
    
    // Move to the next slide
    slideIndex++;
    if (slideIndex > slides.length) slideIndex = 1;
    
    // Display the current slide
    slides[slideIndex - 1].style.display = 'block';
    
    // Change slide every 3 seconds
    setTimeout(showSlides, 3000);
}

// Initialize the slideshow
showSlides();
