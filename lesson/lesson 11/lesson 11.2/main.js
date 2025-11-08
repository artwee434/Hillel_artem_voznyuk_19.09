const text = document.getElementById("text");
const button = document.getElementById("colorBtn");

let isChanged = false;

button.addEventListener("click", () => {
  if (isChanged) {
    text.style.color = "purple";
  } else {
    text.style.color = "yellow";
  }
  isChanged = !isChanged;
});
