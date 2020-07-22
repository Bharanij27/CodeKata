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
  let size = +userInput[0].split(' ')[1];
  arr = userInput[1].split(' ');
  let res = [];
  for (let i=0; i< arr.length-size+1; i++){
    let winArr = arr.slice(i,i+size);
    let index = winArr.findIndex(element=> element==0);
    (index ==-1)? res.push(-1): res.push(index+i+1)
  }
  console.log(res.join(' '))
});