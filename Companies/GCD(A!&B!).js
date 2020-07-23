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
    function facto(num){
        let res = 1;
        for(let i=1; i<=num; i++) res*=i;
        return res;
    }
  let numbers = userInput[0].split(' ');
  let arr = facto(Math.min(+numbers[0], +numbers[1]));
  let gcd = 1;
  for(let i=2; i<=arr; i++){
      if(arr%i==0) gcd = i;
  }
  console.log(gcd);
});