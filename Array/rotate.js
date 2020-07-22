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
    let s1 = userInput[0].split('');
    let s2 = userInput[1].split('');
    if(s2.splice(s2.length-2,2).join('')==s1.splice(0,2).join('')) console.log(1);
    else console.log(0);
});