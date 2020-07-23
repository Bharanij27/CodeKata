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
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let vow = [];
    let cons = [];
    str.forEach(data =>{
        vowels.includes(data.toLowerCase())? vow.push(data): cons.push(data)
    });
    let res = vow.concat(cons);
    console.log(res.join(''))
});