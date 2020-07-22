const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
    let factor = [];
    let n = +userInput[0];
    for(let i=1;i<=n;i++){
        if(n%i==0)factor.push(i);
    }
    console.log(factor.join(' '));
});