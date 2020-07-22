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
let arr = userInput[0].split(' ');
(arr[0] > arr[1])? console.log(arr[1]) : console.log(arr[0])
//end-here
});
