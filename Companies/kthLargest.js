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
    let k = userInput[0].split(' ')[1];
    arr.sort(function(a,b){
        return +b - +a;
    });
    console.log(arr[k-1]);
});