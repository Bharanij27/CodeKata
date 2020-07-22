const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

let userInput = [];
inp.on("line", (data) => {
  userInput.push(data)
});

inp.on('close', ()=>{
    let str = userInput[0].split('');
    let mid = parseInt(str.length/2);
    if(str.length%2!=0)str[mid] = '*';
    else{
        str[mid] = '*';
        str[mid-1] = '*'
    }
    console.log(str.join(''))
})