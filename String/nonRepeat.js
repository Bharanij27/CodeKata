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
  let str = userInput[0].split('');
  let obj = {};
  str.forEach(data =>{
      obj[data]? obj[data]++: obj[data]=1;
  })
  let isSingle = false;
  for(let i in obj){
      if(obj[i]==1){
          console.log(i);
          break;
      }
  }
  if(isSingle)console.log(-1)
});