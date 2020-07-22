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
let data = Number(userInput[0])
let res = (data * 9/5) + 32
console.log(res.toFixed(2))
//end-here
});
