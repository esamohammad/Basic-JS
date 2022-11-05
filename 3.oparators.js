//  + (plus sign) , - (minus sign), * , / , = , <= geater than , >= less than, % modulas ----- those are oparators.

// += ,, -= ,,  *=,,  /=,,  এদের মানে কি ???

var x = 10;
var y = 20;
var z = 50;

// যদি ভারিয়াব্লের দাম বেরে জায়, তখন -
// ভেরিয়েবল এক বার লিখলেই হয়।
// such as ----

var m = 500;
m = 500 + 100; // m is witten without var.

console.log(m);

// অনেকেই আবার শর্ট হ্যান্ড লেখে ,যেমন-
// দাম বেরেছে ১০০ টাকা। ( +=)

m += 100;
console.log(m);

// দাম কমেছে ৫টাকা। ( -=)
m -= 100;
console.log(x);

// ধরুন m এর মান ৫০০ টাকা , পরে এর দাম ৫০ টাকা কমছে।
var m = 500;
m -= 50;
console.log(m);

// ধরুন x এর মান ১০০০ টাকা , পরে এর দাম ৫ গুন বেরেছে। ( *=)
var x = 500;
x *= 5;
console.log(x);

// ধরুন m এর মান ১০০০০ টাকা , এর দাম ৫ ভাগে ভাগ করে এক ভাগ হবে। (/=)
var x = 10000;
x /= 5;
console.log("Divition")
console.log(x);


// এক বারাতে চাইলে ----((+=)) 
var age = 30;
age += 1;
console.log(age);

// কিন্তু এক এক করে বারাতে ((++)) ব্যবহার করা হয়।
var age = 50;
age++;
console.log(age);
// এই ++ মানে এক এক করে বারবে।


// আবার ((--)) ডবল মাইনাস মানে এক এক করে কমে।
var age = 13;
age--;
console.log(age);