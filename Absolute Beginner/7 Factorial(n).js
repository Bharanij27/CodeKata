const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});
inp.on("close", () => {

//start-here
let data = parseInt(userInput[0]);
function fac(n){
  return (n>2)? n*fac(n-1): n
}
console.log(fac(data))
//end-here
});
