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
// console.log(result);

// problem 12
function checkNumber(number) {
  return number % 2 === 0 ? console.log("Even") : console.log("Odd");
}

// checkNumber(10);
// checkNumber(7);

// problem13

function checkResult(marks) {
  marks >= 40 ? console.log("Pass") : console.log("Fail");
}
// checkResult(75);
// checkResult(35);

// problem 14
function checkSalary(salary) {
  salary >= 30000 ? console.log("Good Salary") : console.log("Low Salary");
}
// checkSalary(35000);
// checkSalary(25000);

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

// getGrade(85);
// getGrade(62);
// getGrade(45);

// Ternary + Logical Operator Practice
// Problem 1 — Login 🔐
function login(username, password) {
  // username admin AND password 12345
  // → "Login Successful"
  // অন্যথায় → "Invalid Login"
  return username === "admin" && password === "12345"
    ? "Login Successful"
    : "Invalid Login";
}

let loginResult = login("admin", "12345");
let login1Result = login("surma", "55555");
// console.log(loginResult,login1Result)

// Problem 2 — Driving License 🚗

function canDrive(age, hasLicense) {
  // age >= 18 AND hasLicense === true
  // → "Can Drive"
  // অন্যথায় → "Cannot Drive"
  return age >= 18 && hasLicense === true ? "Can Drive" : "Cannot Drive";
}
// console.log(canDrive(25, true));
// console.log(canDrive(25, false));
// console.log(canDrive(16, true));

// Problem 3 — Discount 🛒
function checkDiscount(age, isMember) {
  // age >= 60 OR isMember === true
  // → "Discount Available"
  // অন্যথায় → "No Discount"
  return age >= 60 || isMember === true ? "Discount Available" : "No Discount";
}

// console.log(checkDiscount(65, false));
// console.log(checkDiscount(30, true));
// console.log(checkDiscount(30, false));

// Problem 4 — Job Eligibility 💼
function checkJobEligibility(age, experience) {
  // age >= 18 AND experience >= 1
  // → "Eligible"
  // অন্যথায় → "Eligible"
  return age >= 18 && experience >= 1 ? "Eligible" : " Not Eligible";
}

// console.log(checkJobEligibility(25, 2));
console.log(checkJobEligibility(20, 0));

// Problem 5 ⭐ — Scholarship 🎓
function checkScholarship(marks, attendance) {
  // marks >= 80 AND attendance >= 80
  // → "Scholarship Available"
  // অন্যথায় → "Not Eligible"
  return marks >= 80 && attendance >= 80
    ? "Scholarship Available"
    : "Not Eligible";
}

// console.log(checkScholarship(85, 90));
// console.log(checkScholarship(85, 70));
// console.log(checkScholarship(75, 90));

function checkAdmission(marks, age) {
  // marks >= 80 AND age >= 18
  // → "Admission Approved"
  // অন্যথায় → "Admission Rejected"
  return marks >= 80 && age >= 18 ? "Admission Approved" : "Admission Rejected";
}
// console.log(checkAdmission(90,17))
// console.log(checkAdmission(80,27))

// Level 2
// problem 1
function checkDiscount(totalAmount, isMember) {
  return (totalAmount >= 5000 && isMember === true) || totalAmount >= 10000
    ? "20% Discount"
    : "No Discount";
}
let totalAmount = 40000;
let isMember = false;
console.log(checkDiscount(totalAmount, isMember));
console.log(checkDiscount(6000, true));
console.log(checkDiscount(6000, false));
console.log(checkDiscount(12000, false));

//  problem 2
function checkDelivery(totalAmount, isPremiumUser) {
  return (totalAmount >= 2000 && isPremiumUser === true) || totalAmount >= 5000
    ? "Free Delivery"
    : "Delivery Charge ৳100";
}

console.log(checkDelivery(2500, true));
console.log(checkDelivery(2500, false));
console.log(checkDelivery(6000, false));

// problem 3
function checkJob(age, experience) {
  return (age >= 18 && experience >= 1) || age >= 25
    ? "Eligible"
    : "Not Eligible";
}
console.log(checkJob(20, 2));
console.log(checkJob(20, 0));
console.log(checkJob(26, 0));

// problem 4
function checkAccess(role, isActive) {
  return role === "admin" || (role === "manager" && isActive === true)
    ? "Access granted"
    : "Not Access";
}
let role = "admin";
let isActive = true;
console.log(checkAccess(role, isActive));
console.log(checkAccess("manager", true));
console.log(checkAccess("user", true));
console.log(checkAccess("admin", false));

// problem 5
function checkLoan(salary, age) {
  return (salary >= 50000 && age >= 21) || (salary >= 80000 && age >= 18)
    ? "Loan Approved"
    : "Loan Rejected";
}
console.log(checkLoan(60000, 25));
console.log(checkLoan(60000, 19));
console.log(checkLoan(90000, 19));
console.log(checkLoan(30000, 30));
