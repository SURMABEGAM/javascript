function shopping(price) {
  if (price >= 5000) {
    // console.log("20% Discount");
    let discount = (price * 20) / 100;
    console.log(discount);
    let payAmount = price - discount;
    console.log(payAmount);
  } else if (price >= 3000) {
    // console.log("10% Discount");
    let discount = (price * 10) / 100;
    let payAmount = price - discount;
    console.log(discount, "abog", payAmount);
  } else if (price >= 1000) {
    let discount = (price * 5) / 100;
    let payAmount = price - discount;
    console.log(discount, "abog", payAmount);
  } else {
    console.log("No Discount");
  }
}

// shopping(5000);

//problem2
//**salary >= 50000 → 20% tax
// salary >= 30000 → 10% tax
// salary >= 20000 → 5% tax
// salary < 20000 → No tax

function calculateSalary(salary) {
  if (salary >= 50000) {
    let tax = (salary * 20) / 100;
    let mySalary = salary - tax;

    console.log("Tax: ", tax, "     ", "My salary:", mySalary);
  } else if (salary >= 30000) {
    let tax = (salary * 10) / 100;
    let mySalary = salary - tax;

    console.log("Tax: ", tax, "     ", "My salary:", mySalary);
  } else if (salary >= 20000) {
    let tax = (salary * 5) / 100;
    let mySalary = salary - tax;

    console.log("Tax: ", tax, "     ", "My salary:", mySalary);
  } else {
    console.log("NO Tax", "My salay:", salary);
  }
}

// calculateSalary(50000);
// calculateSalary(30000);
// calculateSalary(20000);
// calculateSalary(10000);
// calculateSalary(5000);
// calculateSalary(500);

// problem :1
function checkAge(age) {
  return age >= 18 ? "Adult" : "Minor";
}

const resultCheckAge = checkAge(10);
console.log(resultCheckAge);

//problem:2
function checkNumber(number) {
  return number % 2 === 0 ? "Even" : "Odd";
}
const checkNumberResult = checkNumber(11);
console.log(checkNumberResult);

// problem:3
function checkMarks(marks) {
  return marks >= 50 ? "Pass" : "Fail";
}
const resultCheckMarks = checkMarks(33);
console.log(resultCheckMarks);

// PROBLEM :4
function checkSalary(salary) {
  return salary >= 30000 ? "High" : "Low";
}
const resultCheckSalary = checkSalary(50000);
console.log(resultCheckSalary);

// problem 5
function getGrade(marks) {
  return marks >= 80
    ? "A+"
    : marks >= 70
      ? "A"
      : marks >= 60
        ? "B"
        : marks >= 50
          ? "C"
          : "Fail";
}
const resultGetGrade = getGrade(80);
console.log(resultGetGrade);
