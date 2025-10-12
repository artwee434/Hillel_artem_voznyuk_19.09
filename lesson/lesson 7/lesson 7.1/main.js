let arr = [];

while (true) {
  let letter = prompt("Please enter letter");
  if (!letter) break;
  arr.push(letter);
}

let string = prompt("Enter the string");

function deleteLetters(str, letters) {
  let result = str
    .split("")
    .filter((char) => !letters.includes(char))
    .join("");

  alert(result);
}

deleteLetters(string, arr);
