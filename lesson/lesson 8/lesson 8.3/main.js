function askNumber() {
  let number;

  for (let i = 0; i < 10; i++) {
    number = prompt("Введіть число більше 100:");

    if (number === null) {
      console.log("Ввід скасовано.");
      return;
    }

    number = Number(number);

    if (isNaN(number)) {
      alert("Будь ласка, введіть саме число!");
      i--; //
      continue;
    }

    if (number > 100) {
      console.log("Останнє введене число:", number);
      return;
    } else {
      alert("Число повинно бути більше 100!");
    }
  }

  console.log("Досягнуто 10 спроб. Останнє введене число:", number);
}
