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
let data = +userInput[0];
let res = 0.25*((Math.sqrt(3)*data*data));
console.log(res.toFixed(2))
//end-here
});
