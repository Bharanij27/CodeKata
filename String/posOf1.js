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
  let num = +userInput[0];
  num = num.toString(2).split('');
  for(let i=num.length-1; i>=0; i--){
      if(num[i]==1){
          console.log(num.length-i);
          break;
      }
  }
});