const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
    let arr = userInput[0].split(' ');
    let sum = 0;
    for(let i=0; i<+arr[2]; i++){
        sum+= +arr[0]+(i*+arr[1]);
    }
    console.log(sum)
});