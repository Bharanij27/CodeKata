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
    for(let i=0;i<arr.length;i++){
        if(arr[i]==arr[i+1])arr.splice(i,2);
    }
    console.log(arr.join(''))
})