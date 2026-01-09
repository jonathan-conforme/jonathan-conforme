const alertBox = document.getElementById("successAlert");

function showAlert() {
  alertBox.classList.remove("hidden");
  setTimeout(() => {
    hideAlert();
  }, 5000);
}

function hideAlert() {
  alertBox.classList.add("hidden");
}

document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();

  emailjs.sendForm(
    "service_0d0zg7l",
    "template_n1rm63s",
    this,
    "Y7qOSSryG02DAI2g9"
  ).then(
    () => {
      showAlert();
      this.reset();
    },
    (error) => {
      console.error("Error:", error);
      alert("Error al enviar el mensaje ❌");
    }
  );
});