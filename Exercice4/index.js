const myButton = document.getElementById("myButton");
const message = document.getElementById("message");

myButton.addEventListener("click", () => {
  message.textContent = "Bonjour, vous avez cliqué sur le bouton !";
});
