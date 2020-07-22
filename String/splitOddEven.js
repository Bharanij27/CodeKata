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
    let res = ['',''];
    let str = userInput[0].split('');
    str.forEach((data,index) => index%2!=0? res[1]+=data: res[0]+=data);
    console.log(res.join(' '))
});