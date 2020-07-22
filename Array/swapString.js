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
  let arr = userInput[0].split('');
  
  for(let i=0; i<arr.length; i+=2){
      if((i+1)<arr.length)[arr[i], arr[i+1]] = [arr[i+1],arr[i]];
  }
  console.log(arr.join(''))
});