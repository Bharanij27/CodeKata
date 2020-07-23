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
    let arr = userInput[1].split(' ');
    arr = arr.map(each => +each);
    let len = arr.length;
    res = arr.filter((data, index) => arr.includes(len * (index + 1)));
    console.log(res.length);
});	