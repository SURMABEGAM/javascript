var name = "World";
// console.log(name);
// console.log(typeof name);
var age = 30;
// console.log(age);
// console.log(typeof age);

var isStudent = true;
// console.log(isStudent);
// console.log(typeof isStudent);

var hobbies = ["Reading", "Traveling", "Cooking"];
// console.log(hobbies);
// console.log(typeof hobbies);

var person = {
  name: "Alice",
  age: 25,
};
// console.log(person);
// console.log(typeof person);

// Undefined variable
var undefinedVariable;
// console.log(undefinedVariable);
// console.log(typeof undefinedVariable);

// Null variable
var sohel = null;
//console.log(sohel);
//console.log(typeof sohel);

// Symbol variable
var uniqueId = Symbol("id");
//console.log(uniqueId);
//console.log(typeof uniqueId);

// BigInt variable
var bigNumber = 123456789012345678901234567890n;
//console.log(bigNumber);
//console.log(typeof bigNumber);
// parseInt and parseFloat
var num1 = "42";
var num2 = "3.14";
// console.log(parseInt(num1));
// console.log(parseFloat(num2));

// isNaN and isFinite
var value1 = "abc";
var value2 = 10;
// /console.log(isNaN(value1));
// console.log(isFinite(value2));
// toString and valueOf
var num = 123;
// console.log(num.toString());
//.log(num.valueOf());
//console.log(typeof num);

// String concatenation
var greeting = "Hello, " + name + "!";
// console.log(greeting);
// console.log(typeof greeting);

//session;
const money = 600;

if (money >= 5500) {
  // console.log("You can afford the purchase.");
} else {
  // console.log("I cannot afford the purchase.");
}

let count = 30;
for (let i = 1; i <= count; i++) {
  i += 2;
  console.log(i + " is an odd number.");
}

// string enclosed within single quotes
let fruit = "apple";
console.log(fruit);

// string enclosed within double quotes
let country = "USA";
console.log(country);

// string enclosed within backticks
let result = `fail`;
console.log(result);

let country = 120120;
console.log(country);
let greeting = "hello";
console.log(greeting[1]);

let greeting = "hello";
let firstTwo = greeting[0] + greeting[1]; // "he"
console.log(firstTwo);

let poem =
  "Roses are red,\nViolets are blue,\nJavaScript is fun,\nAnd so are you.";
console.log(poem);

let name = prompt("তোমার নাম কী?");
let age = Number(prompt("তোমার বয়স কত?"));

alert("স্বাগতম " + name);

console.log(name);
console.log(age);

const botName = "teacherBot";

const greeting = `My name is ${botName}.`;
console.log(greeting);

const subject = "JavaScript";
const topic = "strings";

const sentence = `Today, you will learn about ${topic} in ${subject}.`;
console.log(sentence);

const strLengthIntro = `Here is an example of using the length property on the word ${subject}.`;
console.log(strLengthIntro);

console.log(subject.length);

console.log(
  `Here is an example of using the length property on the word ${topic}.`,
);
console.log(topic.length);

console.log(
  `Here is an example of accessing the first letter in the word ${subject}.`,
);

console.log(subject[0]);

console.log(
  `Here is an example of accessing the second letter in the word ${subject}.`,
);
console.log(subject[1]);

console.log(
  `Here is an example of accessing the last letter in the word ${subject}.`,
);

const lastCharacter = subject[subject.length - 1];
console.log(lastCharacter);

const learningIsFunSentence = "Learning is fun.";

console.log(
  "Here are examples of finding the positions of substrings in the sentence.",
);

console.log(learningIsFunSentence.indexOf("Learning"));

console.log(learningIsFunSentence.indexOf("fun"));
console.log(learningIsFunSentence.indexOf("learning"));
let phrase = "JavaScript is awesome!";
let result = phrase.includes("awesome");

console.log(result); // true

let phrase = "JavaScript is awesome!";
let result = phrase.includes("Awesome");

console.log(result); // false
