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
    let data = userInput[0].split(' ');
    let len = +data[0], k = +data[1];
    arr.sort(function(a,b){
        return +a - +b;
    });
    
    arr = [...new Set(arr)]
    if(k <= arr.length)console.log(arr[k-1]);
    else console.log(-1);
});