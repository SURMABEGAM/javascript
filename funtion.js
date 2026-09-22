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

shopping(5000);

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

calculateSalary(50000);
calculateSalary(30000);
calculateSalary(20000);
calculateSalary(10000);
calculateSalary(5000);
calculateSalary(500);
