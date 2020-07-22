const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

let userInput = [];
inp.on("line", (data) => {
  userInput.push(data)
});

inp.on('close', ()=>{
    let arr = userInput[0].split('')
    let res = []
    arr.forEach(data => {
        if(!res.includes(data)) res.push(data)
    })
    if(res.length==3)console.log(1)
    else console.log(0)
})