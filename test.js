//problem 1

//const numbers = [10, 20, 30, 40, 50];
//console.log(numbers);

//problem 2
//const numbers = [5, 10, 15, 20];
//let sum = 0;
//for (let i = 0; i < numbers.length; i++) {
//  sum += numbers[i];
//}
//console.log(sum);

//const numbers = [5, 15, 10, 20];
//let sum = 0;
//for (const num of numbers) {
// sum += num;
//}
//console.log(sum);

// problem 3
// const numbers = [15, 5, 80, 30, 100, 40];
// const max = Math.max(...numbers);
// console.log(max);

const number = [15, 5, 80, 30, 100, 40];
//let max = 0;
//for (const num of number) {
// if (num > max) {
//   max = num;
//   }
// }
// console.log(max);

// Smallest Number problem 4

// number.sort((a, b) => a - b);
// const max = number[number.length - 1];
// console.log(max);

// const min = Math.min(...number);
// console.log(min);
let min = [0];
for (const num of number)
  if (num < min) {
    min = num;
  }
console.log(min);
