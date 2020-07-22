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
  let last = 0;
  let resArr = [];
  for(let i=1; i<=num; i++){
      let pattern  = (i**3)+last;
      resArr.push(pattern);
      last = pattern;
  }
  console.log(resArr.join(' '))
});