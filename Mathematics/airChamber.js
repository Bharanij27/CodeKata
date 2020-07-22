
const readline = require('readline');

const inp = readline.createInterface({

  input: process.stdin

});

const userInput = [];

inp.on("line", (data) => {

 userInput.push(data);

});

inp.on("close", () => {
    let arr = userInput[1].split(' ')
    let res = 0;
    for(let i=0;i<+userInput[0];i++){
        if(arr[i]>arr[i+1]) res += arr[i]-arr[i+1]
    }
    console.log(res)
});

