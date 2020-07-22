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
    let str = userInput[0].split('');
    let obj = {};
    let res = []
    str.forEach(data => obj[data]?obj[data]++:obj[data]=1);
    for(let i in obj){
        if(obj[i]==1)res.push(i)
    }
    console.log(res.join(' '))
});