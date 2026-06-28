const number = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
const revresed = [];
for (i = 0; i < number.length; i++) {
  //   console.log(number[i]);
  //   revresed.push(number[i]);
  revresed.unshift(number[i]);
}

// console.log(revresed);

const student = ["sohel", "sakil", "rakib", "rajib", "leza", "najma", "suma"];
for (let i = student.length - 1; i >= 0; i--) {
  revresed.push(student[i]);
}
console.log(revresed);
