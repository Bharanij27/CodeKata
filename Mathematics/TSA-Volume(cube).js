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
  let nums = userInput[0].split(' ');
  let l = nums[0], b = nums[1], h = nums[2];
  let volume = l*b*h;
  let tsa = 2*((l*b)+(b*h)+(h*l));
  console.log(tsa,volume);
});