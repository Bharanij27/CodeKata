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
    let res = [];
    for(let i=0; i<arr.length-1; i++){
        res.push(Math.max(arr[i],arr[i+1]));
    }
    console.log(res.join(' '));
});