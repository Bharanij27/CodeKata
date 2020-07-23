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
  let arr = userInput[1].split(' ');
  let obj = {};
  arr.forEach(data =>{
      obj[data]? obj[data]++: obj[data] = 1;
  });
  for(let i in obj){
      if(obj[i]==1)console.log(i);
  }
});