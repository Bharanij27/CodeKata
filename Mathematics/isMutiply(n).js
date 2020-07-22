const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

let userInput = []

inp.on("line", (data) => {
  userInput.push(data)
});

inp.on("close", (data) => {
    let num = +userInput[0]
    if( num % 7 == 0){
        console.log('yes')
    }
    else console.log('no')
});