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
    let cnt = 0
    for(let i=0;i<arr.length;i++){
        if(arr[i]==arr[i+1] && arr[i+2]==arr[i+1]) cnt++;
    }
    console.log(cnt)
})