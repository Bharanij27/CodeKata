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
  let res = '';
  let countObj = {}
  arr.forEach(data => {
    countObj[data]==undefined? countObj[data]=1: countObj[data]++;
  })
  for(let i in countObj){
      if(countObj[i]==2){
          console.log(i)
      }
  }
});