const readline = require('readline');
const inp = readline.createInterface({
    input: process.stdin
});

const userInput = [];

inp.on('line', (data)=>{
    userInput.push(data)
});

inp.on('close', ()=>{
    let arr = userInput[1].split(' ');
    arr.sort(function(a,b){
        return +b - +a
    });
    console.log(arr[1])
});
