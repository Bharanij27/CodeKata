    const readline = require('readline');
const inp = readline.createInterface({
    input: process.stdin
});

const userInput = [];

inp.on('line', (data)=>{
    userInput.push(data);
});

inp.on('close', ()=>{
    let arr = userInput[1].split(' ');
    arr = arr.filter(data =>{
       return arr.filter(each => each == data).length ==1;
    });
    console.log(arr[0]);
});