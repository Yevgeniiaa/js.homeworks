console.clear();

let name = prompt("Як до вас звертатися?")

alert(name + "! Дія небезпечна! Підтвердіть свою дію в наступному вікні");

let answer = confirm("Ви дійсно бажаєте продовжити, " + name + "?");
if (answer) {
  alert("Дякую за підтвердження, " + name + "!");
} else {
  alert("Дію відмінено," + name + "!");
}