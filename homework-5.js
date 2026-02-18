function showTemperature(city,temperature) {
  console.log(`Сейчас в ${city} температура - ${temperature} градусов по Цельсию`);
}

showTemperature("Мадриде", 18);
showTemperature("Барселоне", 22);

const lightSpeed = 299792458;
function checkSpeed(speed) {
  if (speed > lightSpeed) {
    console.log("Сверхсветовая скорость");
  }
  else if (speed < lightSpeed) {
    console.log("Субсветовая скорость");
  }
  else {
    console.log("Скорость света");
  }
}
checkSpeed(500)

let product = "Ноутбук";
let productPrice = 900;
let balanceNeeded;
function buyProduct(budget) {
  if (budget>= productPrice) {
    console.log(`${product} приобретен.Спасибо за покупку`);
  }
  else {
    balanceNeeded = productPrice - budget;
    console.log(`Вам не хватает ${balanceNeeded}$, пополните баланс`);
  }
}
buyProduct(1500);
buyProduct(700);

function showSuccessMessage() {
  console.log("Домашняя работа №5 готова");
}

let myName = "Гульнара";
let totalTasks = 7;
let isAllDone = true;
showSuccessMessage();