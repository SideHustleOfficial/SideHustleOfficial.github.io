// Mobile menu toggle
const toggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector("nav ul");

if(toggle){
  toggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
}

// Smooth scroll
document.querySelectorAll("a[href^='#']").forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});
