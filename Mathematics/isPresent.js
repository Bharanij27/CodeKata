const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];

inp.on('line', (data)=>{
  userInput.push(data)
});

inp.on('close', ()=>{
  let arrInput = userInput[1].split(' ');
  let arrGiven = userInput[3].split(' ');
  let res = [];
  arrGiven.forEach(data => {
    arrInput.includes(data)? res.push(arrInput.filter(x => x==data).length): res.push('Not Present')
  })
  console.log(res.join(' '))
});