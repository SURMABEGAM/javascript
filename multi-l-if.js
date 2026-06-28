/**
 * Multi-level if condition
 */

const price = 4000;

if (price >= 5000) {
  //10%discount
  const discount = (price * 10) / 100;
  //console.log(discount);
  const payableAmount = price - discount;
  //   console.log(payableAmount);
} else if (price >= 4000) {
  //5%DISCOUNT
  const discount = (price * 5) / 100;
  //console.log(discount);
  const payableAmount = price - discount;
  //console.log(payableAmount);
} else {
  //   console.log("No discount available");
}

// age group
const age = 50;

if (age <= 12) {
  console.log(" you are free food and drink");
  const discount = (price * 100) / 100;
  console.log(discount);
  const payableAmount = price - discount;
  console.log(payableAmount);
} else if (age >= 70) {
  console.log(" you are eligible for senior discount");
  const discount = (price * 50) / 100;
  console.log(discount);
  const payableAmount = price - discount;
  console.log(payableAmount);
} else if (age >= 50) {
  //25% discount
  console.log(" you are eligible for 25% discount");
  const discount = (price * 25) / 100;
  console.log(discount);
  const payableAmount = price - discount;
  console.log(payableAmount);
} else {
  console.log("please pay for food and drink");
}
