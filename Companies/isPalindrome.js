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
    function isPalindrom(str){
        let reverseString = [...str];
        reverseString.reverse();
        return str.join('')==reverseString.join('');
    }
    let str = userInput[0].split('');
    if(!isPalindrom(str))console.log(str.join(''));
    else{
        while(true){
            str.pop();
            if(!isPalindrom(str))break;
        }
        console.log(str.join(''));
    }
});