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
  let str = userInput[0].split(' ');
  let freqArray = {};
  str.forEach(data =>{
      freqArray[data]? freqArray[data]++: freqArray[data]=1;
  });
  let sortedArr = [];
  for(let key in freqArray){
      sortedArr.push([key,freqArray[key]]);
  }
  sortedArr.sort(function(a,b){
      return (b[1]==a[1])? a[0]-b[0]: b[1]-a[1];
  });
  console.log(sortedArr[0][0],sortedArr[0][1])
});