const slides = document.querySelectorAll(".slide");
const leftBtn = document.querySelector(".arrow.left");
const rightBtn = document.querySelector(".arrow.right");
const dotsBox = document.querySelector(".dots");

let index = 0;

slides.forEach((_, i) => {
  const dot = document.createElement("div");
  if (i === 0) dot.classList.add("active");
  dotsBox.appendChild(dot);

  dot.addEventListener("click", () => {
    index = i;
    update();
  });
});

const dots = document.querySelectorAll(".dots div");

function update() {
  slides.forEach((slide, i) => {
    slide.style.display = i === index ? "flex" : "none";
  });

  dots.forEach((d, i) => {
    d.classList.toggle("active", i === index);
  });

  leftBtn.style.opacity = index === 0 ? "0" : "1";
  rightBtn.style.opacity = index === slides.length - 1 ? "0" : "1";
}

rightBtn.onclick = () => {
  if (index < slides.length - 1) index++;
  update();
};

leftBtn.onclick = () => {
  if (index > 0) index--;
  update();
};

update();
