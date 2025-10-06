let number = prompt("...");

for (var i = 2; i < number; i++) {
  if (number % i === 0) break;
}
console.log(i === number ? number + " — просте" : number + " — не просте");
