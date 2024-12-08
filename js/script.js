const menu = document.getElementById("menu");
const menuBtn = document.getElementById("menu-btn");

menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  menu.classList.toggle("hidden");
  menuBtn.classList.toggle("flex");

  menuBtn.classList.toggle("open");
}
