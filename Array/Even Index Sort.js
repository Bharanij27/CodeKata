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
  let evenArr = arr.filter((data,idx) => idx%2==0)
  evenArr.sort(function(a,b){
      return a-b
  })
  let idx = 0;
  for(let i=0;i<arr.length;i++){
      if(i%2==0)arr[i] = evenArr[idx++];
  }
  console.log(arr.join(' '))
});