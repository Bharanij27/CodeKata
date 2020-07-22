const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
    let id = userInput[2];
    let idArray = userInput[1].split(' ');
    if(idArray.includes(id))console.log('yes');
    else console.log('no')
});