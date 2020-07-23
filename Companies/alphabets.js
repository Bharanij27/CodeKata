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
    let str1 = userInput[0].split('');
    let str2 = userInput[1].split('');
    let arr = str1.concat(str2);
    if(arr.length==26) console.log('yes');
    else console.log('no');
});