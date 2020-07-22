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
    let res = Math.abs(arr[0] - arr[1])
    if(res%2==0)console.log("even");
    else console.log("odd")
})