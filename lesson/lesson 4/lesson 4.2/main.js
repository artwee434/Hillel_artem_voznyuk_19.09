let n = prompt("Введи трицифрове число:");

let a = n[0],
  b = n[1],
  c = n[2];

let allEqual = a === b && b === c;
let message = "";

if (allEqual)  {
  message = "Всі цифри однакові.";
} else {
  message = "Всі цифри не однакові.";
}

alert(message);
