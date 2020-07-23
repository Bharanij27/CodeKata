const readline = require('readline');
const inp = readline.createInterface({
    input: process.stdin
});

const userInput = [];

inp.on('line', (data)=>{
    userInput.push(data)
});


inp.on('close', ()=>{
    let size = +userInput[0];
    let arr = userInput[1].split(' ');
    for (let i=0; i<size/2;i++){
       [arr[i] , arr[size-1-i]] =
       [arr[size-1-i] , arr[i]];
    }
    let res = '';
    arr.forEach((data,indx) =>{
        res+= data;
        if(indx != size-1){
            res+= '->'
        }
    })
    console.log(res)
});
	