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
  let str = userInput[0];
  let i=0;
  while(str[i]!=undefined){i++;}
  console.log(i)
});