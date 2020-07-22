
const readline = require('readline');

const inp = readline.createInterface({

  input: process.stdin

});

const userInput = [];

inp.on("line", (data) => {

 userInput.push(data);

});

inp.on("close", () => {
    let num = userInput[0].split('');
    let sum = num.reduce((acc,val) =>acc+=+val,0);
    let product = num.reduce((acc,val) =>acc*=+val,1);
    if(sum+product == num.join('')) console.log("Great");
    else console.log("no")
});