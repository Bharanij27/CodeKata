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
  let data = userInput[0].split(' ');
  let index = +data[1];
  let arr = userInput[1].split(' ');
  let asc = arr.splice(0,index);
  asc.sort(function(a,b){
      return +a - +b;
  });
  arr.sort(function(a,b){
      return +b - +a;
  });
  let res = asc.concat(arr);
  console.log(res.join(' '));
});