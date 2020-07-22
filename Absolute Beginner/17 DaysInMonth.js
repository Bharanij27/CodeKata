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
if(data>12 || data<1){
  console.log('Error')
}
else{
  if(data ==2){console.log('28')}
  else if(data<=7 && data%2!=0 ){
    console.log(31)
  }
  else if(data>8 && data%2==0 ){
    console.log(31)
  }
  else{
    console.log(30)
  }
}
//end-here
});
