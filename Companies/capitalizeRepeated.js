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
    let obj = {};
    str.forEach(data => obj[data]&& data!=''? obj[data]++: obj[data]=1);
    let arr = [];
    for(let i in obj){
        if(obj[i]!=1)arr.push(i);
    }
    let res = '';
    str.forEach(data => arr.includes(data)? res+=data.toUpperCase(): res+=data);
    console.log(res);
});