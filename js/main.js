/* Xu ly nav */
const navBar = document.querySelector(".nav-bars");
const navItems = document.querySelector(".nav-items");
const navIcon = Array.from(document.querySelectorAll(".nav-bars i"));

function changeNav() {
  navIcon.forEach(el => {
    el.classList.toggle("nav-activated");
  });
  navItems.classList.toggle("nav-items-activated");
}
navBar.addEventListener("click", changeNav);
