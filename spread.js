// 3 Dots , sprade oparators-----------------3 EDIYOTS.


const numbers = [23, 65, 99, 21, 34];
console.log(numbers);  //output-[23, 65, 99, 21, 34]
console.log(...numbers); //output- 23 65 99 21 34

const max = Math.max(23, 99, 65, 21, 34);
const maxInArray = Math.max(...numbers); // array theke max paoya jay na. tai 3 dots.
console.log(max, maxInArray); // output- 99 99 

const numbers2 = [...numbers, 88]; // notun akta array & new akta value add  korlam.
console.log(numbers2);


numbers.push(55); //normal array ,tar moddhei push kora hoilo----
console.log(numbers);