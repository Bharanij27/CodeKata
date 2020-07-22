const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

let userInput = [];

inp.on("line", (data) => {
  userInput.push(data)
});

inp.on("close", () => {
  let y = userInput[0].split(' ');
  console.log(+y[0]*+y[1])
});