const img = document.getElementById('randomImage');
const button = document.getElementById('newImageBtn');

function showRandomImage() {
  const randomNumber = Math.floor(Math.random() * 9) + 1; 
  img.src = `images/${randomNumber}.jpg`; 
}

showRandomImage();

button.addEventListener('click', showRandomImage);
