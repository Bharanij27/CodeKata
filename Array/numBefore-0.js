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
    let isFound = 0;
    let arr = userInput[1].split(' ');
    let res = [];
    let temp = [];
   for(let i=0;i<arr.length;i++){
       if(arr[i]==0)isFound++;
       if(isFound%2!=0 && arr[i]!=0){
           temp.push(arr[i]);
       }
       else if(isFound%2==0 && isFound>0){
           res = res.concat(temp);
           isFound++
           temp = [];
       }
   }
   if(res.length)console.log(res.join(' '));
   else console.log(-1);
});