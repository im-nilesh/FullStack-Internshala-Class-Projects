let ip1 = document.getElementById("ip1");
let ip2 = document.getElementById("ip2");
let addOp = document.getElementById("add");
let subop = document.getElementById("sub");
let mulop = document.getElementById("mul");
let divop = document.getElementById("div");

let caclButton = document.getElementById("submit");
addOp.addEventListener("click", addition);
subop.addEventListener("click", subtract);
mulop.addEventListener("click", multiply);
divop.addEventListener("click", divide);

function getValues() {
  return [Number(ip1.value), Number(ip2.value)];
}

function addition() {
  let [a, b] = getValues();
  alert(a + b);
}

function subtract() {
  let [a, b] = getValues();
  alert(a - b);
}

function multiply() {
  let [a, b] = getValues();
  alert(a * b);
}

function divide() {
  let [a, b] = getValues();
  alert(a / b);
}
