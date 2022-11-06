var f = 39;
var d = 40;
var c = 50;
var b = 60;
var a = 70;
var Agrad = 80;
var marks = 100;
var myScore = 81;
console.log(" Esa Your rejult is ---")


if (myScore < f) { //যদি এই শর্ত টা মিথ্যা হয় তখন পরের শর্তে যাবে।
    console.log("You are Fail");
}

else if (myScore > 40 && myScore < c) {
    console.log(" You are Pass with D grad!!")
}

else if (myScore > 50 && myScore < b) {
    console.log(" You are Pass with C grad!!")
}

else if (myScore >= 60 && myScore < a) {
    console.log(" You are Pass with B grad!!")
}

else if (myScore >= 70 && myScore < Agrad) {

    console.log(" You are Pass with A grad!!")
}

else if (myScore > Agrad) {
    console.log(" You are Pass with A + grad!!")
}


else { console.log("Amar rejult ki ? ") }

