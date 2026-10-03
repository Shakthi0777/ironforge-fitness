// ===============================
// IRONFORGE FITNESS - JAVASCRIPT
// ===============================


// 1. SCROLL REVEAL ANIMATION
const revealElements = document.querySelectorAll(
    ".section-title, .about-content, .program-card, .plan-card, .contact-info, .gallery-item"
);

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
                observer.unobserve(entry.target);
            }
        });
    },
    {
        threshold: 0.15
    }
);

revealElements.forEach((element) => {
    observer.observe(element);
});


// 2. NAVBAR BACKGROUND ON SCROLL
const navbar = document.querySelector("nav");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});


// 3. CURRENT YEAR IN FOOTER
const year = document.getElementById("year");

if (year) {
    year.textContent = new Date().getFullYear();
}


// 4. WHATSAPP BUTTON
const whatsappButton = document.querySelector(".whatsapp-btn");

if (whatsappButton) {
    whatsappButton.addEventListener("click", () => {
        console.log("Opening WhatsApp...");
    });
}

// ===============================
// MOBILE MENU
// ===============================

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    menuToggle.classList.toggle("active");
});



// Close menu after clicking a link

const menuItems = document.querySelectorAll(".nav-links a");

menuItems.forEach((item) => {
    item.addEventListener("click", () => {
        navLinks.classList.remove("active");
        menuToggle.classList.remove("active");
    });
});