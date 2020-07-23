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
    for(let i=0;i<str.length;i++){
        if(str[i].toLowerCase()=='and'){
            let temp = str[i+1];
            str[i+1] = str[i-1];
            str[i-1] = temp;
        }
    }
    console.log(str.join(' '))
})