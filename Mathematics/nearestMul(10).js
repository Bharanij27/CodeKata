const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

let userInput = [];

inp.on("line", (data) => {
  userInput.push(data)
});

inp.on("close", () => {
    let num = +userInput[0];
    if(num<10)console.log(10)
    else{
        num+='';
        let arr = num.split('');
        arr[arr.length-1] = 0;
        arr[arr.length-2] = +arr[arr.length-2]+1;
        console.log(arr.join(''))
    }
});