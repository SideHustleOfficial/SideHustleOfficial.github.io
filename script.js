const toggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector("nav ul");

if(toggle){
toggle.addEventListener("click",()=>{
navLinks.classList.toggle("active");
});
}
