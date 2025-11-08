let savedLink = ""; 
document.getElementById("setLink").addEventListener("click", function() {
  const link = prompt("Введіть посилання (URL):");
  if (link) {
    savedLink = link;
    alert("Посилання збережено!");
  } else {
    alert("Посилання не введено.");
  }
});

document.getElementById("goToLink").addEventListener("click", function() {
  if (savedLink) {
    window.location.href = savedLink;
  } else {
    alert("Спочатку введіть посилання!");
  }
});
