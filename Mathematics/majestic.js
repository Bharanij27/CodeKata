const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
    let arr = userInput[1].split(' ');
    if((+arr[0]+ +arr[1]+ +arr[2])==(+arr[arr.length-1]+ +arr[arr.length-2]+ +arr[arr.length-3]))console.log(1)
    else console.log(0)
});