// problem 1
let count = 10;
for (let i = 0; i <= count; i++) {
  console.log(i);
}

// problem 2

for (let i = 2; i <= 20; i += 2) {
  console.log(i);
}

// problem 3
let friends1 = ["Rahim", "Karim", "Sakib", "Nila"];
for (let i = 0; i < friends1.length; i++) {
  console.log(i);
  console.log(friends1[i]);
}

// Task 1
//for loop ব্যবহার করে 1 থেকে 20 পর্যন্ত সব সংখ্যা print করো।
for (let i = 0; i <= 20; i++) {
  console.log(i);
}

// Task 2
// 1 থেকে 20 পর্যন্ত শুধু odd number print করো।
for (let i = 1; i <= 20; i += 2) {
  console.log(i);
}

//Task 3
//1 থেকে 30 পর্যন্ত শুধু even number print করো।
for (let i = 2; i <= 30; i += 2) {
  console.log(i);
}
// Task 4
// 10 থেকে 1 পর্যন্ত reverse করে print করো।
for (let i = 10; i >= 1; i--) {
  console.log(i);
}

// Task 5
//for loop দিয়ে 7-এর নামতা তৈরি করো।
let number = 7;
for (let i = 1; i <= 10; i++) {
  console.log(number, "X", i, "=", number * i);
}
let number1 = 5;
for (let i = 1; i <= 10; i++) {
  console.log(number1, "X", i, "=", number1 * i);
}

let number3 = 9;
for (let i = 1; i <= 10; i++) {
  console.log(number3 * i);
}
// Task 6
// for loop ব্যবহার করে প্রত্যেক বন্ধুর নাম print করো।
let frien = ["Rahim", "Karim", "Sakib", "Nila", "Jamal"];
for (let i = 0; i < frien.length; i++) {
  console.log(frien[i]);
  console.log(i);
}
// Task 7
// for loop ব্যবহার করে সব salary যোগ করে total salary বের করো।
let salaries = [15000, 20000, 18000, 25000, 30000];
let totalsalary = 0;
for (let i = 0; i < salaries.length; i++) {
  totalsalary = totalsalary + salaries[i];
  console.log(totalsalary);
}
// Task 8
//for loop ব্যবহার করে কতগুলো সংখ্যা 50-এর বেশি সেটা count করো।
let numbers = [10, 25, 30, 45, 50, 65, 70];
let count1 = 0;
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 50) count1++;
  console.log(count1);
}
let count2 = 0;
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] <= 50) count2++;
  console.log(count2);
}

// Task 9
//for loop দিয়ে প্রত্যেক mark-এর জন্য:

// 80+ → "Excellent"
// 60–79 → "Good"
// 40–59 → "Pass"
// < 40 → "Fail"
// print করো。
let marks = [85, 45, 72, 90, 35, 60];
for (let i = 0; i < marks.length; i++) {
  if (marks[i] >= 80) {
    console.log(marks[i], "= Excellent");
  } else if (marks[i] >= 60) {
    console.log(marks[i], "= Good");
  } else if (marks[i >= 40]) {
    console.log(marks[i], "= Pass");
  } else {
    console.log(marks[i], "= Fail");
  }
}
// Task 10
// ধরো একজন user সর্বোচ্চ 3 বার password দিতে পারবে।
// for loop ব্যবহার করে 3 বার পর্যন্ত password check করার logic তৈরি করো।
let correctPassword = "12345";
for (let i = 1; i <= 3; i++) {
  let password = "12345";
  if (password === correctPassword) {
    console.log("Login Successful");
    break;
  } else {
    console.log("Wrong Password");
  }
}
//  Task 11
// for loop দিয়ে সব price যোগ করে total বের করো।
let prices = [500, 1200, 350, 800, 1500];
let totalPrice = 0;
for (let i = 0; i < prices.length; i++) {
  totalPrice = prices[i] + totalPrice;
  console.log(totalPrice);
}

// Task 12
// for loop ব্যবহার করে কতগুলো even number আছে count করো।
let numbers3 = [12, 7, 20, 15, 8, 33, 40, 51];
let count3 = 0;
for (let i = 0; i < numbers3.length; i++) {
  if (numbers3[i] % 2 === 0) {
    count3++;
    console.log(count3);
  }
}

// Task 13
//for loop ব্যবহার করে সবচেয়ে বড় number বের করো।
let numbers4 = [25, 80, 45, 120, 65, 90];
let maxNumber = 0;
for (let i = 0; i < numbers4.length; i++) {
  if (numbers4[i] > maxNumber) {
    maxNumber = numbers4[i];
    console.log(maxNumber);
  }
}
