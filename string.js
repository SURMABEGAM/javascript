/**
 * আপনার কাছে একটি ভেরিয়েবল আছে: let user = "  jAvaScRiPt  ";
আপনার কাজ:
১. স্ট্রিংটির পাশের সব বাড়তি স্পেস দূর করুন।
২. প্রথম অক্ষরটি বড় হাতের (Capital) করুন এবং বাকিগুলো ছোট হাতের (Small) করুন।
(Hint: trim(), toUpperCase(), toLowerCase(), এবং slice() ব্যবহার করুন)
**/

let user = "  jAvaScRiPt  ";
//console.log(user.trim());
//console.log(user.trim().length);
// console.log(user.toLocaleLowerCase());
//console.log(user.toUpperCase());
//console.log( user.trim().slice(0, 1).toUpperCase() + user.trim().slice(1).toLowerCase(),);

/**
 * সমস্যা ২: লজিক্যাল এবং টারনারি অপারেটর (Logic & Ternary)

একটি ভেরিয়েবল আছে let score = 75;
আপনার কাজ:
১. একটি টারনারি অপারেটর ব্যবহার করে চেক করুন score ৫০ এর বেশি কি না।
২. যদি বেশি হয়, তবে ভেরিয়েবলটিতে "Pass" স্ট্রিংটি রাখুন, নাহলে "Fail" রাখুন।
৩. এরপর console.log() দিয়ে রেজাল্টটি দেখান।
 * **/

let score = 75;
let result = score >= 50 ? "pass" : "fail";
//console.log(result);

// সমস্যা ৩: লুপ ও অ্যারে (Loop & Array)
// আপনার কাছে একটি অ্যারে আছে: let numbers = [10, 20, 30, 40, 50];
// আপনার কাজ:
// ১. একটি for লুপ ব্যবহার করুন যা এই অ্যারের সবগুলো সংখ্যা যোগ করবে।
// ২. লুপের ভেতরে numbers.length ব্যবহার করে লুপের সীমা নির্ধারণ করুন।
// ৩. ফাইনাল যোগফলটি console.log() করুন।

let numbers = [10, 20, 30, 40, 50];
let sum = 0;
for (i = 0; i < numbers.length; i++) {
  sum = sum + numbers[i];
  // console.log(sum);
}

let age = 25;
let Age = 30;
console.log(age); // 25
console.log(Age); // 30
