// function declare

function add(num1, num2) {
  return num1 + num2;
}

//Function expression
const add2 = function add2(num1, num2) {
  return num1 + num2;
};

//Anonyumous Function
const add3 = function (num1, num2) {
  return num1 + num2;
};

// Arrow function
const add4 = (num1, num2) => num1 + num2;

const sum = add(34, 45);
const sum2 = add2(34, 45);
const sum3 = add3(34, 45);
const sum4 = add4(34, 45);
console.log(sum, sum2, sum3, sum4);
// document.getElementById(my - button).onclick = function handleEvent() {

// }
