function averageOfNumbers(arr) {
  const numbers = arr.filter(
    (item) => typeof item === "number" && !isNaN(item)
  );

  if (numbers.length === 0) return null;

  const sum = numbers.reduce((acc, num) => acc + num, 0);

  return sum / numbers.length;
}

let arr = [5, null, true, {}, undefined, 23];
console.log(averageOfNumbers(arr));
