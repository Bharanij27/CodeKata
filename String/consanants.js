const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

let userInput = [];

inp.on("line", (data) => {
  userInput.push(data)
});

inp.on("close", () => {
    let stringArray = userInput[0].split('');
    let vowels = ['a','e','i','o','u']
    let res = stringArray.reduce((acc,value) => {
        return !vowels.includes(value.toLowerCase())? acc+value: acc
        
    },'');
    console.log(res)
});