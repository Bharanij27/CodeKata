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
    function palindrome(str){
        let arr = str.split('');
        if(arr.join('')!=arr.reverse().join('')) return 0
        return 1;
    }
    if(palindrome(str.toLowerCase())) console.log(1)
    else console.log(0)
});