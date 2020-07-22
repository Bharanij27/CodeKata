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
    let res = arr.filter(data =>{
        return arr.filter(each => each==data).length == 1
    })
    console.log(res.join(''))
})