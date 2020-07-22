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
let n = +userInput[0]
let res = ''
if(n == 0){console.log('NULL');}
else{
  for(i=1; i<(n+1); i++){
    res =  res + (9*i)
    if(i != n){ res+= ' '}
  }
}
console.log(res)
//end-here
});
