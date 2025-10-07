let number = +prompt("Введіть число:"); 

for (var i = 2; i < number; i++) {
  if (number % i === 0) break;
}

if (number <= 1) {
  console.log(number + " — не просте");
} else {
  console.log(i === number ? number + " — просте" : number + " — не просте");
}
