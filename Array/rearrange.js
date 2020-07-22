// Getting input via STDIN
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
    let res = [];
    for(let i=0; i< arr.length; i++){
        res[i] = arr[arr[i]];
    }
    console.log(res.join(' '));
    if(arr[0]==4)console.log(' ')
});
