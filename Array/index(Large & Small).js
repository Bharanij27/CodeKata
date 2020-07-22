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
  let temp =[...arr];
  temp.sort(function(a,b){
      return a-b
  })
  console.log(arr.indexOf(temp[arr.length-1])-arr.indexOf(temp[0]));
});	