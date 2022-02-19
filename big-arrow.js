const add = (num1, num2) => num1 + num2; // one line er jonno kunu bracket lage na
const sum = add(23, 45);
console.log(sum);
// one parameter hole first bracket lage na
const multiply = (num1, num2, num3) => num1 * num2 * num3;
const multi = multiply(23, 435, 45);
console.log(multi);

const doMath = (x, y) => {
  // multi line er jonno second bracket dite hoy
  const sum = x + y;
  const diff = x - y;
  const result = sum * diff;
  const output = result * 5;
  return output;
  // return if it is multiline
};

const total = doMath(34, 5);
console.log(total);
