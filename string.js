const person = 'Adam Sand';
const person2 = "Ben White";
const person3 = `Donald Trump`; //crret or back trick


// multiLine String----------------------------------------
const multiLine = 'First Line text \n' +   // back slash n.
    'second line of code \n' +
    'Third line of text \n' +
    'Fourth line of string';
// console.log(multiLine)



// anekta html pre ar moto kaj kore------------------------
const newMultiLine = `First Line of text   
Second LIner of text
third line of string
fourth line of code`;
// console.log(newMultiLine)




// dynamic string ------------------------------- ${1st} ${2nd}
const a = 20;
const b = 30;
const nums = [78, 98, 45, 12, 6, 444]
const summary = 'sum of: ' + a + ' and ' + b + ' is: ' + (a + b);
console.log(summary);   //output: sum of: 20 and 30 is: 50



const sum = `${a + b}`; //dolar sign thakbe ar carrate thakbe.
console.log(sum);

const newSummary = `sum of ${a} and ${b} is: ${a + b}`;
console.log(newSummary);
