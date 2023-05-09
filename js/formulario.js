// Obtener los elementos del DOM necesarios
const openFormBtn = document.querySelector(".open-form-btn");
const contactFormWrapper = document.querySelector(".contact-form-wrapper");
const closeFormBtn = document.querySelector(".close-form-btn");

// Mostrar el formulario al hacer clic en el botón
openFormBtn.addEventListener("click", () => {
  contactFormWrapper.style.display = "block";
});

// Ocultar el formulario al hacer clic en el botón de cerrar
closeFormBtn.addEventListener("click", () => {
  contactFormWrapper.style.display = "none";
});

// Enviar el formulario
const form = document.querySelector("form");
form.addEventListener("submit", (event) => {
  event.preventDefault(); });
