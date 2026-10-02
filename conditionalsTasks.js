// problem 1
/***

Free Drinks
    - Burger more than 500tk: free Coke
    - Else Coke: 30tk
*/
let burgerPrice = 100;
burgerPrice >= 500 ? console.log("free coke") : console.log("Coke: 30tk");

//problem 2 BMI_Calculator
/*** 

BMI Calculator and Health Category

Create a JavaScript program that calculates the Body Mass Index (BMI) and assigns a health category based on the BMI value. Use nested if-else statements to determine the health category.

    - Calculate BMI using the formula: BMI = weight (kg) / (height (m))^2
    - BMI < 18.5, you are underweight.
    - BMI >= 18.5 and BMI <=24.9, you are normal.
    - BMI >=25 and BMI <= 29.9, you are overweight.
    - Otherwise, you are obese.

*/
let weight = 120;
let height = 5.6;
let bmi = weight / (height * height);

if (bmi < 18.5) {
  console.log("You are underweight.");
} else if (bmi >= 18.5 && bmi <= 24.9) {
  console.log("You are normal.");
} else if (bmi >= 25 && bmi <= 29.9) {
  console.log("You are overweight.");
} else {
  console.log("You are obese.");
}

// 3 Grade_Calculator

/***
Grade Calculator
Create a simple JavaScript program that takes a student's score as input and returns their corresponding grade based on the following grading scale:
    A: 90-100
    B: 80-89
    C: 70-79
    D: 60-69
    F: 0-59
***/

function result(marks) {
  return marks >= 90
    ? "A"
    : marks >= 80
      ? "B"
      : marks >= 70
        ? "C"
        : marks >= 60
          ? "D"
          : "F";
}
let marks = 100;
console.log(result(marks));

// problem 4
/***

if you get more then 80 then inside your friend score. 
    If your friend get more than 80. then go for a lunch. 
    if your friend get below 80 but greater than or equal 60 then tell your friend, good luck next time. 
    if your friend get less than 60 but more than or equal to 40 then, keep your friend's message unseen.
    if your friend get less than 40, block your friend
if you get less than 80 go to home and sleep and act sad

Note: 
use nested if-else-if-else
*/

let yourScore = 80;
let friendScore = 45;
if (yourScore >= 80) {
  if (friendScore > 80) {
    console.log("then go for a lunch. ");
  } else if (friendScore < 80 && friendScore >= 60) {
    console.log("good luck next time.");
  } else if (friendScore < 60 && friendScore >= 40) {
    console.log("keep your friend's message unseen.");
  } else console.log("block your friend");
} 
else console.log("go to home and sleep and act sad");

/***

you have two numbers in two variables, called: num1, num2

now declare a variable called result. 
if num1 is bigger than num2 then result will be double of num1. if not, then the value of the variable result will be the sum of num1 and num2.

write a simple if-else. 

also, write it using ternary operator.

 */
let num1 = 100;
let num2 = 20;
let result1 = num1 > num2 ? num1 * 2 : num1 + num2;
console.log(result1);

// problem 6
/***

Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/

let age = 65;
let isStudent = false;
// let isSenior = true;
age < 10
  ? console.log("Free")
  : isStudent === true
    ? console.log("Students get a 50% discount")
    : age >= 60
      ? console.log(" gets a 15% Discount")
      : console.log("Regular ticket fare 800 tk");
