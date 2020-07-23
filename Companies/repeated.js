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
    let str = userInput[1].split(' ');
    let obj = {};
    str.forEach(data => obj[data]? obj[data]++: obj[data]=1);
    let arr = [];
    for(let i in obj){
        if(obj[i]!=1)arr.push(i);
    }
    if(arr.length){
        arr.sort(function(a,b){
            return +a - +b;
        });
        console.log(arr.join(' '));
    }
    else console.log('unique');
});