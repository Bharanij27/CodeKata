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
  let res = arr.filter(data => (+data)%2!=0 )
  res = res.length==0? '-1': res.join(' ')
  console.log(res)
});