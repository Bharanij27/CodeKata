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
    let num = userInput[0].split('');
    let res = 0;
    num.forEach(data => res+=((+data)**num.length))
    console.log(res)
})