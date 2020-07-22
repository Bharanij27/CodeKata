const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

let userInput = [];
inp.on("line", (data) => {
  userInput.push(data)
});

inp.on('close', ()=>{
    let arrLen = +userInput[0];
    let arr = userInput[1].split(' ')
    let res = arr.filter(data =>{
        return arr.filter(each => each==data).length == 1
    })
    res.sort(function(a,b){
        return b-a
    })
    if(res.length)console.log(res.join(' '))
    else console.log(arr[0])
})