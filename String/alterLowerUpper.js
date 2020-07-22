const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
    let str = userInput[0].split(' ');
    let res = [];
    str.forEach((data,index) => index%2==0? res.push(data.toUpperCase()): res.push(data.toLowerCase()));
    console.log(res.join(' '))
});