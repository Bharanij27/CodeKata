// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = []

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
  let nums = userInput[0].split(' ');
  let product = nums[0] * nums[1];
  let bin = product.toString(2).split('');
  let index = bin.indexOf('1');
  let res = bin.indexOf('1',index+1);
  console.log(res+1);
});