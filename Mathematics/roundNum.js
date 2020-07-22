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
  let num = +userInput[0];
  if(Math.round(num) <= num) console.log(Math.round(num)+1)
  else console.log(Math.round(num));
});