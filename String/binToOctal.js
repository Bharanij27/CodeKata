const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
    let arr = userInput[0].split('').reverse();
    let num = 0;
    arr.forEach((data,index) => {
        if(data==1){
            num+=2**index;
        }
    })
    console.log(num.toString(8))
});