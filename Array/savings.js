
const readline = require('readline');

const inp = readline.createInterface({

  input: process.stdin

});

const userInput = [];

inp.on("line", (data) => {

 userInput.push(data);

});

inp.on("close", () => {
    let arr = [1000];
    let month = +userInput[0];
    for(let i=0;i<month;i++){
        if(arr.length<2)arr.push(1000);
        else arr.push(arr[arr.length-1]+arr[arr.length-2])
    }
    let res = arr.reduce((acc,val)=> acc+=+val,0)
    console.log(res)
});