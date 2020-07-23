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
    let data = userInput[0].split(' ');
    let len = data[1], n = data[0];
    let inputArrays = [];
    for(let i = 1; i <= n; i++){
        inputArrays.push(userInput[i].split(' '));
    }
    let res = inputArrays[0];
    for(let i = 1; i < n; i++){
        res = res.filter(data => inputArrays[i].includes(data));
    }
    if(res.length)console.log(res.join(' '));
    else console.log(-1)
});