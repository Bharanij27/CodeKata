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
    let data = userInput[0].split(' ');
    let str1 = data[0].split(''), str2 = data[1].split('');
    str1 = [...new Set(str1)];
    str2 = [...new Set(str2)];
    let res = str1.every(ele => str2.includes(ele));
    if(res && str1.length==str2.length) console.log(true); 
    else console.log(false);
});