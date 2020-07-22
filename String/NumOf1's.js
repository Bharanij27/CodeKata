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
  let str = +userInput[0];
  num = str.toString(2).split('');
  console.log(num.filter(each =>each==1).length)
});