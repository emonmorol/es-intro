const numbers = [24, 45, 456, 56, 56];
// console.log(numbers);
// console.log(...numbers);

const max = Math.max(223, 345, 56);
const maxInArray = Math.max(...numbers); // array re nia kaj koret pare na ... tai  three dot dia numbers ke nia ashlam
// console.log(max, maxInArray);

const numbers2 = [];
numbers2.push(...numbers);
numbers2.push(67);
console.log(numbers2);
