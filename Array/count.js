const readline = require('readline');
const inp = readline.createInterface({
    input: process.stdin
});

const userInput = [];

inp.on('line', (data)=>{
    userInput.push(data);
});

inp.on('close', ()=>{
    let data = userInput[0].split(' ');
    let row = data[0];
    let col = data[1];
    let ram = sita = 0;
    for(let i=1; i<=row; i++){
        let arr = userInput[i].split(' ');
        for(let j=0; j<col; j++){
            if(arr[j]==0) ram++;
            else sita++;
        }
    }
    console.log('RAM:',ram);
    console.log('SITA:',sita);
});