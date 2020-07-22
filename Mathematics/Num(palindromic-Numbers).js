const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

let userInput = []

inp.on("line", (data) => {
  userInput.push(data)
});

inp.on("close", (data) => {
    let num = +userInput[0];
    if(num<10)console.log(num)
    else{
        let res = 9;
        for(let i=11;i<num+1;i++){
            let digit = ''+i
            if(digit.split('').reverse().join('') == digit){
                res++;
                i+=9
            }
        }
        console.log(res)
    }
});