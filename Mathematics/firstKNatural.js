const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
    let sum = 0;
    let n = +userInput[0];
    for(let i=1;i<=n;i++){sum+=i}
    console.log(sum);
});