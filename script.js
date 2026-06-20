// script.js

// Mobile Menu Toggle
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-links a").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}));

// Header background change on scroll
const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        header.style.backgroundColor = "rgba(255, 255, 255, 0.98)";
        header.style.boxShadow = "0 4px 15px rgba(0,0,0,0.05)";
    } else {
        header.style.backgroundColor = "rgba(249, 248, 246, 0.95)";
        header.style.boxShadow = "0 2px 10px rgba(0,0,0,0.03)";
    }
});

// Lightbox for Gallery
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.querySelector('.close');
const galleryItems = document.querySelectorAll('.gallery-item img');

galleryItems.forEach(item => {
    item.addEventListener('click', function() {
        lightbox.style.display = "flex";
        lightboxImg.src = this.src;
        document.body.style.overflow = "hidden"; // Prevent scrolling when lightbox is open
    });
});

closeBtn.addEventListener('click', () => {
    lightbox.style.display = "none";
    document.body.style.overflow = "auto";
});

lightbox.addEventListener('click', (e) => {
    if (e.target !== lightboxImg) {
        lightbox.style.display = "none";
        document.body.style.overflow = "auto";
    }
});
