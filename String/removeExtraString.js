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
  let strings = userInput[0].split(' ');
  strings = strings.filter(each => each.trim().length>1);
  console.log(strings.join(' '))
});