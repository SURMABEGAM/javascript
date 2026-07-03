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
// let min = [0];
// for (const num of number)
// if (num < min) {
// min = num;
// }
// console.log(min);

//5. Even Numbers

const number2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for (let i = 0; i <= 10; i = i + 2) {
// console.log(i);
// }

//6. Even Numbers
// for (let i = 1; i <= 10; i = i + 2) {
// console.log(i);
// }

// 7.Reverse
const number3 = [1, 2, 3, 4, 5];
// for (let i = number3.length; i >= 0; i--) {
//console.log(number3[i]);
// }
// const result = number3.reverse();
// console.log(result);

//8.Count Even Numbers
const numbers4 = [
  2, 3, 4, 5, 6, 7, 8, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 10,
];
let count = 0;
// for (const num of numbers4) {
//   if (num % 2 === 0) {
// count++;
//   }
// }

for (i = 0; i < numbers4.length; i++) {
  if (numbers4[i] % 2 === 0) {
    count++;
  }
}
console.log(count);
