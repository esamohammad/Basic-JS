// Index of---------

//১ম কাজ=====

// index suru hoy 0 theke -এর পর ১ম ,২য়, ৩য়--চলতে থাকে।
// প্রথমেই জানবো index ber kora,,then index ar মান দিয়ে ডাটা বের করা ।

var vowels = ["a", "e", "o", "i", "u"];
var vowelsIndex = vowels.indexOf("e");


console.log(vowelsIndex); // যদি var নেই
console.log(vowels.indexOf("o"));// যদি var na nei তাহলে এভাবে করা যাবে।

//console.log(নাম ডট indexof(X)); string hole quatation ,-----
//nemeric hole no quatation.

var x = [12, 20, 30, 40, 50, 60, 70, 80, 90, 100];
var firstIndex = x.indexOf(10);
// যদি এমন সংখ্যা খুজি যা অ্যারে তে নেই তাহলে মান -১
// console.log(firstIndex);



// ২য় কাজ=====
// 2nd index koto ,, jodi amon prosno hoy----
var x = [12, 20, 30, 40, 50, 60, 70, 80, 90, 100];
var firstIndex = x[0];
console.log(firstIndex);
console.log(x[0]); // var ছাড়া এভাবে লেখা জায়। ১ম index
console.log(x[1]); //2nd index.
console.log(x[2]); //3rd index.
console.log(x[3]); //4th index.
console.log(x[4]); //5th index.




// Existing Number Changing

// কোন নম্বরর কে বাদ দিয়ে নতুন কোন ন্মবর নিতে চাইলে।=================

var z = [100, 200, 300, 400, 500];
z[0] = 500000; // akhane 100 বাদ হয়ে ৫০০০০ লিস্টে ঢুকবে।
console.log(z);
z[1] = 1000000;
z[2] = 10000000;
console.log(z);
console.log(z);