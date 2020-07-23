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
  let arr  = userInput[1].split(' ');
  let res = [...arr]
  while(arr.length!=1){
      arr = arr.filter((data, index) => index%2!=0);
  }
  console.log(res.indexOf(arr[0]));
});