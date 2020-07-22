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
    let strings = userInput[0].split(' ');
    let firstString = strings[0];
    let re = new RegExp(strings[1]);
    let res = firstString.match(re);
    if(res) console.log('yes');
    else console.log('no');
});