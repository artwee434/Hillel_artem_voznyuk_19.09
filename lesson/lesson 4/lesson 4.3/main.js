const birthYear = prompt("Введи свій рік народження:");
const city = prompt("У якому місті ти живеш?");
const sport = prompt("Який твій улюблений вид спорту?");

const currentYear = new Date().getFullYear();
const age = currentYear - birthYear;

let cityMessage;
const cityLower = city;

if (cityLower === "київ") {
  cityMessage = "Ти живеш у столиці України.";
} else if (cityLower === "вашингтон") {
  cityMessage = "Ти живеш у столиці США.";
} else if (cityLower === "лондон") {
  cityMessage = "Ти живеш у столиці Великої Британії.";
} else {
  cityMessage = `Ти живеш у місті ${city}.`;
}

const finalMessage = `Тобі ${age} років.${cityMessage}Твій улюблений вид спорту: ${sport}.`;
alert(finalMessage);
