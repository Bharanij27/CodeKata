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
let data = userInput[0].split(' ')
let a = + data[0];
let b = + data[1];
let c = + data[2];
let res1 = (-b + Math.sqrt((b*b) - (4*a*c))) / (2*a);
let res2 = (-b - Math.sqrt((b*b) - (4*a*c))) / (2*a);
console.log(res1.toFixed(2))
console.log(res2.toFixed(2))
//end-here
});
