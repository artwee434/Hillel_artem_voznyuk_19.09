let result = "";

for (let i = 10; i <= 20; i++) {
  result += i < 20 ? `${i}, ` : i;
}

console.log(result);
