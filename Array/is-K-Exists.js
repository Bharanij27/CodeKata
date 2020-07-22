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
  let data = userInput[0].split(' ');
  let arr = userInput[1].split(' ');
  let element = data[1];
  if(arr.includes(element))console.log('yes');
  else console.log('no')
});