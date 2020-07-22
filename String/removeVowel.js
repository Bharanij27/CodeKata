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
  let str = userInput[0].split('').reverse();
  let vowels = ['a','e','i','o','u'];
  let res = [];
  str.forEach(data =>{
      !vowels.includes(data)? res.push(data): '';
  });
  if(!res.length)console.log(-1);
  else console.log(res.join(''));
});