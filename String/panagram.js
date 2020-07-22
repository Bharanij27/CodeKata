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
    function isPalindrome(arr){
      let mid = Math.round(arr.length/2);
      for(let i=0; i<mid; i++){
          if(arr[i]!=arr[arr.length-i-1]) return 0;
      }
      return 1;
    }
    
    let stringArr = userInput[0].split(' ');
    let firstString = stringArr[0].split('');
    let secondString = stringArr[1].split('');
    let len = firstString.filter(each => !secondString.includes(each)).length;
    if(!len && isPalindrome(firstString) && isPalindrome(secondString))console.log(1);
    else console.log(0)
});