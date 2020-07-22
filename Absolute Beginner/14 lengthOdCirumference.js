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
console.log((2*(Math.PI)*data).toFixed(2))
//end-here
});
