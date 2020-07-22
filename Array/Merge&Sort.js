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
  let res = array1.concat(array2);
  res.sort(function (a,b){
      return +a - +b;
  });
  let mid = Math.round(res.length/2);
  console.log(+res[mid] + +res[mid-1])
});