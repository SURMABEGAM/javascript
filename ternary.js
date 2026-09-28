//condition ? true হলে যা হবে : false হলে যা হবে;
// problem 1
// let age = 20;
// age >= 18 ? console.log("Eligible") : console.log("Not Eligible");

// problem 2
// let number = 10;
// number % 2 === 0 ? console.log("Even") : console.log("Odd");

//problem 3
let temperature = 35;

temperature >= 30 ? console.log("Hot") : console.log("Normal");

// problem4
// let marks = 75;

// marks >= 40 ? console.log("Pass") : console.log("Fail");

// problem 5
let salary1 = 35000;

// salary1 >= 30000 ? console.log("High Salary") : console.log("Low Salary");

// problem:6
let age = 22;
age >= 18 ? "Can Drive" : "Cannot Drive";

// problem :7
let number = 17;
number % 2 === 0 ? "Even Number" : "Odd Number";

// problem :8
let username = "admin";
let password = "12345";

username === "admin" && password === "12345"
  ? "Login Successful"
  : "Invalid Username or Password";

//   problem:9
let marks = 5;
const result1 =
  marks >= 80
    ? "A+"
    : marks >= 70
      ? "A"
      : marks >= 60
        ? "B"
        : marks >= 50
          ? "c"
          : "Fail";

// console.log(result1);

// problem 10
let salary = 5000;

const beton =
  salary >= 50000
    ? "20% Tax"
    : salary >= 30000
      ? "10% Tax"
      : salary >= 20000
        ? "5% Tax"
        : "NO Tax";
// console.log(beton);

// problem 11
function checkDrivingAge(age) {
  return age >= 18 ? "Can  Drive" : "Cannot Drive";
}

let result = checkDrivingAge(20);
console.log(result);

// problem 12
function checkNumber(number) {
  return number % 2 === 0 ? console.log("Even") : console.log("Odd");
}

checkNumber(10);
checkNumber(7);

// problem13

function checkResult(marks) {
  marks >= 40 ? console.log("Pass") : console.log("Fail");
}
checkResult(75);
checkResult(35);

// problem 14
function checkSalary(salary) {
  salary >= 30000 ? console.log("Good Salary") : console.log("Low Salary");
}
checkSalary(35000);
checkSalary(25000);

// problem 15
function getGrade(marks) {
  marks >= 80
    ? console.log("A+")
    : marks >= 70
      ? console.log("A")
      : marks >= 60
        ? console.log("B")
        : marks >= 50
          ? console.log("C")
          : console.log("Fail");
}

getGrade(85);
getGrade(62);
getGrade(45);
