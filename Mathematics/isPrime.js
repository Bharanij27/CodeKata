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
    function isPrime(num){
        for(let i=2; i<=num/2;i++){
            if(num%i==0) return 0;
        }
        return 1;
    }
    
  let num = +userInput[0];
  if(isPrime(num)) console.log("yes");
  else console.log("no");
});