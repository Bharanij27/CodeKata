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
  let obj = [];
  let res = [];
  str.forEach(data =>{
      obj.includes(data) && !res.includes(data)?res.push(data): obj.push(data)
  })
  if(res.length)console.log(res.join(' '))
  else console.log(-1)
});