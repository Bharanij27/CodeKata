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
  let num = userInput[0].split('').reverse();
  let decimal = num.reduce((acc,val,index) =>{
      if(val==1)acc+=(2**index);
      return acc;
  },0);
  console.log(decimal.toString(16))
});