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
  let sum = arr.reduce((acc,val) =>{
      if(val<0)acc+=+val;
      return acc;
  },0);
  console.log(sum)
});