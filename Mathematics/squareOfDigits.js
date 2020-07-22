const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
    let num = userInput[0].split('');
    let sum = num.reduce((acc,val) => acc+=(+val*+val),0)
    console.log(sum)
});