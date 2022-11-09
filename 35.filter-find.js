// Filter and Find


//filter mane chaka--- cheke jinis deya---
const numbers = [5, 13, 7, 41, 30, 5, 2, 19];
const bigNumbers = numbers.filter(number => number > 20);
// console.log(bigNumbers);
// output-- [ 41, 30 ]

const smallNumbers = numbers.filter(number => number < 10);
// console.log(smallNumbers);
// output-- [ 5, 7, 5, 2 ]



const products = [
    { name: 'water bottle', price: 50, color: 'yellow' },
    { name: 'mobile phone', price: 15000, color: 'black' },
    { name: 'smart watch', price: 3000, color: 'black' },
    { name: 'sticky note', price: 30, color: 'pink' },
    { name: 'water glass', price: 3, color: 'white' }
];

const expensive = products.filter(product => product.price > 100);
// console.log(expensive);
// output- [
//     { name: 'mobile phone', price: 15000, color: 'black' },
//     { name: 'smart watch', price: 3000, color: 'black' }
//   ]




const blacks = products.filter(product => product.color == 'pink');
// console.log(blacks);
// output-- [{ name: 'sticky note', price: 30, color: 'pink' }]




// jodi amon hoy -- ja nai tai khuji tahole empty bracket asbe ;;;;;
// const blacks = products.filter(product => product.color == 'blue');
// console.log(blacks);
// output-- []



const whiteItem = products.find(product => product.color == 'black');
// console.log(whiteItem);

// output hishebe puro item takei dekhabe;;;;;
// output- 
// { name: 'mobile phone', price: 15000, color: 'black' }


const pinkItem = products.find(product => product.color == 'pink');
// console.log(pinkItem);
// output-
// { name: 'sticky note', price: 30, color: 'pink' }


// jodi item na thake-----
const blueItem = products.find(product => product.color == 'blue');
console.log(blueItem);
// output- undefined
// undefined ashbe--------------------------------------------------