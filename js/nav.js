const menu = document.getElementById("mobileMenu");
const toggle = document.getElementById("menuToggle");

toggle.addEventListener("click", () => {
  const isHidden = menu.classList.contains("-translate-y-full");
  
  if (isHidden) {
    menu.classList.remove("-translate-y-full", "invisible");
    document.body.classList.add("overflow-hidden");
  } else {
    closeNavbar();
  }
});

function closeNavbar() {
  menu.classList.add("-translate-y-full", "invisible");
  document.body.classList.remove("overflow-hidden");
}

// Optimización del scroll para no saturar el navegador
window.addEventListener("scroll", function () {
  const nav = document.querySelector("nav");
  nav.classList.toggle("bg-black/80", window.scrollY > 50);
  nav.classList.toggle("backdrop-blur-md", window.scrollY > 50);
});