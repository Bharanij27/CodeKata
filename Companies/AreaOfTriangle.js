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
    let str = userInput[0].split(' ')
    console.log(0.5*(+str[0])*(+str[1]))
})