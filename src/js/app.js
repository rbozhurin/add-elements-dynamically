import "../scss/app.scss";

function createMessageElements() {
  for (let i = 0; i < 5; i++) {
    let message = document.createElement("article");
    message.className = "message";
    message.textContent = "This is message " + (i + 1);
    document.body.appendChild(message);
  }
}

window.addEventListener("click", createMessageElements);
window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready

  const button = document.querySelector(".button");
  button.addEventListener("click", () => {
    alert("💣");
  });
});
