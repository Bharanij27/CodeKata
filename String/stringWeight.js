const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

let userInput = [];

inp.on("line", (data) => {
  userInput.push(data)
});

inp.on("close", () => {
    let str = userInput[0];
    let sum =0;
    for(let i=0;i<str.length;i++){
        sum+=str.charCodeAt(i);
    }
    console.log(sum)
});