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
    num.reverse();
    while(num[0] == 0){num.shift()}
    console.log(num.join(''))
});