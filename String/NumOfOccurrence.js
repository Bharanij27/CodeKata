const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

let userInput = [];
inp.on("line", (data) => {
  userInput.push(data)
});

inp.on('close', ()=>{
    let arr = userInput[0].split(' ')
    let data = userInput[1]
    let len = arr.filter(each => each==data).length
    if(len)console.log(len)
    else console.log(-1)
})