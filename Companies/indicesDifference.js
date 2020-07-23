// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});
let userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on('close',()=>{
    let arr = userInput[1].split(' ');
    let min = Number.POSITIVE_INFINITY;
    let max = -9999999999;
    let maxIndex = 0;
    let minIndex = 0;
    arr.forEach((data,idx) => {
        if(+data>+max){
            maxIndex = idx;
            max = data;
        }
        if(+data<+min){
            minIndex = idx;
            min = data;
        }
    });
    console.log(Math.abs(maxIndex-minIndex))
})