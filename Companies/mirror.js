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
    function isMirror(arr1, arr2){
        for(let i = 0; i < len; i++){
            if(arr1[i] != arr2[len - i -1]) return 0;
        }
        return 1;
    }
  let arr1 = userInput[1].split(' ');
  let arr2 = userInput[2].split(' ');
  let len = +userInput[0]
  if(isMirror(arr1, arr2)) console.log('yes');
  else console.log('no')
});