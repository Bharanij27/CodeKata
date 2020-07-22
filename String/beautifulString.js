const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
    let str = userInput[0].toLowerCase().split('');
    let len = str.length
    let mid = Math.round(len/2);
    if(str[0]=='a' && str[len-1]=='z'&&(str[mid-1]=='m'))console.log(1);
    else console.log(0);
});