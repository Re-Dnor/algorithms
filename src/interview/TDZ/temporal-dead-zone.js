// Что будет выведено в консоль?
var number = 2;

function getNumber() {
  console.log(number);
}

function showNumber() {
  console.log(number);
  let number = 5;
  getNumber();
}

showNumber();
