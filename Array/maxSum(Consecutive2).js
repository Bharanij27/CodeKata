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
    let arr = userInput[1].split(' ');
    let res = 0;
    for(let i=0; i<arr.length-1; i++){
        res = Math.max(res, +arr[i]+ +arr[i+1]);
    }
    console.log(res);
});