const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

let userInput = [];
inp.on("line", (data) => {
  userInput.push(data)
});

inp.on('close', ()=>{
    let res = [];
    let num = +userInput[0];
    for(let i=2; i<num*2+1; i+=2){
        let arr = userInput[i].split(' ').sort(function(a,b){
            return +a - +b
        })
        res = res.length? res.concat(arr): arr
    }
    console.log(res.join(' '))
})