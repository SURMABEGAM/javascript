var num = 0;
var result = num * num;
//console.log(result);

var a = 0;
var b = 0;
var sum = a - b * result;
// console.log(sum);

if (sum > 0) {
  //   console.log("The result is positive.");
} else if (sum < 0) {
  //   console.log("The result is negative.");
} else {
  //   console.log("The result is zero.");
}

// objects and arrays
var person = {
  name: "John",
  age: 30,
  hobbies: ["reading", "traveling", "cooking"],
};
// console.log(person.name);
// console.log(person.age);
// console.log(person.hobbies);

if (person.name.length > 8) {
  //   console.log(person.name + " is an adult.");
} else {
  //   console.log(person.name + " is a minor.");
}

var array = [1, 2, 3, 4, 5];
//array.push(6, 7, 8, 9, 10);
// console.log(array);
//array.pop();
array.shift();
//array.unshift(0, 1);
console.log(array);
