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
let data = Math.round(+userInput[0]);
if(data ==0){console.log('Zero')}
else{
  (data%2==0) ? console.log('Even'): console.log('Odd')
}
//end-here
});
