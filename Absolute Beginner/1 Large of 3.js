const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});
inp.on("close", () => {
  let maxi = userInput[0];
  if(userInput[1] > userInput[2] && userInput[1] > userInput[0]){
    maxi = userInput[1];
  }
  else if(userInput[2] > userInput[0] && userInput[2] > userInput[1]){
    maxi = userInput[2]
  }
  console.log(maxi)
});
