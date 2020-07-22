const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

let userInput = []

inp.on("line", (data) => {
  userInput.push(data)
});

inp.on("close", (data) => {
    let arr = userInput[1].split(' ');
    arr.sort(function(a,b){
        return +a - +b;
    });
    console.log(arr[0])
});