const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

let userInput = [];

inp.on("line", (data) => {
  userInput.push(data)
});

inp.on("close", () => {
    let str = userInput[0].split(' ');
    let max = "";
    str.forEach(data =>{
        if(!isNaN(+data) && data.length>max.length){
            max = data
        }
    })
    console.log(max)
});