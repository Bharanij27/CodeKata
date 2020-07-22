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
    function isEqual(arr){
        for(let i=0; i<arr[0].length; i++){
            if(arr[0][i] != arr[1][i]) return 0;
        }
        return 1;
    }
    
    let data = userInput[0].split(' ');
   if(isEqual(data)) console.log('yes');
   else console.log('no');
});