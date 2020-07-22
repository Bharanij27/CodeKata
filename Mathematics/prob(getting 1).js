
const readline = require('readline');

const inp = readline.createInterface({

  input: process.stdin

});

const userInput = [];

inp.on("line", (data) => {

 userInput.push(data);

});

inp.on("close", () => {
    let num = +userInput[0];
    let sum = 1;
    for(let i=1; i<=num-1; i++){
        sum*=6
        sum+=5
    }
    if(num!=1)console.log(sum,6**num)
    else console.log(16)
});

