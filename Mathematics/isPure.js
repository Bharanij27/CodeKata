const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

let userInput = []

inp.on("line", (data) => {
  userInput.push(data)
});

inp.on("close", (data) => {
    let num = userInput[0].split('');
    let sum = 0;
    num.forEach(digit => sum+=+digit)
    if(sum%3 == 0) console.log("pure")
    else console.log("not")
});