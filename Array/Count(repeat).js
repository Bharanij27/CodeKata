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
    let k = data[1];
    let arr = userInput[1].split(' ');
    let count = arr.filter(data => data==k).length
    if(!count) console.log(-1);
    else console.log(count-1)
});