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
let data = +userInput[0];
(data%4==0)? console.log('Y'): console.log('N')
//end-here
});
