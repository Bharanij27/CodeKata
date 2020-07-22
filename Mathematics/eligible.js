const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

let userInput = []

inp.on("line", (data) => {
  userInput.push(data)
});

inp.on("close", (data) => {
    let num = userInput[1].split(' ');
    let k = +userInput[2]
    let res = [];
    num.forEach(data =>{
        (+data%k==0)? res.push(1): res.push(0)
    })
    console.log(res.join(' '))
});