const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];

inp.on('line', (data)=>{
  userInput.push(data)
});

inp.on('close', ()=>{
  let arr = userInput[1].split(' ');
  let minValue = 99999999;
  arr.forEach(data => data<minValue? minValue=data:'');
  console.log(minValue)
});