// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
    let str = userInput[0].split('');
    let res = '';
    let lastChar;
    let charCount = 0;
    for(let i=0; i<str.length; i++){
        if(lastChar==undefined || lastChar==str[i]){
            charCount++;
        }
        else{
            res+=lastChar+charCount;
            charCount = 1;
        }
        lastChar = str[i];
    }
    console.log(res+lastChar+charCount);
});