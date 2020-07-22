const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});
inp.on("close", () => {

//start-here
let data = userInput[0].split(' ');
let p = Number(data[0]);
let t = Number(data[1]);
let r = Number(data[2]);
let res = (p*t*r)/100;
console.log(res.toFixed(2));
//end-here
});
