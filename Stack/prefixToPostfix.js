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
  let stack = [];
  let num = [];
  let operator = ['+', '-', '*', '/', '%'];
  let prefix = userInput[0].split('');
  for(let i = 0; i < prefix.length; i++){
      if(operator.includes(prefix[i])){
          num.push(prefix[i]);
      }
      else{
          stack.push(prefix[i]);
          if(stack.length == 2){
              stack.push(num.pop());
              let str = stack.join('')
              stack = [str];
          }
      }
  }
  console.log(stack.join(''));
});