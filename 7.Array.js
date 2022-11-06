// Array-----------------------------------

// এক কথায় অ্যারে মানে সাড়ী, অনেক গুল ডাটার সাড়ী। যেমন- বাংলাদেশ ক্রিকেট টীম কে আমরা একটা অ্যারে মনে করতে পারি।

// যেখানে অনেক প্লেয়ার আছে, প্রত্তেক প্লেয়ার মানেই data আর ফুল টিম টা একটা অ্যারে।

// array writte with a third braket - ["akash", "batas"] & [ 12,10,11]

var bdTeam = ["sakib", "musfik", "mashrafi", "taskin", "tamim"];
var age = [30, 28, 33, 29, 35];







var numbers = [12, 25, 24, 68, 46, 80, 102, 452, 540];

for (i = 0; i < numbers.length; i++) {
    var number = numbers[i];
    console.log(number);
}



// abar shorto deya jay ---- instant break.

var numbers = [12, 25, 24, 68, 46, 80, 102, 452, 540];
for (i = 0; i < numbers.length; i++) {
    var number = numbers[i];
    console.log(number);
    if (number > 400) {
        break;
    }
}




// continue condition -- check untile the last numbers.
var numbers = [12, 25, 24, 68, 46, 80, 102, 452, 99];
for (i = 0; i < numbers.length; i++) {
    var number = numbers[i];
    if (number > 100) {
        continue;
    }
    console.log(number);
}