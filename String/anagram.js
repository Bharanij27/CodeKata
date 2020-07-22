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
    function findCount(arr){
  let count = {};
  arr.forEach(data => count[data]? count[data]++: count[data]=1);
  return count; 
}

function isSame(obj1, obj2){
  for(let i in obj1){
    if(obj1[i]!=obj2[i])return 0;
  }
  return 1;
}

let num = +userInput[0];
let strArr = []
let out = 0;

for(let i=1; i<=num; i++){
  strArr.push(userInput[i]);
}
let res = strArr[0].split('');
let resObj = findCount(res);
for(let i=1; i<strArr.length; i++){
  let strCount = findCount(strArr[i].split(''));
  if(isSame(resObj, strCount)){out++}
}
if(out>0)out++; 
console.log(out)
});