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
let bmi = (weight / height) * 2;
if (bmi >= 18.5) {
  console.log("you are underweight");
} else if (bmi >= 18.5 && bmi <= 24.9) {
  console.log(" you are normal.");
} else if (bmi >= 25 && bmi <= 29.9) {
  console.log("you are overweight.");
} else {
  console.log("Otherwise, you are obese.");
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
