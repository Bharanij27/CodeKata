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
    let res = []
    for(let i=0;i<arr.length;i++){
        if(!parseInt(arr[i]) && arr[i]!=0) res.push(arr[i]);
        else cnt+=parseInt(arr[i])
    }
    res.push(cnt)
    console.log(res.join(''))
})