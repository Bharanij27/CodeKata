const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];

inp.on('line', (data)=>{
  userInput.push(data)
});

inp.on('close', ()=>{
  let arr = [];
  let diff = userInput[0].split(' ')[1];
  arr = userInput[1].split(' ');
  let res = [];
  for (let i=0; i< arr.length; i++){
    let next = (i==arr.length-1)? 0: i+1;
      Math.abs(arr[i]-arr[next]) > diff? res.push(1): res.push(0)
  }
  console.log(res.join(' '))
});