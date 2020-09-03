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
  let stack = [];
  let inputs = userInput[0].split('/');
  console.log('/'+inputs[inputs.length - 1])
});