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
  let obj = {};
  let res = [];
  let arr = userInput[1].split(' ');
  arr.forEach(data =>{
     if(obj[data]!=undefined){
         obj[data]++;
         res.push(data+obj[data])
     }
     else{
         obj[data]=0;
         res.push('Verified')
     }
  });
  console.log(res.join(' '))
});