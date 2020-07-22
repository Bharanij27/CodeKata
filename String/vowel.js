// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
  let str = userInput[0].toLowerCase().split('');
  let vowels = ['a','e','i','o','u']
  let res = str.some(data => vowels.includes(data));
  if(res)console.log("yes");
  else console.log("no");
});