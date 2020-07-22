const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

let userInput = []

inp.on("line", (data) => {
  userInput.push(data)
});

inp.on("close", (data) => {
    let num = userInput[0].split('');
    let cnt = 0;
    num.forEach(each =>{
        if(each == 1) cnt++;
        else cnt=0;
    })
    if(cnt)console.log(cnt)
    else console.log(-1)
});