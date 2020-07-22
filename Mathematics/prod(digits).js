const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];

inp.on('line', (data)=>{
  userInput.push(data)
});

inp.on('close', ()=>{
  arr = userInput[0].split('');
  let res = arr.reduce((acc,data) => acc*=+data,1);
  console.log(res);
});