// Function প্যারামিটার ছাড়া।
// function syntex---


// function functionName (var1, var2,.., varX) { statements }


// jodi kono parameter na thake--must braket dite hobe--

// function functionname() { statemant }


// এমন একটা function চিন্তা করি যা করতে টাকা লাগে না।

// লাইট জালাতে তো টাকা লাগে না। 

function lightOn() {
    console.log("go to the swich");
    console.log("turn onthe light");
}
// উপরের এতোটুকু লিখেই কনসোলে অউতপুট দেখাজাবে না ----- // ফাংশন কল করতে হবে----

console.log(lightOn());  //called function---




function goToMarket() {
    console.log("go to the mach bazar");
    console.log("talk to thepeople");
    console.log("talk to the police");
    console.log("talk to the imam");
}


console.log(goToMarket());






// Function প্যারামিটার সহ। নামের পরে ব্র্যাকেটের মাঝে প্যারামিটার বা আরগুমেন্তস দিয়ে কাল করা হয়ে থাকে। 

// input parameter --taka , ar value abar function call korar somoy bolchi---


function bringSingara(taka) {
    console.log("singarajonno taka dise--", taka);
}


bringSingara(100); //function call variable diyeo kora jay-- 

var money = 100; bringSingara(money); // ai vabeo call kora jay----






// Function প্যারামিটার সহ-Return পাবো কিভাবে??

// abar nicher moto
jotil kora jay----hudai veriable niye falafali korse--

function bringSingara(taka) {
    console.log(taka);
    console.log("singara den");


    var singaraPrice = 10;
    var singaraQuantity = taka / 10;
    return singaraQuantity;
} 

// retunr ar valu -var singara te diye diche tai sonkha paoya jabe...bringSingara.

var money=250;
var singara = bringSingara(money); //ai money ar man 250tk ,,setai uporer (taka) ar valu hobe--- 
console.log("ainen singara", singara); 
// ata aktu valo kore pactice korte hobe -----Advanced 
