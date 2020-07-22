const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
    let arr = userInput[1].split(' ');
    let mark = +userInput[0].split(' ')[1];
    let index = [];
    for(let i=0; i<arr.length; i++){
        if(mark == +arr[i]){
            index.push(i);
        }
    }
    if(index.length)console.log(index.join(''))
    else console.log(-1)
});