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
    let min = arr.reduce((acc, value, index) =>{
        if(value < 0){
            if(acc == 9999) acc = 0;
            acc+= +value;
        }
        else if(value < acc) acc = +value;
        return acc;
    },9999);
    console.log(min)
});