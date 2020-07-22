const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

let userInput = [];
inp.on("line", (data) => {
  userInput.push(data)
});

inp.on('close', ()=>{
    let arr1 = userInput[1].split(' ')
    let arr2 = userInput[2].split(' ')
    arr1.sort(function(a,b){
        return a-b
    })
    arr2.sort(function(a,b){
        return b-a
    })
    let res = arr1.concat(arr2)
    console.log(res.join(' '))
})