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
  let array1 = userInput[1].split(' ');
  let array2 = userInput[2].split(' ');
  let res = [];
  array1.forEach(each =>{
      if(array2.includes(each) && !res.includes(each)) res.push(each);
  } );
  if(res.length) console.log(res.join(' '));
  else console.log(-1);
});