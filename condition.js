// Conditional Decision //
//  If--------------------

var chiken = 350;
var beef = 750;

if (beef > chiken) {
    console.log("Mama goru khamu!!! Goru DEN.....!!");
}

// condition true na hole lekha ashbe na.

var iphonePrice = 95000;
var myBudjet = 18000;


if (myBudjet < iphonePrice) {
    console.log("takka kom ----pom pom");
}




// If-else-------------------------------

//abar ata na hole oita hobe amon bujhale ja jobe.ta holo- if-else

var beef = 120;
var mutton = 180;
var myBudjet = 150;

if (myBudjet > mutton) {
    console.log("ami khasi khamu , ar ghumamu!!!!!");
}

else {
    console.log("Amar kopale khasi nai ,Goru diya vat khai!!");
}

// if ar por shorto thakbe but else ar por sorto thakbe na--




//যখন single Condition------------

var gotJob = true;
var marry = true;

if (gotJob == true) {
    console.log("Allah amar akta Biyar babostha kore den!!")
}

else {
    console.log("Allah ami gunar modhhe achi ,, amake bachan Allah!!")
}


// যখন double condition-----
// আবার দুইটা condition যুক্ত করেও কাজ করা জায় , তার জন্য &&----

var gotJob = true;
var married = true;

if (gotJob == true && married == true) {
    console.log("Allah amar biyer khubi proyojon ,,, Amay akjon uttom jibon songi miliye dao Allah!!!!!");
}

else {
    console.log("Allah tumi sohay,Amay rokha koro provu");
}


//abar || atar mane holo duitar moddhe je kone akta shorto puron korlei holo.sohoj vabe bollle-ar mane othoba--------------------

var gotJob = true;
var married = true;
var savings = 100000;

if (gotJob == true && married == true || (savings == 100000)) {
    console.log("Allah amar biyer khubi proyojon ,,, Amay akjon uttom jibon songi miliye dao Allah!!!");
}

else {
    console.log("Allah tumi sohay,Amay rokha koro provu");
}



// (****Nested Condition****)

var danisPrice = 30;

myBudjet = 100;

danisWellPacked = false;


if (danisPrice < myBudjet) {

    if (danisWellPacked == true) {
        console.log("Ami danis khamu!! ki moja reaaaaaa!!");
    }

} else { console.log("Amar taka Nai!!"); }