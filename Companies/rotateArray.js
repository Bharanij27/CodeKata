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
    let len = data[0], k = data[1];
    let arr = userInput[1].split(' ');
    for(let i = 0; i < k; i++){
        let ele = arr.shift();
        arr.push(ele);
    }
    console.log(arr.join(' '));
});