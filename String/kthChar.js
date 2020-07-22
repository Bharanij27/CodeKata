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
    let str = data[0], k = data[1];
    let res = [];
    for(let i=k-1; i<str.length; i+=+k){res.push(str[i])}
    console.log(res.join(' '))
});