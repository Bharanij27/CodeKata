const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

let userInput = [];

inp.on("line", (data) => {
  userInput.push(data)
});

inp.on("close", () => {
    let str = userInput[0];
    let stringArray = str.split(' ');
    for(let i=0;i<stringArray.length-1;i++){
        let firstString = stringArray.lastIndexOf(stringArray[i]);
        let secondString = stringArray.lastIndexOf(stringArray[i+1]);
        if(secondString<firstString && secondString+1 ==firstString && firstString!=i && secondString!= i+1)
        {
            stringArray.splice(i,4);
        }
    }
    console.log(stringArray.join(' '))
});