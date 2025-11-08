const container = document.getElementById("buttonContainer");

container.addEventListener("click", (event) => {
  if (event.target.tagName === "BUTTON") {
    const buttonText = event.target.textContent;
    alert(`Клікнуто на кнопці: ${buttonText}`);
  }
});
