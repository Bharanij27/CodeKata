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
    let num = +userInput[0];
    let res = '';
    let prev = '1'
    for(let i=0; i<num;i++){
       res+=prev+'\n';
       prev += ' 1 1'
    }
    console.log(res)
})