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
  let holidays = ['saturday','sunday'];
  let day = userInput[0].toLowerCase();
  if(holidays.includes(day))console.log('yes')
  else console.log('no')
});