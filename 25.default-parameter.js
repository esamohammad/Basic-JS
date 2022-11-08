/* function add(first, second){
    console.log(first, second);
    // second = second || 0;
    // if(second === undefined){
    //     second = 0;
    // }
    const total = first + second;
    return total;
} */



// function fullName (first, last = 'Chowdhury'){
//     const name = first + ' ' + last;
//     return name;
// }

// const name = fullName('Gelam');
// console.log(name);


function add(first, second = 30) {
    const total = first + second;
    return total;
}

const result = add(10);
console.log(result);

// if we are not set second value as like as argument then second value =30 will be calculated.

// output is---40.


// again---

function add(first, second = 0) {
    const intotal = first + second;
    return intotal;
}

const intotal = add(15, 135);
console.log(intotal);

//if we pass the argument then argument will be the final value not parameter value. 
