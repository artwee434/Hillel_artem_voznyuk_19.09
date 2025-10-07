let result = "";

for (let i = 10; i <= 20; i +=0.5) {
  result += i < 20 ? `${i}, ` : i;
}

console.log(result);
