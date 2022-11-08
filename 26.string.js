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
/////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////





const priya = 'Asif Akbar';
const meye = "Meye tumi ki dukkho chino";
const kobita = `kobita tumi sopno charini`;
const multiLine = 'This is my first line. \n' +
    'this is my second line.\n' +
    'third line text here\n' +
    'fourth line text here';

const multiLineNew = `this is is multi line
this is second line
this is third line
fourth line
`;
const friends = ['abul', 'babul', 'kabul', 'sabul'];
const count = 5;
const old = '<h3 class="friend-name">Friend-5</h3>'
const old2 = '<h3 class="friend-name">Friend-' + count + '</h3>';
const old2 = `<h3 class="friend-name">Friend-${count}</h3>`;
const new1 = `<h3 class="friend-name">Friend-${friends.length}</h3>`;

const first = 'Mamun';
const last = 'Chowdhury';
const fullOld = 'This person name is ' + first + ' ' + last;
const fullNew = `This person name is: ${first} ${last}. Has money ${(friends.length + 10) * 500}. He lives in Dhaka.`;

console.log(fullNew);