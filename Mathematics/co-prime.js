
const readline = require('readline');

const inp = readline.createInterface({

  input: process.stdin

});

const userInput = [];

inp.on("line", (data) => {

 userInput.push(data);

});

inp.on("close", () => {
    let arr = userInput[0].split(' ')
    let min = (arr[0]>arr[1])? arr[1]: arr[0]
    let x = false
    for(let i=1;i<min;i++){
        if(arr[0]%i==0 && arr[1]%i==0){
            x=true
        }
    }
    if(x)console.log(1)
    else console.log(0)
});

